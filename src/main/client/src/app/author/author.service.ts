import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Author} from "./author";

@Injectable()
export class AuthorService {

    baseUrl: String = 'http://localhost:8080';

    constructor(private http: Http) {}

    private newHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    getAuthors() {
        return this.http.get(`${this.baseUrl}/author/`)
            .map(response => <Author[]>response.json());
    }

    getAuthorDetail(id) {
        return this.http.get(`${this.baseUrl}/author/`+id)
            .map(response => <Author>response.json())
    }

    addAuthor(author : Author) {
        return this.http.post(`${this.baseUrl}/author`, JSON.stringify(author), { headers: this.newHeaders() })
            .map(response => <Author>response.json());
    }

    updateAuthor(author: Author) {
        return this.http.put(`${this.baseUrl}/author/${author.id}`, JSON.stringify(author), { headers: this.newHeaders() })
            .map(response => response.json());
    }

    deleteAuthorById(id: number) {
        return this.http.delete(`${this.baseUrl}/author/${id}`);
    }
}