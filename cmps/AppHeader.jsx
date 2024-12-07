const {Link} = ReactRouterDOM

export function AppHeader() {
  return (
    <header className="app-header full main-layout">
      <section className="header-container">
        <nav className="app-nav">
          <Link to="/">Home</Link>
          <Link to="index">Books</Link>
          <Link to="about">About</Link>
        </nav>
      </section>
    </header>
  )
}
