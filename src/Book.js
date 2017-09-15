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
		<div className="book-list-item"  >
			<div className="book-cover" style={{
				backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}/>
			<div className="book-title">{this.props.book.title} </div>
			<div className="book-author">{this.props.book.authors}</div>
		</div>
    )
  }
}

export default Book
