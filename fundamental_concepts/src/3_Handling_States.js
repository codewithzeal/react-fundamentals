import React, { Component } from 'react';

class counter extends Component
{
    constructor()
    {
        super()
        this.state={
            counter:0
        }

        incrementCounter()
        {
            //this.state.counter++ this will only increment counter and won't update ui
            //will update ui but will cause an issue shown below
            /* this.setState({
                counter:this.state.counter +1 
                })
                
                if this is the way how we update counter, then when we run incrementThree
                we get unexpected output. We see that counter value is updated by 1
                and not by 3.
                
                This is beacuse react sometimes group similar updates to one update,
                thus three updates are grouped to one and thus counter updates by 1 only

            */

            this.setState(prevState=>({
                counter:prevState.counter+1
            }),()=>{  
                //call back to run after update completes
            })

        }

        incrementThree()// a function to increment counter directly by 3
            {
                this.incrementCounter()
                this.incrementCounter()
                this.incrementCounter()
            }

        render()
        {
            return(
                <>
                    <h3>value of counter: {this.state.counter}</h3>
                    <button onClick={this.incrementCounter}></button>
                </>
            )
        }
    }
}