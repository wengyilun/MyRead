/**
 * Created by mbp on 29/09/2017.
 */
import React, {Component} from 'react'
import Book from './Book'


const Shelf = ((props) => {
	const onBookStatusChange =(book, newShelf) => (
	   props.onUpdate(book, newShelf, 'shelf')
	)
	
	const listBooks = (books)=>{
		return books.map(book=>(
			 <Book key={book.id} data={book} onStatusChange={onBookStatusChange}/>
		 ))
   }
   
  return (
		<li key={props.value} className = "bookshelf-list-item" >
			<div className="bookshelf-item-top">
			<h2>{props.title}</h2>
			</div>
			
			<div className="book-list">
				{listBooks(props.books)}
			</div>
		</li>
	)
})

export default Shelf