import React, { Component } from "react";
import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ height }) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const handleLocationChange = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(() => pos);
        },
        () => {
          console.error("Error with determining location.");
        }
      );
    } else {
      console.error("Browser doe not support geolocation.");
    }
  };

  useEffect(() => {
    handleLocationChange();
  }, []);

  return (
    <div style={{ height: `${height}%`, width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDfedtYWy6NGX4eq-XDz1PkbpAt_uWEoqs" }}
        center={location}
        defaultZoom={18}
        disableDefaultUI={true}
        mapId={"13855d1a830ecf6d"}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
