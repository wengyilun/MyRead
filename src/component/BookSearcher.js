/**
 * Created by mbp on 17/09/2017.
 */
 import React, {Component} from 'react'
 import Book from "./Book";
 import Pagination from "./Pagination"
 import { Link } from 'react-router-dom'
 import * as Utils from '../utils/commonUtils'

class BookSearcher extends Component {
	state={
		query: '',
		itemsPerPage: 10
	}

	onBookStatusChange =(book, newShelf) => {
		let res = this.props.onUpdate(book, newShelf, 'search')
	}
	
	updateQuery = (query) =>{
		this.setState({query: query.trim()})
		this.props.onSearch(query, this.state.itemsPerPage )
	}
	
	onPagerChange = (value)=>{
		this.setState({itemsPerPage: value})
	}
	
	listBooks = (searchResults)=>{
		if(searchResults.length <= 0) return
		
		const subResult = searchResults.slice(0, this.state.itemsPerPage)
		return (
			(subResult.map((book) =>(
				<Book key={book.id} data={book} onShelf={book.shelf !== "none"} onStatusChange={this.onBookStatusChange }/>
			)))
		)
	}
	
	componentDidUpdate(prevProps, prevState){
	  if(prevProps.searchResults.length !== this.props.searchResults.length)
	  	this.setState({total:this.props.searchResults.length})
	}
	
	render(){
		const {searchResults} = this.props
		const {query} = this.state
		
		return(
		   <div className="search-container">
			   <div className="back-button">
				   <Link to={Utils.BASE_URL + "/"}>Back</Link>
			   </div>
			   <input className="search-bar"
					  value={query}
					  type="text"
					  placeholder="Search by title or author"
					  onChange={(event) => this.updateQuery(event.target.value)}/>
			  
			   <Pagination total={searchResults.length} onPagerChange={this.onPagerChange}/>
			   <div className="seach-book-list">
					   {this.listBooks( searchResults)}
			   </div>
		   </div>
	    )
	}
}

export default BookSearcher