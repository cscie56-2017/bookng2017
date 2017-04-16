import {Component, OnInit} from '@angular/core';
import {NavService} from '../nav/nav.service';
import {Route, Router} from '@angular/router';
import {Author} from "../author/author";
import {AuthorService} from "../author/author.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
    providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {

  newAuthor: Author = new Author();
  authors: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors()
        .subscribe(
            authors => this.authors = authors,
            error => console.log('Error: ' + error)
        );
  }

  addAuthor() {
    this.authorService.addAuthor(this.newAuthor)
        .subscribe(
            author => {
              this.authors.push(author);
              this.newAuthor.bio = '';
            },
            error => console.log('Error: ' + error)
        );
  }

  removeAuthor(id: number) {
    this.authorService.deleteAuthorById(id)
        .subscribe(
            response => this.authors = this.authors.filter(author => author.id !== id),
            error => console.log('Error: ' + error)
        );
  }
}
