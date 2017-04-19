

import {OnInit, Component} from "@angular/core";
import {PublisherService} from "./publisher.service";
import {Publisher} from "./publisher";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {FlashMessagesService} from "angular2-flash-messages";

@Component ({
    selector: 'app-publisher',
        templateUrl: './publisher.component.html',
    styleUrls: ['./publisher.component.css'],
    providers: [PublisherService]
})
export class PublisherDetailsComponent implements OnInit{

    constructor(private publisherService:PublisherService,
                public flashMessagesService: FlashMessagesService,
                private route: ActivatedRoute) {}

    id: number;
    private sub: any;
    publisher: Publisher = new Publisher();


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id']) {
                this.id = +params['id']; // (+) converts string 'id' to a number
                console.log('id = ' + this.id);
                this.publisherService.getPublisherDetail(this.id).subscribe(
                    publisher => this.publisher = publisher,
                    error => console.log('Error: ' + error)
                );
            } else {
                this.publisher = new Publisher();
            }
        });
    }

    updatePublisher(publisher: Publisher) {
        if (publisher.id) {
            this.publisherService.updatePublisher(publisher).subscribe(
                data => {
                    this.publisher = data;
                    this.flashMessagesService.show('Successfully updated ' + publisher.name, { cssClass: 'alert-success',timeout: 3000  });
                    return true;
                },
                error => {
                    console.error("Error updating publisher id = " + publisher.id+ ' => error: ' + error);
                    this.flashMessagesService.show('Could not update ' + publisher.name, { cssClass: 'alert-danger',timeout: 3000  });
                    return Observable.throw(error);
                }
            )
        } else {
            this.publisherService.addPublisher(publisher).subscribe(
                data => {
                    this.publisher = data;
                    this.flashMessagesService.show('Successfully created ' + publisher.name, { cssClass: 'alert-success',timeout: 3000  });
                    return true;
                },
                error => {
                    console.error("Error saving publisher id = " + publisher.id+ ' => error: ' + error);
                    this.flashMessagesService.show('Could not create ' + publisher.name, { cssClass: 'alert-danger',timeout: 3000  });
                    return Observable.throw(error);
                }
            )
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}