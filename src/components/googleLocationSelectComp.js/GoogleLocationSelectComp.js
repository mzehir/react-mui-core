import React from "react";

import { GOOGLE_MAPS_API_KEY } from "../../utils/config/config";

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const GoogleLocationSelectComp = ({ location, onClick }) => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "700px",
        }}
        center={location}
        zoom={8}
        onClick={onClick}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleLocationSelectComp;
