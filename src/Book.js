import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import serializeForm from 'form-serialize'

class Book extends Component {
    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
    }
    state = {
    }

    constructor (props) {
        super(props);
        this.state = {   statusRead: 'wantToRead'    };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.book.shelf = event.target.value;
        this.props.onChangeShelf(this.props.book)
    }

    render() {
    const { book } = this.props
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.imageLinks.smallThumbnail+')' }}></div>
                <div className="book-shelf-changer">
                <select value={book.shelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="none" >None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
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