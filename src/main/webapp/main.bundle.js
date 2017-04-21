webpackJsonp([0,3],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__author_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__author__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthorDetailsComponent = (function () {
    function AuthorDetailsComponent(authorService, flashMessagesService, route) {
        this.authorService = authorService;
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.author = new __WEBPACK_IMPORTED_MODULE_2__author__["a" /* Author */]();
    }
    AuthorDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.idParam = params['id'];
            console.log('id = ' + _this.idParam);
            if (_this.idParam) {
                _this.id = +_this.idParam; // (+) converts string 'id' to a number
                _this.authorService.getAuthorDetail(_this.id).subscribe(function (author) { return _this.author = author; }, function (error) { return console.log('Error: ' + error); });
            }
            else {
                _this.author = new __WEBPACK_IMPORTED_MODULE_2__author__["a" /* Author */]();
            }
        });
    };
    AuthorDetailsComponent.prototype.updateAuthor = function (author) {
        var _this = this;
        console.log("author.component.updateAuthor, id = " + author.id + ", author.firstName =" + author.firstName + ", author.lastName =" + author.lastName);
        if (author.id) {
            this.authorService.updateAuthor(author).subscribe(function (data) {
                _this.author = data;
                _this.flashMessagesService.show('Successfully updated ' + author.fullName, { cssClass: 'alert-success', timeout: 3000 });
                return true;
            }, function (error) {
                console.error("Error updating author id = " + author.id + ' => error: ' + error);
                _this.flashMessagesService.show('Could not update ' + author.fullName, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            });
        }
        else {
            this.authorService.addAuthor(author).subscribe(function (data) {
                _this.author = data;
                _this.flashMessagesService.show('Successfully created ' + author.fullName, { cssClass: 'alert-success', timeout: 3000 });
                return true;
            }, function (error) {
                console.error("Error creating author id = " + author.id + ' => error: ' + error);
                _this.flashMessagesService.show('Could not create ' + author.fullName, { cssClass: 'alert-danger', timeout: 3000 });
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            });
        }
    };
    AuthorDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return AuthorDetailsComponent;
}());
AuthorDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-author',
        template: __webpack_require__(443),
        styles: [__webpack_require__(433)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__author_service__["a" /* AuthorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__author_service__["a" /* AuthorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AuthorDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/author.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Author; });
var Author = (function () {
    function Author(values) {
        if (values === void 0) { values = {}; }
        this.bio = '';
        Object.assign(this, values);
    }
    return Author;
}());

//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/author.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__author_author__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__author_author_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorsComponent = (function () {
    function AuthorsComponent(authorService) {
        this.authorService = authorService;
        this.newAuthor = new __WEBPACK_IMPORTED_MODULE_1__author_author__["a" /* Author */]();
        this.authors = [];
    }
    AuthorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getAuthors()
            .subscribe(function (authors) { return _this.authors = authors; }, function (error) { return console.log('Error: ' + error); });
    };
    AuthorsComponent.prototype.addAuthor = function () {
        var _this = this;
        this.authorService.addAuthor(this.newAuthor)
            .subscribe(function (author) {
            _this.authors.push(author);
            _this.newAuthor.bio = '';
        }, function (error) { return console.log('Error: ' + error); });
    };
    AuthorsComponent.prototype.removeAuthor = function (id) {
        var _this = this;
        this.authorService.deleteAuthorById(id)
            .subscribe(function (response) { return _this.authors = _this.authors.filter(function (author) { return author.id !== id; }); }, function (error) { return console.log('Error: ' + error); });
    };
    return AuthorsComponent;
}());
AuthorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-authors',
        template: __webpack_require__(444),
        styles: [__webpack_require__(434)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__author_author_service__["a" /* AuthorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__author_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__author_author_service__["a" /* AuthorService */]) === "function" && _a || Object])
], AuthorsComponent);

var _a;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/authors.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publisher_publisher_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__author_author_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookDetailsComponent = (function () {
    function BookDetailsComponent(bookService, authorService, publisherService, flashMessagesService, route) {
        this.bookService = bookService;
        this.authorService = authorService;
        this.publisherService = publisherService;
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.selectedBook = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */]();
        this.publishers = [];
        this.authors = [];
        this.genres = [];
        this.selectedAuthorIds = [];
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id = +params['id']; // (+) converts string 'id' to a number
                console.log('id = ' + _this.id);
                _this.bookService.getBookDetail(_this.id).subscribe(function (book) {
                    _this.selectedBook = book;
                    _this.selectedAuthorIds = book.authors.map(function (a) { return a.id; });
                }, function (error) { return console.log('Error getting book: ' + error); });
            }
            else {
                _this.selectedBook = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */]();
            }
        });
        this.publisherService.getPublishers().subscribe(function (publishers) { return _this.publishers = publishers; }, function (error) { return console.log('Error getting publishers: ' + error); });
        this.authorService.getAuthors().subscribe(function (authors) { return _this.authors = authors; }, function (error) { return console.log('Error getting authors: ' + error); });
        this.bookService.getGenres().subscribe(function (genres) { return _this.genres = genres; }, function (error) { return console.log('Error getting genres: ' + error); });
    };
    BookDetailsComponent.prototype.srcValueChange = function (event) {
        this.selectedAuthorIds = [];
        for (var i in event.target.selectedOptions) {
            if (event.target.selectedOptions[i].label) {
                this.selectedAuthorIds.push(event.target.selectedOptions[i].value);
            }
        }
    };
    BookDetailsComponent.prototype.updateBook = function (book) {
        var _this = this;
        if (!book.authors) {
            book.authors = [];
        }
        var _loop_1 = function (id) {
            var addAuthor = this_1.authors.find(function (auth) { return auth.id == id; });
            if (addAuthor) {
                book.authors.push(addAuthor);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedAuthorIds; _i < _a.length; _i++) {
            var id = _a[_i];
            _loop_1(id);
        }
        if (book.id) {
            this.bookService.updateBook(book).subscribe(function (data) {
                _this.selectedBook = data;
                _this.flashMessagesService.show('Successfully updated ' + book.title, { cssClass: 'alert-success', timeout: 3000 });
                return true;
            }, function (error) {
                console.error("Error saving book id = " + book.id + ' => error: ' + error);
                _this.flashMessagesService.show('Error updating ' + book.title, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            });
        }
        else {
            this.bookService.addBook(book).subscribe(function (data) {
                _this.selectedBook = data;
                _this.flashMessagesService.show('Successfully created ' + book.title, { cssClass: 'alert-success', timeout: 3000 });
                return true;
            }, function (error) {
                console.error("Error saving book id = " + book.id + ' => error: ' + error);
                _this.flashMessagesService.show('Error saving ' + book.title, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            });
        }
    };
    BookDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return BookDetailsComponent;
}());
BookDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book',
        template: __webpack_require__(445),
        styles: [__webpack_require__(435)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_4__publisher_publisher_service__["a" /* PublisherService */], __WEBPACK_IMPORTED_MODULE_5__author_author_service__["a" /* AuthorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__author_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__author_author_service__["a" /* AuthorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__publisher_publisher_service__["a" /* PublisherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__publisher_publisher_service__["a" /* PublisherService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], BookDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/book.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    BookService.prototype.newHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    BookService.prototype.getBooks = function () {
        return this.http.get(this.baseUrl + "/book")
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.getGenres = function () {
        return this.http.get(this.baseUrl + "/genre")
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.getBookDetail = function (id) {
        return this.http.get(this.baseUrl + "/book/" + id)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.addBook = function (book) {
        return this.http.post(this.baseUrl + "/book", JSON.stringify(book), { headers: this.newHeaders() })
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.put(this.baseUrl + "/book/" + book.id, JSON.stringify(book), { headers: this.newHeaders() })
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.deleteBookById = function (id) {
        return this.http.delete(this.baseUrl + "/book/" + id);
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/book.service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(values) {
        if (values === void 0) { values = {}; }
        this.description = '';
        Object.assign(this, values);
    }
    return Book;
}());

//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/book.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_book__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_book_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BooksComponent = (function () {
    function BooksComponent(bookService, http, overlay, vcRef, modal) {
        this.bookService = bookService;
        this.http = http;
        this.modal = modal;
        this.newBook = new __WEBPACK_IMPORTED_MODULE_3__book_book__["a" /* Book */]();
        this.selectedBook = new __WEBPACK_IMPORTED_MODULE_3__book_book__["a" /* Book */]();
        this.books = [];
        overlay.defaultViewContainer = vcRef;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return console.log('Error: ' + error); });
    };
    BooksComponent.prototype.addBook = function () {
        var _this = this;
        this.bookService.addBook(this.newBook)
            .subscribe(function (book) {
            _this.books.push(book);
            _this.newBook.title = '';
        }, function (error) { return console.log('Error: ' + error); });
    };
    BooksComponent.prototype.removeBook = function (id) {
        var _this = this;
        this.bookService.deleteBookById(id)
            .subscribe(function (response) { return _this.books = _this.books.filter(function (book) { return book.id !== id; }); }, function (error) { return console.log('Error: ' + error); });
    };
    BooksComponent.prototype.onSelectBook = function (book) {
        this.selectedBook = book;
        console.log('book selected: ' + book.id);
        this.modal.alert()
            .size("lg")
            .showClose(true)
            .isBlocking(false)
            .title(this.selectedBook.title)
            .body("\n<ol class=\"property-list book\">\n    <li class=\"fieldcontain\">\n        <span id=\"authors-label\" class=\"property-label\">Author" + (this.selectedBook.authors.length == 1 ? '' : 's') + "</span>\n        <div class=\"property-value\" aria-labelledby=\"authors-label\" id=\"book-authors\">\n            <ul style=\"list-style-type: none;\">\n                <li>" + this.selectedBook.authors.map(function (elem) { return elem.fullName; }).join(', ') + "</li>\n            </ul>\n        </div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"description-label\" class=\"property-label\">Description</span>\n        <div class=\"property-value\" aria-labelledby=\"description-label\" id=\"book-description\">" + this.selectedBook.description + "</div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"dateOfPublication-label\" class=\"property-label\">Date Of Publication</span>\n        <div class=\"property-value\" aria-labelledby=\"dateOfPublication-label\" id=\"book-dateOfPublication\">\n            " + this.selectedBook.dateOfPublication + "\n        </div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"price-label\" class=\"property-label\">Price</span>\n        <div class=\"property-value\" aria-labelledby=\"price-label\" id=\"book-price\">" + this.selectedBook.priceFormatted + "</div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"genre-label\" class=\"property-label\">Genre</span>\n        <div class=\"property-value\" aria-labelledby=\"genre-label\" id=\"book-genre\">" + this.selectedBook.genre + "</div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"publisher-label\" class=\"property-label\">Publisher</span>\n        <div class=\"property-value\" aria-labelledby=\"publisher-label\" id=\"book-publisher\">\n            <a href=\"/#/publisher-details/" + this.selectedBook.publisher.id + "\">" + this.selectedBook.publisher.name + "</a>\n        </div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"isbn-label\" class=\"property-label\">Isbn</span>\n        <div class=\"property-value\" aria-labelledby=\"isbn-label\" id=\"book-isbn\">" + this.selectedBook.isbn + "</div>\n    </li>\n\n</ol>\n")
            .keyboard(27)
            .okBtn('Close')
            .open();
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-books',
        template: __webpack_require__(446),
        styles: [__webpack_require__(436)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__book_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["a" /* Overlay */], __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__book_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__book_book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["a" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["a" /* Overlay */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === "function" && _e || Object])
], BooksComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/books.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_nav_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = (function () {
    function IndexComponent(navService, router) {
        this.navService = navService;
        this.router = router;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navService.getNavData().subscribe(function (applicationData) {
            _this.controllers = applicationData.controllers.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                else if (a.name > b.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        });
    };
    IndexComponent.prototype.hasRoute = function (controllerName) {
        return this.router.config.some(function (route) {
            if (route.path === controllerName) {
                return true;
            }
        });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(447),
        styles: [__webpack_require__(437)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nav_nav_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nav_nav_service__["a" /* NavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], IndexComponent);

var _a, _b;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/index.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publisher_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publisher__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublisherDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PublisherDetailsComponent = (function () {
    function PublisherDetailsComponent(publisherService, flashMessagesService, route) {
        this.publisherService = publisherService;
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.publisher = new __WEBPACK_IMPORTED_MODULE_2__publisher__["a" /* Publisher */]();
    }
    PublisherDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id = +params['id']; // (+) converts string 'id' to a number
                console.log('id = ' + _this.id);
                _this.publisherService.getPublisherDetail(_this.id).subscribe(function (publisher) { return _this.publisher = publisher; }, function (error) { return console.log('Error: ' + error); });
            }
            else {
                _this.publisher = new __WEBPACK_IMPORTED_MODULE_2__publisher__["a" /* Publisher */]();
            }
        });
    };
    PublisherDetailsComponent.prototype.updatePublisher = function (publisher) {
        var _this = this;
        if (publisher.id) {
            this.publisherService.updatePublisher(publisher).subscribe(function (data) {
                _this.publisher = data;
                _this.flashMessagesService.show('Successfully updated ' + publisher.name, { cssClass: 'alert-success', timeout: 3000 });
                return true;
            }, function (error) {
                console.error("Error updating publisher id = " + publisher.id + ' => error: ' + error);
                _this.flashMessagesService.show('Could not update ' + publisher.name, { cssClass: 'alert-danger', timeout: 3000 });
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            });
        }
        else {
            this.publisherService.addPublisher(publisher).subscribe(function (data) {
                _this.publisher = data;
                _this.flashMessagesService.show('Successfully created ' + publisher.name, { cssClass: 'alert-success', timeout: 3000 });
                return true;
            }, function (error) {
                console.error("Error saving publisher id = " + publisher.id + ' => error: ' + error);
                _this.flashMessagesService.show('Could not create ' + publisher.name, { cssClass: 'alert-danger', timeout: 3000 });
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            });
        }
    };
    PublisherDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return PublisherDetailsComponent;
}());
PublisherDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-publisher',
        template: __webpack_require__(449),
        styles: [__webpack_require__(439)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__publisher_service__["a" /* PublisherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__publisher_service__["a" /* PublisherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__publisher_service__["a" /* PublisherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PublisherDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/publisher.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Publisher; });
var Publisher = (function () {
    function Publisher(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Publisher;
}());

//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/publisher.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publisher_publisher__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publisher_publisher_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublishersComponent = (function () {
    function PublishersComponent(publisherService) {
        this.publisherService = publisherService;
        this.newPublisher = new __WEBPACK_IMPORTED_MODULE_1__publisher_publisher__["a" /* Publisher */]();
        this.publishers = [];
    }
    PublishersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.publisherService.getPublishers()
            .subscribe(function (publishers) { return _this.publishers = publishers; }, function (error) { return console.log('Error: ' + error); });
    };
    PublishersComponent.prototype.addPublisher = function () {
        var _this = this;
        this.publisherService.addPublisher(this.newPublisher)
            .subscribe(function (publisher) {
            _this.publishers.push(publisher);
            _this.newPublisher.name = '';
        }, function (error) { return console.log('Error: ' + error); });
    };
    PublishersComponent.prototype.removePublisher = function (id) {
        var _this = this;
        this.publisherService.deletePublisherById(id)
            .subscribe(function (response) { return _this.publishers = _this.publishers.filter(function (publisher) { return publisher.id !== id; }); }, function (error) { return console.log('Error: ' + error); });
    };
    return PublishersComponent;
}());
PublishersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-publishers',
        template: __webpack_require__(450),
        styles: [__webpack_require__(440)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__publisher_publisher_service__["a" /* PublisherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__publisher_publisher_service__["a" /* PublisherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__publisher_publisher_service__["a" /* PublisherService */]) === "function" && _a || Object])
], PublishersComponent);

var _a;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/publishers.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "grails-cupsonly-logo-white.b651640f09f462efc430.svg";

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 247;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(259);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        styles: [__webpack_require__(432)],
        template: __webpack_require__(442)
    })
], AppComponent);

//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/app.component.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_index_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_nav_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authors_authors_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__books_books_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__publishers_publishers_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_modal__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_modal_plugins_bootstrap__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__publisher_publisher_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__book_book_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__author_author_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_2_dropdown_multiselect__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var MODAL_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_16_angular2_modal_plugins_bootstrap__["a" /* Modal */],
    __WEBPACK_IMPORTED_MODULE_15_angular2_modal__["a" /* Overlay */],
    { provide: __WEBPACK_IMPORTED_MODULE_15_angular2_modal__["b" /* OverlayRenderer */], useClass: __WEBPACK_IMPORTED_MODULE_15_angular2_modal__["c" /* DOMOverlayRenderer */] }
];
var AUTHOR_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_12__authors_authors_component__["a" /* AuthorsComponent */],
    __WEBPACK_IMPORTED_MODULE_19__author_author_component__["a" /* AuthorDetailsComponent */]
];
var BOOK_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_13__books_books_component__["a" /* BooksComponent */],
    __WEBPACK_IMPORTED_MODULE_18__book_book_component__["a" /* BookDetailsComponent */]
];
var PUBLISHER_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_14__publishers_publishers_component__["a" /* PublishersComponent */],
    __WEBPACK_IMPORTED_MODULE_17__publisher_publisher_component__["a" /* PublisherDetailsComponent */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_7__index_index_component__["a" /* IndexComponent */],
            AUTHOR_COMPONENTS,
            BOOK_COMPONENTS,
            PUBLISHER_COMPONENTS
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* rootRouterConfig */]),
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_angular2_modal__["d" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_20_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_16_angular2_modal_plugins_bootstrap__["b" /* BootstrapModalModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["HashLocationStrategy"] },
            __WEBPACK_IMPORTED_MODULE_11__nav_nav_service__["a" /* NavService */],
            MODAL_PROVIDERS
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_index_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authors_authors_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__author_author_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_books_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_book_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__publishers_publishers_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__publisher_publisher_component__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouterConfig; });







var rootRouterConfig = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'applications', redirectTo: 'index' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_0__index_index_component__["a" /* IndexComponent */] },
    { path: 'authors', component: __WEBPACK_IMPORTED_MODULE_1__authors_authors_component__["a" /* AuthorsComponent */] },
    { path: 'new-author', component: __WEBPACK_IMPORTED_MODULE_2__author_author_component__["a" /* AuthorDetailsComponent */] },
    { path: 'author-details/:id', component: __WEBPACK_IMPORTED_MODULE_2__author_author_component__["a" /* AuthorDetailsComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_3__books_books_component__["a" /* BooksComponent */] },
    { path: 'new-book', component: __WEBPACK_IMPORTED_MODULE_4__book_book_component__["a" /* BookDetailsComponent */] },
    { path: 'book-details/:id', component: __WEBPACK_IMPORTED_MODULE_4__book_book_component__["a" /* BookDetailsComponent */] },
    { path: 'publishers', component: __WEBPACK_IMPORTED_MODULE_5__publishers_publishers_component__["a" /* PublishersComponent */] },
    { path: 'new-publisher', component: __WEBPACK_IMPORTED_MODULE_6__publisher_publisher_component__["a" /* PublisherDetailsComponent */] },
    { path: 'publisher-details/:id', component: __WEBPACK_IMPORTED_MODULE_6__publisher_publisher_component__["a" /* PublisherDetailsComponent */] }
];
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/app.routes.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(navService, router) {
        this.navService = navService;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navService.getNavData().subscribe(function (res) { return _this.applicationData = res; });
        this.navService.getNavData().subscribe(function (applicationData) {
            _this.controllers = applicationData.controllers.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                else if (a.name > b.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        });
    };
    NavComponent.prototype.hasRoute = function (controllerName) {
        return this.router.config.some(function (route) {
            if (route.path === controllerName + 's') {
                return true;
            }
        });
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(448),
        styles: [__webpack_require__(438)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nav_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nav_service__["a" /* NavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/nav.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/environment.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/polyfills.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "fieldset,\n.property-list {\n    margin: 0.6em 1.25em 0 1.25em;\n    padding: 0.3em 1.8em 1.25em;\n    position: relative;\n    zoom: 1;\n    border: none;\n}\n\n.property-list .fieldcontain {\n    list-style: none;\n    overflow: hidden;\n    zoom: 1;\n}\n\n.fieldcontain {\n    margin-top: 1em;\n}\n\n.fieldcontain label,\n.fieldcontain .property-label {\n    color: #666666;\n    text-align: right;\n    width: 25%;\n}\n\n.fieldcontain .property-label {\n    float: left;\n}\n\n.fieldcontain .property-value {\n    display: block;\n    margin-left: 27%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".property-list {\n    list-style: none;\n    list-style-type: none;\n}\n\n.property-label {\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "ul {\n    list-style: none;\n    list-style-type: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".property-list {\n    list-style: none;\n    list-style-type: none;\n}\n\n.property-label {\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".property-list {\n    list-style: none;\n    list-style-type: none;\n}\n\n.property-label {\n    font-weight: bold;\n}\n\nul {\n    list-style: none;\n    list-style-type: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".grails-icon img {\n    height: 27px;\n    background-image: url(" + __webpack_require__(233) + ");\n}\n\na {\n    color: #db4800;\n}\n\n#controllers a {\n    text-decoration: underline;\n}\n\n#controllers a:hover {\n    text-decoration: none;\n}\n\n.grails-logo-container {\n    background:#79b94c no-repeat 50% 30%;\n    margin-bottom: 20px;\n    color: white;\n    height:300px;\n    text-align:center;\n}\n\nimg.grails-logo {\n    height:340px;\n    margin-top:-10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".nav-link {\n    padding: .5rem;\n    border-radius: 3px;\n}\n\n.nav-link:hover, .nav-link:active {\n    background-color: #db4800;\n}\n\n.grails-icon img {\n    height: 27px;\n    background-image: url(" + __webpack_require__(233) + ");\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".property-list {\n    list-style: none;\n    list-style-type: none;\n}\n\n.property-label {\n    font-weight: bold;\n}\n\n\nul {\n    list-style: none;\n    list-style-type: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "ul {\n    list-style: none;\n    list-style-type: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<main>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = "\n<ol class=\"property-list book\">\n\n    <li class=\"fieldcontain\">\n        <span id=\"firstName-label\" class=\"property-label\">First Name</span>\n        <div class=\"property-value\" aria-labelledby=\"firstName-label\" id=\"author-firstName\"><input [(ngModel)]=\"author.firstName\"/></div>\n    </li>\n\n    <li *ngIf=\"author.middleName\" class=\"fieldcontain\">\n        <span id=\"middleName-label\" class=\"property-label\">Middle Name</span>\n        <div class=\"property-value\" aria-labelledby=\"middleName-label\" id=\"author-middleName\"><input [(ngModel)]=\"author.middleName\"/></div>\n    </li>\n\n\n    <li class=\"fieldcontain\">\n        <span id=\"lastName-label\" class=\"property-label\">Last Name</span>\n        <div class=\"property-value\" aria-labelledby=\"lastName-label\" id=\"author-lastName\"><input [(ngModel)]=\"author.lastName\" /></div>\n    </li>\n\n\n\n    <li class=\"fieldcontain\">\n        <span id=\"birthDate-label\" class=\"property-label\">DOB</span>\n        <div class=\"property-value\" aria-labelledby=\"birthDate-label\" id=\"author-birthDate\">\n            <input type=\"date\" [(ngModel)]=\"author.birthDate\" />\n        </div>\n    </li>\n\n\n    <li class=\"fieldcontain\">\n        <span *ngIf=\"author.books\" id=\"books-label\" class=\"property-label\">Book{{author.books.length==1?'':'s'}}</span>\n        <div class=\"property-value\" aria-labelledby=\"books-label\" id=\"book-authors\">\n            <ul style=\"list-style-type: none;\">\n                <li *ngFor=\"let book of author.books\"><a href=\"/#/book-details/{{book.id}}\">{{book.title}} ({{book.dateOfPublication | date: 'yyyy'}})</a> </li>\n            </ul>\n        </div>\n    </li>\n\n\n    <li class=\"fieldcontain\">\n        <span *ngIf=\"author.publishers\" id=\"publishers-label\" class=\"property-label\">Publisher{{author.publishers.length==1?'':'s'}}</span>\n        <div class=\"property-value\" aria-labelledby=\"publishers-label\" id=\"book-publishers\">\n            <ul style=\"list-style-type: none;\">\n                <li *ngFor=\"let publisher of author.publishers\"><a href=\"/#/publisher-details/{{publisher.id}}\">{{publisher.name}}</a> </li>\n            </ul>\n        </div>\n    </li>\n\n</ol>\n<button class=\"btn btn-outline-primary\" (click)=\"updateAuthor(author)\">Update</button>\n"

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" role=\"main\">\n    <section class=\"container colset-2-its\">\n        <div role=\"navigation\">\n            <button class=\"btn btn-outline-primary float-sm-right\" [routerLink]=\"['/new-author']\">New Author</button>\n            <h2>Authors</h2>\n            <table class=\"table table-striped\">\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>DOB</th>\n                        <th>Books</th>\n                        <th>Publishers</th>\n                    </tr>\n                </thead>\n                <tbody>\n\n                    <tr *ngFor=\"let author of authors\" >\n                        <td><a [routerLink]=\"['/author-details',author.id]\">{{author.firstName}} {{author.lastName}}</a></td>\n                        <td>{{author.birthDate | date:'MM/dd/yyyy'}}</td>\n                        <td>\n                            <ul>\n                                <li *ngFor=\"let book of author.books\" >\n                                    <a [routerLink]=\"['/book-details',book.id]\">{{book.title}} ({{book.dateOfPublication | date: 'yyyy'}})</a>\n                                </li>\n                            </ul>\n                        </td>\n                        <td>\n                            <ul>\n                                <li *ngFor=\"let publisher of author.publishers\" >\n                                    <a [routerLink]=\"['/publisher-details',publisher.id]\">{{publisher.name}}</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

module.exports = "\n<ol class=\"property-list book\">\n    <li class=\"fieldcontain\">\n        <span id=\"title-label\" class=\"property-label\">Title</span>\n        <div class=\"property-value\" aria-labelledby=\"title-label\" id=\"book-title\"><input [(ngModel)]=\"selectedBook.title\" /></div>\n    </li>\n    <li class=\"fieldcontain\">\n        <span id=\"authors-label\" class=\"property-label\">Author{{selectedBook?.authors?.length==1?'':'s'}}</span>\n        <div class=\"property-value\" aria-labelledby=\"authors-label\" id=\"book-authors\">\n            <ul style=\"list-style-type: none;\">\n                <select multiple (change)=\"srcValueChange($event)\">\n                    <option *ngFor=\"let author of authors\"\n                            [value]=\"author.id\"\n                            [selected]=\"selectedAuthorIds.indexOf(author.id) > -1 ? true: null\">\n                        {{author?.fullName}}\n                    </option>\n                </select>\n            </ul>\n        </div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"description-label\" class=\"property-label\">Description</span>\n        <div class=\"property-value\" aria-labelledby=\"description-label\" id=\"book-description\"><textarea [(ngModel)]=\"selectedBook.description\" ></textarea></div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"dateOfPublication-label\" class=\"property-label\">Date Of Publication</span>\n        <div class=\"property-value\" aria-labelledby=\"dateOfPublication-label\" id=\"book-dateOfPublication\">\n            <input type=\"date\" [(ngModel)]=\"selectedBook.dateOfPublication\" />\n        </div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"price-label\" class=\"property-label\">Price</span>\n        <div class=\"property-value\" aria-labelledby=\"price-label\" id=\"book-price\"><input [(ngModel)]=\"selectedBook.price\" /></div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"genre-label\" class=\"property-label\">Genre</span>\n        <div class=\"property-value\" aria-labelledby=\"genre-label\" id=\"book-genre\">\n            <select [(ngModel)]=\"selectedBook.genre\">\n                <option *ngFor=\"let genre of genres\"\n                        [ngValue]=\"genre\"\n                        [selected]=\"selectedBook.genre == genre ? true : null\">\n                    {{genre}}\n                </option>\n            </select>\n        </div>\n    </li>\n\n    <li  class=\"fieldcontain\">\n        <span id=\"publisher-label\" class=\"property-label\">Publisher</span>\n        <div class=\"property-value\" aria-labelledby=\"publisher-label\" id=\"book-publisher\">\n            <select [(ngModel)]=\"selectedBook.publisher\">\n                <option *ngFor=\"let publisher of publishers\"\n                        [ngValue]=\"publisher\"\n                        [selected]=\"selectedBook?.publisher?.id == publisher?.id ? true : null\">\n                    {{publisher?.name}}\n                </option>\n            </select>\n        </div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"isbn-label\" class=\"property-label\">Isbn</span>\n        <div class=\"property-value\" aria-labelledby=\"isbn-label\" id=\"book-isbn\"><input [(ngModel)]=\"selectedBook.isbn\"/></div>\n    </li>\n\n</ol>\n\n<button class=\"btn btn-outline-primary\"(click)=\"updateBook(selectedBook)\">Update</button>\n"

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"content\" role=\"main\">\n    <section class=\"container colset-2-its\">\n        <div role=\"navigation\">\n            <button class=\"btn btn-outline-primary float-sm-right\" [routerLink]=\"['/new-book']\" >New Book</button>\n            <h2>Books</h2>\n            <table class=\"table table-striped\">\n                <thead>\n                    <th>Title</th>\n                    <th>Author(s)</th>\n                    <th>Genre</th>\n                    <th>Publisher</th>\n                    <th>Published</th>\n                    <th>Actions</th>\n                </thead>\n                <tbody>\n\n                <tr *ngFor=\"let book of books\" >\n                    <td ><button class=\"btn btn-link\" (click)=\"onSelectBook(book)\">{{book.title}}</button></td>\n                    <td>\n                        <ul>\n                            <li *ngFor=\"let author of book.authors\">\n                                <a [routerLink]=\"['/author-details',author.id]\">{{author.fullName}}</a>\n                            </li>\n                        </ul>\n                    </td>\n                    <td>{{book.genre}}</td>\n                    <td><a [routerLink]=\"['/publisher-details', book.publisher.id]\">{{book.publisher.name}}</a></td>\n                    <td>{{book.dateOfPublication | date:'yyyy'}}</td>\n                    <td><button class=\"btn-sm btn-outline-danger\" (click)=\"removeBook(book.id)\">Remove</button></td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

module.exports = "<div class=\"svg\" role=\"presentation\">\n  <div class=\"grails-logo-container\">\n    <img src=\"../../images/HarvardCoop.jpg\" />\n  </div>\n</div>\n\n<div id=\"content\" role=\"main\">\n  <section class=\"container colset-2-its\">\n    <h1>Welcome to Bookstore</h1>\n\n    <p>\n      Please peruse our offerings by author, book, or publisher using the menu links above\n    </p>\n\n  </section>\n</div>\n"

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-full navbar-dark\" style=\"background-color: #4D8618;\">\n  <button class=\"navbar-toggler hidden-md-up float-xs-right\" type=\"button\" (click)=\"navExpanded = !navExpanded\" aria-controls=\"exCollapsingNavbar2\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    &#9776;\n  </button>\n  <a class=\"navbar-brand\" href=\"/#\">\n    <i class=\"fa grails-icon\">\n      <img src=\"../../images/book_PNG2118.png\" />\n    </i> Books\n  </a>\n  <div class=\"collapse navbar-toggleable-sm\" id=\"exCollapsingNavbar2\" [ngbCollapse]=\"!navExpanded\">\n    <ul class=\"nav navbar-nav float-sm-right\">\n      <li class=\"nav-item\" ngbDropdown>\n        <a class=\"dropdown-toggle nav-link\" ngbDropdownToggle role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">What to see</a>\n        <div class=\"dropdown-menu\">\n          <a  *ngFor=\"let c of controllers\" [href]=\"'/#/' + c.logicalPropertyName+'s'\" class=\"dropdown-item\">{{c.logicalPropertyName}}s</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" ngbDropdown>\n        <a class=\"dropdown-toggle nav-link\" ngbDropdownToggle role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Application Status <span class=\"caret\"></span></a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Environment: {{applicationData?.environment}}</a>\n          <a class=\"dropdown-item\" href=\"#\">App profile: {{applicationData?.appprofile}}</a>\n          <a class=\"dropdown-item\" href=\"#\">App version: {{applicationData?.appversion}}</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Grails version: {{applicationData?.grailsversion}}</a>\n          <a class=\"dropdown-item\" href=\"#\">Groovy version: {{applicationData?.groovyversion}}</a>\n          <a class=\"dropdown-item\" href=\"#\">JVM version: {{applicationData?.jvmversion}}</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Reloading active: {{applicationData?.reloadingagentenabled}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" ngbDropdown>\n        <a  class=\"dropdown-toggle nav-link\" ngbDropdownToggle role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Artefacts <span class=\"caret\"></span></a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Controllers: {{applicationData?.artefacts?.controllers}}</a>\n          <a class=\"dropdown-item\" href=\"#\">Domains: {{applicationData?.artefacts?.domains}}</a>\n          <a class=\"dropdown-item\" href=\"#\">Services: {{applicationData?.artefacts?.services}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" ngbDropdown>\n        <a class=\"dropdown-toggle nav-link\" ngbDropdownToggle role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Installed Plugins <span class=\"caret\"></span></a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n          <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let plugin of applicationData?.plugins\">{{plugin.name}} - {{plugin.version}}</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = "<ol class=\"property-list book\">\n\n    <li class=\"fieldcontain\">\n        <span id=\"name-label\" class=\"property-label\">Name</span>\n        <div class=\"property-value\" aria-labelledby=\"name-label\" id=\"publisher-name\"><input [(ngModel)]=\"publisher.name\" /></div>\n    </li>\n\n    <li class=\"fieldcontain\">\n        <span id=\"dateEstablished-label\" class=\"property-label\">Date Established</span>\n        <div class=\"property-value\" aria-labelledby=\"dateEstablished-label\" id=\"publisher-dateEstablished\">\n            <input type=\"date\" [(ngModel)]=\"publisher.dateEstablished\" />\n        </div>\n    </li>\n\n    <li ngIf=\"publisher?.books\" class=\"fieldcontain\">\n        <span id=\"books-label\" class=\"property-label\">Book{{publisher?.books?.length==1?'':'s'}}</span>\n        <div class=\"property-value\" aria-labelledby=\"books-label\" id=\"publisher-books\">\n            <ul style=\"list-style-type: none;\">\n                <li *ngFor=\"let book of publisher?.books\"><a href=\"/#/book-details/{{book?.id}}\">{{book?.title}} ({{book?.dateOfPublication | date: 'yyyy'}})</a> </li>\n            </ul>\n        </div>\n    </li>\n\n    \n    <li ngIf=\"publisher?.authors\" class=\"fieldcontain\">\n        <span id=\"authors-label\" class=\"property-label\">Author{{publisher?.authors?.length==1?'':'s'}}</span>\n        <div class=\"property-value\" aria-labelledby=\"authors-label\" id=\"publisher-authors\">\n            <ul style=\"list-style-type: none;\">\n                <li *ngFor=\"let author of publisher?.authors\"><a href=\"/#/author-details/{{author?.id}}\">{{author?.fullName}}</a> </li>\n            </ul>\n        </div>\n    </li>\n    \n\n</ol>\n<button class=\"btn btn-outline-primary\" (click)=\"updatePublisher(publisher)\">Update</button>"

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" role=\"main\">\n    <section class=\"container colset-2-its\">\n        <div role=\"navigation\">\n            <button class=\"btn btn-outline-primary float-sm-right\" [routerLink]=\"['/new-publisher']\" >New Publisher</button>\n            <h2>Publishers</h2>\n            <table class=\"table table-striped\">\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Since</th>\n                        <th>Books</th>\n                        <th>Authors</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let publisher of publishers\" >\n                        <td><a [routerLink]=\"['/publisher-details',publisher.id]\">{{publisher.name}}</a></td>\n                        <td>{{publisher.dateEstablished | date:'yyyy'}}</td>\n                        <td>\n                            <ul>\n                                <li *ngFor=\"let book of publisher.books\">\n                                    <a [routerLink]=\"['/book-details',book.id]\">{{book.title}} {{book.dateOfPublication | date:'yyyy'}})</a>\n                                </li>\n                            </ul>\n                        </td>\n                        <td>\n                            <ul>\n                                <li *ngFor=\"let author of publisher.authors\">\n                                    <a [routerLink]=\"['/author-details',author.id]\">{{author.fullName}}</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                </tbody>\n\n            </table>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(248);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorService = (function () {
    function AuthorService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    AuthorService.prototype.newHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    AuthorService.prototype.getAuthors = function () {
        return this.http.get(this.baseUrl + "/author/")
            .map(function (response) { return response.json(); });
    };
    AuthorService.prototype.getAuthorDetail = function (id) {
        return this.http.get(this.baseUrl + "/author/" + id)
            .map(function (response) { return response.json(); });
    };
    AuthorService.prototype.addAuthor = function (author) {
        return this.http.post(this.baseUrl + "/author", JSON.stringify(author), { headers: this.newHeaders() })
            .map(function (response) { return response.json(); });
    };
    AuthorService.prototype.updateAuthor = function (author) {
        return this.http.put(this.baseUrl + "/author/" + author.id, JSON.stringify(author), { headers: this.newHeaders() })
            .map(function (response) { return response.json(); });
    };
    AuthorService.prototype.deleteAuthorById = function (id) {
        return this.http.delete(this.baseUrl + "/author/" + id);
    };
    return AuthorService;
}());
AuthorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthorService);

var _a;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/author.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavService = (function () {
    function NavService(http) {
        this.http = http;
    }
    NavService.prototype.getNavData = function () {
        if (!this._navData) {
            this._navData = this.http.get('http://localhost:8080/application')
                .map(function (res) { return res.json(); });
        }
        return this._navData;
    };
    return NavService;
}());
NavService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NavService);

var _a;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/nav.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublisherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublisherService = (function () {
    function PublisherService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    PublisherService.prototype.newHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    PublisherService.prototype.getPublishers = function () {
        return this.http.get(this.baseUrl + "/publisher")
            .map(function (response) { return response.json(); });
    };
    PublisherService.prototype.getPublisherDetail = function (id) {
        var tmp = this.http.get(this.baseUrl + "/publisher/" + id)
            .map(function (response) { return response.json(); });
        console.log("found " + tmp + " for id = " + id);
        return tmp;
    };
    PublisherService.prototype.addPublisher = function (publisher) {
        return this.http.post(this.baseUrl + "/publisher", JSON.stringify(publisher), { headers: this.newHeaders() })
            .map(function (response) { return response.json(); });
    };
    PublisherService.prototype.updatePublisher = function (publisher) {
        return this.http.put(this.baseUrl + "/publisher/" + publisher.id, JSON.stringify(publisher), { headers: this.newHeaders() })
            .map(function (response) { return response.json(); });
    };
    PublisherService.prototype.deletePublisherById = function (id) {
        return this.http.delete(this.baseUrl + "/publisher/" + id);
    };
    return PublisherService;
}());
PublisherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PublisherService);

var _a;
//# sourceMappingURL=/Users/extension/Documents/e56-2017/bookng/src/main/client/src/publisher.service.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.bundle.js.map