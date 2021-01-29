import React, { Component } from "react";
import './Login_signup.css'
import {Container, Row, Col} from 'react-bootstrap'
import Nav_2 from '../Navigation/Nav_2'
import axios from 'axios'


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        email: "",
        password: "",
        firstName : "",
        lastName : ""
    }
    onEmailChange = e => {
        this.setState({
            email : e.target.value
        })
    }
    onPasswordChange = e => {
        this.setState({
            password : e.target.value
        })
    }
    onFirstnameChange = e => {
        this.setState({
            firstName : e.target.value
        })
    }
    onLastnameChange = e => {
        this.setState({
            lastName : e.target.value
        })
    }
    handleSubmit = (e)=> {

        e.preventDefault()
        const userData = {
            "email": this.state.email,
            "password":this.state.password,
            "firstName":this.state.firstName,
            "lastName": this.state.lastName
        }
        console.log(userData);
        axios.post(`http://127.0.0.1:8080/api/v1/auth/register`, userData).then(res => {
            console.log(res)
        })
        alert("Uuser created")
        window.location.href = "/"
    }
    
    render() {
        return (

            <Container fluid className = "container_auto">
            <Nav_2></Nav_2>
            <Row>

                <Col xl = {4} style = {{margin:"auto", textAlign:"center"}}>
                <form className = "wrapper_signup">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" onChange  = {this.onFirstnameChange} id = "firstname_signup" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" onChange  = {this.onLastnameChange}  id = "lastname_signup" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange  = {this.onEmailChange} id = "email_signup" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange  = {this.onPasswordChange} id = "password_signup" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" onClick = {this.handleSubmit} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
                </Col>
            </Row>
            
            </Container>
            
        );
    }
}