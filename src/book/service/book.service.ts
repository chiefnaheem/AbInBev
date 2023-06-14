import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entities';
import { Repository } from 'typeorm';
import { BookDto, BookReturnDto, PaginationDto } from '../dto/book.dto';

@Injectable()
export class BookService {
  private readonly logger = new Logger(BookService.name);
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async createBook(createBook: BookDto): Promise<Book> {
    const book = new Book();
    this.logger.log(`Create book ${book.title}`);
    Object.assign(book, createBook);
    return await this.bookRepository.save(book);
  }

  async getAllBooks(data: PaginationDto): Promise<BookReturnDto> {
    const { page, limit } = data;
      const skip = (page - 1) * limit;
      const [books, count] = await this.bookRepository.findAndCount({
        where: { deletedAt: null },
        order: { createdAt: 'DESC' },
        skip,
        take: limit,
      });
      const totalPages = Math.ceil(count / limit);
      return {
        count,
        limit,
        currentPage: page,
        totalPages,
        books,
      };
    }
}
