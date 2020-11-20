import React from 'react';
import logo from './logo.svg';
import FixedMenuLayout from "./FixedMenuLayout";
import Myheader from "./MainGrid";
import Mygrid from "./BottomNav";
import './App.css';
import axios from 'axios';
import BookView from './component/BookView';

class App extends React.Component{
  state = {
    books: []
  }
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/http://ec2-54-90-244-6.compute-1.amazonaws.com/allbooks?page=39`)
    .then(res => {
      const books = res.data;
      console.log(books)
      this.setState({ books });
      })
  }
  renderBooks() {
    return (
      this.state.books.map(book=> {
        return <div class="four wide column"><BookView key={book.asin} book={book}></BookView></div>
      })
    )
  }
  render(){
    return (
      <div>
      <FixedMenuLayout />
      {/* <Myheader books={books}/>  */}
      <div class="ui grid">
        {this.renderBooks()}
      </div>
      <Mygrid />
   </div>
    );
  }
  
}

export default App;
