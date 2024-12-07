import {BookPreview} from 'BookPreview.jsx'

const {useState, useEffect} = React

export function BookList({books, onRemoveBook}) {
  return (
    <section className="book-list">
      <BookPreview books={books} onRemoveBook={onRemoveBook} />
    </section>
  )
}
