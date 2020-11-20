import React, {Component} from 'react';
import './Footer.css'
import logo_footer from '../Pic/logo_footer.png'
import {Row, Col} from 'react-bootstrap'

const Footer = (props) => {
    return (
        <div className = "footer">
            <Row>
                <Col className = "footer_logo" xl= {12}>
                    <img className ="logofooter" src = {logo_footer}></img>
                </Col>
            </Row>
            <Row>
                <Col className = "footer_list" xl= {12}>
                    <ul>
                        <li>About us</li>
                        <li>Advertise</li>
                        <li>Policies & Guideline</li>
                        <li>Contact us</li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
       
}
export default Footer;