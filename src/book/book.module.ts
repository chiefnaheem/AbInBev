import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Book } from "src/book/entities/book.entities";
import { BookController } from "./controller/book.controller";
import { BookService } from "./service/book.service";

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    controllers: [BookController],
    providers: [BookService],
  })
  export class BookModule {}