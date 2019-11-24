import React from 'react'

import NavLinkItem from './NavBarNav'

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/" >
                <img src="..." width="30" height="30" alt="logo" />
            </a>
            <NavLinkItem />
        </nav >
    )
}

export default NavBar 