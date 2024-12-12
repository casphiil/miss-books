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
  getEmptyBook,
}

// For Debug (easy access from console):
// window.cs = bookService

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY).then(books => {
    if (filterBy.title) {
      const regExp = new RegExp(filterBy.title, 'i')
      books = books.filter(book => regExp.test(book.title))
    }
    if (filterBy.publishedDate) {
      books = books.filter(book => book.publishedDate >= filterBy.publishedDate)
    }
    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId).then(_setNextPrevBookId)
}
function _setNextPrevBookId(book) {
  return query().then(books => {
    const bookIdx = books.findIndex(currBook => currBook.id === book.id)
    const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0]
    const prevBook = books[bookIdx - 1] ? books[bookIdx - 1] : books[books.length - 1]
    book.nextBookId = nextBook.id
    book.prevBookId = prevBook.id
    return book
  })
}

function getEmptyBook(title = '', publishedDate = '') {
  return {title, publishedDate}
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

function getDefaultFilter() {
  return {title: '', publishedDate: ''}
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
