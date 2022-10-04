/**
Let's suppose we design an app where the react dom tree is such that there are many
grand or great grandchildre and so on are present.

For example

                    A
                   / \
                  B   C
                 /     \
                D       E
                        |
                        F
                        |
                        G
What if A has a properties and G ot D wants to access it. Then we need to manually manage
    and pass that prop to percolate to G or D
Thus we have an API context that let's us do that directly 
*/

/* 
Process:
    STEP 1: Create a context using React.createContext()
    STEP 2: The context object create above returns us with provider and 
            consumer method.
    STEP 3: we can expoert those provider and consumer
    STEP 4: Whatever component is rendered within provider tag
            can have access to props declared within propvider tag
    STEP 5: Component who wants to access those value need to use
            consumer tag in their render method
    STEP 6: In render method between consumer tag define an arrow fn
            that accepts props passed as argument. Use this argument
            as this has value that was supposed to be perculated. Or we can
            set context type of a class who wants to use the value. And use
            this.context to access that value


            *****NOTE*** with this.context method we can only 
                         subscribe to one contextType
*/

/**
Scenario: We define a context file
    Then we have class parent, child and grandChild
    we pass a value and render it in grand child
*/


//This file only creates and exports contexts
import React, { Component } from 'react';
// pass a string to below method to set a default value
const context=React.createContext()

const ProviderComponent=context.Provider
const ConsumerComponent=context.Consumer

export {ProviderComponent,ConsumerComponent}