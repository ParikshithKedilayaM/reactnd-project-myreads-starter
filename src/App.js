import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './Search'
import HomePage from './HomePage'

class BooksApp extends React.Component {

  state = {
    books : 
      [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((allbooks) => {
      this.setState({
        books : allbooks.map(book=> [book.title, book.authors, book.shelf, book.imageLinks.thumbnail]),
      });
    });
  };

  
   render() {
    return (
      <div className = "app">
         <Route exact path = '/' render = { () => (
           <HomePage />
         )} />
         <Route exact path = '/search' render = { () => (
           <Search />
         )} />
      </div>
      );
  }
}

export default BooksApp
