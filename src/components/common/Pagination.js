import React from "react"

const Pagination =(props)=>{
    let {page,totalPage,handleClick} = props
    return (
        <div className="Pagination">
            <button className="Pagination-button" onClick={()=>handleClick("prev")} disabled={page<=1}>&larr; </button>
            <span className="Pagination-info"> Page <b>{page}</b> of <b>{totalPage}</b></span>
            <button className="Pagination-button" onClick={()=>handleClick("next")} disabled={page>=totalPage}> &rarr;</button>
        </div>
    )

}

export default Pagination