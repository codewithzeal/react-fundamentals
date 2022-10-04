import React, { Component } from 'react';
class CondtionalComponent extends Component {
    constructor()
    {
        super()
        this.state={
            isLoggedIn:false
        }
    } 

    changeStatus()
    {
        this.setState(prevState=>({
            isLoggedIn:!prevState.isLoggedIn
        }))
    }

    render() { 
        // we render welcome if logged in is true else we render hello
        return(
            //Conditional rendered elements update when conditions update
            <>    
                
                {this.state.isLoggedIn?<h1>Welcome</h1>:<h1>Hello</h1>}
                <button onClick={()=>{this.changeStatus()}}>Click me to change log status</button>
            </>
        )
    }
}
export default CondtionalComponent;


/* 
Let's see what happended above
1. We want to display when isLoggedin is true else we want message hello
2. To achieve above we make use of ternary operator that returns JSX accordingly
3. We see that when we toggle value of isLoggedIn then the conditional rendered element
    gets updated automatically

4. There is one more type of conditional rendering where if condition is true then 
    only it renders
    {this.state.isLoggedIn && <h1>Welcome</h1>}

*/