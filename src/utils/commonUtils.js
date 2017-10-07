export const BASE_URL = process.env.PUBLIC_URL;

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
