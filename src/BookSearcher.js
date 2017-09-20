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
	
  
  clearQuery = () => {
   this.setState({query: ''})
  }
	
	onBookStatusChange =(book, newShelf) => {
		book.shelf = newShelf
		let res = this.props.onUpdate(book, newShelf)
		// this.setState({books: this.props.books})
	}
	
	
	render(){
    const {onSearch, searchResults, onAddBookToShelf } = this.props
    const {query, } = this.state
  
   return(
	   <div className="search-container">
		   <div className="back-button">
			   <Link to="/">Back</Link>
		   </div>
		   <input className="search-bar"
		          value={query}
				  type="text"
		          onChange={(event) => this.updateQuery(event.target.value)}/>
			
		   <div className="seach-book-list">
			   {this.props.searchResults.map((book) =>
			      <Book key={book.id} book={book} onStatusChange= {this.onBookStatusChange}/>
			   )}
		   </div>
	   </div>
   )
  }
}

export default BookSearcher