import * as ast from './ast'
import * as parser from 'libpg-query'

import * as util from 'util'
import { PGOutput } from './output'
import * as transformation from './transformation'
import { PostgresProgram } from './ast'
export function parseForESLint (
  code: string,
  options?: any
): {
    ast: ast.PostgresProgram
    visitorKeys: unknown
    services: unknown
  } {
  const result: PGOutput = parser.parseQuerySync(code)
  const root: PostgresProgram = {
    // TODO fix location and range
    loc: {
      start: {
        line: 1, column: 0
      },
      end: {
        line: 10, column: 10
      }
    },
    range: [1, 30],
    type: 'Program',
    body: [],
    comments: [],
    tokens: [],
    parent: null
  }
  root.body = result.stmts.map(function (statement) {
    // @ts-expect-error  root is not node TODO fix
    return transformation.transformNode(statement.stmt, root, statement.stmt_location === undefined ? 0 : statement.stmt_location)
  })

  console.log('##########')
  console.log(util.inspect(root.body, false, Infinity))
  return {
    services: {},
    visitorKeys: transformation.visitorKeys,
    ast: root
  }
}
