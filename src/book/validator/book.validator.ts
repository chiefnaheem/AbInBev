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