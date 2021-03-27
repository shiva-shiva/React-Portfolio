import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/Main/main'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Portfolio from './components/Portfolio/portfolio'
import Navbar from './components/Navbar/navbar'
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
