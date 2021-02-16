import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import Hotdeal from '../Modules/Hotdeal'
import Topreview from '../Modules/Topreview';
import SortBtn from '../Modules/SortBtn';

import topreview1 from '../Pic/topReviewPic1.jpg'
import topreview2 from '../Pic/topReviewPic2.jpg'
import topreview3 from '../Pic/topReviewPic3.jpg'
import Burger from '../Pic/icon_burger.png'
import Cafe from '../Pic/icon_cafe.png'
import Chicken from '../Pic/icon_chicken.png'
import Italian from '../Pic/icon_italian.png'
import Japanese from '../Pic/icon_japanese.png'
import Korean from '../Pic/icon_korean.png'
import Pizza from '../Pic/icon_pizza.png'
import Chinese from '../Pic/icon_chinese.png'
import Vietnam from '../Pic/icon_vietnamese.png'
import Nav from '../Navigation/Nav'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import axios from 'axios'
import firebase from "firebase/app";

  
class Home extends Component {
  constructor(props) {
      super(props);
  }
  state = {
      restaurants : [],
      user : null
  }
  componentDidMount() {
      axios.get(`http://leg-backend.herokuapp.com/api/v1/restaurant/`).then(res=> {
          console.log(res.data);
          this.setState({restaurants: res.data.data})
      })

    firebase.auth().onAuthStateChanged((user)=> {
        if(user) {
            this.setState({
                user: user
              });
        }else {
        console.log("no user");
        }
    })

  }
    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          
        }

        return (
            <Container id="container" fluid>
                <Nav></Nav>
                <Row>
                    <Col> 
                        <div className ="header header_type1">
                            HOT DEAL
                        </div>
                    </Col>
                </Row>

                
                <Row className = "row_withcontents">
                    <Col xl={8} style = {{margin:"auto", textAlign:"center"}}>
                    
                        <Carousel responsive = {responsive} showDots = {true}>
                            {this.state.restaurants.map(restaurant => 
                                <Hotdeal key = {restaurant.newid} bgImage = {restaurant.mainPicture} id = {restaurant.newid} name = {restaurant.name} contents={restaurant.mainTitle} ></Hotdeal>)}
                        </Carousel>            
                        <div>See more promotions</div>
                    </Col>

                </Row>

                <Row className = "row_withheader row_withcolor">
                    <Col> 
                        <div className ="header header_type2">
                            TOP REVIEW
                        </div>
                    </Col>
                </Row>
                    
                <Row className = "row_withcontents row_withcolor">
                    <Col xl={8} style = {{margin:"auto", textAlign:"center"}}>
                    
                        <Carousel responsive = {responsive} showDots = {true}>
                            <Topreview bgImage ={topreview1} menu="#brunch #egg" score="4.5" name ="OEB"contents="every meals 20% off until 31. Oct" ></Topreview>
                            <Topreview bgImage ={topreview2} menu="#pasta #benedict" score="4.5" name ="Delphi"contents="every meals 20% off until 31. Oct" ></Topreview>
                            <Topreview bgImage ={topreview3} menu="#lobster #pizza" score="4.5" name ="Stevenston"contents="every meals 20% off until 31. Oct" ></Topreview>
                            <Topreview bgImage ={topreview1} menu="#brunch #egg" score="4.5" name ="OEB"contents="every meals 20% off until 31. Oct" ></Topreview>
                            <Topreview bgImage ={topreview2} menu="#pasta #benedict" score="4.5" name ="Delphi"contents="every meals 20% off until 31. Oct" ></Topreview>
                            <Topreview bgImage ={topreview3} menu="#lobster #pizza" score="4.5" name ="Stevenston"contents="every meals 20% off until 31. Oct" ></Topreview>
                        </Carousel>            
                        <div>See more promotions</div>
                    </Col>

                </Row>
                
                <Row className = "row_withheader">
                    <Col> 
                        <div className ="header header_type1">
                            SORT OF FOOD
                        </div>
                    </Col>
                </Row>

                                
                <Row className = "row_withcontents row_sortbtn">    
                    <Col className = "col_sortbtn" xl={12}>
                        <SortBtn bgImage ={Burger}></SortBtn>
                        <SortBtn bgImage ={Cafe}></SortBtn>
                        <SortBtn bgImage ={Chicken}></SortBtn>

                    </Col>
                    <Col className = "col_sortbtn" xl={12}>
                        <SortBtn bgImage ={Italian}></SortBtn>
                        <SortBtn bgImage ={Japanese}></SortBtn>
                        <SortBtn bgImage ={Korean}></SortBtn>
                        
                    </Col>
                    <Col className = "col_sortbtn" xl={12}>
                        <SortBtn bgImage ={Pizza}></SortBtn>
                        <SortBtn bgImage ={Chinese}></SortBtn>
                        <SortBtn bgImage ={Vietnam}></SortBtn>
                    </Col>

                </Row>
                
                    
            </Container>
        )
    }   
}
export default Home;
