import GoogleMapReact from "google-map-react";
import React from "react";

const defaultProps = {
  center: {
    lat: 30.4508291,
    lng: 74.8828754,
  },
  zoom: 14,
};

const AnyReactComponent = ({ lat, lng, text }) => (
  <div
    lat={lat}
    lng={lng}
    style={{ border: "1px solid #3f51b5", borderRadius: "10px" }}
  >
    {text}
  </div>
);

const GoogleMap = () => (
  <div style={{ height: "400px", width: "100%" }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: "AIzaSyCQiTOpD9n7XK5AodO-S2ngg0CtcU01o_Q" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={30.4508291}
        lng={74.8828754}
        text={"Kheti Virasat Mission"}
      />
    </GoogleMapReact>
  </div>
);

export default GoogleMap;
