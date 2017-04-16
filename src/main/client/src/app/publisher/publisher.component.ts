

import {OnInit, Component} from "@angular/core";
import {PublisherService} from "./publisher.service";
import {Publisher} from "./publisher";
import {ActivatedRoute} from "@angular/router";

@Component ({
    selector: 'app-publisher',
        templateUrl: './publisher.component.html',
    styleUrls: ['./publisher.component.css'],
    providers: [PublisherService]
})
export class PublisherDetailsComponent implements OnInit{

    constructor(private publisherService:PublisherService, private route: ActivatedRoute) {}

    id: number;
    private sub: any;
    publisher: Publisher = new Publisher();


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = + params['id']; // (+) converts string 'id' to a number
            console.log('id = ' + this.id);
            this.publisherService.getPublisherDetail(this.id).subscribe(
                publisher => this.publisher = publisher,
                error => console.log('Error: ' + error)
            );
            //console.log('publisher = ' + this.publisher.id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}