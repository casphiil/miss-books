const {useState, useEffect} = React
const {Link} = ReactRouterDOM

export function BookPreview({books, onRemoveBook}) {
  const booksStr = books.map(book => (
    <article key={book.id} className="">
      <img src={book.thumbnail}></img>
      <h2>{book.title.charAt(0).toUpperCase() + book.title.slice(1)}</h2>
      <button onClick={() => onRemoveBook(book.id)}>remove</button>
      <button>
        <Link heigh="100%" to="/index/details">
          open
        </Link>
      </button>
    </article>
  ))

  return <section className="book-preview">{booksStr}</section>
}
