import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookCover from './BookCover';
import BookDescription from './BookDescription';

class Book extends Component {
    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value);
    };
    getValue() {
        const index = this.props.books.findIndex(x => x.id === this.props.book.id)
        return index >= 0 ? this.props.books[index].shelf : 'none'
    }
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <BookCover book = {this.props.book} />
                        <div className="book-shelf-changer">
                            <select onChange={this.changeShelf} value = {this.getValue()}>
                                <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                            </select>
                        </div>    
                    </div>
                    <BookDescription book = {this.props.book} />
                </div>
            </li>
        )
    }
}

Book.propTypes = {
    book : PropTypes.object.isRequired,
    changeShelf : PropTypes.func.isRequired,
}
export default Book;
