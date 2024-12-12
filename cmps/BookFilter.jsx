import {bookService} from '../services/book.service.js'
import {debounce} from '../services/util.service.js'

const {useState, useEffect, useRef} = React

export function BookFilter({onSetFilter, defaultFilter}) {
  //
  const [filterByToEdit, setFilterByToEdit] = useState(defaultFilter)
  const onSetFilterDebounce = useRef(debounce(onSetFilter)).current
  useEffect(() => {
    onSetFilterDebounce(filterByToEdit)
  }, [filterByToEdit])

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  function handleChange({target}) {
    var {value, name: field} = target
    setFilterByToEdit(prevFilter => ({...prevFilter, [field]: value}))
  }

  const {title, publishedDate} = filterByToEdit

  return (
    <section className="book-filter">
      <h1>Filter Books</h1>
      <form onSubmit={onSubmitFilter}>
        <label htmlFor="title">Title</label>
        <input value={title} onChange={handleChange} type="text" name="title" id="title" />

        <label htmlFor="publishedDate">Published Date</label>
        <input value={publishedDate} onChange={handleChange} type="number" name="publishedDate" id="publishedDate" />
        <button>Submit</button>
      </form>
    </section>
  )
}
