import type { AST } from 'eslint'
export type Token = AST.Token

export type Comment = String

export interface Localizable {
  location?: number
  range?: [number, number]
  [x: string]: any
}

export interface LocationTreeNode {
  children: LocationTreeNode[]
  originalNode: Object
  rangeStart: number
  rangeEnd: number | null
}
