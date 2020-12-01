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

import dot from '../Pic/dot.png'



class Home extends Component {
    render() {
        return (
            <Container id="target" fluid>
                <Row>
                    <Col className ="header_home"> HOT DEAL</Col>
                </Row>
                <Row>
                    <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                           <a class="arrow left"></a>
                            <Hotdeal bgImage = {hotdeal1} name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal2} name ="Milkcow cafe"contents="every meals 10% off until 3. Nov" ></Hotdeal>
                            <Hotdeal bgImage = {hotdeal3} name ="Anh and chi"contents="$10 discount for chicken until 30. Oct" ></Hotdeal>
                            <a class="arrow right"></a>
                    </Col>

                </Row>
               
                <Row>
                    <Col xl={12} style ={{margin:"auto", textAlign:"center", marginTop:"15px"}}>
                        <span class="dot_selected"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </Col>
                    <Col xl={12} style ={{margin:"auto", textAlign:"center", marginBottom:"40px"}}>
                        <div> See more promotions</div>
                    </Col>
                    
                </Row>

                <Row className = "row_topreview">
                    <Col className ="header2_home"> TOP REVIEW</Col>
                    <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                        <a class="arrow2 left2"></a>
                        <Topreview bgImage ={topreview1} menu="#brunch #egg" score="4.5" name ="OEB"contents="every meals 20% off until 31. Oct" ></Topreview>
                        <Topreview bgImage ={topreview2} menu="#pasta #benedict" score="4.5" name ="Delphi"contents="every meals 20% off until 31. Oct" ></Topreview>
                        <Topreview bgImage ={topreview3} menu="#lobster #pizza" score="4.5" name ="Stevenston"contents="every meals 20% off until 31. Oct" ></Topreview>
                        <a class="arrow2 right2"></a>
                    </Col>

                    
                    <Col xl={12} style ={{margin:"auto", textAlign:"center", marginTop:"15px"}}>
                        <span class="dot2_selected"></span>
                        <span class="dot2"></span>
                        <span class="dot2"></span>
                    </Col>
                    <Col xl={12} style ={{margin:"auto", textAlign:"center", marginBottom:"40px"}}>
                        <div> See more promotions</div>
                    </Col>
                    

                </Row>
                <Row className = "row_sort_food">    
                    <Col className ="header_home"> SORT OF FOOD</Col>
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
          
                
            </Container>
        )
    }   
}
export default Home;