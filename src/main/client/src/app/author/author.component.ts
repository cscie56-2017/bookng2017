import {OnInit, Component} from "@angular/core";
import {AuthorService} from "./author.service";
import {Author} from "./author";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {FlashMessagesService} from "angular2-flash-messages";

@Component ({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css'],
    providers: [AuthorService]
})
export class AuthorDetailsComponent implements OnInit{

    constructor(private authorService:AuthorService,
                public  flashMessagesService: FlashMessagesService,
                private route: ActivatedRoute) {}

    idParam: any;
    id: number;
    private sub: any;
    author: Author = new Author();


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.idParam = params['id'];
            console.log('id = ' + this.idParam);
            if (this.idParam) {
                this.id = +this.idParam; // (+) converts string 'id' to a number
                this.authorService.getAuthorDetail(this.id).subscribe(
                    author => this.author = author,
                    error => console.log('Error: ' + error)
                );
            } else {
                this.author = new Author();
            }
        });
    }

    updateAuthor(author: Author){
        console.log("author.component.updateAuthor, id = " + author.id + ", author.firstName =" + author.firstName + ", author.lastName =" + author.lastName);
        if (author.id) {
            this.authorService.updateAuthor(author).subscribe(
                data => {
                    this.author = data;
                    this.flashMessagesService.show('Successfully updated ' + author.fullName, { cssClass: 'alert-success',timeout: 3000  });
                    return true;
                },
                error => {
                    console.error("Error updating author id = " + author.id+ ' => error: ' + error);
                    this.flashMessagesService.show('Could not update ' + author.fullName, { cssClass: 'alert-danger',timeout: 3000  });
                    return false;
                }
            );
        } else {
            this.authorService.addAuthor(author).subscribe(
                data => {
                    this.author = data;
                    this.flashMessagesService.show('Successfully created ' + author.fullName, { cssClass: 'alert-success',timeout: 3000  });
                    return true;
                },
                error => {
                    console.error("Error creating author id = " + author.id+ ' => error: ' + error);
                    this.flashMessagesService.show('Could not create ' + author.fullName, { cssClass: 'alert-danger',timeout: 3000  });
                    return Observable.throw(error);
                }
            )
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}