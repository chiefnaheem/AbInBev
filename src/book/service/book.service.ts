import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../entities/book.entities';
import { IsNull, Repository } from 'typeorm';
import { isNull } from 'util';
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
    this.logger.log(`Get all books`);
    const { page, limit } = data;
    const skip = (page - 1) * limit;
    const [books, count] = await this.bookRepository.findAndCount({
      where: { deletedAt: IsNull() },
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

  async getABook(id: string): Promise<Book> {
    this.logger.log(`Get book ${id}`);
    const book = await this.bookRepository.findOneOrFail({
      where: { id, deletedAt: null },
    });
    return book;
  }

  async updateBook(id: string, updateBook: BookDto): Promise<Book> {
    this.logger.log(`Update book ${id}`);
    const book = await this.bookRepository.findOneOrFail({
      where: { id, deletedAt: null },
    });
    Object.assign(book, updateBook);
    return await this.bookRepository.save(book);
  }

  async deleteBook(id: string): Promise<Book> {
    this.logger.log(`Delete book ${id}`);
    const book = await this.bookRepository.findOneOrFail({
      where: { id, deletedAt: null },
    });
    book.deletedAt = new Date();
    return await this.bookRepository.save(book);
  }

  async hardDeleteBook(id: string): Promise<Book> {
    this.logger.log(`Hard delete book ${id}`);
    const book = await this.bookRepository.findOneOrFail({
      where: { id },
    });
    return await this.bookRepository.remove(book);
  }
}
