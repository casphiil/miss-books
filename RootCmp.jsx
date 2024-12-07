const {useState, useEffect} = React
import {AppHeader} from './cmps/AppHeader.jsx'
import {HomePage} from './pages/HomePage.jsx'
import {BookIndex} from './pages/BookIndex.jsx'
import {AboutUs} from './pages/AboutUs.jsx'

const Router = ReactRouterDOM.HashRouter
const {Routes, Route, Navigate} = ReactRouterDOM

export function RootCmp() {
  /* const [page, setPage] = useState('index')

  function onSetPage(page) {
    setPage(page)
  } */

  return (
    <Router>
      <section className="app main-layout">
        <AppHeader />
        <main className="main-layout">
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/index" element={<BookIndex />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
      </section>
    </Router>
  )
}
