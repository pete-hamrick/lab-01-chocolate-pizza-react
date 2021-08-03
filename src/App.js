import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Author from './Author.js';
import Footer from './Footer.js';

class App extends Component {
  render() { 
    return (
      <>
        <Header />
        <Main />
        <Author />
        <Footer />
      </>
    );
  }
}
 
export default App;