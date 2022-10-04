import React, { Component } from 'react';

class TableDatacomponent extends Component
{
    constructor()
    {
        super()
    }
    //this  return table data
    render()
    {
        const names=["naman","chaman"]
        return (

            <>
                <td>
                    naman
                </td>
                <td>
                    chaman
                </td>
            </>

        )
           
           
       
    
    }
}

class FragmentComponent extends Component {
    constructor()
    {
        super()
    }
    // we see that our table data  gets a child component 
    //which should return two td components
    //But since we need to wrap them we use div
    //But div cannot appear after tr
    //So we make use of react fragment to wrap it
    render()
    {
            return(
            <table>
                <tbody>
                <tr>
                    <th>col1</th>
                    <th>col2</th>
                </tr>
                <tr>
                    < TableDatacomponent/>
                </tr>
                </tbody>
            </table>
            )
    }
}
 
export default FragmentComponent;