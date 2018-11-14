import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import serializeForm from 'form-serialize'

class Book extends Component {
    state = {
        statusRead: 'wantToRead'
      }
    handleSubmit = (e) => {
        // e.preventDefault()
        // const values = serializeForm(e.target, { hash: true })
        // if (this.props.onBook) {
        //     this.props.onBook(values)
        // }
    }
    render() {
    const { book } = this.props
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.imageLinks.smallThumbnail+')' }}></div>
                <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors[0]}</div>
        </div>
    )
    }
}
 export default Book 