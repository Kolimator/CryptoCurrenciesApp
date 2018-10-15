import React from "react"

const Loading=(props)=>{
    const{width,height}=props
return <div className="Loading" style={{width , height}}/>
}

Loading.defaultProps = {
    width: "28px",
    height: "28px"
}

export default Loading