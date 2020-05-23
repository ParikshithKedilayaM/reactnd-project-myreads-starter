import React from 'react'
import PropTypes from 'prop-types'

function BookDescription(props) {
    return (
        <div>
            <div className="book-title">{props.book.title}</div>
            {props.book.authors !== undefined 
            && props.book.authors.map(author=>(
                <div key={author} className="book-authors" >{author}</div>
            ))}
        </div>
    )
}
BookDescription.propTypes = {
    book : PropTypes.object,
}
export default BookDescription;
