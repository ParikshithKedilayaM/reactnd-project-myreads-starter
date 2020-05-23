import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SearchBar (props) {
    return (
        <div className="search-books-bar">
            <Link to = '/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={props.query}
                onChange={props.changeQuery}
                autoFocus/>
            </div>
        </div>
    )
}
SearchBar.propTypes = {
    query : PropTypes.string,
    changeQuery : PropTypes.func.isRequired,
}
export default SearchBar;
