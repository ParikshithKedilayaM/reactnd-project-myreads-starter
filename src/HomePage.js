import React, { Component } from 'react'
import Header from './Header'
import BooksSection from './BooksSection'
import SearchButton from './SearchButton'
import PropTypes from 'prop-types'

class HomePage extends Component {
   shelfUpdate = (book, shelf) => {
       this.props.updateShelf(book, shelf);
   }
   render() {
       return (
        <div className="list-books">
           <Header />
           <BooksSection 
               sectionTitle = 'Currently Reading' 
               shelf = 'currentlyReading'
               books = {this.props.books} 
               shelfUpdate = {this.shelfUpdate} />
           <BooksSection 
               sectionTitle = 'Want to Read' 
               shelf = 'wantToRead'
               books = {this.props.books} 
               shelfUpdate = {this.shelfUpdate} />
           <BooksSection 
               sectionTitle = 'Read' 
               shelf = 'read'
               books = {this.props.books} 
               shelfUpdate = {this.shelfUpdate} />
           <SearchButton />
        </div>
       )
   }
}

HomePage.propTypes = {
   books : PropTypes.array,
}
export default HomePage;