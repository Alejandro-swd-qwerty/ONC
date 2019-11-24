import React from 'react'

import NavLinkItem from './NavLinkItem'
import Modal from './Modal';
import ModalTest from './ModalTest';

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/" >
        <img src="http://www.onc.org.mx/wp-content/uploads/2013/06/onc-logotipo.png" width="180" height="60" alt="logo" />
      </a>
      <ul class="nav justify-content-end">
        <NavLinkItem 
        text="Home"
        to="/"
        />
        <NavLinkItem 
        text="Reportes"
        to="/"
        />
        <Modal/>
      </ul>
    </nav >
  )

}


export default NavBar 