package cscie56.demo

import groovy.sql.Sql

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class AuthorController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def dataSource

    def index(Integer max) {
        respond Author.list().sort {it.lastName+it.firstName}, model:[authorCount: Author.count()]
    }

    def show(Author author) {
        respond author
    }

    @Transactional
    def save(Author author) {
        if (author == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (author.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond author.errors, view:'create'
            return
        }

        author.save flush:true

        respond author, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Author author) {
        if (author == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (author.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond author.errors, view:'edit'
            return
        }

        author.save flush:true

        respond author, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Author author) {

        if (author == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }
        author.books.each {
            author.removeFromBooks(it)
            it.delete()
        }
        author.delete flush:true
        render status: NO_CONTENT
    }
}
