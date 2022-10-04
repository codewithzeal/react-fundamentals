
/* 
 1. All react component goes through series of phases.
 2. React provide us with feature to overide methods that corresponds to those phases
 3. This is possible in class component and analogus possible using
    hooks in functional component.
 4. Lets see those phase:

        Mounting: When intance of component is being created and inserted into dom
        Updating: When a component is being re-rendered as a result of changes to either
                    its props or state
        Unmounting: When component is being removed from DOM
        Error: When there is error in rendering of a component or in
                child components constructor
 5. Let's see methods in these phases
        Mounting: constructor(), getDerivedStateFromProps(), render(),componentDidMount()
        Updating: getDerivedStateFromProps(),shouldComponentUpdate(),render()
                    getSnapshotBeforeUpdate(),componentDidUpdate()
        Unmounting: componentWillUnmount()
        Error; getDerivedStateFromError(), componentDidCatch()
*/

