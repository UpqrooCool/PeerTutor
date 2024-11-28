import { useRef, useEffect, useState } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";


const MapComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const upqrooLocation = {
    lat: 21.181076049804688,
    lng: -86.90657806396484,
  };

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center: upqrooLocation,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: upqrooLocation,
        map: newMap,
        title: "Universidad Politécnica de Quintana Roo",
      });

      setMap(newMap);
    }
  }, [map]);

  return <div ref={ref} style={{ height: "300px", width: "100%" }}></div>;
};

const GoogleMap = () => {
  const render = (status: Status) => {
    if (status === Status.LOADING) return <h3>Loading...</h3>;
    if (status === Status.FAILURE) return <h3>Error loading map</h3>;
    return <MapComponent />;
  };

  return (
    <Wrapper
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}
      render={render}
    >
      <MapComponent />
    </Wrapper>
  );
};

export default GoogleMap;
