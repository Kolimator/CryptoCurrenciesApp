import React from "react";
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"


const Table =(props)=> {
    return(
    <div className="Table-container">
        <table className="Table">
            <thead className="Table-head">
            <tr>
                <th>Cryptocurrency</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th> 24H Change</th>
            </tr>
            </thead>
            <tbody className="Table-body">
            {props.currencies.map(currency => {
                return <tr key={currency.id}
                onClick={ ()=> props.history.push(`/currency/${currency.id}`)}>
                    <td>
                        <span className="Table-rank"> {currency.rank}</span>
                        {currency.name}
                    </td>
                    <td>
                        <span className="Table-dollar"> $ {currency.price}</span>
                    </td>

                    <td>
                        <span className="Table-dollar"> $ {currency.marketCap}</span>
                    </td>
                    <td>
                        {props.changePercent(currency.percentChange24h)}
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
    )
}

Table.propTypes = {
    currencies :PropTypes.array.isRequired,
    changePercent:PropTypes.func.isRequired
}

export default withRouter(Table)