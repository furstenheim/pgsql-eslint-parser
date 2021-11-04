
export interface RangeVar {
  catalogname: string
  schemaname: string
  relname: string
  inh: boolean
  relpersistence: string
  // Alias          *Alias
  location: number
}