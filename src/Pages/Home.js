import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import Hotdeal from '../Modules/Hotdeal'
import Topreview from '../Modules/Topreview';
import SortBtn from '../Modules/SortBtn';

import hotdeal1 from '../Pic/hotdeal1.jpg'
import hotdeal2 from '../Pic/hotdeal2.jpg'
import hotdeal3 from '../Pic/hotdeal3.jpg'
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


class Home extends Component {
  constructor(props) {
      
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
        this.componentDidUpdate
        const test = (window.innerWidth<600)?
            <Row className = "row_withcontents">    
                <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                    <SortBtn bgImage ={Burger}></SortBtn>
                    <SortBtn bgImage ={Cafe}></SortBtn>
                    <SortBtn bgImage ={Chicken}></SortBtn>

                </Col>
                <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                    <SortBtn bgImage ={Italian}></SortBtn>
                    <SortBtn bgImage ={Japanese}></SortBtn>
                    <SortBtn bgImage ={Korean}></SortBtn>
                    
                </Col>
                <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                    <SortBtn bgImage ={Pizza}></SortBtn>
                    <SortBtn bgImage ={Chinese}></SortBtn>
                    <SortBtn bgImage ={Vietnam}></SortBtn>
                </Col>

            </Row> :

            <Row className = "row_withcontents">    
                <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                    <SortBtn bgImage ={Burger}></SortBtn>
                    <SortBtn bgImage ={Cafe}></SortBtn>
                    <SortBtn bgImage ={Chicken}></SortBtn>

                </Col>
                <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                    <SortBtn bgImage ={Italian}></SortBtn>
                    <SortBtn bgImage ={Japanese}></SortBtn>
                    <SortBtn bgImage ={Korean}></SortBtn>
                    
                </Col>
                <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                    <SortBtn bgImage ={Pizza}></SortBtn>
                    <SortBtn bgImage ={Chinese}></SortBtn>
                    <SortBtn bgImage ={Vietnam}></SortBtn>
                </Col>

            </Row>



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
           
                <Row className>
                    <Col xl={8} style = {{margin:"auto", textAlign:"center"}}>
                    
                        <Carousel responsive = {responsive} showDots = {true}>
                            <Hotdeal bgImage = {hotdeal1} name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal2} name ="Milkcow cafe"contents="every meals 10% off until 3. Nov" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal3} name ="Anh and chi"contents="$10 discount for chicken until 30. Oct" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal1} name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal2} name ="Milkcow cafe"contents="every meals 10% off until 3. Nov" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal1} name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal2} name ="Milkcow cafe"contents="every meals 10% off until 3. Nov" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal3} name ="Anh and chi"contents="$10 discount for chicken until 30. Oct" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal1} name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Hotdeal>
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

                {test}
                
            </Container>
        )
    }   
}
export default Home;

// <Row>
// <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
//        <a className="arrow left"></a>
//         <Hotdeal bgImage = {hotdeal1} name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Hotdeal>
//         <Hotdeal bgImage = {hotdeal2} name ="Milkcow cafe"contents="every meals 10% off until 3. Nov" ></Hotdeal>
//         <Hotdeal bgImage = {hotdeal3} name ="Anh and chi"contents="$10 discount for chicken until 30. Oct" ></Hotdeal>
//         <a className="arrow right"></a>
// </Col>

// </Row>

// <Row>
//                     <Col xl={12} style ={{margin:"auto", textAlign:"center", marginTop:"15px"}}>
//                         <span className="dot_selected"></span>
//                         <span className="dot"></span>
//                         <span className="dot"></span>
//                     </Col>
//                     <Col xl={12} style ={{margin:"auto", textAlign:"center", marginBottom:"40px"}}>
//                         <div> See more promotions</div>
//                     </Col>
                    
//                 </Row>



// <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
// <a className="arrow2 left2"></a>
// <Topreview bgImage ={topreview1} menu="#brunch #egg" score="4.5" name ="OEB"contents="every meals 20% off until 31. Oct" ></Topreview>
// <Topreview bgImage ={topreview2} menu="#pasta #benedict" score="4.5" name ="Delphi"contents="every meals 20% off until 31. Oct" ></Topreview>
// <Topreview bgImage ={topreview3} menu="#lobster #pizza" score="4.5" name ="Stevenston"contents="every meals 20% off until 31. Oct" ></Topreview>
// <a className="arrow2 right2"></a>
// </Col>


// <Col xl={12} style ={{margin:"auto", textAlign:"center", marginTop:"15px"}}>
// <span className="dot2_selected"></span>
// <span className="dot2"></span>
// <span className="dot2"></span>
// </Col>
// <Col xl={12} style ={{margin:"auto", textAlign:"center", marginBottom:"40px"}}>
// <div> See more promotions</div>
// </Col>
