import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './utils/BooksAPI'
import ListBookshelves from './component/ListBookshelves'
import BookSearcher from "./component/BookSearcher";
import { Route } from 'react-router-dom'
import * as Utils from './utils/commonUtils'

class App extends Component {

    state = {
        books:  [],
        searchResults:[],
		bookMap: new Map()
	}
	
	baseUrl = process.env.PUBLIC_URL;
	
	
	componentDidMount(){
		this.getBooks()
	}
	
	getBooks(){
		BooksAPI.getAll().then((books) => {
			this.setState({books:books})
			this.setState({bookMap: Utils.getIdToShelfMap(books)})
			
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
		if (query === ''){
			this.setState(state => ({
				searchResults: []
			}))
			return
		}
		
		BooksAPI.search(query, maxResult).then((searchResults) => {
			let arr
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
        <Route exact path={Utils.BASE_URL + "/" } render={() => (
           <ListBookshelves books={this.state.books}
           					shelves={this.state.shelves}
                            onUpdate={this.onUpdateStatus}
                             />
        )}/>
		  <Route exact path={Utils.BASE_URL + "/search"} render={() => (
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
