import {Node} from './Node'

export interface PGOutput {
  query: Node[]
  stderr: string
}