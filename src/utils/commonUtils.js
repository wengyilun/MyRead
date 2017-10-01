/**
 * Created by mbp on 30/09/2017.
 */
export const SHELVES = {
		currentlyReading: 'Currently Reading',
		wantToRead: 'Want to Read',
		read: 'Read',
		none: ''
	}


export const getIdToShelfMap = (books) => {
	let shelfMap = new Map()
	
	for (let book of books) {
		shelfMap.set(book.id, {value: book.shelf, label: SHELVES[book.shelf]})
	}
	
	return shelfMap
}

export const getShelfLabel = (shelf) => (
   SHELVES[shelf]
)
