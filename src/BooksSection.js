import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export class BooksSection extends Component {
    render() {
        return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.sectionTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    </ol>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
BooksSection.PropTypes = {
    sectionTitle : PropTypes.string.isRequired,
}
export default BooksSection
