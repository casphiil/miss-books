const {useState, useEffect} = React
import {AppHeader} from './cmps/AppHeader.jsx'
import {HomePage} from './pages/HomePage.jsx'
import {BookIndex} from './pages/BookIndex.jsx'
import {AboutUs} from './pages/AboutUs.jsx'

export function RootCmp() {
  const [page, setPage] = useState('index')

  function onSetPage(page) {
    setPage(page)
  }

  return (
    <section className="app main-layout">
      <AppHeader onSetPage={onSetPage} />
      <main className="main-layout">
        {page === 'home' && <HomePage />}
        {page === 'index' && <BookIndex />}
        {page === 'about' && <AboutUs />}
      </main>
    </section>
  )
}
