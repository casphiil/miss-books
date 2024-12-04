const {useState, useEffect} = React
import {BookPreview} from '../cmps/BookPreview.jsx'
import {BookList} from '../cmps/BookList.jsx'
import {bookService} from '../services/book.service.js'
import {booksArchive} from '../booksArchive.js'

export function BookIndex() {
  const [books, setBooks] = useState([])
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

  useEffect(() => {
    loadBooks()
  }, [filterBy])

  function loadBooks() {
    bookService
      .query(filterBy)
      .then(setBooks)
      .catch(err => {
        console.log('Problems getting books:', err)
      })
  }
  function onRemoveBook(bookId) {
    bookService
      .remove(bookId)
      .then(() => {
        setBooks(books => books.filter(book => book.id !== bookId))
      })
      .catch(err => {
        console.log('Problems removing book:', err)
      })
    console.log('remove')
  }

  function onAddBook() {
    const title = prompt("Enter the book's title:")
    if (!title) {
      alert('Title is required!')
      return
    }

    const price = prompt('Enter the price:')
    if (!price) {
      alert('Price is required!')
      return
    }

    bookService
      .addBook(title, price)
      .then(newBook => {
        alert(`${title} has been added successfully!`)
        setBooks(books => [newBook, ...books])
      })
      .catch(err => {
        console.error('Failed to add book', err)
        alert('Failed to add the book. Please try again.')
      })
  }

  loadBooks()
  return (
    <section className="book-index">
      <h2>BookIndex</h2>
      <button onClick={() => onAddBook()}>Add Book +</button>
      <BookList books={books} onRemoveBook={onRemoveBook} />
    </section>
  )
}
