import * as ast from './ast'
// @ts-ignore
import * as parser from 'pg-query-parser'
import * as util from 'util'
export function parseForESLint (
  code: string,
  options?: any
): {
    ast: ast.PostgresProgram
    visitorKeys: null
    services: {}
  } {
  const result = parser.parse(code)
  console.log(util.inspect(result, false, null))
  return {
    services: {},
    visitorKeys: null,
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
