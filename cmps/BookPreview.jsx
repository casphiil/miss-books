const {useState, useEffect} = React
const {Link} = ReactRouterDOM

export function BookPreview({books, onRemoveBook}) {
  const booksStr = books.map(book => (
    <article key={book.id} className="">
      <img src={book.thumbnail}></img>
      <h2>{book.title.charAt(0).toUpperCase() + book.title.slice(1)}</h2>

      <button onClick={() => onRemoveBook(book.id)}>Remove Book</button>
      <Link className="btn" to={`/books/${book.id}`}>
        Open Book
      </Link>
      <Link className="btn" to={`/books/edit/${book.id}`}>
        Edit Book
      </Link>
    </article>
  ))

  return <section className="book-preview">{booksStr}</section>
}
