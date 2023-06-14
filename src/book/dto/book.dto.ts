export class BookDto {
  title: string;
  bookStatus?: string;
  description?: string;
  author: string;
  publisher?: string;
  year: number;
  pages: number;
}

export class PaginationDto {
  page: number = 1;
  limit: number = 10;
}

export class BookReturnDto {
    count: number;
    limit: number;
    currentPage: number;
    totalPages: number;
    books: BookDto[];
}