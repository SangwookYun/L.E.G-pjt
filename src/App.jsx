import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Restaurant from "./Pages/Restaurant";
import SearchResult from "./Pages/SearchResult";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup";
import User from "./Pages/User";
import Footer from "./Modules/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />{" "}
            <Route path="/about" component={About} />{" "}
            <Route path="/restaurant/:id" component={Restaurant} />{" "}
            <Route path="/searchResult" component={SearchResult} />{" "}
            <Route path="/login" component={Login} />{" "}
            <Route path="/register" component={Signup} />{" "}
            <Route path="/user" component={User} />{" "}
          </Switch>{" "}
          <Footer> </Footer>{" "}
        </div>{" "}
      </Router>
    );
  }
}

export default App;
