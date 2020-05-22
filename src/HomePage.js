import React, { Component } from 'react'
import Header from './Header'
import BooksSection from './BooksSection'
import SearchButton from './SearchButton'
import PropTypes from 'prop-types'

class HomePage extends Component {
   render() {
       return (
        <div className="list-books">
           <Header />
           <BooksSection 
               sectionTitle = 'Currently Reading' 
               section = 'currentlyReading'
               books = {this.props.books} />
           <BooksSection 
               sectionTitle = 'Want to Read' 
               section = 'wantToRead'
               books = {this.props.books} />
           <BooksSection 
               sectionTitle = 'Read' 
               section = 'read'
               books = {this.props.books} />
           <SearchButton />
        </div>
       )
   }
}

HomePage.propTypes = {
   books : PropTypes.array,
}
export default HomePage;