"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(bookname, bookauthor, bookid) {
        this.book_name = bookname;
        this.book_author = bookauthor;
        this.book_id = bookid;
    }
    Book.prototype.bookdetails = function () {
        console.log("BOOK NAME: ".concat(this.book_name));
        console.log("BOOK AUTHOR: ".concat(this.book_author));
        console.log("BOOK ID: ".concat(this.book_id));
    };
    return Book;
}());
exports.Book = Book;
