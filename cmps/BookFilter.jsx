const {useState, useEffect} = React

export function BookFilter() {
  return (
    <section className="book-filter">
      <form>
        <h1>Filter Books</h1>
        <form>
          <label htmlFor="Title">Title</label>
          <input value="Title" type="text" name="Title" id="Title" />

          <label htmlFor="Price">Price</label>
          <input value="Price" type="text" name="Price" id="Price" />

          <button>Submit</button>
        </form>
      </form>
    </section>
  )
}
