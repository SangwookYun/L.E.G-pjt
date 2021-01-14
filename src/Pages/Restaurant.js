import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './Restaurant.css'
import Slider from 'react-styled-carousel'
import Storeinfo from '../Modules/StoreInfo'
import Nav_2 from '../Navigation/Nav_2'
import pic1 from '../Pic/store_page/neroWaffle/neroWaffle1.png'
import pic4 from '../Pic/store_page/neroWaffle/neroWaffle4.png'
import pic5 from '../Pic/store_page/neroWaffle/neroWaffle5.png'
import pic6 from '../Pic/store_page/neroWaffle/neroWaffle6.png'
import pic7 from '../Pic/store_page/neroWaffle/neroWaffle7.png'
import pic8 from '../Pic/store_page/neroWaffle/neroWaffle8.png'


import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

class Restaurant extends Component {
    
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
            <Container fluid className = "restaurant_detail_container">
                <Nav_2></Nav_2>
                <Carousel responsive = {responsive} showDots = {true}>
                 <img src={pic1}></img>
                 <img src={pic4}></img>
                 <img src={pic5}></img>
                 <img src={pic6}></img>
                 <img src={pic7}></img>
                 <img src={pic8}></img>
                </Carousel>            

                <Row style={{marginTop:"100px"}}>
                    <Col xl={12}>
                        <Storeinfo></Storeinfo>
                    </Col>
                </Row>

            </Container>
        )
    }   
}
export default Restaurant;


// <Slider responsive={responsive} className = "slider_restaurant">
// <img style = {{width:"100%"}} className = "store_picture_about" src={pic1}></img>
// <img style = {{width:"100%"}} className = "store_picture_about" src={pic4}></img>
// <img style = {{width:"100%"}} className = "store_picture_about" src={pic5}></img>
// <img style = {{width:"100%"}} className = "store_picture_about" src={pic6}></img>
// <img style = {{width:"100%"}} className = "store_picture_about" src={pic7}></img>
// <img style = {{width:"100%"}} className = "store_picture_about" src={pic8}></img>
// </Slider>