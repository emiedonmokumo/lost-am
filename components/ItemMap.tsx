"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState, useCallback } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 6.5244, // Default Lagos
  lng: 3.3792,
};

export default function ItemMap() {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  const [marker, setMarker] = useState(center);

  const handleClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setMarker({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  }, []);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={marker}
      zoom={12}
      onClick={handleClick}
    >
      <Marker position={marker} />
    </GoogleMap>
  );
}
