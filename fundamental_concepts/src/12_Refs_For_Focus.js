/* 
In the typical React dataflow, props are the only way that parent components 
interact with their children. To modify a child, you re-render it with new props. 
However, there are a few cases where you need to imperatively modify a child 
outside of the typical dataflow. The child to be modified could be an instance 
of a React component, or it could be a DOM element. For both of these cases, 
React provides an escape hatch.

There are a few good use cases for refs:

Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.
Avoid using refs for anything that can be done declaratively.

Ref actualyy points to a componenet be it user defined or usual html tag elements
we can use this refs to access their properties
*/

/* 
Scenario we have a button that when clicked gets textinputed in child component Input
Child component Input return the value it holds 

Here the child component input itself uses a ref to get value from text box
child component implements a function that returns the value entered in text box

Parent component has access to child component methods through a ref that points
to object of child component

Parent component calls get value of child to get the value entered in the text box



*******NOTE********
Refs cannot be attached to functional components



We also have a function set focus that sets focus to text input
Parent calls chid set focus to set the focus

*/

import React, { Component } from 'react';


class InputComponent extends Component
{
    constructor()
    {
        super()
        this.InputRef=React.createRef()

    }
    // a function that uses pointer ref to element input and returns it's value
    returnValue()
    {
        return this.InputRef.current.value 
    }
    // see how ref to child component gives access to this method with binding
    //to this keyword. We are getting access to its property from parent
    setFocus()
    {
        return this.InputRef.current.focus()
    }

    render()
    {
        return (<input type="text" ref={this.InputRef}/>)
    }
}


class RefParentComponent extends Component
{
    constructor(props) {
        super(props)
        this.ChildRef=React.createRef()
        
    }

    render()
    {
        return (
        <>
            <InputComponent ref={this.ChildRef}/>
            <button onClick={()=>{
                alert(this.ChildRef.current.returnValue())
            }}>Click me to display value</button>

            <button onClick={()=>{
                this.ChildRef.current.setFocus()
            }}>
                click to me to set focus
            </button>
        </>
        )
    }
}

export default RefParentComponent