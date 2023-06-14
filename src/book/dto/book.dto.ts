import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BookDto {
  @ApiProperty({ example: 'Mars', description: 'The title of the book' })
  title: string;
  @ApiPropertyOptional({
    example: 'available',
    description: 'The status of the book',
  })
  bookStatus?: string;
  @ApiPropertyOptional({
    example: 'The book is about Mars',
    description: 'The description of the book',
  })
  description?: string;
  @ApiProperty({ example: 'John Doe', description: 'The author of the book' })
  author: string;
  @ApiPropertyOptional({
    example: 'Mars Publishing',
    description: 'The publisher of the book',
  })
  publisher?: string;
  @ApiProperty({ example: 2021, description: 'The year of the book' })
  year: number;
  @ApiProperty({ example: 100, description: 'The pages of the book' })
  pages: number;
}

export class PaginationDto {
  @ApiPropertyOptional({ example: 1, description: 'The current page' })
  page: number;
  @ApiPropertyOptional({ example: 10, description: 'The limit of the page' })
  limit: number;
}

export class BookReturnDto {
  count: number;
  limit: number;
  currentPage: number;
  totalPages: number;
  books: BookDto[];
}
