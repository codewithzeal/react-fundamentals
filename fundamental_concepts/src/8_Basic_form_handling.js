/* 
Controlled Component: Form elements whose value is controlled by react is 
                        called controlled component
Scenario: 1 .In this code we create three form component text,textArea and select.
          2. We set the value when user enter data
          3. We get what user entered and set the text of these element
          4. In HTML this was done automatically  
          5. Current value of all component is stored as state
*/

import React, { Component } from 'react';
class FormComponent extends Component {
    constructor()
    {
        super()
        this.state={
            textInput:'',
            textAreaInput:'',
            selectInput:'please select'
        }
    }


    Text=(event)=>{
        this.setState({
            textInput:event.target.value
        })
    }

    TextArea=(event)=>{
        this.setState({
            textAreaInput:event.target.value
        })
    }
    
    Select=(event)=>{
        this.setState(
            {
                selectInput:event.target.value
            }
        )
    }

    render()
    {
        return(<form>
            Input:<input type="text" value={this.state.textInput} onChange={this.Text}/>
            <br/><textarea value={this.state.textAreaInput} onChange={this.TextArea}></textarea>
            <br/>
            <select value={this.state.selectInput} onChange={this.Select}>
                <option value= "please choose">Choose</option>
                <option value='option 1'>option 1</option>
                <option value='option 2'>option 2</option>
            </select>
        </form>)
    }


}
 
export default FormComponent;