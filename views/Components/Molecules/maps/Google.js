/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// react plugin used to create google maps
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// reactstrap components
import { Card, Container, Row } from 'reactstrap';
// core components

const MapCustom = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={props.defaultCenter}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#444444' }],
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{ color: '#f2f2f2' }],
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'all',
            stylers: [{ visibility: 'simplified' }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit',
            elementType: 'all',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#5e72e4' }, { visibility: 'on' }],
          },
        ],
      }}
    >
      <Marker position={props.defaultCenter} />
    </GoogleMap>
  )),
);

const MapDefault = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={props.defaultCenter}
      center={props.center}
      defaultOptions={{
        scrollwheel: true,
      }}
      onClick={props.onMapClick}
    >
      {props.companies ? props.companies : <Marker position={props.defaultCenter} />}
      <Marker position={{ lat: props.lat, lng: props.lng }} />
      <Marker position={props.markerPosition} />
    </GoogleMap>
  )),
);

class Google extends React.Component {
  render() {
    const { lat, lng, companies, markerPosition, onMapClick, height } = this.props;
    return (
      <>
        <Container fluid>
          <Row className="m-0">
            <div className={`col p-0 ${height ? height : ''}`}>
              <Card className={`border-0 mb-0 ${height ? 'h-100' : ''}`}>
                <MapDefault
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBHQl7lKVzqxKiLvKVmeY0S7LkVy-HVSY"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div className="map-canvas" id="map-custom" />}
                  mapElement={<div style={{ height: `100%`, borderRadius: 'inherit' }} />}
                  defaultCenter={{ lat: lat, lng: lng }}
                  center={{ lat: lat, lng: lng }}
                  companies={companies}
                  markerPosition={markerPosition}
                  onMapClick={onMapClick}
                  lat={lat}
                  lng={lng}
                />
              </Card>
            </div>
          </Row>
          {/*<Row>*/}
          {/*  <div className="col">*/}
          {/*    <Card className="border-0">*/}
          {/*      <MapDefault*/}
          {/*        googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"*/}
          {/*        loadingElement={<div style={{ height: `100%` }} />}*/}
          {/*        containerElement={<div style={{ height: `600px` }} className="map-canvas" id="map-default" />}*/}
          {/*        mapElement={<div style={{ height: `100%`, borderRadius: 'inherit' }} />}*/}
          {/*      />*/}
          {/*    </Card>*/}
          {/*  </div>*/}
          {/*</Row>*/}
        </Container>
      </>
    );
  }
}

export default Google;
