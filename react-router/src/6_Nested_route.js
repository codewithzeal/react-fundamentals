/**
Lets say we have a navigation bar that take to product. Now on reaching product
we have naviagtion bar for description and cost. So we have routes within Routes


                            product
                           /       \
                          /         \
                         /           \
'/product/description'  /             \ '/product/cost'

now to tell Router where to render this nested component we use <Outlet> where-ever
we place this components in sub route starts rendering fromt there

*/

import { Component } from "react";

class product extends Component
{

}