import {OnInit, Component} from "@angular/core";
import {BookService} from "./book.service";
import {Book} from "./book";
import {ActivatedRoute} from "@angular/router";
import {PublisherService} from "../publisher/publisher.service";
import {Publisher} from "../publisher/publisher";
import {AuthorService} from "../author/author.service";
import {Author} from "../author/author";
import {Observable} from "rxjs/Observable";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component ({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
    providers: [BookService,PublisherService,AuthorService]
})
export class BookDetailsComponent implements OnInit{

    constructor(private bookService:BookService,
                private authorService:AuthorService,
                private publisherService:PublisherService,
                public flashMessagesService: FlashMessagesService,
                private route: ActivatedRoute) {}

    id: number;
    private sub: any;
    selectedBook: Book = new Book();
    publishers: Publisher[] = [];
    authors: Author[] = [];
    genres: string[] = [];
    selectedAuthorIds: number[] = [];


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id']) {
                this.id = +params['id']; // (+) converts string 'id' to a number
                console.log('id = ' + this.id);
                this.bookService.getBookDetail(this.id).subscribe(
                    book => {
                        this.selectedBook = book;
                        this.selectedAuthorIds = book.authors.map(a => a.id);
                    },
                    error => console.log('Error getting book: ' + error)
                );
            } else {
                this.selectedBook = new Book();
            }
        });
        this.publisherService.getPublishers().subscribe(
            publishers => this.publishers = publishers,
            error => console.log('Error getting publishers: ' + error)
        );
        this.authorService.getAuthors().subscribe(
            authors => this.authors = authors,
            error => console.log('Error getting authors: ' + error)
        );
        this.bookService.getGenres().subscribe(
            genres => this.genres = genres,
            error  => console.log('Error getting genres: ' + error)
        );

    }

    srcValueChange(event){
        this.selectedAuthorIds=[];
        for(var i in event.target.selectedOptions){
            if(event.target.selectedOptions[i].label){
                this.selectedAuthorIds.push(event.target.selectedOptions[i].value);
            }
        }
    }

    updateBook(book:Book) {
        if (!book.authors) {
            book.authors = [];
        }
        for (let id of this.selectedAuthorIds) {
            let addAuthor = this.authors.find(auth => auth.id == id);
            if (addAuthor) {
                book.authors.push(addAuthor);
            }
        }
        if (book.id) {
            this.bookService.updateBook(book).subscribe(
                data => {
                    this.selectedBook = data;
                    this.flashMessagesService.show('Successfully updated ' + book.title, { cssClass: 'alert-success',timeout: 3000 });
                    return true;
                },
                error => {
                    console.error("Error saving book id = " + book.id+ ' => error: ' + error);
                    this.flashMessagesService.show('Error updating ' + book.title, { cssClass: 'alert-danger',timeout: 3000  });
                    return false;
                }
            );
        } else {
            this.bookService.addBook(book).subscribe(
                data => {
                    this.selectedBook = data;
                    this.flashMessagesService.show('Successfully created ' + book.title, { cssClass: 'alert-success',timeout: 3000  });
                    return true;
                },
                error => {
                    console.error("Error saving book id = " + book.id + ' => error: ' + error);
                    this.flashMessagesService.show('Error saving ' + book.title, { cssClass: 'alert-danger',timeout: 3000  });
                    return false;
                }
            );
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}