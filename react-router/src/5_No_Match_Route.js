/**
This is used for when a route is not defined. It is like default case
path for default is *
*/

import { Component } from "react";

class NoMatchParent extends Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return <h1>Page not valid</h1>
    }

}
export default NoMatchParent