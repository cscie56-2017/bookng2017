import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Book} from "./book";

@Injectable()
export class BookService {

    baseUrl: String = 'http://localhost:8080';

    constructor(private http: Http) {}

    private newHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    getBooks() {
        return this.http.get(`${this.baseUrl}/book`)
            .map(response => <Book[]>response.json());
    }

    getBookDetail(id) {
        return this.http.get(`${this.baseUrl}/book/${id}`)
            .map(response => <Book>response.json())
    }

    addBook(book : Book) {
        return this.http.post(`${this.baseUrl}/book`, JSON.stringify(book), { headers: this.newHeaders() })
            .map(response => <Book>response.json());
    }

    updateBook(book: Book) {
        return this.http.put(`${this.baseUrl}/book/${book.id}`, JSON.stringify(book), { headers: this.newHeaders() })
            .map(response => response.json());
    }

    deleteBookById(id: number) {
        return this.http.delete(`${this.baseUrl}/book/${id}`);
    }
}