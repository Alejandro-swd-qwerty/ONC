import React from "react";
import MapAlcaldias from "./MapAlcaldias";

function MapSection() {
  return(
  <div className= "container d-flex">
    <div className="col-md-6">
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Mapa_Electoral_Federal_de_Ciudad_de_M%C3%A9xico.png" alt=""/>
    </div>
    <MapAlcaldias/>
  </div>
  )
}

export default MapSection