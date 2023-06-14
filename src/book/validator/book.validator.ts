import * as Joi from 'joi';
import { BookStatusEnum } from '../enum/book.enum';

export const createBookValidator = Joi.object({
    title: Joi.string().required(),
    bookStatus: Joi.string().valid(...Object.values(BookStatusEnum)).default(BookStatusEnum.available),
    description: Joi.string().allow(null, ''),
    author: Joi.string().required(),
    publisher: Joi.string().allow(null, ''),
    year: Joi.number().required(),
    pages: Joi.number().required(),
});

export const updateBookValidator = Joi.object({
    title: Joi.string().optional(),
    bookStatus: Joi.string().valid(...Object.values(BookStatusEnum)).default(BookStatusEnum.available).optional(),
    description: Joi.string().allow(null, '').optional(),
    author: Joi.string().optional(),
    publisher: Joi.string().allow(null, '').optional(),
    year: Joi.number().optional(),
    pages: Joi.number().optional(),
});

export const paginationValidator = Joi.object({
    page: Joi.number().default(1),
    limit: Joi.number().default(10),
});