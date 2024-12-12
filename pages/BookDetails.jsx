const {useState, useEffect} = React
const {useParams, useNavigate, Link} = ReactRouterDOM
import {bookService} from '../services/book.service.js'

export function BookDetails() {
  const [book, setBook] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadBook()
  }, [params.bookId])

  function loadBook() {
    bookService
      .get(params.bookId)
      .then(setBook)
      .catch(err => {
        console.log('problem getting book', err)
      })
  }

  function onBack() {
    navigate('/books')
  }

  if (!book) return <h2>no book..</h2>
  return (
    <section className="book-details">
      <h2>{book.title}</h2>
      <button onClick={onBack}>Back to Books</button>
      <section>
        <Link className="btn" to={`/books/${book.prevBookId}`}>
          Previous Book
        </Link>
        <Link className="btn" to={`/books/${book.nextBookId}`}>
          Next Book
        </Link>
      </section>
    </section>
  )
}
