import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'


class BookList extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    currentlyReadingBooks: PropTypes.array.isRequired,
    wantToReadBooks: PropTypes.array.isRequired,
    readBooks: PropTypes.array.isRequired,
  }
  state = {
    books: [],
    currentlyReadingBooks: [],
    wantToReadBooks:[],
    readBooks:[]
  }


  render() {
    const { currentlyReadingBooks, wantToReadBooks, readBooks, onChangeShelf } = this.props

    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className='books-grid'>
                        {currentlyReadingBooks.map((book) => (
                            <li key={book.id+'_list'} >
                                <Book onChangeShelf={onChangeShelf} book={book}/>
                            </li>
                        ))}
                    </ol>
                
                    </div> 
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className='books-grid'>
                            {wantToReadBooks.map((book) => (
                                <li key={book.id+'_list'} >
                                    <Book onChangeShelf={onChangeShelf} book={book}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className='books-grid'>
                            {readBooks.map((book) => (
                                <li key={book.id+'_list'} >
                                    <Book onChangeShelf={onChangeShelf} book={book}/>
                                </li>
                            ))}
                        </ol>
                    
                    </div>
                </div>
            </div>
      </div>
      
    )
  }
}

export default BookList