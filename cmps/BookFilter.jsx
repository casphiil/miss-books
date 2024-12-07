const {useState, useEffect} = React

export function BookFilter() {
  return (
    <section className="book-filter">
      <h1>Filter Books</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="max-price">Max Price</label>
        <input type="text" name="max-price" id="max-price" />

        <label htmlFor="min-price">Min Price</label>
        <input type="text" name="min-price" id="min-price" />

        <button>Submit</button>
      </form>
    </section>
  )
}
