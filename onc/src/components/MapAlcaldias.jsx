import React from 'react'

import Alcaldia from './Alcaldia'

function MapAlcaldias(props) {
  return (
    <div className= "col-md-6  .col-sm-12 .col-md-12" >
    <h3 className= "text-center">Lista de alcaldias</h3>
      <h5>
      <ul class="justify-content-end">
        <Alcaldia 
        text="Alvaro Obregon" 
        to="/"
        />
        <Alcaldia 
        text="Azcapotzalco"
        to="/"
        />
        <Alcaldia 
        text="Benito Juarez"
        to="/"
        />
        <Alcaldia 
        text="Coyoacan"
        to="/"
        />
        <Alcaldia 
        text="Cuajimalpa"
        to="/"
        />
        <Alcaldia 
        text="Cuauhtemoc"
        to="/"
        />
        <Alcaldia 
        text="Gustavo A. Madero"
        to="/"
        />
        <Alcaldia 
        text="Iztacalco"
        to="/"
        />
        <Alcaldia 
        text="Iztapalapa"
        to="/"
        />
        <Alcaldia 
        text="Magdalena Contreras"
        to="/"
        />
        <Alcaldia 
        text="Miguel Hidalgo"
        to="/"
        />
        <Alcaldia 
        text="Milpa Alta"
        to="/"
        />
        <Alcaldia 
        text="Tlahuac"
        to="/"
        />
        <Alcaldia 
        text="Tlalpan"
        to="/"
        />
        <Alcaldia 
        text="Venustiano Carranza"
        to="/"
        />
        <Alcaldia 
        text="Xochimilco"
        to="/"
        />
        
        
      </ul>
      </h5>
      </div>
  )

}

export default MapAlcaldias 