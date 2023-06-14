import { BookStatusEnum } from "../enum/book.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    title: string;

    @Column({ type: 'enum', enum: BookStatusEnum, default: BookStatusEnum.available})
    bookStatus: BookStatusEnum;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: false })
    author: string;

    @Column({ nullable: true })
    publisher: string;

    @Column({ nullable: false })
    year: number;

    @Column({ nullable: false })
    pages: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @Column({ nullable: true, default: null })
    deletedAt: Date;
}