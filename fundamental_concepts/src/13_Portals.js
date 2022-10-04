/* 
1. Portals provide a way to render component in places other than root element
2. Events rendered would still follow event bubbling
3. Create a component in index.html where you want your components to render
    For demo purpose I have created portal-demo div
4. Rnder thi using portal render method which takes in jsx 
    and element where to render it
5. Portals are generally used to create modals or pop ups
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export function Portals()
{
    return ReactDOM.createPortal(
        <>
            <h1>Hello inside demo portal</h1>
        </>,
        document.getElementById("portal-demo")
    )
}