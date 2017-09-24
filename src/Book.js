/**
 * Created by mbp on 14/09/2017.
 */
import React, {Component} from 'react'

class Book extends Component {
  state = {
		 currentlyReading : 'Currently Reading',
		 wantToRead : 'Want to Read',
		 read:'Read',
		 disabled: false,
  }
  
	render ()
{
	const {shelf} = this.state
	const {book, onStatusChange, disabled} = this.props
	return (
		<div className="book-list-item-container" >
			<div className="book-holder" >
				<h3 className={this.props.disabled ? "book-msg" : "hidden"} >
					{this.props.disabled ? `Saved` : null}
				</h3>
				<div className="book-status-changer" style={{opacity: `${this.props.disabled ? 0.3 : 1}`}} >
					<select className="book-status-menu" value={book.shelf} disabled={this.props.disabled}
							onChange={ (event) => onStatusChange(book, event.target.value)}>
						<option value="none" disabled>Move to ...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
				<div className="book-cover" style={{
					backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
					opacity: `${this.props.disabled ? 0.3 : 1}`
				}}/>
			</div>
			<div className="book-footer" style={{opacity: `${this.props.disabled ? 0.3 : 1}`}}>
				<div className="book-title">{book.title} </div>
				<div className="book-author">{book.authors}</div>
				<div className="book-status">{this.state[book.shelf]}</div>
			</div>
		
		</div>
	)
}
}

export default Book
