import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import img_header from '../Pic/img_header.jpg';
import img_header2 from '../Pic/topReviewPic1.jpg';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import menuIcon from '@material-ui/icons/Menu';


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
        if(window.scrollY>200) {
            document.getElementById('nav_main').style.backgroundImage=null;
            console.log("here")
        }else {
            document.getElementById('nav_main').style.backgroundImage=`url(${img_header})`;

          
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
                        <nav class="navbar navbar-expand-sm bg-light">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <Link to='/'>Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link to='/about'>about</Link>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Link 3</a>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                    
                    
                </Row>
            </Container>
            
        )
    }   
}
export default Nav;