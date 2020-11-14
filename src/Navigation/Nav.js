import React, {Component} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap'
import img_header from '../Pic/img_header.jpg';
import logo from '../Pic/logo_circle.png';
import img_header2 from '../Pic/topReviewPic1.jpg';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import menuIcon from '@material-ui/icons/Menu';
import "./Nav.css";

class Nav extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll = (e) => {
        let element = e.target;
        
        console.log(window.scrollY)
        if(window.scrollY<=350) {
            document.getElementById('nav_main').style.backgroundImage=`url(${img_header})`;
            document.getElementById('nav_bar').classList.remove('black');
            console.log("top")
        }else if(window.scrollY>350) {
            document.getElementById('nav_main').style.backgroundImage=null;
            document.getElementById('nav_bar').classList.add('black');
            console.log("here")
        }
    }

    render() {
        const style= {
            backgroundImage: `url(${img_header})`,
            width:"100%",
            height:"500px",
            backgroundSize:"cover"
        }
 
        return (
            // <Container fluid onScroll={()=>this.handleScroll}>
            <Container fluid>
                <Row>
                    {/* <Col id = "nav_main" style= {style}> */}
                    <Col id = "nav_main" style = {style}>
                        {/* <img id = "nav_main2"src={img_header}></img> */}
                        <nav id = "nav_bar" className="fixedNavbar">
                            <div className = "logo">
                                <img src = {logo}></img>
                            </div>
                            <ul className="navbar-ul">
                                <li className="nav-item">
                                <Link to='/'>Hot Deal</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/about'>Picked</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/about'>LogIn</Link>
                                </li>
                            </ul>
                        </nav>
                        <Row className ="main_row">
                            <Col xl={12}>
                                <div className = "main_title">Let's go to eat</div>
                                <div className = "main_title2">
                                    <div className = "main_title3">LET EAT </div>
                                    <div className = "main_title4">GO</div>
                                </div>
                                
                            </Col>

                            <Col xl={12}>
                                <Form.Group style ={{width:"50%", textAlign:"center", margin:"auto"}}>
                                    <Form.Control size="lg"  type="text" placeholder="Large text" />
                                    <br />
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