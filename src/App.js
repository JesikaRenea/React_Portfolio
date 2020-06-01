import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';
import About from './components/About';
import Contact from './components/Contact';
import FsPortfolio from './components/FsPortfolio';
import Footer from './components/Footer/'
import Navbar from './components/Navbar';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
              <div className="container">

      <Router>
        <Header />
        <Navbar />
        <main>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/fs-portfolio" component={FsPortfolio} />
        </main>
        <Footer />
      </Router>
</div>
    </div>
  );
}

export default App;
