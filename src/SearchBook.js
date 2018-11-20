import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'

// import serializeForm from 'form-serialize'

class SearchBook extends Component {

    static propTypes = {
      onChangeShelf: PropTypes.func.isRequired,
    }
    state = {
        query: '',
        booksFromSearch:[]
    }

    updateQuery = (query) => {
      this.setState(() => ({
        query: query,
      }))
      BooksAPI.search(query)
      .then((books) => {
        this.setState(() => ({
          booksFromSearch: books
        }))
      })
    }
    render() {
    const { query } = this.state
    const { books, onChangeShelf } = this.props

    const showBooks = query === ''
      ? []
      : books.filter((book) => (
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.authors[0].toLowerCase().includes(query.toLowerCase()) 

        ))
    return (
        <div className="search-books">
            <div className="search-books-bar">
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {showBooks.map((book) => (
                  <li key={book.id+'_search'} >
                      <Book onChangeShelf={onChangeShelf} book={book}/>
                  </li>
              ))}
              {this.state.booksFromSearch.map((book) => (
                  <li key={book.id+'_search'} >
                      <Book onChangeShelf={onChangeShelf} book={book}/>
                  </li>
              ))}
              </ol>
            </div>
          </div>
    )
    }
}
 export default SearchBook 