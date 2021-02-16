import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import logo from '../Pic/logo_circle.png';
import {Link} from 'react-router-dom'
import "./Nav.css";
import icon_hotdeal from '../Pic/nav/icon_hot_deal.png'
import icon_login from '../Pic/nav/icon_login.png'
import icon_picked from '../Pic/nav/icon_picked.png'

import firebase from "firebase/app";
import burger from '../Pic/burger.jpg'

class Nav_2 extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        user : null,
        loggedin:false
    }
    componentDidMount() {
        console.log(window.innerWidth)
        window.addEventListener('scroll', this.handleScroll);
        firebase.auth().onAuthStateChanged((user)=> {
            if(user) {
                this.setState({
                    user: user.email,
                    loggedin:true
                  });
                console.log(user)
            }else {
            console.log("no user");
            }
        })

      }
    render() {
        return (
                <Row>
                    <Col id = "nav_main">
                        <nav id = "nav_bar" className="black nav_bar_2">
                            <div className = "logo logo_nav_2">
                                <Link to='/'>
                                    <img src = {logo}></img>
                                </Link>
                            </div>
                            <ul className="navbar-ul">
                                <li className="nav-item_2">
                                <Link to='/'><img id="navbar_item_icon_hotdeal" className ="nav_item_icon_2" alt = "alt" src={icon_hotdeal}></img>Hot Deal</Link>
                                </li>
                                <li className="nav-item_2">
                                <Link to='/about'><img id="nabar_item_icon_picked" className ="nav_item_icon_2" alt = "alt" src={icon_picked}></img>Picked</Link>
                                </li>
                                <li className="nav-item_2">
                                {
                                    this.state.loggedin?<Link to='/user'><img id="nabar_item_icon_login" className ="nav_item_icon_2" alt = "alt" src={icon_login}></img>User</Link>:
                                    <Link to='/login'><img id="nabar_item_icon_login" className ="nav_item_icon_2" alt = "alt" src={icon_login}></img>LogIn</Link>
                                }
                                
                                </li>
                            </ul>
                            <div className = "wrapper_burger">
                                <img src = {burger} className = "burger_menu" ></img>
                            </div>
                        </nav>                        
                    </Col>
                </Row>            
        )
    }   
}
export default Nav_2;