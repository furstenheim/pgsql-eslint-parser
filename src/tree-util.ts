import { Localizable, LocationTreeNode } from './types'
import {PGOutput} from './parser/pg-ast/output'
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export function computeRanges (pgOutput: PGOutput): void {
  pgOutput.stmts.forEach(function (s) {
    s.location = s.stmt_location === undefined ? 0 : s.stmt_location
  })
  toLocationTree(pgOutput)
}

// Modifies input to add range
function toLocationTree (obj: Localizable): LocationTreeNode|null {
  const node: Optional<LocationTreeNode, 'rangeStart'> = {
    rangeEnd: null,
    originalNode: obj,
    children: []
  }

  for (const key in obj) {
    const val = obj[key]
    if (Array.isArray(val)) {
      for (const element of val) {
        const locationTreeNode = toLocationTree(element)
        if (locationTreeNode !== null) {
          node.children.push(locationTreeNode)
        }
      }
    } else if (typeof val === 'object') {
      const locationTreeNode = toLocationTree(val)
      if (locationTreeNode == null) {
        console.log('Ignoring node', key)
        continue
      }
      node.children.push(locationTreeNode)
    }
  }

  node.children.sort((n1, n2) => n1.rangeStart - n2.rangeStart)

  if (obj.location !== undefined) {
    node.rangeStart = obj.location
  } else if (node.children.length > 0) {
    node.rangeStart = node.children[0].rangeStart
  } else {
    return null
  }
  if (node.children.length > 0) {
    node.rangeEnd = node.children[node.children.length - 1].rangeEnd
  } else {
    node.rangeEnd = node.rangeStart + 1
  }
  obj.range = [node.rangeStart, node.rangeEnd as number]
  return node as LocationTreeNode
}
