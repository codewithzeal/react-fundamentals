/* 
1. It achieves the same thing as higher order component. where any component can use a
    common functionality.
2. This refers to technique of sharing code between react component using props
    whose value is a function. 
3. Now basically in both cases of HOC or the current method all we want is a function
    that could add aditional features to our component.
4. The current method does this in following way
  STEP 1: Define a component Enhancer that implements your desired methods and properties
  STEP 2: For the component above pass a prop that is a fn
  STEP 3: This fn takes argument based on what properties or method we need to add
    to our old component
 STEP 4: Thus Enhancer has now a fn as prop and Enhancer call this fn with
        methods and properties which this fn accepts. This fn return oldcomponent
        with props added to them. These props are additional functionalities we
        want. Finalyy when this fn returns old component then our enhancer renders it.
Summary: we render Enhancer Component with enhance fn that returns and renders new
        updated component
*/


import React, { Component } from 'react';

class Counter extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }

    incrementCounter=()=>
    {
        this.setState(prevState=>({count:prevState.count+1}))
    }

    render()
    {
        /* 
            The body of enhancer fn passed cotains code that attaches props
            to oldeComponent. Those props are arguments passed to it
            So here we run and pass required arguments
            When it finishes it returns old coponent with modfied things
            which gets rendered
        */
        return this.props.EnhancerFn(this.state.count,this.incrementCounter)
    }
}


class SimpleButtonToUpgeade extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const {count,incrementCounter}=this.props
        return(
            <>
                <button onClick={incrementCounter}>clicked {count} times</button>
            </>
        )
    }
}


class ParentRnderProp extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <>
                <Counter EnhancerFn={(count,incrementCounter)=>{
                    
                    return <SimpleButtonToUpgeade count={count} 
                    incrementCounter={incrementCounter}/>}} 
                />
            </>
        )
    }

}

export default ParentRnderProp