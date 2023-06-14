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
  page: number;
  limit: number;
}

export class BookReturnDto {
    count: number;
    limit: number;
    currentPage: number;
    totalPages: number;
    books: BookDto[];
}