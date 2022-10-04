/*
    1. The constructor() method is called before anything else, when the component is 
        initiated, and it is the natural place to set up the initial state and other 
        initial values. The constructor() method is called with the props, as arguments, 
        and you should always start by calling the super(props) before anything else, 
        this will initiate the parent's constructor method and allows the component to 
        inherit methods from its parent (React.Component).

    2. The getDerivedStateFromProps() method is called right before rendering the 
        element(s) in the DOM. This is the natural place to set the state object 
        based on the initial props.
        
        It takes state as an argument, and returns an object with changes to the state.
        The example below starts with the favorite color being "red", but the 
        getDerivedStateFromProps() method updates the favorite color based on the 
        favcol attribute:

    3. The render() method is required, 
        and is the method that actually outputs the HTML to the DOM.


    4. Finnaly executes componentDidMount: it's analogus to onload event in html


    *****NOTE: when we have child element the first 3 phases of parent executes
    the first three phase of child executes. then parent mounts. then child mounts

*/

import React, { Component } from 'react';
class MountComponent extends Component {
    constructor(props)
    {
        //executes 1st
        super(props)
        this.setState={
            value:"initial value"
        }
    }

    static getDerivedStateFromProps(props,state)
    {
        //executes second
        return {value:this.props.value}//We set value of variable value after props
        // have been accepted by this component
    }

    render()
    {
        //executes third
        return(
            <h1>{this.state.value}</h1>
        )
    }

    componentDidMount()
    {
        //executes fourth
        alert("component mounted")
    }
}
 
export default MountComponent;