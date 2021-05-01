import { ApiProperty } from '@nestjs/swagger'

import { Pagination } from './pagination'

interface PaginationParams {
  pagination: Pagination
  itemCount: number
}

export class PageMetaDto {
  @ApiProperty()
  readonly page: number

  @ApiProperty()
  readonly perPage: number

  @ApiProperty()
  readonly itemCount: number

  @ApiProperty()
  readonly pageCount: number

  @ApiProperty()
  readonly hasPreviousPage: boolean

  @ApiProperty()
  readonly hasNextPage: boolean

  constructor({ pagination, itemCount }: PaginationParams) {
    this.page = pagination.page
    this.perPage = pagination.perPage
    this.itemCount = itemCount
    this.pageCount = Math.ceil(this.itemCount / this.perPage)
    this.hasPreviousPage = this.page > 1
    this.hasNextPage = this.page < this.pageCount
  }
}
