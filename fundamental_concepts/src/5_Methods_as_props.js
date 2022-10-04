import {Component} from 'react'

class MethodAsPropsChild extends Component
{
    constructor()
    {
        super()

    }

    render()
    {
        return(
            <>
                <button onClick={()=>{this.props.greetFnProp('passed by child')}}> </button>
            </>
        )
    }
}

class MethodAsPropsParent extends Component {
    constructor()
    {
        super()
        this.state={
            welCome:"welcome by parent"
        }

        this.greetFn=this.greetFn.bind(this)
    }

    greetFn(paramByChild)
    {
        alert(`${this.state.welCome} and ${paramByChild}`)
        // now we see even when we update state of parent
        //when child calls this they get updates state
        this.setState({
            welCome:"now changed"
        })
    }

    render()
    {
        return(
            <>
                
                < MethodAsPropsChild greetFnProp={this.greetFn}/>
            </>
        )
    }
}
 
export default MethodAsPropsParent


/* 
Let us understand what we achieved above
1. We are passing a method as prop from parent component to child component
2. When child component recieves it. They can make use of this fn as if their own
    as well inherit lexical enviroment of parent
3. Thus when we pass method from parent to child we bind that method with this so that
child component can access this method allong with parents lexical scope
4. We see when state of parent changes child component can still access method that
    has access to chenged state 
*/
