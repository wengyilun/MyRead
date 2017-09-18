/**
 * Created by mbp on 9/9/17.
 */
import * as Utils from './utils.js'

const api = "https://reactnd-books-api.udacity.com"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
	token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
	'Accept': 'application/json',
	'Authorization': token
}

export const getAll = () =>
	fetch(`${api}/books`, { headers })
	.then(res => res.json())
	.then(data => data.books)
	
export const update = (book, shelf) => {
	fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({shelf})
	}).then(res => {
	    res = res.json()
	})
	.catch(() => {
	  console.log('Update failed')
	})
   }