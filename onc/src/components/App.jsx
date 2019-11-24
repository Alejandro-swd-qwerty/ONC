import React from 'react'

import Home from '../views/Home'
import NavBar from './NavBar'
import Banner from './Banner'
import MapSection from "./MapSection";


function App () {
    return(
        <div>
            <NavBar />
            <MapSection/>
            <Home />
        </div>
    )
}

export default App