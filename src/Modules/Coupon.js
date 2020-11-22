import React, {Component} from 'react';
import './Coupon.css'
import {Row, Col} from 'react-bootstrap'



const Coupon = (props) => {
    return (
        <div>        
            <Row>
                <Col xl={10} className= "coupon">
                    <div>
                        <div className = "couponContents"> All waffle menus discount 20% until 31. Nov.2020</div>
                        <div className ="coupondesc"> - Click the 'Get Coupon' button on the right side and download a discount coupon.</div>
                        <div className ="coupondesc"> - It will be on your coupon box. (A coupon per person)</div>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>                        
        </div>

        
    )
       
}
export default Coupon; 