import React, {Component} from 'react';
import {ReactNavbar} from "react-responsive-animate-navbar";
import Logo from '../Pic/logo_circle.png'

class SearchAppBar extends Component {
  render() {
    return (
      <ReactNavbar id = "test"
        style = {{backgroundColor:"red"}}
        color="rgb(25, 25, 25)"
        logo={Logo}
        menu={[
          { name: "HOME", to: "/" },
          { name: "HOT DEAL", to: "/articles" },
          { name: "PICKED", to: "/about" },
          { name: "LOGIN", to: "/contact" },
        ]}
      />
    );
  }
}

export default SearchAppBar;