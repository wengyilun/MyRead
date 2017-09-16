/**
 * Created by mbp on 14/09/2017.
 */
import React, {Component} from 'react'

class Book extends Component {
  state = {
	currentlyReading : 'Currently Reading',
	wantToRead : 'Want to Read',
	read:'Read'
  }
 
  render (){
    return (
    <div className="book-list-item-container">
		<div className="book-list-item"  >
			<div className="book-menu-button"></div>
			<div className="book-cover" style={{
				backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}/>
		</div>
		<div className="book-footer">
			<div className="book-title">{this.props.book.title} </div>
			<div className="book-author">{this.props.book.authors}</div>
		</div>

	</div>
    )
  }
}

export default Book
