/**
 * Created by mbp on 17/09/2017.
 */
 import React, {Component} from 'react'
 import Book from "./Book";
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
		let res = this.props.onUpdate(book, newShelf, 'search')
	}
	
	listBooks = (searchResults)=>{
		return (
			(searchResults &&  searchResults.length>0 && searchResults.map((book) =>(
				<Book key={book.id} data={book} onShelf={book.shelf !== "none"} onStatusChange={this.onBookStatusChange }/>
			))))
	}
	
	render(){
		const {searchResults} = this.props
		const {query } = this.state
		
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
					   {this.listBooks( searchResults)}
			   </div>
		   </div>
	    )
	}
}

export default BookSearcher