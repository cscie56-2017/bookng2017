package cscie56.demo

import grails.rest.Resource

@Resource(formats=['json', 'xml'])
class Publisher {

    String name
    Date dateEstablished
    String type

    static hasMany = [books:Book]

    static constraints = {
        dateEstablished max: new Date()
        type inList: ['Trade','Textbook','Educational','Academic','Bargain','Self']
    }

    String toString(){
        "$name"
    }

    String toStringLong(){
        "$name, established ${dateEstablished.format('yyyy')}"
    }
}
