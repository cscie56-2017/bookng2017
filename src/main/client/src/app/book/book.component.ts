import {OnInit, Component} from "@angular/core";
import {BookService} from "./book.service";
import {Book} from "./book";
import {ActivatedRoute} from "@angular/router";

@Component ({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
    providers: [BookService]
})
export class BookDetailsComponent implements OnInit{

    constructor(private bookService:BookService, private route: ActivatedRoute) {}

    id: number;
    private sub: any;
    selectedBook: Book = new Book();


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = + params['id']; // (+) converts string 'id' to a number
            console.log('id = ' + this.id);
            this.bookService.getBookDetail(this.id).subscribe(
                book => this.selectedBook = book,
                error => console.log('Error: ' + error)
            );
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}