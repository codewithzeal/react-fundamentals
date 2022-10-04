import React, { Component } from 'react';
class ListComponent extends Component {
   constructor()
   {
    super()
    this.state={
        names:["naman","yatin","kareem"]
    }
   }

   render()
   {
        /* If we render this way we get an error in the console that each element must
            have unique key
            return(
            <>
                {this.state.names.map((nameItem)=>{
                    return <p>welcome {nameItem}</p>
                })}
            </>
        ) */

        /* 
                When rendering a list of element in react, each element should have
                a unique key, the key can come from data itself or 
                we can define some logic for the key. Usualy index

                In this case data has no Id so we use index
        */

                return(
                    <>
                        {this.state.names.map((nameItem,index)=>{
                            return <p key={index}>welcome {nameItem}</p>
                        })}
                    </>
                )

   }

}
 
export default ListComponent