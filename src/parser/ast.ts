import * as types from '../types'
import * as eslintAst from './eslint-ast'
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
  queries: eslintAst.Node[]
  comments: types.Comment[]
  tokens: types.Token[]
  parent: null
}



