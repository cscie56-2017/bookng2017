import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRenderer, DOMOverlayRenderer,ModalModule } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import {NavService} from '../nav/nav.service';
import {Route, Router} from '@angular/router';
import {Book} from "../book/book";
import { Http, Headers } from '@angular/http';
import {BookService} from "../book/book.service";
import {parseTemplate} from "codelyzer/angular/templates/templateParser";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
    providers: [BookService, Overlay, Modal]
})
export class BooksComponent implements OnInit {

  newBook: Book = new Book();
  selectedBook: Book = new Book();
  books: Book[] = [];

  constructor(private bookService: BookService,
              private http: Http,
              overlay: Overlay,
              vcRef: ViewContainerRef,
              public modal: Modal) {
        overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    this.bookService.getBooks()
        .subscribe(
            books => this.books = books,
            error => console.log('Error: ' + error)
        );
  }

  addBook() {
    this.bookService.addBook(this.newBook)
        .subscribe(
            book => {
              this.books.push(book);
              this.newBook.title = '';
            },
            error => console.log('Error: ' + error)
        );
  }

  removeBook(id: number) {
    this.bookService.deleteBookById(id)
        .subscribe(
            response => this.books = this.books.filter(book => book.id !== id),
            error => console.log('Error: ' + error)
        );
  }

  onSelectBook(book : Book): void {
      this.selectedBook = book;
      console.log('book selected: ' + book.id);
      this.modal.alert()
          .size("lg")
          .showClose(true)
          .isBlocking(false)
          .title(this.selectedBook.title)
          .body(`
<ol class="property-list book">
    <li class="fieldcontain">
        <span id="authors-label" class="property-label">Author${this.selectedBook.authors.length==1?'':'s'}</span>
        <div class="property-value" aria-labelledby="authors-label" id="book-authors">
            <ul style="list-style-type: none;">
                <li>${this.selectedBook.authors.map(function(elem){return elem.fullName}).join(', ')}</li>
            </ul>
        </div>
    </li>

    <li class="fieldcontain">
        <span id="description-label" class="property-label">Description</span>
        <div class="property-value" aria-labelledby="description-label" id="book-description">${this.selectedBook.description}</div>
    </li>

    <li class="fieldcontain">
        <span id="dateOfPublication-label" class="property-label">Date Of Publication</span>
        <div class="property-value" aria-labelledby="dateOfPublication-label" id="book-dateOfPublication">
            ${this.selectedBook.dateOfPublication}
        </div>
    </li>

    <li class="fieldcontain">
        <span id="price-label" class="property-label">Price</span>
        <div class="property-value" aria-labelledby="price-label" id="book-price">${this.selectedBook.priceFormatted}</div>
    </li>

    <li class="fieldcontain">
        <span id="genre-label" class="property-label">Genre</span>
        <div class="property-value" aria-labelledby="genre-label" id="book-genre">${this.selectedBook.genre}</div>
    </li>

    <li class="fieldcontain">
        <span id="publisher-label" class="property-label">Publisher</span>
        <div class="property-value" aria-labelledby="publisher-label" id="book-publisher">
            <a href="/#/publisher-details/${this.selectedBook.publisherId}">${this.selectedBook.publisher}</a>
        </div>
    </li>

    <li class="fieldcontain">
        <span id="isbn-label" class="property-label">Isbn</span>
        <div class="property-value" aria-labelledby="isbn-label" id="book-isbn">${this.selectedBook.isbn}</div>
    </li>

</ol>
`)
          .keyboard(27)
          .okBtn('Close')
          .open();
  }
}
