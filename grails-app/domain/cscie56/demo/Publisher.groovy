package cscie56.demo

import grails.databinding.BindingFormat
import grails.rest.Resource

@Resource(formats=['json', 'xml'])
class Publisher {

    String name
    @BindingFormat('yyyy-MM-dd')
    Date dateEstablished
    String type

    static constraints = {
        dateEstablished max: new Date()
        type inList: ['Trade','Textbook','Educational','Academic','Bargain','Self']
    }

    static transients = ['authors','books']

    List<Book> getBooks() {
        Book.findAllByPublisher(this) as List
    }

    List<Author> getAuthors(){
        (books*.authors.flatten() as List<Author>).unique()
    }

    String toString(){
        "$name"
    }

    String toStringLong(){
        "$name, established ${dateEstablished.format('yyyy')}"
    }
}
