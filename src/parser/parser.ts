import * as ast from './ast'
import * as parser from 'libpg-query'

import * as util from 'util'
import { Node } from './pg-ast/Node'
import {PGOutput} from './pg-ast/output'
export async function parseForESLint (
  code: string,
  options?: any
): Promise<{
    ast: ast.PostgresProgram
    visitorKeys: string[]
    services: {}
  }> {
  const result: PGOutput = await parser.parseQuery(code)


  console.log(util.inspect(result, false, null))
  return {
    services: {},
    visitorKeys: ['SelectStatement', 'Integer', 'ColumnRef', 'ResTarget'],
    ast: {
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
  }
}
