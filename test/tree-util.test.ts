import * as mocha from 'mocha'
import { expect } from 'chai'
import { PGOutput } from '../src/parser/pg-ast/output'
import { LocationTreeNode } from '../src/types'
import * as treeUtils from '../src/tree-util'
interface Test {
  input: PGOutput
  only?: boolean
  output: LocationTreeNode|null
}
mocha.describe('toLocationNode', function () {
  getTests().forEach(function (t, index) {
    ;(t.only === true ? it.only : it)(`Test ${index}`, function () {
      t.input.query.stmts.forEach(function (s) {
        s.location = s.stmt_location === undefined ? 0 : s.stmt_location
      })
      const locationTree = treeUtils.toLocationTree(t.input)
      console.log(JSON.stringify(locationTree, null, 2))
    })
  })
  function getTests (): Test[] {
    return [
      {
        output: null,
        input: {
          version: 130003,
          stmts: [
            {
              stmt: {
                SelectStmt: {
                  targetList: [
                    {
                      ResTarget: {
                        val: {
                          A_Const: { val: { Integer: { ival: 1 } }, location: 7 }
                        },
                        location: 7
                      }
                    },
                    {
                      ResTarget: {
                        val: {
                          ColumnRef: {
                            fields: [
                              { String: { str: 'a' } },
                              { String: { str: 'b' } }
                            ],
                            location: 10
                          }
                        },
                        location: 10
                      }
                    }
                  ],
                  fromClause: [
                    {
                      RangeVar: {
                        relname: 'a',
                        inh: true,
                        relpersistence: 'p',
                        location: 19
                      }
                    }
                  ],
                  limitOption: 'LIMIT_OPTION_DEFAULT',
                  op: 'SETOP_NONE'
                }
              },
              stmt_len: 20
            },
            {
              stmt: {
                SelectStmt: {
                  targetList: [
                    {
                      ResTarget: {
                        val: {
                          A_Const: { val: { Integer: { ival: 2 } }, location: 29 }
                        },
                        location: 29
                      }
                    }
                  ],
                  limitOption: 'LIMIT_OPTION_DEFAULT',
                  op: 'SETOP_NONE'
                }
              },
              stmt_location: 21,
              stmt_len: 9
            }
          ]
        }
      }
    ]
  }
})
