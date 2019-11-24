import React from 'react'

import Home from '../views/Home'
import NavBar from './NavBar'
import Banner from './Banner'

function App () {
    return(
        <div>
            <NavBar />
            <Banner />
            <Home />
        </div>
    )
}

export default App