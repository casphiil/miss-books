const {Link, NavLink} = ReactRouterDOM

export function AppHeader() {
  return (
    <header className="app-header full main-layout">
      <section className="header-container">
        <nav className="app-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="index">Books</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </section>
    </header>
  )
}
