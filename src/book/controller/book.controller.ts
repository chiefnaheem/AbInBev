import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IResponse } from "../book.interface";
import { BookDto, PaginationDto } from "../dto/book.dto";
import { ObjectValidationPipe } from "../pipe/validation.pipe";
import { BookService } from "../service/book.service";
import { createBookValidator, paginationValidator, updateBookValidator } from "../validator/book.validator";

@ApiTags('books')
@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Post()
    async createBook(@Body(new ObjectValidationPipe(createBookValidator)) data: BookDto): Promise<IResponse> {
        const book = await this.bookService.createBook(data);
        return {
            status: HttpStatus.CREATED,
            message: 'Book created successfully',
            data: book,
        };
    }

    @Get()
    async getAllBooks(@Body(new ObjectValidationPipe(paginationValidator)) data: PaginationDto): Promise<IResponse> {
        const books = await this.bookService.getAllBooks(data);
        return {
            status: HttpStatus.OK,
            message: 'Books retrieved successfully',
            data: books,
        };
    }


    @Get(':id')
    async getABook(@Param('id', ParseUUIDPipe) id: string): Promise<IResponse> {
        const book = await this.bookService.getABook(id);
        return {
            status: HttpStatus.OK,
            message: 'Book retrieved successfully',
            data: book,
        };
    }
   

    @Patch(':id')
    async updateBook(@Param('id', ParseUUIDPipe) id: string, @Body(new ObjectValidationPipe(updateBookValidator)) data: BookDto): Promise<IResponse> {
        const book = await this.bookService.updateBook(id, data);
        return {
            status: HttpStatus.OK,
            message: 'Book updated successfully',
            data: book,
        };
    }

    @Delete('/hard-delete/:id')
    async hardDeleteBook(@Param('id', ParseUUIDPipe) id: string): Promise<IResponse> {
        const book = await this.bookService.hardDeleteBook(id);
        return {
            status: HttpStatus.OK,
            message: 'Book hard deleted successfully',
            data: book,
        };
    }

    @Delete(':id')
    async deleteBook(@Param('id', ParseUUIDPipe) id: string): Promise<IResponse> {
        const book = await this.bookService.deleteBook(id);
        return {
            status: HttpStatus.OK,
            message: 'Book deleted successfully',
            data: book,
        };
    }

}