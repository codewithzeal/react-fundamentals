/* 
1. Let's say there are many components that want to access a common functionality.
2. one way is to define for each of them thier own functionality. But that would
    lead to repeatation of code
3. The other way is wrap all such components under one parent. And let parent implement 
    that functionality. All chidlren can access them via props
4. The method above holds good and is called lifting state up. But there maybe scenarios
    when all children can't come under same parent. What about them. Thus we have 
    a concept in react called higher order components
5. The general programatic representation of it is as follows
    EnhancedVersion=EnhancerHigherOrderFn(old component)
*/

/* 
Scenario: We have a button and text paragraph, both of which uses counter function.
    paragraph shows number of times people hovered over it. Button shows number of times
    people clicked it. We send both these component to be enhanced. The enhancer
    simply renders these component with props. Thus here also we are passing
    functionality as props but this is not via parent class or anything. We can
    include nay props into a component from wherever we want.
*/


/**
 There is problem with above method what if we pass props to these updatedComponent.
 We see that we simple take old component and attach some props to it.
 What about any additionals props passed. We must take care of it. For that we do
 
 */


import React, { Component } from 'react';
import UpdateComponent from './9_UpdateLifecycle';

//So lets define a functiont hat updates our component

const EnhanceComponent=(OldComponent)=>{

class NewComponent extends Component{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }

    incrementCount(){
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }

    render()
    {
        return(
            //{...this.props} places any addtional props passed to this updated component
            <>
                <OldComponent counter={()=>{this.incrementCount()}} count={this.state.count} {...this.props}/>
            </>
        )
    }
}
return NewComponent
}

class ButonComponent extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const {count,counter}=this.props
        return(
            <>
            <button onClick={counter}>clicked {count} times</button>
            </>
        )
    }
}


class ParaComponent extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const {count,counter}=this.props
        return(
            <>
            <p onMouseOver={counter}>hovered {count} times also accessing
                additional name prop value {this.props.name}
            </p>
            </>
        )
    }
}

class ParentHOC extends Component
{
    constructor()
    {
        super()
        {

        }
    }

    render()
    {
        const UpDatedButton=EnhanceComponent(ButonComponent)
        const UpDatedPara=EnhanceComponent(ParaComponent)
        return(
            <>
                <UpDatedButton/>
                    <br/>
                <UpDatedPara name="naman"/>
            </>
        )
    }
}




export default ParentHOC