import { Body, Controller, HttpStatus } from "@nestjs/common";
import { IResponse } from "../book.interface";
import { BookDto, PaginationDto } from "../dto/book.dto";
import { ObjectValidationPipe } from "../pipe/validation.pipe";
import { BookService } from "../service/book.service";
import { createBookValidator, paginationValidator } from "../validator/book.validator";

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    async createBook(@Body(new ObjectValidationPipe(createBookValidator)) data: BookDto): Promise<IResponse> {
        const book = await this.bookService.createBook(data);
        return {
            status: HttpStatus.CREATED,
            message: 'Book created successfully',
            data: book,
        };
    }

    async getAllBooks(@Body(new ObjectValidationPipe(paginationValidator)) data: PaginationDto): Promise<IResponse> {
        const books = await this.bookService.getAllBooks(data);
        return {
            status: HttpStatus.OK,
            message: 'Books retrieved successfully',
            data: books,
        };
    }
}