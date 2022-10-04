/* 
This is a method where we prevent using this.props.propertyName or props.propertyName
by directly using propertyName
*/

import react,{ Component } from "react"


function fc({prop1,prop2})
{
    // another way to do it is within this fn
    // const{prop1,prop2}=props
    return <p>{prop1} and {prop2}</p>
}

class ClassComponent1 extends Component
{
    constructor()
    {
        super()
    }
    render(){
        const {prop1,prop2}=this.props
        return(
            <p>{prop1} and {prop2}</p>
        )
    }

} 