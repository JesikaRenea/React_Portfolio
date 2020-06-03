import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'materialize-css';
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
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/fs-portfolio" component={FsPortfolio} />
          </ Switch>
          <Redirect to="/about" />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
