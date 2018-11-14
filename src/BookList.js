import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'


class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks:[],
    readBooks:[]
  }
  componentDidMount() {
    this.updateBooks(this.props.books);
  }

  updateBooks = (books) => {
    this.setState(() => ({
            currentlyReadingBooks : books.filter((book) => (
                book.shelf==='currentlyReading'
            ))
        })
    )     
  }

  render() {
    const { books } = this.props
    
    // this.updateBooks(books);
    
    this.state.currentlyReadingBooks = books.filter((book) => (
        book.shelf==='currentlyReading'
        ))

    this.state.wantToReadBooks = books.filter((book) => (
        book.shelf==='wantToRead'
        ))
    
    this.state.readBooks = books.filter((book) => (
        book.shelf==='read'
        )) 

    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className='books-grid'>
                        {this.state.currentlyReadingBooks.map((book) => (
                            <li key={book.id} >
                                <Book book={book}/>
                            </li>
                        ))}
                    </ol>
                
                    </div> 
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className='books-grid'>
                            {this.state.wantToReadBooks.map((book) => (
                                <li key={book.id} >
                                    <Book book={book}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className='books-grid'>
                            {this.state.readBooks.map((book) => (
                                <li key={book.id} >
                                    <Book book={book}/>
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