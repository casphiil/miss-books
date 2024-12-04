export function AppHeader({onSetPage}) {
  return (
    <header className="app-header full main-layout">
      <section className="header-container">
        <nav className="app-nav">
          <a onClick={() => onSetPage('home')} href="#">
            Home
          </a>
          <a onClick={() => onSetPage('index')} href="#">
            Books
          </a>
          <a onClick={() => onSetPage('about')} href="#">
            About
          </a>
        </nav>
      </section>
    </header>
  )
}
