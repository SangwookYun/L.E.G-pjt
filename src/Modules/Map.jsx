import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Map.css";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withGoogleMap((props) => {
  return (
    <div className="map_col">
      <Row style={{ marginTop: "100px" }}>
        <Col xl={7}>
          <GoogleMap zoom={15} center={props.location}>
            {props.isMarkerShown && <Marker position={props.location} />}
          </GoogleMap>
        </Col>
      </Row>
    </div>
  );
});
export default Map;
