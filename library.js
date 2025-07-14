"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.library = void 0;
var library = /** @class */ (function () {
    function library() {
        this.books = [];
    }
    library.prototype.addbook = function (book) {
        this.books.push(book);
    };
    library.prototype.listbooks = function () {
        this.books.forEach(function (book_) {
            book_.bookdetails();
        });
    };
    library.prototype.removeBook = function (id) {
        this.books = this.books.filter(function (book) { return book.book_id !== id; });
    };
    return library;
}());
exports.library = library;
