
/* 
1. We will see about how events are handled and why this binding is neccessary
2. Within class in javascript this points to null
So when this is used inside methods, this is undefined
3. So for methods to be able to read objects through this keyword
We make use of bind call so that this of method now points to this of class object
4. We know we can either bind this to a method or make use of arrow function which uses 
this of its parents lexical environment
*/

//This method is commonly used and is prefered

import { Component } from "react";
class EventHandler extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            welcomeMessage:"hello"
        }
        // here we bind this keyword
        this.handleButton=this.handleButton.bind(this)

    }
    // We want a handler so that when user clicks button then hello changes to good bye

    handleButton()
    {
        //without binding this will throw error as this is not defineds
        this.setState({
            welcomeMessage:"good bye"
        })
    }

    render()
    {
        return(<>
            <div>
                <h1>{this.state.welcomeMessage}</h1>
                <button onClick={this.handleButton}>Click me</button>
            </div>
        </>)
    }
}

/* 
there are other ways to handle this also
1. Method 1: binding during render itself
        return(<>
            <div>
                <h1>{this.state.welcomeMessage}</h1>
                <button onClick={this.handleButton.bind(this)}>Click me</button>
            </div>
        </>)
2. using arrow function in render
        return(<>
            <div>
                <h1>{this.state.welcomeMessage}</h1>
                <button onClick={()=>this.handleButton()}>Click me</button>
            </div>
        </>)

3. Using arrow functions to define method in class
            handleButton=()
            {
                // now we can access this keywrod inside this
            }
            and use
            <button onClick={this.handleButton}>Click me</button>
            in render menthod
*/


export default EventHandler
