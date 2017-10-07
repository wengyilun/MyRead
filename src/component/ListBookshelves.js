/**
 * Created by mbp on 9/9/17.
 */
 import React, {Component} from 'react'
 import { Link } from 'react-router-dom'
 import Shelf from './Shelf'
 import {SHELVES} from '../utils/commonUtils'

const ListBookshelves = ((props) => {
	const {books, shelves, onUpdate} = props
	
	let sortBooks = shelfName => (
		books.filter(book => book.shelf === shelfName)
	)
	
	return(
		<div className="list-bookshelves" >
			<div className="list-bookshelves-top"></div>
			<div className="open-search">
				<Link to="/search">Add</Link>
			</div>
				< ul className = "bookshelf-list">
					{Object.keys(SHELVES).map(shelfValue =>(
						<Shelf title={SHELVES[shelfValue]} value={shelfValue} books={sortBooks(shelfValue)} onUpdate={onUpdate}/>
					))}
			   </ul>
		</div>
	)
 })
 export default ListBookshelves