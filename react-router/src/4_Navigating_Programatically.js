/* 
Scenario: We create a route home. This home has button which when clicked upon
leads you to page that says welcome here. Now this can be achieved by link also
but what if we want to do some processing before forward. Like when we can see home
page only after login. SO create a home and success component


genral-syntax

navigate=useNavigate()

onClick={()=>{navigate('url-to-go')}}

This is hook so works only with functional component

*/

import { useNavigate } from "react-router-dom";
import React, { Component } from 'react';

const Success =()=>
{
   

   
        return <h1>Welcome here</h1>
    
}


const  NavigateParent =()=>
{
    

    
        const navigate=useNavigate()
        //on button click go to url success where we have rendered Success component

        return(
            <>
                <button onClick={()=>
                    
                   
                    navigate('/success')
                    
                    }>Click to navigate</button>
            </>
        )
    
}

export {NavigateParent,Success}