import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Nav from './Navigation/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchAppBar from './Navigation/SearchAppBar'



class App extends Component {


  render() {
    return (
      <Router>
        <div >
            <Nav></Nav>
            {/* <SearchAppBar></SearchAppBar> */}
            <Switch>
              <Route path = "/" exact component = {Home} />
              <Route path = "/about" component = {About} />
            </Switch>
          </div>
      </Router>
      
    );
  }
  
}

export default App;
