/* 

Scenarios are very different when using context from a functional component vs
class component 

For a class component we define context. Then for container component that is going to use
provider wrap. We use state in that container which provides implementation to methods
of context;

Example: Context has field name with default value null and method changeName
which is empty as of now. Now we have a container lets call it AppComponent
this will have a state which will have same structure as of context.
Pass that state as value prop of provider. Now whatever child inherits them they have
access to name and changeName method. When we pass value through states. The value
accompanies an update function which re-renders an element having context value.


Scenario: The child component toglles name between hari and naman. The child
receieves these fucntionality and name via context


The use case for this will be preventing a person from accesing a component
before they are loggedIn. useNavigate is used to redirect them to their login page

*/




import React, { Component } from 'react';
import { ChangeConsumer,ChangeProvider } from './17_Context';


//this is child component that changes value of recieved context
class  ChildComponent extends Component {
    constructor(props) {
        super(props)
    }
    

    render()
    {
        return(
        <ChangeConsumer>
            
            {
                /* Destrcuture recieved props from context*/
                ({name,changeName})=>{
                    
                    return(<>
                        <p>This is text with name value as {name} click button below to change</p>
                        <button onClick={()=>{changeName()}}>click</button>
                    </>)
                 }
        }
        </ChangeConsumer>)
    }

}
 



class ParentDynamicContext extends Component
{

constructor(params) {
    super(params)

    this.changeName=()=>{
        this.setState((prevState=>({
            name:prevState.name==='naman'?'hari':'naman'
        })))
    }

    this.state={
        name:'naman',
        changeName:this.changeName
    }
}

    render()
    {
        return(
            
                <ChangeProvider value={this.state}>
                    <ChildComponent/>
                </ChangeProvider>
            
        )
    }

}

export default ParentDynamicContext