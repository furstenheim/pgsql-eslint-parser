import * as ast from './ast'

export interface Node {
  SelectStmt?: ast.SelectStmt
  A_Const?: ast.AConst
  Integer?: ast.Integer
  ColumnRef?: ast.ColumnRef
  ResTarget?: ast.ResTarget
  String?: ast.String
  RangeVar?: ast.RangeVar
}
