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
	getShelfValue = shelf => (
		shelf === undefined ? 'none' : shelf
	)
	
	render ()
	{
		const {shelf} = this.state
		const {book, onStatusChange, saved} = this.props
		return (
			<div className="book-list-item-container" >
				<div className="book-holder" >
					{/*<h3 className={saved ? "book-msg" : "hidden"} >*/}
						{/*{saved ? `Saved` : null}*/}
					{/*</h3>*/}
					<div className="book-status-changer"  >
						<select className="book-status-menu" value={this.getShelfValue(book.shelf)}
								onChange={ (event) => onStatusChange(book, event.target.value)}>
							<option value="move" disabled>Move to ...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
					<div className="book-cover" style={{
						backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`,
						opacity: `${saved ? 0.3 : 1}`
					}}/>
				</div>
				<div className="book-footer" >
					<div className="book-title" style={{opacity: `${saved ? 0.4 : 1}`}}>{book.title} </div>
					<div className="book-author" style={{opacity: `${saved ? 0.4 : 1}`}}>{book.authors}</div>
					<div className="book-status">{this.state[book.shelf]}</div>
				</div>
			</div>
		)
	}
}

export default Book
