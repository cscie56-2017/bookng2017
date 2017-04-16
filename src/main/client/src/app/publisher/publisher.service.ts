import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Publisher} from "./publisher";

@Injectable()
export class PublisherService {

    baseUrl: String = 'http://localhost:8080';

    constructor(private http: Http) {}

    private newHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    getPublishers() {
        return this.http.get(`${this.baseUrl}/publisher`)
            .map(response => <Publisher[]>response.json());
    }

    getPublisherDetail(id) {
        let tmp = this.http.get(`${this.baseUrl}/publisher/${id}`)
            .map(response => <Publisher>response.json());
        console.log("found " + tmp + " for id = " + id);
        return tmp;
    }

    addPublisher(publisher : Publisher) {
        return this.http.post(`${this.baseUrl}/publisher`, JSON.stringify(publisher), { headers: this.newHeaders() })
            .map(response => <Publisher>response.json());
    }

    updatePublisher(publisher: Publisher) {
        return this.http.put(`${this.baseUrl}/publisher/${publisher.id}`, JSON.stringify(publisher), { headers: this.newHeaders() })
            .map(response => response.json());
    }

    deletePublisherById(id: number) {
        return this.http.delete(`${this.baseUrl}/publisher/${id}`);
    }
}