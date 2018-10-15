import React from "react"
import {Link} from "react-router-dom"


const NotFound = ()=>{
    return(
        <div className="NotFound">
            <h1 className="NotFound-title"> Ops...Page not found</h1>
            <Link to="/" className="NotFound-link">Go to homepage </Link>

        </div>
    )
}

export default NotFound