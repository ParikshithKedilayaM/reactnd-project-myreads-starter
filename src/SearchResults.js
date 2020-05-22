import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchResults extends Component {
    state = {
        searchResults : [],
    };

    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.props.query !== '' && BooksAPI.search(this.props.query).then((results) => {
                this.setState({
                    searchResults : results,
                });
            });
        }
    };

    shelfChange = (book, shelf) => {
        this.props.shelfUpdate(book, shelf);
    }
    
    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.searchResults.length > 0 && this.state.searchResults.map((book) => (
                        <Book key={book.id} book={book} changeShelf={this.shelfChange}/>
                    ))}
                </ol>
            </div>
        )
    }
}

export default SearchResults;
