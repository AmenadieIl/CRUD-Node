import express from 'express';
import { BookController } from '../controller/bookController.js';
const booksRouter = express.Router();
const bookController = new BookController();
booksRouter
    .route('/users/:userId/books')
    .post(bookController.bookValidation, bookController.createBook)
    .get(bookController.getBooks);


booksRouter
    .route('/users/:userId/books/:bookId')
    .get(bookController.getBookById)
    .put(bookController.bookValidation, bookController.updateBook)
    .delete (bookController.deleteBook);
export { booksRouter }