import {Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorDetailsComponent} from "./author/author.component";
import {BooksComponent} from "./books/books.component";
import {BookDetailsComponent} from "./book/book.component";
import {PublishersComponent} from "./publishers/publishers.component";
import {PublisherDetailsComponent} from "./publisher/publisher.component";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'applications', redirectTo: 'index'},
    {path: 'index', component: IndexComponent},
    {path: 'authors', component: AuthorsComponent},
    {path: 'new-author', component: AuthorDetailsComponent},
    {path: 'author-details/:id', component: AuthorDetailsComponent},
    {path: 'books', component: BooksComponent},
    {path: 'new-book', component: BookDetailsComponent},
    {path: 'book-details/:id', component: BookDetailsComponent},
    {path: 'publishers', component: PublishersComponent},
    {path: 'new-publisher', component: PublisherDetailsComponent},
    {path: 'publisher-details/:id', component: PublisherDetailsComponent}

];

