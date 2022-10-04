/* 
Just as we used anchor tags to navigate. Here we use Link tag. Instead of href use to
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