/* 
Just as we used anchor tags to navigate. Here we use Link tag. Instead of href use to
if we use "/" then it is rendered from root.
if we simply give url name without a slash it is rendered after the current url
if current url is /product
and to='new'
then new url=/product/new
if to='/new'
new url=/new
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkComponent extends Component
{
    constructor()
    {
        super()
    }

    render()
    {
        return(
            <nav>
                <ul>
                    <li key='0'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li key='1'>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default LinkComponent