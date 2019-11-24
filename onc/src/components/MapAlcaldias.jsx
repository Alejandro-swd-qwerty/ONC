import React from 'react'

import Alcadia from './Alcadia'

function MapAlcaldias() {
  return (
    <div className= "col-md-6  .align-middle p-5" >
    <h5 className= "text-center">Lista de alcaldias</h5>
      
      <ul class="nav justify-content-end">
        <NavLinkItem 
        text=""
        to="/"
        />
        <NavLinkItem 
        text="Reportes"
        to="/"
        />
        <NavLinkItem 
        text="Descargas"
        to="/"
        />
      </ul>
      </div>
  )

}

export default MapAlcaldias 