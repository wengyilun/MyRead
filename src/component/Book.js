/**
 * Created by mbp on 14/09/2017.
 */
import React, {Component} from 'react'
import {getShelfLabel} from '../utils/commonUtils'

const Book = ((props) => {
	const onStatusChange = (data, shelf) => {
		props.data["shelf"] = shelf
		props.onStatusChange(data, shelf)
	}
	const {data, onShelf} = props
	return (
		<div className="book-list-item-container" >
			<div className="book-holder" >
				<div className="book-status-changer"  >
					<select className="book-status-menu" value={data.shelf}
							onChange={ (event) => onStatusChange(data, event.target.value)}>
						<option value="move" disabled>Move to ...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
				<div className="book-cover" style={{
					backgroundImage: `url(${data.imageLinks && data.imageLinks.smallThumbnail})`
				}}/>
			</div>
			<div className="book-footer" >
				<div className="book-title" >{data.title} </div>
				<div className="book-author" >{data.authors}</div>
				<div className="book-status" style={{opacity: `${onShelf ? 1 : 0}`}}>{getShelfLabel(data.shelf)}</div>
			</div>
		</div>
	)
})

export default Book
