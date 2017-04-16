import {OnInit, Component} from "@angular/core";
import {AuthorService} from "./author.service";
import {Author} from "./author";
import {ActivatedRoute} from "@angular/router";

@Component ({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css'],
    providers: [AuthorService]
})
export class AuthorDetailsComponent implements OnInit{

    constructor(private authorService:AuthorService, private route: ActivatedRoute) {}

    id: number;
    private sub: any;
    author: Author = new Author();


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = + params['id']; // (+) converts string 'id' to a number
            console.log('id = ' + this.id);
            this.authorService.getAuthorDetail(this.id).subscribe(
                author => this.author = author,
                error => console.log('Error: ' + error)
            );
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}