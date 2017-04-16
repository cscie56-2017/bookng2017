
import {Publisher} from "../publisher/publisher";
import {Author} from "../author/author";

export class Book {
    id: number;
    title: string;
    dateOfPublication: Date;
    isbn: string;
    price: number;  //stored as an integer, to make the math easier; will need to be formatted properly
    priceFormatted:string;
    publisher: string;
    publisherId: number;
    genre: string;
    description: string ='';
    dateCreated: Date;
    lastUpdated: Date;
    authors?: Author[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}