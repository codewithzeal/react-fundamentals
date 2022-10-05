/* 
Here we will se how to deal with search params.
We pass search parameter manually and also see a way to to apply search param manually.
Search params usually help with filters
Again this is a hook so we use class component inside a functional one
*/

import { Component } from "react";
import { useSearchParams,Outlet} from "react-router-dom";

const QueryParent=()=>{
    const [SearchhParam,setSearchParam]=useSearchParams()
    const checkFilter=SearchhParam.get('filter')==='active'
    class Querry extends Component
    {
        render()
        {
            return(
                <>
                    <button onClick={()=>{setSearchParam({filter:"active"})}}>
                        Set filter to active
                    </button>
                    <button onClick={()=>setSearchParam({})}>
                        Reset Filter
                    </button>

                    <p>
                        {checkFilter?'filter working':'no filter'}
                    </p>
                    <Outlet/>
                </>
            )
        }
    }

    return <Querry/>
}

export default QueryParent