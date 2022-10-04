import React, { Component, PureComponent } from 'react';

/* 
Scenario: 1. The class PureComponentExample has two child components
2. The first one is regular component
3. The other is pure component
4. Both these child component gets prop from PureComponentExample
5. Props is value in state of PureComponentExample
6. What if state of PureComponentExample changes
7. Regular component re renders irrespective of the fact whether new props have changed 
    or not in comparrison to old one
8. On other hand pure component does this checking before going for update
9. By change we mean of the props are of primitive data type then they must be
        of same type and value. On the other hand if props is an object then
        it must be refereing to exact same object again. 
*/


class RegularComponent extends Component
{
    constructor(props)
    {
        super(props)
        {

        }
    }

    render()
    {
        //this message will be displayed each time props change
        console.log("rendering regular component")
        return <p>{this.props.name}</p>
    }
}

class PureComp extends PureComponent
{
    constructor(props)
    {
        super(props)
        {

        }
    }
        //rendering happend only once cause props dont actualy change
    render()
    {
        //thi message renders only when  props actually change
        console.log("rendering pure component")
        return <p>{this.props.name}</p>
    }
}

class PureComponentExample extends Component {
    constructor(props) {
        super(props);

        this.state={
            name:"naman"
        }
    }


    //we change value of name each seconds
    componentDidMount()
    {
        // we set name to same value again so that pure component does not rerender
        setTimeout(()=>{
            this.setState({
                name:"naman"
            })
        },2000)
    }

    render()
    {
        console.log("rendering parent component that has two child")
        return(
            <>
                <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </>
        )
    }
    
}
 
export default PureComponentExample;