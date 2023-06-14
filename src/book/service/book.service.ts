import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entities';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    private readonly logger = new Logger(BookService.name);
  constructor(
    @InjectRepository(Book)
    private readonly mediaRepository: Repository<Book>,
  ) {}
}
