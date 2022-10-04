import React from 'react';
/*
        Props                          |                    States
                                       |                                             
    1. They are passes to component    |    1. The are managed within component
    2. They are function paramenters   |    2. They are declared within function or class
    3. props are immutable             |    3. They can be changed    
*/

export class ClassComponent extends React.Component
{
    constructor(props)// props passed will never change
    {
        super(props)
        //describe all state as key value pair
        this.state={
            variable_as_state:"test state value"// this will act as state and can be
            // changed for current component
        }
    }
    render()
    {
        //here we use this.props to access props
        return <p>{this.props.propValue} and {this.state.variable_as_state}</p>
    }

    componentDidMount()// state lifecycle (not part of current concept)
    {
        console.log(this.props.propValue)
    }
}

export function FunctionalComponent(props)// passing of props (Props are immutable)
{
    var variable_as_state=1 // this variable acts as state this can change
    return(
        <p>This is from functional component. Hi {props.Name} and
        here is a state {variable_as_state}
        </p>
    )
}


