import { BookStatusEnum } from "src/book/enum/book.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ type: 'enum', enum: BookStatusEnum, default: BookStatusEnum.available})
    bookStatus: BookStatusEnum;

    @Column()
    description: string;

    @Column()
    author: string;

    @Column()
    publisher: string;

    @Column()
    year: number;

    @Column()
    pages: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @Column({ nullable: true, default: null })
    deletedAt: Date;
}