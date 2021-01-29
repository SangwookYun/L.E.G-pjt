import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import './Login_signup.css'
import Nav_2 from '../Navigation/Nav_2'

export default class Login extends Component {
    render() {
        return (
            <Container fluid className = "container_auto">
            <Nav_2></Nav_2>
            <Row>

                <Col xl = {4} style = {{margin:"auto", textAlign:"center"}}>
                    <form className = "wrapper_login">
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                        <p className="forgot-password text-right">
                            Need  <a href="/register">Register?</a>
                        </p>
                    </form>
                </Col>
            </Row>
            
            </Container>
        );
    }
}