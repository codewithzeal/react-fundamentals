/* 
When you have multiple nested routes and you want one of the routes to be
rendered at parent level by default without being redirected to own level, 
we make use of index route. Let's say we have
child routes B,C,D and their parent A. We render B at A itself. but define links 
for other two. We define link for B also. When we click B route changes. But when
we visit A route is for A but B is shown. Once you visit C or D. Then B is
only availiable at its child route and not at A. 
*/
import { Component } from "react";
import {Outlet} from 'react-router-dom'
import { Link } from "react-router-dom";
class ChildB extends Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return <h1>I am child B and I display with my Parent A by default</h1>
    }
}


class ChildC extends Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return <h1>I am child C</h1>
    }
}


class ChildD extends Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return <h1>I am child D</h1>
    }
}


class ParentA extends Component
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
                    ParrentA 
                </h1>
                    <br/>
                    <nav>
                        <ul>
                            <li>
                                <Link to='childB'>Child B</Link>
                            </li>
                            <li>
                                <Link to='childC'>Child C</Link>
                            </li>
                            <li>
                                <Link to='childD'>Child D</Link>
                            </li>
                        </ul>
                    </nav>
               
                <Outlet/>
            </>
        )
    }
}

export {ParentA,ChildB,ChildC,ChildD}