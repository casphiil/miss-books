import {BookPreview} from 'BookPreview.jsx'
import {BookFilter} from './BookFilter.jsx'
const {useState, useEffect} = React

export function BookList({books, onRemoveBook}) {
  return (
    <section className="book-list">
      <BookFilter />
      <BookPreview books={books} onRemoveBook={onRemoveBook} />
    </section>
  )
}
