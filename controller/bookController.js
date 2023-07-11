import { v1 } from 'uuid'
import { users } from '../manager/manager.js';
export class BookController {
    createBook(req, res) {
        const user = users.find((user) => user.id === req.params.userId);
        const { bookName } = req.body;
        let id = v1();
        let book = { id, bookName };
        user.books.push(book);
        res.send(book);
    }

    getBooks(req, res) {
        const user = users.find((user) => user.id === req.params.userId);
        res.send(user.books);
    }

    getBookById(req, res) {
        const id = req.params.userId;
        const user = users.find((user) => user.id === id);
        const book = user.books.find((book) => book.id === req.params.bookId);
        res.send(book);
    }

    updateBook(req, res) {
        const user = users.find((user) => user.id === req.params.userId);
        const book = user.books.find((book) => book.id === req.params.bookId);
        const { bookName } = req.body;
        book.bookName = bookName;
        res.send(book);
    }

    deleteBook(req, res) {
        const user = users.find((user) => user.id === req.params.userId);
        const bookIndex = user.books.findIndex((book) => book.id === req.params.bookId);
        const deletedBook = user.books.splice(bookIndex, 1)[0];
        res.send(deletedBook);
    }

    bookValidation(req, res, next) {
        const bookName = req.body;
        if(typeof bookName === 'string') {
            next()
        } else {
            res.status(404).send('invalid book name')
        }
    }
}