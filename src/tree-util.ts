import { Localizable, LocationTreeNode } from './types'
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

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
  return node as LocationTreeNode
}
