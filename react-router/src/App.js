/* 
Parent file for all components. Used for router logic.
*/

import {HomeComponent} from './1_Intro'
import {AboutComponent} from './1_Intro'
import {Routes,Route} from 'react-router-dom'
import React, { Component } from 'react';


class App extends Component{

    constructor()
    {
        super()
    }

    render()
    {
        return(
        <Routes>

            <Route path='/home' element={<HomeComponent/>}/>
            <Route path='/about' element={<AboutComponent/>}/>
        </Routes>)
    }

}

export default App