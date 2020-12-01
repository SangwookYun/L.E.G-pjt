import React, {Component} from 'react';
import './Footer.css'
import logo_footer from '../Pic/logo_footer.png'
import {Row, Col} from 'react-bootstrap'
import facebook_logo from '../Pic/icon_facebook.png'
import insta_logo from '../Pic/icon_insta.png'

const Footer = (props) => {
    return (
        <div className = "footer">
            <Row>
                <Col className = "footer_logo" xl= {4}>
                    <img className ="logofooter" src = {logo_footer}></img>
                    <Col className = "footer_list" xl= {12}>
                    <ul>
                        <li>About us</li>
                        <li>Advertise</li>
                        <li>Policies & Guideline</li>
                        <li>Contact us</li>
                    </ul>
                </Col>
                </Col>
                <Col className ="footer_form" xl={{span:6, offset:1}}>
                    <div>
                        <input placeholder ="Name" className="footer_input"></input>
                        <input placeholder ="Email address" className="footer_input"></input>
                    </div>
                    <div>
                        <textarea placeholder ="Message" className = "footer_textarea">

                        </textarea>
                    </div>
                    <div>
                        <button className="footer_Button">Submit </button>
                    </div>
                    
                </Col>
            </Row>
            <Row>
                <Col xl={12} style ={{textAlign:"center"}}>
                    <img className = "footer_icon" src ={facebook_logo}></img>
                    <img className = "footer_icon" src ={insta_logo}></img>
                </Col>
                
                <Col xl={12} style ={{textAlign:"center"}}>
                <div className = "footer_copyright">Copyright 2020 LET EAT GO. ALL rights reserved.</div>
                </Col>
            </Row>
        </div>
    )
       
}
export default Footer;