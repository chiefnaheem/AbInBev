import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    controllers: [BookController],
    providers: [BookService],
  })
  export class BookModule {}