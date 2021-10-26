import type { SelectStatement } from './SelectStatement'
import { Integer } from './Integer'
import { ColumnRef } from './ColumnRef'
import { ResTarget } from './ResTarget'

export interface Node {
  SelectStatement?: SelectStatement
  Integer?: Integer
  ColumnRef?: ColumnRef
  ResTarget?: ResTarget
}
