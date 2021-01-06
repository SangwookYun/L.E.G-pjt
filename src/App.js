import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Restaurant from './Pages/Restaurant'
import Nav from './Navigation/Nav'
import Footer from './Modules/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchAppBar from './Navigation/SearchAppBar'



class App extends Component {


  render() {
    return (
      <Router>
        <div >
       
            {/* <SearchAppBar></SearchAppBar> */}
            <Switch>
              <Route path = "/" exact component = {Home} />
              <Route path = "/about" component = {About} />
              <Route path = "/restaurant" component = {Restaurant} />
            </Switch>
            <Footer></Footer>
          </div>
      </Router>
      
    );
  }
  
}

export default App;
