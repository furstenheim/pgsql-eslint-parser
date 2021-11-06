import * as mocha from 'mocha'
import { expect } from 'chai'
import { PGOutput } from '../src/parser/pg-ast/output'
import { LocationTreeNode } from '../src/types'

interface Test {
  input: PGOutput
  output: LocationTreeNode|null
}
mocha.describe('toLocationNode', function () {
  function getTests (): Test[] {
    return [
      {
        output: null,
        input: {
          query: [
            {
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
                      inhOpt: 2,
                      relpersistence: 'p',
                      location: 19
                    }
                  }
                ],
                op: 0
              }
            },
            {
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
                op: 0
              }
            }
          ],
          stderr: ''
        }
      }
    ]
  }
})
