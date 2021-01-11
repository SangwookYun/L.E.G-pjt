import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Restaurant from './Pages/Restaurant'
import SearchResult from './Pages/SearchResult'
import Footer from './Modules/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div >
            <Switch>
              <Route path = "/" exact component = {Home} />
              <Route path = "/about" component = {About} />
              <Route path = "/restaurant" component = {Restaurant} />
              <Route path = "/searchResult" component = {SearchResult} />
            </Switch>
            <Footer></Footer>
          </div>
      </Router>
      
    );
  }
  
}

export default App;
