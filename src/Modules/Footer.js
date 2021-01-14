import React from 'react';
import './Footer.css'
import logo_footer from '../Pic/logo_footer.png'
import {Row, Col} from 'react-bootstrap'
import facebook_logo from '../Pic/icon_facebook.png'
import insta_logo from '../Pic/icon_insta.png'

const moveFacebook = e => {
    window.location.href = "https://www.facebook.ca"
}
const moveInstagram = e => {
    window.location.href = "https://www.instagram.ca"
}


const Footer = () => {
    return (
        <div className = "footer">
            <Row>
                <Col xl= {4}>
                    <div  className = "footer_logo" >
                        <div className = "wrapper_logo">
                            <img className ="logofooter" src = {logo_footer}></img>
                        </div>
                        
                        <div className = "footer_list">
                            <ul>
                                <li>About us</li>
                                <li>Advertise</li>
                                <li>Policies & Guideline</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                    
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
                    <img className = "footer_icon" src ={facebook_logo} onClick = {moveFacebook}></img>
                    <img className = "footer_icon" src ={insta_logo} onClick = {moveInstagram}></img>
                </Col>
                
                <Col xl={12} style ={{textAlign:"center"}}>
                <div className = "footer_copyright">Copyright 2020 LET EAT GO. ALL rights reserved.</div>
                </Col>
            </Row>
        </div>
    )
       
}
export default Footer;