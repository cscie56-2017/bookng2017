import {Component, OnInit} from '@angular/core';
import {NavService} from '../nav/nav.service';
import {Route, Router} from '@angular/router';
import {Publisher} from "../publisher/publisher";
import {PublisherService} from "../publisher/publisher.service";

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css'],
    providers: [PublisherService]
})
export class PublishersComponent implements OnInit {

  newPublisher: Publisher = new Publisher();
  publishers: Publisher[] = [];

  constructor(private publisherService: PublisherService) { }

  ngOnInit() {
    this.publisherService.getPublishers()
        .subscribe(
            publishers => this.publishers = publishers,
            error => console.log('Error: ' + error)
        );
  }

  addPublisher() {
    this.publisherService.addPublisher(this.newPublisher)
        .subscribe(
            publisher => {
              this.publishers.push(publisher);
              this.newPublisher.name = '';
            },
            error => console.log('Error: ' + error)
        );
  }

  removePublisher(id: number) {
    this.publisherService.deletePublisherById(id)
        .subscribe(
            response => this.publishers = this.publishers.filter(publisher => publisher.id !== id),
            error => console.log('Error: ' + error)
        );
  }
}
