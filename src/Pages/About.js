import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import Slider from 'react-styled-carousel'
import Storeinfo from '../Modules/StoreInfo'

import pic1 from '../Pic/store_page/neroWaffle/neroWaffle1.png'
import pic2 from '../Pic/store_page/neroWaffle/neroWaffle2.png'
import pic3 from '../Pic/store_page/neroWaffle/neroWaffle3.png'
import pic4 from '../Pic/store_page/neroWaffle/neroWaffle4.png'
import pic5 from '../Pic/store_page/neroWaffle/neroWaffle5.png'
import pic6 from '../Pic/store_page/neroWaffle/neroWaffle6.png'
import pic7 from '../Pic/store_page/neroWaffle/neroWaffle7.png'
import pic8 from '../Pic/store_page/neroWaffle/neroWaffle8.png'

class About extends Component {
    
    render() {
        const responsive = [
            { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
            { breakPoint: 760, cardsToShow: 4 },
          ];
        return (
            <Container id="target" fluid>
                <Slider responsive={responsive}>
                    <img style = {{width:"100%"}} className = "store_picture_about" src={pic1}></img>
                    <img style = {{width:"100%"}} className = "store_picture_about" src={pic2}></img>
                    <img style = {{width:"100%"}} className = "store_picture_about" src={pic3}></img>
                    <img style = {{width:"100%"}} className = "store_picture_about" src={pic4}></img>
                    <img style = {{width:"100%"}} className = "store_picture_about" src={pic5}></img>
                    <img style = {{width:"100%"}} className = "store_picture_about" src={pic6}></img>
                    <img style = {{width:"100%"}} className = "store_picture_about" src={pic7}></img>
                    <img style = {{width:"100%"}} className = "store_picture_about" src={pic8}></img>
                </Slider>

                <Row style={{marginTop:"20px"}}>
                    <Col xl={12}>
                        <Storeinfo></Storeinfo>
                    </Col>
                </Row>

            </Container>
        )
    }   
}
export default About;