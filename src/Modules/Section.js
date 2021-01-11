import React from 'react';
import './Section.css'
import {Row, Col} from 'react-bootstrap'
import Img1 from '../Pic/store_page/neroWaffle/neroWaffle1.png'
import Img2 from '../Pic/store_page/neroWaffle/neroWaffle2.png'


const Section = (props) => {
    return (
        <div className = "section_container">        
            <Row>
                <Col xl={8}>
                    <Row>
                        <Col>
                            <div className = "res_name_section">
                            Nero Waffles 
                            </div>
                            <div className = "res_score_section">
                            4.5
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl = {2}>
                            <div className = "res_category_section">
                            Phone : 
                            </div>
                        </Col>
                        <Col>
                            <div className = "res_desc_section">
                            (604) 428 9177
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl = {2}>
                            <div className = "res_category_section"> 
                            Address
                            </div>
                        </Col>
                        <Col>
                            <div className = "res_desc_section">
                            1002 Seymour St, Vancouver BC V6B 3M6
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xl={4}>
                    <div>
                        <img className = "pic_section" src = {Img1}></img>
                        <img className = "pic_section" src = {Img2}></img>
                    </div>
                </Col>
            </Row>                        
        </div>

        
    )
       
}
export default Section; 