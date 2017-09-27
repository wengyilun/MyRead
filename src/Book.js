/**
 * Created by mbp on 14/09/2017.
 */
import React, {Component} from 'react'

class Book extends Component {
	state = {
		status: '',
		saved: '',
		shelves: {
			currentlyReading: 'Currently Reading',
			wantToRead: 'Want to Read',
			read: 'Read'
		}
	}
	
	// TODO: Add binding to status state change
	getShelfValue = status => (
		status === undefined ? 'none' : status
	)
	onStatusChange = (data, shelf) => {
		this.setState({saved: shelf !== 'none'})
		this.setState({status: shelf})
		console.log('this.state.saved:',this.state.saved)
		this.props.onStatusChange(data, shelf)
	}
	
	componentDidMount(){
		this.setState({status: this.props.data.shelf})
		this.setState({saved: this.props.saved})
		console.log('this.props.shelves,',this.props.shelves)
	}
	
	render ()
	{
		const {status, saved, shelves} = this.state
		const {data, onStatusChange} = this.props
		return (
			<div className="book-list-item-container" >
				<div className="book-holder" >
					<div className="book-status-changer"  >
						<select className="book-status-menu" value={this.getShelfValue(this.props.data.shelf)}
								onChange={ (event) => this.onStatusChange(data, event.target.value)}>
							<option value="move" disabled>Move to ...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
					<div className="book-cover" style={{
						backgroundImage: `url(${data.imageLinks && data.imageLinks.smallThumbnail})`,
						opacity: `${saved ? 0.3 : 1}`
					}}/>
				</div>
				<div className="book-footer" >
					<div className="book-title" style={{opacity: `${saved ? 0.4 : 1}`}}>{data.title} </div>
					<div className="book-author" style={{opacity: `${saved ? 0.4 : 1}`}}>{data.authors}</div>
					<div className="book-status">{shelves && shelves[status]}</div>
				</div>
			</div>
		)
	}
}

export default Book
