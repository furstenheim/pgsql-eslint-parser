import * as ast from './ast'

export function parseForESLint (
  code: string,
  options?: any
): {
    ast: ast.PostgresProgram
    visitorKeys: null
    services: {}
  } {
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
