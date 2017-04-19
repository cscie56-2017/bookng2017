package cscie56.demo

import grails.converters.JSON
import groovy.sql.Sql

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class BookController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def dataSource

    def index(Integer max) {
        respond Book.listOrderByTitle(), model:[bookCount: Book.count()]
    }

    def show(Book book) {
        respond book
    }

    @Transactional
    def save(Book book) {
        if (book == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        def authorIds = book.authors*.id
        book?.authors?.clear()
        authorIds?.each{
            book.addToAuthors(Author.get(it))
        }


        if (book.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond book.errors, view:'create'
            return
        }

        book.save flush:true

        respond book, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Book book) {
        if (book == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (book.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond book.errors, view:'edit'
            return
        }

        book.save flush:true

        respond book, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Book book) {

        if (book == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }
        new Sql(dataSource).executeUpdate("DELETE from AUTHOR_BOOKS where BOOK_ID = ?",[book.id])
        book.delete flush:true

        render status: NO_CONTENT
    }
}
