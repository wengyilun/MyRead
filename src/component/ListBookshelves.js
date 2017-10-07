/**
 * Created by mbp on 9/9/17.
 */
 import React, {Component} from 'react'
 import { Link } from 'react-router-dom'
 import Shelf from './Shelf'
 import * as Utils from '../utils/commonUtils'

const ListBookshelves = ((props) => {
	const {books, shelves, onUpdate} = props
	
	let sortBooks = shelfName => (
		books.filter(book => book.shelf === shelfName)
	)
	
	return(
		<div className="list-bookshelves" >
			<div className="list-bookshelves-top"></div>
			<div className="open-search">
				<Link to={Utils.BASE_URL + "/search"}>Add</Link>
			</div>
				< ul className = "bookshelf-list">
					{Object.keys(Utils.SHELVES).map(shelfValue =>(
						<Shelf title={Utils.SHELVES[shelfValue]} value={shelfValue} books={sortBooks(shelfValue)} onUpdate={onUpdate}/>
					))}
			   </ul>
		</div>
	)
 })
 export default ListBookshelves