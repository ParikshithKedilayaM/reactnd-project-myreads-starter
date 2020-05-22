import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar (props) {
    return (
        <div className="search-books-bar">
            <Link to = '/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={props.query}
                onChange={props.changeQuery}/>
            </div>
        </div>
    )
}

export default SearchBar;
