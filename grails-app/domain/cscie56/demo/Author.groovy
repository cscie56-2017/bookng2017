package cscie56.demo

import grails.databinding.BindingFormat
import grails.rest.*

@Resource(formats=['json', 'xml'])
class Author {

    String firstName
    String middleName
    String lastName
    @BindingFormat('yyyy-MM-dd')
    Date birthDate

    static hasMany = [books:Book]

    static transients = ['fullName', 'publishers','lastNameFirst']

    static mapping = {
        books cascade: "all-delete-orphan"
    }

    String getFullName() {
        "$firstName ${middleName?middleName+' ':''}$lastName"
    }

    String getLastNameFirst(){
        "${lastName}, ${firstName}"
    }

    List<Publisher> getPublishers(){
        books*.publisher?.unique()
    }

    static constraints = {
        firstName()
        middleName nullable: true
        lastName()
        birthDate()
    }

    String toString(){
        fullName
    }
}
