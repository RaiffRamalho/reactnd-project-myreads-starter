import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'
import SearchBook from './SearchBook.js'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'



class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReadingBooks: [],
    wantToReadBooks:[],
    readBooks:[]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books,
          currentlyReadingBooks : books.filter((book) => (
          book.shelf==='currentlyReading'
          )),
          wantToReadBooks : books.filter((book) => (
              book.shelf==='wantToRead'
              )),
          readBooks : books.filter((book) => (
              book.shelf==='read'
              ))
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
          <BookList currentlyReadingBooks={this.state.currentlyReadingBooks}
                    wantToReadBooks={this.state.wantToReadBooks}
                    readBooks={this.state.readBooks}
                    />
          <div className="open-search">
            <Link
              to='/searchBook'
            >Add a book</Link>
          </div>
          </div>
        )} />
        <Route path='/searchBook' render={({ history }) => (
          <SearchBook books={this.state.books}/>
        )} />
        
      </div>
    )
  }
}

export default BooksApp
