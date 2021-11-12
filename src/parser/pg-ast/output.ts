import { Node } from './ast'

export interface PGOutput {
  version: number
  stmts: PGStatement[]
}

export interface PGStatement {
  stmt: Node
  stmt_len: number
  stmt_location?: number
  location?: number
}
