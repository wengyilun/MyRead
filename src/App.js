import React, { Component } from 'react';
import './App.css';
import ListBookshelves from './ListBookshelves'
import * as BooksAPI from './utils/BooksAPI'
import BookSearcher from "./BookSearcher";
import { Route } from 'react-router-dom'
import {getIdToShelfMap} from './utils/commonUtils'

// TODO: Bookshelf 'none' doesn't update search result
// TODO: API result sometimes doesn't stick.
// TODO: If you should use cancat or add
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
			this.setState({bookMap: getIdToShelfMap(books)})
			
		})
	}
	
	// TODO: need to find better way to update item only
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
		BooksAPI.search(query, maxResult).then((searchResults) => {
			let arr = searchResults.map(result => {
				let shelf = this.state.bookMap.get(result.id) === undefined ? 'none' :  this.state.bookMap.get(result.id).value
				return {...result, shelf: shelf}
			})
			this.setState( state => ({
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
