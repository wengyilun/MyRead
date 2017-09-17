/**
 * Created by mbp on 14/09/2017.
 */
import React, {Component} from 'react'

class Book extends Component {
  state = {
		 currentlyReading : 'Currently Reading',
		 wantToRead : 'Want to Read',
		 read:'Read',
  }
  
	onOpenMenu =(book, value) => {
	    book.shelf = value
	    console.log(book)
		// let shelfObj = this.props.shelves.filter((shelf) => shelf.name === value)
		// console.log(shelfObj[0].books)
		// shelfObj[0].books.push[book]
	}
	
  render ()
{
	const {book, shelves} = this.props
	
	return (
		<div className="book-list-item-container">
			<div className="book-holder">
				<div className="book-status-changer">
					<select className="book-status-menu"
							onChange={ (event) => this.onOpenMenu(book, event.target.value)}>
						<option value="none" disabled>Move to ...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
				<div className="book-cover" style={{
					backgroundImage: `url(${book.imageLinks.smallThumbnail})`
				}}/>
			</div>
			<div className="book-footer">
				<div className="book-title">{book.title} </div>
				<div className="book-author">{book.authors}</div>
				<div className="book-status">{this.state[book.shelf]}</div>
			</div>
		
		</div>
	)
}
}

export default Book
