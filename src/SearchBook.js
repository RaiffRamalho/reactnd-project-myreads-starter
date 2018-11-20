import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'


class SearchBook extends Component {

    constructor (props) {
        super(props);
        this.state.propsBooks = props.books;
    }
    static propTypes = {
      onChangeShelf: PropTypes.func.isRequired,
    }
    state = {
        query: '',
        booksFromSearch:[],
        propsBooks:[]
    }

    updateQuery = (query) => {
      this.setState(() => ({
        query: query,
      }))

      const propsBooks = this.props.books;
      if(query !== ''){
        BooksAPI.search(query)
        .then((data) => {
          if(data.error){
            this.setState(() => ({
              booksFromSearch: data.items
            }))
          }else{
            for (let i = 0; i < data.length; i++) {
              for (let index = 0; index <  propsBooks.length; index++) {
                if(data[i].id === propsBooks[index].id){
                  data[i].shelf = propsBooks[index].shelf;
                } 
              } 
            }
            this.setState(() => ({
              booksFromSearch: data
            }))
          }
        })
      }else{
        this.setState(() => ({
          booksFromSearch: []
        }))
      }
    }
    render() {
    const { query } = this.state
    const { onChangeShelf } = this.props

    return (
        <div className="search-books">
            
            <div className="search-books-bar">
              <div className="search-books-input-wrapper">
              <Link
                className='close-search'
                to='/'>
                Close
                </Link>
                <input 
                className="search-books-bar input"
                type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
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