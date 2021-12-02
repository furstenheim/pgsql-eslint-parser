import * as eslintAst from './eslint-ast'
import type { AST } from 'eslint'
export type Token = AST.Token

export type Comment = String

export interface SourceLocation {
  start: Position
  end: Position
}

export interface Position {
  /* >= 1 */
  line: number
  /* >= 0 */
  column: number
}

export interface Locations {
  loc: SourceLocation
  range: [number, number]
}

export interface BasePostgresNode extends Locations {
  type: string
}

export interface PostgresProgram extends BasePostgresNode {
  type: 'Program'
  body: eslintAst.Node[]
  comments: Comment[]
  tokens: Token[]
  parent: null
}



