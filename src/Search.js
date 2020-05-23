import React , { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

class Search extends Component {
    state = {
      query : '',
    }

    changeQuery = (event) => {
      this.setState({
        query : event.target.value,
      });
    }

    updateShelf = (book, shelf) => {
      this.props.updateShelf(book, shelf);
    }

    render() {
      return (
        <div className="search-books">
          <SearchBar query={this.state.query} changeQuery={this.changeQuery} />
          <SearchResults query={this.state.query} books={this.props.books} shelfUpdate={this.updateShelf} />
        </div>
      )
    }
}

Search.propTypes = {
  books : PropTypes.array,
  updateShelf : PropTypes.func.isRequired,
}
export default Search;