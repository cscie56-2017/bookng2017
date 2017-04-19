package cscie56.demo

import grails.rest.*
import grails.converters.*

class GenreController {
	static responseFormats = ['json', 'xml']
	
    def index() {
        render Book.constrainedProperties['genre']['inList'].sort() as JSON
    }
}
