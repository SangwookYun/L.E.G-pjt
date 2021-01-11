import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './SearchResult.css'
import category_korean from '../Pic/category/korean.jpg';
import Nav_2 from '../Navigation/Nav_2'
import Section from '../Modules/Section'

class SearchResult extends Component {
    
    render() {
        const style= {
            backgroundImage: `url(${category_korean})`,
            width:"103%",
            height:"500px",
            backgroundSize:"cover",
            position:"relative",
            top:"20px"
        }
        
        return (
            <Container fluid className = "searchResult_detail_container">
                <Nav_2></Nav_2>
                <div className = "wrapper_searchResult">
                    <Row className ="row_searchResult">
                        <Col style = {style}>
                            <div className = "background_searchResult">
                                <Row style = {{marginTop:"30px"}}>     
                                    <Col xl={{span:3, offset:1}}>
                                        <div>
                                            Sort of List > Korean
                                        </div>
                                    </Col>                 
                                </Row>                            
                            </div>
                        </Col>
                    </Row>

                    <Row className = "row_mainTitle_searchResult">     
                        <Col xl = {12}>
                            <div className = "mainTitle_searchResult">
                                Korean
                            </div>
                        </Col>    
                        <Col xl = {12}>
                            <div className = "menus_searchResult">
                                #bibimbab #bulgogi #KoreanBBQ #Kimchi
                            </div>
                        </Col>                       
                    
                    </Row>


                </div>
                <div className = "contents_searchResult">
                    <Row>
                        <Col xl ={12} style = {{margin:"auto"}}>
                            <Section></Section>
                            <Section></Section>
                            <Section></Section>
                            <Section></Section>
                            <Section></Section>

                        </Col>
                    </Row>
                </div>
                
            </Container>
        )
    }   
}
export default SearchResult;



// <Col xl={12}>
//                         <img id = "category_img" src = {category_korean}></img>
//                     </Col>
// <div style ={{height:"300px", backgroundColor:"red"}}>
                    
//                 </div>
      