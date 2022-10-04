/**
Lets say we have a navigation bar that take to product. Now on reaching product
we have naviagtion bar for description and cost. So we have routes within Routes


                            product
                           /       \
                          /         \
                         /           \
'/product/description'  /             \ '/product/cost'

now to tell Router where to render this nested component we use <Outlet> where-ever
we place this components in sub route starts rendering fromt there

*/

import { Component } from "react";
import {Outlet} from 'react-router-dom'
import { Link } from "react-router-dom";
class Description extends Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return <h1>I am description, child route1</h1>
    }
}


class Cost extends Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return <h1>I am cost, child route2</h1>
    }
}

class Product extends Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return(
            <>
                <h1>
                    Parrent product navBar has further two nav places
                    <br/>
                    <nav>
                        <ul>
                            <li>
                                <Link to='description'>description</Link>
                            </li>
                            <li>
                                <Link to='cost'>feature</Link>
                            </li>
                        </ul>
                    </nav>
                </h1>
                <Outlet/>
            </>
        )
    }
}

export {Cost,Description,Product}