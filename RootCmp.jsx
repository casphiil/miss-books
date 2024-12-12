const {useState, useEffect} = React
import {AppHeader} from './cmps/AppHeader.jsx'
import {HomePage} from './pages/HomePage.jsx'
import {BookIndex} from './pages/BookIndex.jsx'
import {AboutUs} from './pages/AboutUs.jsx'
import {NotFound} from './cmps/NotFound.jsx'
import {BookDetails} from './pages/BookDetails.jsx'
import {BookEdit} from './pages/BookEdit.jsx'

const Router = ReactRouterDOM.HashRouter
const {Routes, Route, Navigate} = ReactRouterDOM

export function RootCmp() {
  return (
    <Router>
      <section className="app main-layout">
        <AppHeader />
        <main className="main-layout">
          <Routes>
            <Route path="/" element={<Navigate to="/books" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/books" element={<BookIndex />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="/books/edit" element={<BookEdit />} />
            <Route path="/books/edit/:bookId" element={<BookEdit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </section>
    </Router>
  )
}
