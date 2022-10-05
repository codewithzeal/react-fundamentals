/* 
Basically this means dealing with param style ui such as
/welcome/1234
in above 1234 could be anything based on logic. So we can't define static routing
we do like this instead /welcome/:id
now anything of form /welcome/xyz would be rendered to route
having route prop as /welcome/:id


What if we have /welcome/admin as a fixed route in that case we define it as static
along with dynamic but router matches to mere specific one which is admin. So admin
is rendered

We can do dynamic routing in two ways

1. <Route path="/welcome:userID"/>
2. Using nested[this example includes admin conflict case also]
    <Route Path="welcome">
        <Route path=":userId"/>
        <Route path="admin"/> ****NOTE*** matches admin when /welcome/admin witnessed
    </Route>

*/

import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class DynamicComponent extends Component {
    render()
    {
        return <h1>Dynamic route content</h1>
    }
}
 
export default DynamicComponent;