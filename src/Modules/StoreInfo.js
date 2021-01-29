import React from 'react';
import {Row, Col} from 'react-bootstrap'
import './StoreInfo.css'
import map from '../Pic/store_page/neroWaffle/maps.png';
import mock_review from '../Pic/store_page/neroWaffle/review.png';
import Coupon from './Coupon'

const Storeinfo = (props) => {
    return (
        <div>
            <Row>
                <Col xl={{span:4, offset:2}}>
                    <div className = "name_storeinfo">
                        Nero waffles
                    </div>
                    
                </Col>
                <Col xl={3}>

                </Col>

            </Row>
            <Row>
                <Col xl={{span:10, offset:2}}>
                    <Coupon></Coupon>
                </Col>
            </Row>
            <Row style={{marginTop:"20px"}}> 
                <Col className = "tag" xl={{offset:2, span:1}}>Phone</Col>
                <Col className = "info" xl={6}>(604) 428 9177</Col>
            </Row>
            <Row style={{marginTop:"10px"}}> 
                <Col className = "tag" xl={{offset:2, span:1}}>Address</Col>
                <Col className = "info" xl={6}>1002 Seymour St, Vancouver BC V6B 3M6</Col>
            </Row>
            <Row style={{marginTop:"10px"}}> 
                <Col className = "tag" xl={{offset:2, span:1}}></Col>
                <Col className = "info" xl={6}>1703 Robson St, Vancouver, BC V6G 1C8</Col>
            </Row>
            <Row style={{marginTop:"10px"}}> 
                <Col  className = "tag" xl={{offset:2, span:1}}>Hours</Col>
                <Col className = "info" xl={6}>9:00 am - 10:30 pm / Sunday - Thursday</Col>
            </Row>
            <Row style={{marginTop:"10px"}}> 
                <Col className = "tag"  xl={{offset:2, span:1}}></Col>
                <Col className = "info" xl={6}>9:00 am - 11:30 pm / Friday - Saturday</Col>
            </Row>
            <Row style={{marginTop:"10px"}}> 
                <Col className = "tag"  xl={{offset:2, span:1}}>Etc.</Col>
                <Col className = "info" xl={6}>Parking available</Col>
            </Row>
            <Row style={{marginTop:"10px"}}> 
                <Col className = "tag"  xl={{offset:2, span:1}}></Col>
                <Col className = "info" xl={7}>
                    <img alt = "alt" className="map_storeinfo" src ={map}></img>
                </Col>
            </Row>
            <Row style={{marginTop:"10px"}}> 
                <Col xl ={{offset:2, span:10}} style={{margin:"auto"}}>
                
                </Col>
                
            </Row>
            <Row>
                <Col xl={{offset:2, span:8}}>
                    <div>Reviews</div>
                    
                <hr></hr>
                </Col>
            </Row>
            
            <Row>
                <Col xl={{offset:2, span:8}}>
                    <img style={{width:"100%"}} alt = "alt" src={mock_review}>

                    </img>
                </Col>
            </Row>
            
            
        </div>
    )
       
}
export default Storeinfo; 