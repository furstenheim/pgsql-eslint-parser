import * as types from '../types'
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

export interface QueryExpression extends BasePostgresNode {
  type: 'QueryExpression'
  parent: PostgresProgram
}

export interface PostgresProgram extends BasePostgresNode {
  type: 'Program'
  body: QueryExpression[]
  comments: types.Comment[]
  tokens: types.Token[]
  parent: null
}
