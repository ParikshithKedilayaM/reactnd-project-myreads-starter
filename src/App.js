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
  updateBooks=(prevState, book, shelf)=>{
    book.shelf = shelf;
    const newList=  prevState.books.map(pbook=>{
      if (pbook.id === book.id) {
        return book;
      } else {
        return pbook;
      }
    })
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
           <Search />
         )} />
      </div>
      );
  }
}

export default BooksApp
