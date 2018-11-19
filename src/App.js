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

  changeShelf = (book) => {
      this.removeBook(book);
      this.addBook(book);
  }

  removeBook(book){
    let indCR = this.contains(this.state.currentlyReadingBooks, book);
    let indWR = this.contains(this.state.wantToReadBooks, book);
    let indR = this.contains(this.state.readBooks, book);
    let arrayTemp;
    if(indCR !==-1 ){
      arrayTemp = [...this.state.currentlyReadingBooks];
      arrayTemp.splice(indCR, 1);
      this.setState(() =>({
        currentlyReadingBooks: arrayTemp
      }))
    }else if(indWR !== -1){
      arrayTemp = [...this.state.wantToReadBooks];
      arrayTemp.splice(indWR, 1);
      this.setState(() =>({
        wantToReadBooks: arrayTemp
      }))
    }else{
      arrayTemp = [...this.state.readBooks];
      arrayTemp.splice(indR, 1);
      this.setState(() =>({
        readBooks: arrayTemp
      }))
    }
    
  }

  contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].title === obj.title) {
            return i;
        }
    }
    return -1;
  }

  addBook = (book)=>{
    if(book.shelf==='currentlyReading'){
      this.setState((prevState)=>({
        currentlyReadingBooks: [...prevState.currentlyReadingBooks, book]
      }))
    }else if(book.shelf==='wantToRead'){
      this.setState((prevState)=>({
        wantToReadBooks: [...prevState.wantToReadBooks, book]
      }))
    }else{
      this.setState((prevState)=>({
        readBooks: [...prevState.readBooks, book]
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookList onChangeShelf={this.changeShelf}
                    currentlyReadingBooks={this.state.currentlyReadingBooks}
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
          <SearchBook onChangeShelf={this.changeShelf} books={this.state.books}/>
        )} />
        
      </div>
    )
  }
}

export default BooksApp
