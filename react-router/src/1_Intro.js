/* 
1. Use to create and navigate to routes that define our web app
*/
/* 
Let us create a basic route in which home shows home page and about shows about
*/

/**

Wrap your ultimate parent component that is App.js within <BrowserRoute> 
and wrap components within App.js with <Route> To introduce routes

*/

import React, { Component } from 'react';


class HomeComponent extends Component{
    constructor()
    {
        super()
    }

    render()
    {
        return <h1>I am home</h1>
    }
}

class AboutComponent extends Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return <h1>I am about</h1>
    }
}

export  {HomeComponent,AboutComponent}