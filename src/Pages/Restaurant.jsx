import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Restaurant.css";
import Nav_2 from "../Navigation/Nav_2";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Map from "../Modules/Map.jsx";
import Coupon from "../Modules/Coupon";

class Restaurant extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLoading: true,
    data: [],
  };
  componentDidMount() {
    axios
      .get(`http://127.0.0.1:8080/api/v1` + this.props.location.pathname)
      .then((res) => {
        console.log(res.data.data[0]);
        this.setState({
          data: res.data.data[0],
          isLoading: false,
        });
      });
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    const { isLoading, data } = this.state;
    return (
      <Container fluid className="restaurant_detail_container">
        <Nav_2></Nav_2>
        {!isLoading ? (
          <Carousel
            className="wrapper_pic_restaurant"
            responsive={responsive}
            showDots={true}>
            {this.state.data.pictures.map((pic) => (
              <img className="pic_restaurant" src={pic}></img>
            ))}
          </Carousel>
        ) : (
          console.log("error")
        )}

        <Row style={{ marginTop: "100px" }}>
          <Col xl={12}>
            <div>
              <Row>
                <Col xs ={{ span: 10, offset: 1 }} xl={{ span: 4, offset: 2 }} >
                  <div className="name_storeinfo">{this.state.data.name}</div>
                </Col>
                <Col xl={3}></Col>
              </Row>

              <Row>
                <Col xs ={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}>
                  <Coupon></Coupon>
                  </Col>
              </Row>


              <Row style={{ marginTop: "20px" }}>
                <Col className="tag" xs ={{ span: 10, offset: 1 }} xl={{ offset: 2, span: 1 }}>
                  Phone
                </Col>
                <Col className="info" xs ={{ span: 10, offset: 1 }} xl={{span:6, offset:0}}>
                  {this.state.data.phone}
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col className="tag" xs ={{ span: 10, offset: 1 }} xl={{ offset: 2, span: 1 }}>
                  Address
                </Col>
                <Col className="info" xs ={{ span: 10, offset: 1 }} xl={{span:6, offset:0}}>
                  {this.state.data.address}
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col className="tag" xs ={{ span: 10, offset: 1 }} xl={{ offset: 2, span: 1 }}>
                  Website
                </Col>
                <Col className="info" xs ={{ span: 10, offset: 1 }} xl={{span:6, offset:0}}>
                  {this.state.data.website}
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col className="tag" xs ={{ span: 10, offset: 1 }}  xl={{ offset: 2, span: 1 }}>
                  hours
                </Col>
                <Col className="info" xs ={{ span: 10, offset: 1 }} xl={{span:6, offset:0}}>
                  9:00 am - 11:30 pm / Friday - Saturday
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col className="tag" xs ={{ span: 10, offset: 1 }} xl={{ offset: 2, span: 1 }}>
                  Etc.
                </Col>
                <Col className="info" xs ={{ span: 10, offset: 1 }} xl={{span:6, offset:0}}>
                  Parking available
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className="map_col">
          <Row>
          {console.log(this.state.data.lat)}
          {console.log(this.state.data.lng)}
            <Col xl={{ span: 8, offset: 2 }}>
              <Map
                location={{ lat: parseFloat(this.state.data.lat), lng: parseFloat(this.state.data.lng)}}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                isMarkerShown={true}></Map>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Restaurant;

