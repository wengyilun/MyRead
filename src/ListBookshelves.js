/**
 * Created by mbp on 9/9/17.
 */
 import React, {Component} from 'react'
 
 class ListBookshelves extends Component{
	states = {
		categories: {
			'currentlyReading': 'Currently Reading',
			'wantToRead': 'Want to Read',
			'read': 'Read'
		}
	}
	render(){
		return(
			<div className="list-bookshelves">
				<div className="list-bookshelves-top">
					<h2>Bookshelvs</h2>
				</div>
				{this.props.books.map((book)=>(
					< ul className = "bookshelf-list">
						< li key={book.id} className = "bookshelf-list-item" >
							<ul className="list-books">
								<li className="book-list">
									<div className="book-list-item">
										<p>{book.title}</p>
										<p>{book.authors}</p>
									</div>
								</li>
							</ul>
						{book.shelf}
						</li>
				   </ul>))}
			</div>
		)
	}
 }
 
 export default ListBookshelves
 
 // load in books object
 // read in category
		// create a section if not already exsit
		// add book to it