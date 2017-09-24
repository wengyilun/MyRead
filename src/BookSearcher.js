/**
 * Created by mbp on 17/09/2017.
 */
 import React, {Component} from 'react'
 import Book from './Book'
 import { Link } from 'react-router-dom'
 
class BookSearcher extends Component {
	state={
		query: ''
	}
	
	updateQuery = (query) =>{
		this.setState({query: query.trim()})
		this.props.onSearch(query, 10 )
	}
	
	// TODO: Add paging
	clearQuery = () => {
		this.setState({query: ''})
	}
	
	onBookStatusChange =(book, newShelf) => {
		book.shelf = newShelf
		let res = this.props.onUpdate(book, newShelf)
	}
	
	render(){
		const {onSearch, searchResults, onAddBookToShelf } = this.props
		const {query, } = this.state
		
		let alreadySaved = result => {
			let res = this.props.books.filter(book => result.id === book.id)
			console.log(res)
			return res
		}
		return(
		   <div className="search-container">
			   <div className="back-button">
				   <Link to="/">Back</Link>
			   </div>
			   <input className="search-bar"
					  value={query}
					  type="text"
					  placeholder="Search by title or author"
					  onChange={(event) => this.updateQuery(event.target.value)}/>
				
			   <div className="seach-book-list">
				   {this.props.searchResults.map((book) =>
					  <Book key={book.id} book={book} onStatusChange= {this.onBookStatusChange}
					  disabled={alreadySaved(book).length >0 }/>
				   )}
			   </div>
		   </div>
	    )
	}
}

export default BookSearcher