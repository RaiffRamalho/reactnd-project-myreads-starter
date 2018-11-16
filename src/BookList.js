import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'


class BookList extends Component {
  static propTypes = {
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
//   componentWillMount() {
//     this.updateBooks(this.props.books);
//   }

//   updateBooks = () => {
//     this.setState(() => ({
//             currentlyReadingBooks : this.props.books.filter((book) => (
//                 book.shelf==='currentlyReading'
//             ))
//         })
//     )     
//   }

  render() {
    const { currentlyReadingBooks, wantToReadBooks, readBooks } = this.props
    // this.updateBooks(this.props.books);

    // )
    // this.state.currentlyReadingBooks = books.filter((book) => (
    //     book.shelf==='currentlyReading'
    //     ))

    // this.state.wantToReadBooks = books.filter((book) => (
    //     book.shelf==='wantToRead'
    //     ))
    
    // this.state.readBooks = books.filter((book) => (
    //     book.shelf==='read'
    //     )) 

    return (
        <div className="list-books-content" onClick={this.updateBooks}>
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className='books-grid'>
                        {currentlyReadingBooks.map((book) => (
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
                            {wantToReadBooks.map((book) => (
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
                            {readBooks.map((book) => (
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