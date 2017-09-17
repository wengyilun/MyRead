/**
 * Created by mbp on 9/9/17.
 */
 import React, {Component} from 'react'
 import Book from './Book'
 
 class ListBookshelves extends Component{
	state = {
		// shelves: [
		// 	{status: 'currentlyReading', label: 'Currently Reading', books:[]},
		// 	{status:'wantToRead',  label: 'Want to Read', books:[]},
		// 	{status:'read',  label:'Read', books:[]}
		// ]
		shelves:
			[ {name:'currentlyReading', label: 'Currently Reading', books: []},
			  {name: 'wantToRead', label: 'Want to Read', books: []},
			  {name:'read', label: 'Read', books: []}
		    ]
	}

	
	render(){
	    let arr
		let sortBooks = shelf => (
			arr = this.props.books.filter(book => book.shelf === shelf)
		)
		const {shelves} = this.state
		
		return(
			<div className="list-bookshelves">
					< ul className = "bookshelf-list">
						{shelves.map((shelf)=> (
						< li key={shelf.id} className = "bookshelf-list-item" >
							<div className="list-bookshelves-top">
								<h2>{shelf.label}</h2>
								 {console.log(shelf.label)}
							</div>
							
							<div className="book-list">
								{sortBooks(shelf.name).map((book)=>(
								<Book key={book.id} book={book} shelves={shelves}/>
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