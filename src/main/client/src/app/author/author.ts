
import {Book} from "../book/book";
import {Publisher} from "../publisher/publisher";

export class Author {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    fullName: string;
    birthDate: Date;
    bio: string='';
    books?: Book[];
    publishers?: Publisher[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}