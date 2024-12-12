const {useState, useEffect} = React
const {useNavigate, useParams} = ReactRouterDOM
import {bookService} from '../services/book.service.js'

export function BookEdit() {
  const [bookToEdit, setBookToEdid] = useState(bookService.getEmptyBook())
  const navigate = useNavigate()
  const {bookId} = useParams()

  useEffect(() => {
    if (bookId) loadBook()
  }, [])
  function loadBook() {
    bookService
      .get(bookId)
      .then(setBookToEdid)
      .catch(() => {
        console.log('can`t load book', err)
      })
  }
  function handleChange({target}) {
    var {value, name: field} = target
    setBookToEdid(prevBook => ({...prevBook, [field]: value}))
  }
  function onSaveBook(ev) {
    ev.preventDefault()
    bookService
      .save(bookToEdit)
      .then(() => {
        navigate('/books')
      })
      .catch(err => {
        console.log('can`t save the book', err)
      })
  }
  function onBack() {
    navigate('/books')
  }
  const {title, publishedDate} = bookToEdit

  return (
    <section className="book-edit">
      <h1>{bookId ? 'Edit' : 'Add'} Book</h1>
      <form onSubmit={onSaveBook}>
        <label htmlFor="title">Title</label>
        <input value={title} onChange={handleChange} type="text" name="title" id="title" />

        <label htmlFor="publishedDate">Published Date</label>
        <input value={publishedDate} onChange={handleChange} type="number" name="publishedDate" id="publishedDate" />
        <button>Save changes</button>
        <button onClick={onBack}>Back to Books</button>
      </form>
    </section>
  )
}
