const {Link} = ReactRouterDOM

export function NotFound() {
  return (
    <section className="not-found-container">
      <section classNAme="not-foud">
        <h2>NotFound</h2>
      </section>

      <Link to="/">Back</Link>
    </section>
  )
}
