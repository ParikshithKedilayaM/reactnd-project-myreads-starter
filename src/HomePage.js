import React, { Component } from 'react'
import Header from './Header'
import BooksSection from './BooksSection'
import SearchButton from './SearchButton'

class HomePage extends Component {
   render() {
       return (
        <div className="list-books">
           <Header />
           <BooksSection sectionTitle = 'Currently Reading' />
           <BooksSection sectionTitle = 'Want to Read' />
           <BooksSection sectionTitle = 'Read' />
           <SearchButton />
        </div>
       )
   }
}

export default HomePage;