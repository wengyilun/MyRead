/**
 * Created by mbp on 9/9/17.
 */
 import React, {Component} from 'react'
 import Book from './Book'
 
 class ListBookshelves extends Component{
	state = {
		shelves: [
			{name: 'currentlyReading', label: 'Currently Reading', books:[]},
			{name:'wantToRead',  label: 'Want to Read', books:[]},
			{name:'read',  label:'Read', books:[]}
		],
	}
	 
	 onBookStatusChange =(book, newShelf) => {
	     book.shelf = newShelf
		 let res = this.props.onUpdate(book, newShelf)
		 console.log(res)
		 this.setState({books: this.props.books})
	 }
	 
	render(){
	 
		const {shelves} = this.state
		const {books, onUpdate} = this.props
		let sortBooks = shelf => (
			books.filter(book => book.shelf === shelf)
		)
		
		return(
			<div className="list-bookshelves" >
					< ul className = "bookshelf-list">
						{shelves.map((shelf)=> (
						< li key={shelf.id} className = "bookshelf-list-item" >
							<div className="list-bookshelves-top">
								<h2>{shelf.label}</h2>
							</div>
							
							<div className="book-list">
								{sortBooks(shelf.name).map((book)=>(
								<Book key={book.id} book={book} shelves={shelves} onStatusChange={this.onBookStatusChange} />
								))}
							</div>
						</li>))}
				   </ul>
			</div>
		)
	}
 }
 
 export default ListBookshelves