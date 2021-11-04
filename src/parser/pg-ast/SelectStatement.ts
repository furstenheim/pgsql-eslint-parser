import {PostgresProgram} from '../ast'
import type {Node} from './Node'
import type {SetOperation} from './SetOperation'

export interface SelectStatement {
  parent: PostgresProgram
  targetList: Node[]

//  distinctClause List
//
//  intoClause   *IntoClause
//  targetList   List
  fromClause: Node[]
  // whereClause  Node
  // groupClause  List
  // havingClause Node
  // windowClause List

  // valuesLists [][]Node
//
  // sortClause    List
  // limitOffset   Node
  // limitCount    Node
  // lockingClause List
  // withClause    *WithClause

  op:   SetOperation
  // all  bool
  // larg *SelectStmt
  // rarg *SelectStmt
}