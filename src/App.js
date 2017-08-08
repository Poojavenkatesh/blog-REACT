import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />

      {/* Page Header */}
      {/* Set your background image for this header on the line below. */}


      {/* Main Content */}
        <Container />

      <hr />

      {/* Footer */}
      <Footer />
      </div>
    );
  }
}

export default App;
