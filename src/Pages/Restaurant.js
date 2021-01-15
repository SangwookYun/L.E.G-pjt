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

import axios from 'axios'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

class Restaurant extends Component {
  constructor(props) {
      super(props);
  }
  state = {
      data : []
  }
  componentDidMount() {

      axios.get(`http://127.0.0.1:8080/api/v1`+this.props.location.pathname).then(res=> {
          console.log(res.data.data[0]);
          this.setState({data: res.data.data[0]})
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
              items: 4
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
        console.log(this.state.data)
        return (
          
            <Container fluid className = "restaurant_detail_container">
                <Nav_2></Nav_2>
                <Carousel className = "wrapper_pic_restaurant" responsive = {responsive} showDots = {true}>
                 <img className = "pic_restaurant" src={pic1}></img>
                 <img className = "pic_restaurant" src={pic4}></img>
                 <img className = "pic_restaurant" src={pic5}></img>
                 <img className = "pic_restaurant" src={pic6}></img>
                 <img className = "pic_restaurant" src={pic7}></img>
                 <img className = "pic_restaurant" src={pic8}></img>
                </Carousel>            

                <Row style={{marginTop:"100px"}}>
                    <Col xl={12}>
                    <div>
                    <Row>
                        <Col xl={{span:4, offset:2}}>
                            <div className = "name_storeinfo">
                                {this.state.data.name}
                            </div>
                            
                        </Col>
                        <Col xl={3}>
        
                        </Col>
        
                    </Row>
                   
                    <Row style={{marginTop:"20px"}}> 
                        <Col className = "tag" xl={{offset:2, span:1}}>Phone</Col>
                        <Col className = "info" xl={6}>{this.state.data.phone}</Col>
                    </Row>
                    <Row style={{marginTop:"10px"}}> 
                        <Col className = "tag" xl={{offset:2, span:1}}>Address</Col>
                        <Col className = "info" xl={6}>{this.state.data.address}</Col>
                    </Row>
                    <Row style={{marginTop:"10px"}}> 
                        <Col  className = "tag" xl={{offset:2, span:1}}>Website</Col>
                        <Col className = "info" xl={6}>{this.state.data.website}</Col>
                    </Row>
                    <Row style={{marginTop:"10px"}}> 
                        <Col className = "tag"  xl={{offset:2, span:1}}>hours</Col>
                        <Col className = "info" xl={6}>9:00 am - 11:30 pm / Friday - Saturday</Col>
                    </Row>
                    <Row style={{marginTop:"10px"}}> 
                        <Col className = "tag"  xl={{offset:2, span:1}}>Etc.</Col>
                        <Col className = "info" xl={6}>Parking available</Col>
                    </Row>
                    
                    
                    
                </div>    

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
// // </Slider>

// <Row style={{marginTop:"10px"}}> 
//                         <Col className = "tag"  xl={{offset:2, span:1}}></Col>
//                         <Col className = "info" xl={7}>
//                             <img className="map_storeinfo" src ={map}></img>
//                         </Col>
//                     </Row>
//                     <Row style={{marginTop:"10px"}}> 
//                         <Col xl ={{offset:2, span:10}} style={{margin:"auto"}}>
                        
//                         </Col>
                        
//                     </Row>
//                     <Row>
//                         <Col xl={{offset:2, span:8}}>
//                             <div>Reviews</div>
                            
//                         <hr></hr>
//                         </Col>
//                     </Row>
                    
//                     <Row>
//                         <Col xl={{offset:2, span:8}}>
//                             <img style={{width:"100%"}} src={mock_review}>
        
//                             </img>
//                         </Col>
//                     </Row>

// <Row>
// <Col xl={{span:10, offset:2}}>
//     <Coupon></Coupon>
// </Col>
// </Row>