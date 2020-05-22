import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export class BooksSection extends Component {
  shelfChange = () => {

  }
    render() {
        return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.sectionTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map(book => (
                        <Book key={book.id} book={book} changeShelf={this.shelfChange}/>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
BooksSection.propTypes = {
    sectionTitle : PropTypes.string.isRequired,
    books : PropTypes.array,
}
export default BooksSection
