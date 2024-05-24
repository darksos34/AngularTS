export interface Page {
  number: number
  size: number
  totalElements: number
  totalPages: number
}

export interface Links {
  first: string
  self: string
  next: string
  last: string
}
