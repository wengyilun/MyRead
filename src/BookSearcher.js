/**
 * Created by mbp on 17/09/2017.
 */
 import React, {Component} from 'react'
 import Book from './Book'
 import { Link } from 'react-router-dom'
 
class BookSearcher extends Component {
  state={
  
  }
  
  render(){
   return(
	   <div className="search-container">
		   <div className="back-button">
			   <Link to="/">Back</Link>
		   </div>
		   <input className="search-bar" placeholder="Search by book or author name"></input>
		
		   <div className="seach-book-list">This is book list</div>
	   </div>
   )
  }
}

export default BookSearcher