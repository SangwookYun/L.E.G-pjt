import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './Login_signup.css'
import Nav_2 from '../Navigation/Nav_2'
import firebase from "firebase/app";
import "firebase/auth"
export default class Login extends Component {
    state = {
        email: "",
        password: "",
    }
    onEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }
    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.email)
        let email = this.state.email
        let password = this.state.password
        console.log(this.state.email)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
            }).catch((e) => {
                console.log(e.message);
            })
    }


    render() {
        return ( <
            Container fluid className = "container_auto" >
            <
            Nav_2 > < /Nav_2> <Row>

            <
            Col xl = { 4 }
            style = {
                { margin: "auto", textAlign: "center" }
            } >
            <
            form className = "wrapper_login" >
            <
            h3 > Sign In < /h3>

            <
            div className = "form-group" >
            <
            label > Email address < /label> <
            input id = "loginEmail"
            onChange = { this.onEmailChange }
            type = "email"
            className = "form-control"
            placeholder = "Enter email" / >
            <
            /div>

            <
            div className = "form-group" >
            <
            label > Password < /label> <
            input id = "loginPassword"
            onChange = { this.onPasswordChange }
            type = "password"
            className = "form-control"
            placeholder = "Enter password" / >
            <
            /div>

            <
            div className = "form-group" >
            <
            div className = "custom-control custom-checkbox" >
            <
            input type = "checkbox"
            className = "custom-control-input"
            id = "customCheck1" / >
            <
            label className = "custom-control-label"
            htmlFor = "customCheck1" > Remember me < /label> < /
            div > <
            /div>

            <
            button type = "submit"
            className = "btn btn-primary btn-block"
            onClick = { this.handleSubmit } > Submit < /button> <
            p className = "forgot-password text-right" >
            Forgot < a href = "#" > password ? < /a> < /
            p > <
            p className = "forgot-password text-right" >
            Need < a href = "/register" > Register ? < /a> < /
            p > <
            /form> < /
            Col > <
            /Row>

            <
            /Container>
        );
    }
}