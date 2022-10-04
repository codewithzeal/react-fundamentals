import React, { Component } from 'react';
import { ConsumerComponent,ProviderComponent } from './17_Context';

class GrandChild extends Component
{
    constructor()
    {
        super()

    }

    render()
    {
        return(<ConsumerComponent>
            {
                (percolateValue)=>{
                    return <h1>Hello I am {percolateValue} from component grandChild</h1>
                }
            }
        </ConsumerComponent>)
    }
}


class Child extends Component{
    //The grand child access using tags but child access using this.context
    render()
    {
        return (
        <>
            <p>I am a child componet and name is {this.context}</p>
            <GrandChild/>
        </>)    
    }
}
//A way to pass precolated value
Child.contextType=ConsumerComponent
class ParentContext extends Component{
    // prop name value must be fixed
    render()
    {
        return(
            <ProviderComponent value="naman">
                    <Child/>
            </ProviderComponent>
        )
    }
}

export default ParentContext