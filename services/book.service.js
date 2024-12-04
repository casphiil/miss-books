import {utilService} from './util.service.js'
import {storageService} from './async-storage.service.js'
import {booksArchive} from '../booksArchive.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
  addBook,
  getDefaultFilter,
}

// For Debug (easy access from console):
// window.cs = bookService

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY).then(books => {
    if (filterBy.txt) {
      const regExp = new RegExp(filterBy.txt, 'i')
      books = books.filter(book => regExp.test(book.title))
    }

    if (filterBy.minSpeed) {
      books = books.filter(book => book.price >= filterBy.minSpeed)
    }

    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book)
  } else {
    return storageService.post(BOOK_KEY, book)
  }
}

function getDefaultFilter(filterBy = {txt: '', minSpeed: 0}) {
  return {txt: filterBy.txt, minSpeed: filterBy.minSpeed}
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY)
  if (!books || !books.length) {
    utilService.saveToStorage(BOOK_KEY, booksArchive)
  }
}
function addBook(title, price) {
  const bookToAdd = _createBook(title, price)
  return storageService.post(BOOK_KEY, bookToAdd)
  // saveTo()
}
function _createBook(title, amount = 250) {
  return {
    id: utilService.makeId(),
    title,
    thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
    description: 'placerat nisi sodales suscipit tellus',
    listPrice: {
      amount,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  }
}
