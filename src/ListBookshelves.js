/**
 * Created by mbp on 9/9/17.
 */
 import React, {Component} from 'react'
 import Book from './Book'
 
 class ListBookshelves extends Component{
	state = {
		shelves: [
			{status: 'currentlyReading', label: 'Currently Reading'},
			{status:'wantToRead',  label: 'Want to Read'},
			{status:'read',  label:'Read'}
		]
	}
	
	
	render(){
		let sortBooks = shelf => (
			this.props.books.filter(book => book.shelf === shelf)
	    )
	    
		return(
			<div className="list-bookshelves">
					< ul className = "bookshelf-list">
						{this.state.shelves.map((shelf)=>(
						
						< li key={shelf.id} className = "bookshelf-list-item" >
							<div className="list-bookshelves-top">
								<h2>{shelf.label}</h2>
							</div>
							
							<div className="book-list">
								{sortBooks(shelf.status).map((book)=>(
								<Book key={book.id} book={book}/>
								))}
							</div>
						</li>))}
				   </ul>
			</div>
		)
	}
 }
 
 export default ListBookshelves
 
 // load in books object
 // read in category
		// create a section if not already exsit
		// add book to it