import React, { useEffect } from "react";

declare global {
  interface Window {
    initMap: () => void;
  }
}

const GoogleMap = () => {
  useEffect(() => {
    // Cargar el script de Google Maps con tu API key
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC4-z8fc_oh8kvqTZhmWyGXeEWQg_oICXQ&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    // Definir la función initMap globalmente
    window.initMap = function () {
      if (typeof google !== "undefined" && google.maps) {
        const location = { lat: 21.1191, lng: -86.8458 }; // Coordenadas de la Universidad Politécnica de Quintana Roo
        const mapElement = document.getElementById("map");

        // Asegurarse de que el elemento con id "map" no sea null
        if (mapElement) {
          const map = new google.maps.Map(mapElement as HTMLElement, {
            center: location,
            zoom: 15,
          });

          // Agregar un marcador en la ubicación de la UPQROO
          new google.maps.Marker({
            position: location,
            map: map,
            title: "Universidad Politécnica de Quintana Roo",
          });
        }
      }
    };

    // Limpiar el script en el desmontaje del componente
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "400px",
        marginTop: "30px",
        border: "1px solid #ccc",
      }}
    ></div>
  );
};

export default GoogleMap;
