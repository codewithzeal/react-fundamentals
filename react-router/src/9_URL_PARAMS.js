/* 
This tutorial is about geting value of passed param in dynamic routing
This is only valid in fucntional component so we use a work around where
we define the class component inside of a functional component
Above is done for example in general we can make use of HOC function
that adds this functionality to our class component
*/

import { Component } from "react";
import { useParams } from "react-router-dom";


const ParamParent=()=>{
    
    const param=useParams()
    class Param extends Component
    {
        render()
        {
            return <h1>Hello i am user {param.userID}</h1>
        }
    }
    return <Param/>
}

export default ParamParent