/**
 * Created by mbp on 9/9/17.
 */
 import React, {Component} from 'react'
 
 class ListBookshelves extends Component{
	states = {
		shelves: [
			{status: 'currentlyReading', label: 'Currently Reading'},
			{status:'wantToRead',  label: 'Want to Read'},
			{status:'read',  label:'Read'}
		]
	}
	
	render(){
	
		return(
			<div className="list-bookshelves">
				
					< ul className = "bookshelf-list">
						{this.states.shelves.map((shelf)=>(
						
						< li key={shelf.id} className = "bookshelf-list-item" >
							<div className="list-bookshelves-top">
								<h2>{shelf.label}</h2>
							</div>
							
							<div className="book-list">
								{this.props.books.map((book)=>(
								<div className="book-list-item" key={book.id} >
									<div className="book-cover" style={{
										backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}/>
									<div className="book-title">{book.title} </div>
									<div className="book-author">{book.authors}</div>
								</div>
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