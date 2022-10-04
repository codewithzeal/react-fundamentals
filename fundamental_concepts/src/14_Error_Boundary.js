/* 
1. We use this concept to catch any errors that can occur and show an appropriate UI
wrap a component around error boundary component. If that component throws error 
error body component is shown.

2. To achieve this error component will define getDerivedStateFromError() method
    which can change state of a flag variable. Flag variable is set to true intially.
    When error occurs this method is called that changes state of flag to false. Now
    when state is change error boundary re-renders. During re render it sees flag as zero
    thus this dosen't render children wrapped in it but renders its own JSX that
    we want to display
*/


import React, { Component } from 'react';


class ErrorBoundaryComponent extends Component
{
    constructor()
    {
        super()
        this.state={
            noError:true
        }
    }

    static getDerivedStateFromError(error)
    {
        return {
            noError:false
        }
    }


    render()
    {
        //perform conditional rendering
        return (<>
            {this.state.noError?this.props.children:<p>Error occured</p>}
        </>)
    }
}


class ChildComponent extends Component
{
    constructor(props)
    {
        super(props)

    }
    //for component whose prop value is "error ho gaya" for them we throw error
    // to simulate error
    componentDidMount()
    {
        if(this.props.value=="error kara do")
        throw new Error("error ho gaya")
    }

    render()
    {
        return(<>
            <h1>I am a child component I come when no error</h1>
        </>)
    }
}


export class ErrorParent extends Component
{
    constructor()
    {
        super()

    }

    render()
    {
       // the first child with value banana below will render below
       return ( <>
            <ErrorBoundaryComponent>
                <ChildComponent value="banana"/>
            </ErrorBoundaryComponent>
            <ErrorBoundaryComponent>
                <ChildComponent value="error kara do"/>
            </ErrorBoundaryComponent>
        </>)
    }
}