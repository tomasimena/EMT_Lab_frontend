import './App.css';
import React, {Component} from 'react'
import Authors from '../Authors/authors'
import Books from '../Books/BookList/books'
import libraryService from "../../repository/libraryRepository";
import Header from '../Header/header'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BookAdd from '../Books/BookAdd/bookAdd';
import BookEdit from '../Books/BookEdit/bookEdit';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      books: [],
      countries: [],
      selectedBook: {}
    }
  }

  render() {
    return (
        // <div>
        //   <Books books = {this.state.books}/>
        // </div>
        <Router>
          <Header/>
          <main>
            <div className="container">
              <Route path={"/authors"} exact render={() =>
                  <Authors authors={this.state.authors}/>}/>
            </div>


            <Route path={"/books/add"} exact render={() =>
                <BookAdd authors={this.state.authors} categories={this.state.categories}
                            onAddBook={this.addBook}/>}/>

            <Route path={"/books/edit/:id"} exact render={() =>
                <BookEdit authors={this.state.authors}
                             onEditBook={this.editBook}
                             book={this.state.selectedBook}/>}/>

            {/*<Route path={"/products/edit/:id"} exact render={() =>*/}
            {/*    <BookEdit categories={this.state.categories}*/}
            {/*                 manufacturers={this.state.manufacturers}*/}
            {/*                 onEditBook={this.editBook}*/}
            {/*                 product={this.state.selectedBook}/>}/>*/}

            <div className="container">
              <Route path={"/books"} exact render={() =>
                  <Books books={this.state.books} authors={this.state.authors}
                         onDelete={this.deleteBook} onEdit = {this.getBook}/>}
              />
            </div>
          </main>
        </Router>
    )
  }

  loadAuthors = () => {
    libraryService.fetchAuthors().then((data) => {
      this.setState({
        authors: data.data
      });
      console.log(data)
    });
  }

  addBook = (name, category, availableCopies, authorId, isInGoodCondition) => {
    libraryService.addBook(name, category, availableCopies, authorId, isInGoodCondition)
        .then(() => {
          this.loadBooks();
        });
    console.log(name+" "+category+" "+availableCopies+" "+authorId+" "+isInGoodCondition)
  }

  editBook = (id, name, category, availableCopies, authorId, isInGoodCondition) => {
    libraryService.editBook(id, name, category, availableCopies, authorId, isInGoodCondition)
        .then(() => {
          this.loadBooks();
        });
    console.log(id+" "+name+" "+category+" "+availableCopies+" "+authorId+" "+isInGoodCondition)
  }

  deleteBook = (id) => {
    libraryService.deleteBook(id).then(() => {
      this.loadBooks();
    });
    console.log("Deleted book with ID: "+id);
  }

  getBook = (id) => {
    libraryService.getBook(id)
        .then((data) => {
          this.setState({
            selectedBook: data.data
          })
    })
  }

  loadBooks = () => {
    libraryService.fetchBooks().then((data) => {
      this.setState({
        books: data.data
      });
      console.log(data)
    })
  }

  loadCountries = () => {
    libraryService.fetchCountries().then((data) => {
      this.setState({
        countries: data
      });
      console.log(data)
    })
  }

  componentDidMount() {
    this.loadAuthors();
    this.loadBooks();
    this.loadCountries();
  }

}

export default App;
