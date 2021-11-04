import type {Node} from './Node'

export interface ResTarget {
  name: string
  indirection: Node[]
  val: Node
  location: number
}
