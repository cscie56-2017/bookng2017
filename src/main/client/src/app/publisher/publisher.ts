import {Book} from "../book/book";
import {Author} from "../author/author";
export class Publisher {
    id: number;
    name: string;
    dateEstablished: Date;
    type: string;
    books?: Book[];
    authors?: Author[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}