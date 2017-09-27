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
        searchResults:[],
		shelves: {
			currentlyReading: 'Currently Reading',
			wantToRead: 'Want to Read',
			read: 'Read'
		}
	}
	componentDidMount(){
		BooksAPI.getAll().then((books) => {
		  this.setState({books})
		  console.log(books)
		})
	}
	onUpdateStatus = (book, shelf) => {
	    let res = BooksAPI.update(book, shelf)
		// this.setState({books: this.state.books})
		console.log('shelf:', shelf)
		if(shelf === 'none'){
			this.setState(state => ({
				books: state.books.splice([ book ])
			}))
		}else {
			this.setState(state => ({
				books: state.books.concat([book])
			}))
		}
		
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
           					shelves={this.state.shelves}
                            onUpdate={this.onUpdateStatus}
                             />
        )}/>
		  <Route exact path="/search" render={() => (
			  <BookSearcher searchResults={this.state.searchResults}
			                onSearch={this.onSearchBooks}
							onUpdate={this.onUpdateStatus}
							books={this.state.books}/>
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
