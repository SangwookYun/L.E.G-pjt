import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Hotdeal from '../Modules/Hotdeal'
import Topreview from '../Modules/Topreview';
import SortBtn from '../Modules/SortBtn';
import './Home.css'
import Burger from '../Pic/icon_burger.png'
import Cafe from '../Pic/icon_cafe.png'
import Chicken from '../Pic/icon_chicken.png'
import Italian from '../Pic/icon_italian.png'
import Japanese from '../Pic/icon_japanese.png'
import Korean from '../Pic/icon_korean.png'
import Pizza from '../Pic/icon_pizza.png'
import Chinese from '../Pic/icon_chinese.png'
import Vietnam from '../Pic/icon_vietnamese.png'


class Home extends Component {
    render() {
        return (
            <Container id="target" fluid>
                <Row>
                    <Col className ="header_home"> Hot deal</Col>
                </Row>
                <Row>
                 <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                        <Hotdeal name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Hotdeal>
                        <Hotdeal name ="Milkcow cafe"contents="every meals 10% off until 3. Nov" ></Hotdeal>
                        <Hotdeal name ="Anh and chi"contents="$10 discount for chicken until 30. Oct" ></Hotdeal>
                    </Col>
                </Row>
                <Row className = "row_topreview">
                    <Col className ="header2_home"> Top Review</Col>
                    <Col xl={12} style = {{margin:"auto", textAlign:"center"}}>
                        <Topreview name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Topreview>
                        <Topreview name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Topreview>
                        <Topreview name ="Sweet Memory"contents="every meals 20% off until 31. Oct" ></Topreview>
                    </Col>
                </Row>
                <Row className = "row_sort_food">    
                    <Col className ="header_home"> Sort of Food</Col>
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
                <Row>
                    
                </Row>
                <Row className = "footer">    
                    
                </Row>
            </Container>
        )
    }   
}
export default Home;