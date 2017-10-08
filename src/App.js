import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './utils/BooksAPI'
import ListBookshelves from './component/ListBookshelves'
import BookSearcher from "./component/BookSearcher";
import { Route } from 'react-router-dom'
import {getIdToShelfMap} from './utils/commonUtils'

class App extends Component {
    state = {
        books:  [],
        searchResults:[],
		bookMap: new Map()
	}
	
	componentDidMount(){
		this.getBooks()
	}
	
	getBooks(){
		BooksAPI.getAll().then((books) => {
			this.setState({books:books})
			// Create a map of book id as key and an object with shelf label and name as value
			this.setState({bookMap: getIdToShelfMap(books)})
		})
	}
	
	// Update API call with different callback function based on different mode it was called with
	onUpdateStatus = (book, shelf, mode) => {
	    BooksAPI.update(book, shelf).then(() => {
			switch (mode) {
				case 'shelf':
					let index = this.state.books.findIndex(result => result.id === book.id)
					this.state.books[index] = book
					this.setState({books: this.state.books})
			
				case 'search':
					index = this.state.searchResults.findIndex(result => result.id === book.id)
					this.state.searchResults[index] = book
					this.setState({searchResults: this.state.searchResults})
			}
			this.getBooks()
		})
	}
	
	onSearchBooks = (query, maxResult) => {
	    // If search query is empty string, clear the page.
		if (query === ''){
			this.setState(state => ({
				searchResults: []
			}))
			return
		}
		
		BooksAPI.search(query, maxResult).then((searchResults) => {
			let arr
			// If result set is not empty, add a 'shelf' property and a value to each record
			// based on whether it's found on the shelf or not.
			if(searchResults.length > 0) {
				arr = searchResults.map(result => {
					let shelf = this.state.bookMap.get(result.id) === undefined ? 'none' : this.state.bookMap.get(result.id).value
					return {...result, shelf: shelf}
				})
			}else{
				arr = []
			}
			this.setState(state => ({
				searchResults: arr
			}))
	   })
	}
	
	render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Reads</h2>
        </div>
        <Route exact path="/" render={() => (
           <ListBookshelves books={this.state.books}
           					shelves={this.state.shelves}
                            onUpdate={this.onUpdateStatus}
                             />
        )}/>
		  <Route exact path="/search" render={() => (
			  <BookSearcher searchResults={this.state.searchResults}
			                onSearch={this.onSearchBooks}
							onUpdate={this.onUpdateStatus}
							/>
		  )}/>
		  {this.state.books.length <= 0 && (
			  <div className="App-loader-container">
				  <div className="App-loader"/>
			  </div>
		  )}
      </div>
    );
  }
}

export default App;
