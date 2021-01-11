import React, {Component} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap'
import img_header from '../Pic/img_header.jpg';
import logo from '../Pic/logo_circle.png';
import logo_header from '../Pic/logo_header.png';
import {Link} from 'react-router-dom'
import "./Nav.css";
import icon_hotdeal from '../Pic/nav/icon_hot_deal.png'
import icon_login from '../Pic/nav/icon_login.png'
import icon_picked from '../Pic/nav/icon_picked.png'     

import icon_maginifier from '../Pic/icon_magnifier.png'
import burger from '../Pic/burger.jpg'


class Nav extends Component {
    componentDidMount() {
        console.log(window.innerWidth)
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll = (e) => {        
        e.preventDefault();
        console.log(window.innerWidth)
        console.log(window.scrollY)
        if(window.innerWidth>600) {
            if(window.scrollY<=350) {
                document.getElementById('nav_main').style.backgroundImage=`url(${img_header})`;
                document.getElementById('nav_bar').classList.remove('black');
                document.getElementById('navbar_item_hotdeal').style.color = 'white';
                document.getElementById('navbar_item_picked').style.color = 'white';
                document.getElementById('navbar_item_login').style.color = 'white';
            }else if(window.scrollY>350) {
                document.getElementById('nav_main').style.backgroundImage=null;
                document.getElementById('nav_bar').classList.add('black');
                document.getElementById('navbar_item_hotdeal').style.color = 'gray';
                document.getElementById('navbar_item_picked').style.color = 'gray';
                document.getElementById('navbar_item_login').style.color = 'gray';
            
            }
        }else {
            console.log("here?")
            if(window.scrollY<=30) {
                document.getElementById('nav_main').style.backgroundImage=`url(${img_header})`;
                document.getElementById('nav_bar').classList.remove('black');
                document.getElementById('navbar_item_hotdeal').style.color = 'white';
                document.getElementById('navbar_item_picked').style.color = 'white';
                document.getElementById('navbar_item_login').style.color = 'white';
            }else if(window.scrollY>30) {
                document.getElementById('nav_main').style.backgroundImage=null;
                document.getElementById('nav_bar').classList.add('black');
                document.getElementById('navbar_item_hotdeal').style.color = 'gray';
                document.getElementById('navbar_item_picked').style.color = 'gray';
                document.getElementById('navbar_item_login').style.color = 'gray';
            
            }
        }
        
    }


    render() {
        const style= {
            backgroundImage: `url(${img_header})`,
            width:"100%",
            height:"500px",
            backgroundSize:"cover",
            zIndex:"100"
        }
 
        return (
            <Container fluid>
                <Row>
                    <Col id = "nav_main" style = {style}>
                        <nav id = "nav_bar" className="fixedNavbar">
                            <div className = "logo">
                                
                                <img src = {logo}></img>
                                
                            </div>
                            
                            <ul className="navbar-ul">
                                <li className="nav-item">
                                <Link id="navbar_item_hotdeal" to='/'><img id="navbar_item_icon_hotdeal" className ="nav_item_icon" src={icon_hotdeal}></img>Hot Deal</Link>
                                </li>
                                <li className="nav-item">
                                <Link id = "navbar_item_picked" to='/about'><img id="nabar_item_icon_picked" className ="nav_item_icon" src={icon_picked}></img>Picked</Link>
                                </li>
                                <li className="nav-item">
                                <Link id = "navbar_item_login" to='/about'><img id="nabar_item_icon_login" className ="nav_item_icon" src={icon_login}></img>LogIn</Link>
                                </li>
                            </ul>

                            <div>
                                <img src = {burger} className = "burger_menu" ></img>
                            </div>

                        </nav>
                        <Row className ="main_row">
                            <Col xl={12}>
                                <div className = "main_title">Let's go to eat</div>
                                <div className = "main_title2">
                                    <img src = {logo_header}></img>
                                </div>
                                
                            </Col>

                            <Col xl={12}>
                                <Form.Group className = "input_form_group_nav">
                                    <div className = "input_container">
                                        <Form.Control className = "input_form" size="lg"  type="text" placeholder="Search Restaurant">
                                        
                                        </Form.Control>
                                        <div className = "wrapper_icon_magnifier_nav">
                                            <Link to = "/searchResult">
                                                <img className = "icon_maginifier"src = {icon_maginifier}></img>
                                            </Link>
                                        </div>
                                        
                                        
                                        <br />   
                                    </div>
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
            
        )
    }   
}
export default Nav;