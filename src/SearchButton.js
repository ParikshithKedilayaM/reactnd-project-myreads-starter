import React from 'react'
import { Link } from 'react-router-dom'

function SearchButton() {
    return (
        <div className="open-search">
            <Link to = '/search' className = "search-button">Add a book</Link>
        </div>
    )
}

export default SearchButton;
