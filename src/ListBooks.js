// /**
//  * Created by mbp on 12/09/2017.
//  */
// /**
//  * Created by mbp on 9/9/17.
//  */
// import React, {Component} from 'react'
//
// class ListBookshelves extends Component{
// 	states = {
// 		status: {
// 			'currentlyReading': 'Currently Reading',
// 			'wantToRead': 'Want to Read',
// 			'read': 'Read'
// 		}
// 	}
// 	render(){
// 		return(
// 			<div className="list-bookshelves">
// 				<div className="list-bookshelves-top">
// 					<h2>Bookshelvs</h2>
// 				</div>
//
// 				< ul className = "bookshelf-list">
// 					{this.props.books.map((book)=>(
// 						< li key={book.id} className = "bookshelf-list-item" >
// 							{this.states.status[book.shelf]}
// 							<ul className="list-books">
// 								<li className="book-list">
// 									<div className="book-list-item">
// 										<p>{book.title}</p>
// 										<p>{book.authors}</p>
// 									</div>
// 								</li>
// 							</ul>
// 						</li>))}
// 				</ul>
// 			</div>
// 		)
// 	}
// }
//
// export default ListBookshelves
//
// // load in books object
// // read in category
// // create a section if not already exsit
// // add book to it