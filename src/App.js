import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'
import SearchBook from './SearchBook.js'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookList books={this.state.books}/>
          <div className="open-search">
            <Link
              to='/searchBook'
            >Add a book</Link>
          </div>
          </div>
        )} />
        <Route path='/searchBook' render={({ history }) => (
          <SearchBook />
        )} />
        
      </div>
    )
  }
}

export default BooksApp
