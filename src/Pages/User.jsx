import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./User.css";
import Nav_2 from "../Navigation/Nav_2";
import firebase from "firebase/app";
import "firebase/auth";

export default class User extends Component {
  
  signedout = () => {
    firebase.auth().signOut().then(()=> {
      console.log("signed out");
      window.location.href='./'
    })
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=> {
      if(user) {
        console.log(user);
      }else {
        console.log("no user");
      }
    })
  }
  render() {
    return (
      <Container fluid className="container_auto">
        <Nav_2> </Nav_2>{" "}
        <Row>
          <Col>
            <div style = {{height:"500px"}}>
            future development 
            asdlkjfa
            future development 
              asdlkjfa
              future development 
              asdlkjfa
              future development 
              asdlkjfa
              future development 
              asdlkjfa
            
              kasd
            </div>
            <div>
            user information here
            </div>
            <button onClick = {this.signedout}>Signed Out</button>
          </Col>
        
        </Row>
      </Container>
    );
  }
}
