import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { IndexComponent } from './index/index.component';
import {AppComponent} from './app.component';
import { rootRouterConfig } from './app.routes';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav/nav.service';
import {AuthorsComponent} from "./authors/authors.component";
import {BooksComponent} from "./books/books.component";
import {PublishersComponent} from "./publishers/publishers.component";

import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {PublisherDetailsComponent} from "./publisher/publisher.component";
import {BookDetailsComponent} from "./book/book.component";
import {AuthorDetailsComponent} from "./author/author.component";
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FlashMessagesModule } from 'angular2-flash-messages';



const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];

const AUTHOR_COMPONENTS = [
  AuthorsComponent,
  AuthorDetailsComponent
];

const BOOK_COMPONENTS = [
  BooksComponent,
  BookDetailsComponent
];

const PUBLISHER_COMPONENTS = [
  PublishersComponent,
  PublisherDetailsComponent
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    AUTHOR_COMPONENTS,
    BOOK_COMPONENTS,
    PUBLISHER_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    NgbModule.forRoot(),
    ModalModule,
    FlashMessagesModule,
    MultiselectDropdownModule,
    BootstrapModalModule

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    NavService,
    MODAL_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
