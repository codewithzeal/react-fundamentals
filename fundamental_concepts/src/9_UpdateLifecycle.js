/* 
The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is 
updated:

        getDerivedStateFromProps()
        shouldComponentUpdate()
        render()
        getSnapshotBeforeUpdate()
        componentDidUpdate()
The render() method is required and will always be called, the others are optional 
and will be called if you define them.


1. Also at updates the getDerivedStateFromProps method is called. 
    This is the first method that is called when a component gets updated.

    This is still the natural place to set the state object based on the initial props.
2. In the shouldComponentUpdate() method you can return a Boolean value 
    that specifies whether React should continue with the rendering or not.
    If the props passed to a child component happens to change
    then child component should re-render with new props only if new props
    are different than previous one

*/

import React, { Component } from 'react';
class UpdateComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"naman"
        }
    }

    shouldComponentUpdate(nextProp)
    {
        //return false to stop any update
        //Use of nextProp is seen in pure component Example
        return true

    }

    change=()=>{
        var namevar=prompt("Enter a name")
        this.setState({
            name:namevar
        })
    }

    render()
    {
        return(
            <>
                <p>{this.state.name}</p>
                <button onClick={this.change}>Click to enter state name</button>
            </>
        )
    }
    
}
 
export default UpdateComponent;