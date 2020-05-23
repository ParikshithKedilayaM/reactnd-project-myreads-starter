import React from 'react'
import PropTypes from 'prop-types'

function BookCover(props) {
    return (
        <div className="book-cover" 
            style={{ width: 128, height: 193, 
            backgroundImage: `url(
                ${props.book.imageLinks !== undefined &&
                    props.book.imageLinks.thumbnail !== undefined
                    ? props.book.imageLinks.thumbnail
                    : ''
                }
                )` }}>
        </div>
    )
}
BookCover.propTypes = {
    book : PropTypes.object,
}
export default BookCover;