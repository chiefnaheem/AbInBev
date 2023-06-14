import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookService } from './book.service';
import { Book } from '../entities/book.entities';
import { BookDto, BookReturnDto, PaginationDto } from '../dto/book.dto';

describe('BookService', () => {
  let bookService: BookService;
  let bookRepository: Repository<Book>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: getRepositoryToken(Book),
          useClass: Repository,
        },
      ],
    }).compile();

    bookService = moduleRef.get<BookService>(BookService);
    bookRepository = moduleRef.get<Repository<Book>>(getRepositoryToken(Book));
  });

  describe('createBook', () => {
    it('should create a new book', async () => {
      const createBook: BookDto = {
        title: 'Test Book',
        author: 'Test Author',
        pages: 100,
        year: 2021,
      };

      const createdBook = new Book();
      Object.assign(createdBook, createBook);

      jest.spyOn(bookRepository, 'save').mockResolvedValue(createdBook);

      const result = await bookService.createBook(createBook);

      expect(result).toEqual(createdBook);
    });
  });

  describe('getAllBooks', () => {
    it('should return a paginated list of books', async () => {
      const pagination: PaginationDto = {
        page: 1,
        limit: 10,
      };

      const bookList = [new Book(), new Book(), new Book()];

      jest.spyOn(bookRepository, 'findAndCount').mockResolvedValue([bookList, bookList.length]);

      const result: BookReturnDto = await bookService.getAllBooks(pagination);

      expect(result.count).toEqual(bookList.length);
      expect(result.limit).toEqual(pagination.limit);
      expect(result.currentPage).toEqual(pagination.page);
      expect(result.totalPages).toEqual(
        Math.ceil(bookList.length / pagination.limit),
      );
      expect(result.books).toEqual(bookList);
    });
  });

  describe('getABook', () => {
    it('should return a single book', async () => {
      const book = new Book();
      book.id = '1';

      jest.spyOn(bookRepository, 'findOneOrFail').mockResolvedValue(book);

      const result = await bookService.getABook(book.id);

      expect(result).toEqual(book);
    });
  });

  describe('updateBook', () => {
    it('should update a book', async () => {
      const updateBook: BookDto = {
        title: 'Updated Book',
        author: 'Updated Author',
        pages: 200,
        year: 2022,
      };

      const book = new Book();
      book.id = '1';
      book.title = 'Test Book';
      book.author = 'Test Author';
      book.pages = 100;
        book.year = 2021;

      const updatedBook = new Book();
      Object.assign(updatedBook, book, updateBook);

      jest.spyOn(bookRepository, 'findOneOrFail').mockResolvedValue(book);
      jest.spyOn(bookRepository, 'save').mockResolvedValue(updatedBook);

      const result = await bookService.updateBook(book.id, updateBook);

      expect(result).toEqual(updatedBook);
    });
  });

  describe('deleteBook', () => {
    it('should delete a book', async () => {
      const book = new Book();
      book.id = '1';

      jest.spyOn(bookRepository, 'findOneOrFail').mockResolvedValue(book);
      jest.spyOn(bookRepository, 'remove').mockResolvedValue(book);

      const result = await bookService.hardDeleteBook(book.id);

      expect(result).toEqual(book);
    });
  });
});
