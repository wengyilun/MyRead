import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListBookshelves from './ListBookshelves'
import * as BooksAPI from './utils/BooksAPI'
import BookSearcher from "./BookSearcher";
import { Route } from 'react-router-dom'

class App extends Component {
    state = {
        books:  [],
        searchResults:[]
	}
	componentDidMount(){
		BooksAPI.getAll().then((books) => {
		  this.setState({books})
		})
		
	}
	onUpdateStatus = (book, shelf) => {
	   let res = BooksAPI.update(book, shelf);
	   // Todo: need to add fail listener
	}
	
	onSearchBooks = (query, maxResult) => {
		BooksAPI.search(query, maxResult).then((searchResults) => {
			this.setState({searchResults})
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
                            onUpdate={this.onUpdateStatus}
                             />
        )}/>
		  <Route exact path="/search" render={() => (
			  <BookSearcher searchResults={this.state.searchResults}
			                onSearch={this.onSearchBooks}
							onUpdate={this.onUpdateStatus}/>
		  )}/>
      </div>
    );
  }
}

export default App;
