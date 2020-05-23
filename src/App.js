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
        books : allbooks
      });
    });
  };
  bookExists = (books, newBook) => {
    const bookarr = books.filter( book => (
       book.id === newBook.id
    ))
    return bookarr.length > 0 ? true : false;
  }
  updateBooks=(prevState, book, shelf)=>{
    book.shelf = shelf;
    let newList = [];
    if (this.bookExists(prevState.books, book)) {
      newList =  prevState.books.map(pbook=>{
        if (pbook.id === book.id) {
          return book;
        } else {
          return pbook;
        }
      })
    } else {
      newList = [...prevState.books, book];
    }
    return newList
  }

updateShelf = (book, shelf) => {

  this.setState((prevState) => ({
     books : this.updateBooks(prevState, book, shelf)
  }))
   BooksAPI.update(book, shelf)
} 

   render() {
    return (
      <div className = "app">
         <Route exact path = '/' render = { () => (
           <HomePage books = {this.state.books} updateShelf = {this.updateShelf} />
         )} />
         <Route exact path = '/search' render = { () => (
           <Search books = {this.state.books} updateShelf = {this.updateShelf} />
         )} />
      </div>
      );
  }
}

export default BooksApp
