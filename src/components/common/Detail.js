import React from "react"
import Loading from "./Loading"
import './Detail.css';

class Detail extends React.Component{

    changePercent =(percent)=>{
        if(percent>0){
            return <span className="percent-raised"> {percent}% &uarr;</span>
        }
        else if(percent<0){
            return <span className="percent-fallen"> {percent}% &darr;</span>
        }
        else{
            return <span>{percent}</span>
        }
    }



    constructor(props) {
        super(props);
        this.state ={
            currency:{},
            loading:false,
            error: null
        }
    }


    componentDidMount(){
       const currencyID =this.props.match.params.id
        this.fetchCurrency(currencyID)
    }

    componentWillReceiveProps(nextProps){
        if(this.props.location.pathname !== nextProps.location.pathname){
            let newCurrencyId = nextProps.match.params.id
            this.fetchCurrency(newCurrencyId)
        }
    }

    fetchCurrency = currencyID =>{
        this.setState({loading:true})

        fetch(`https://api.udilia.com/coins/v1/cryptocurrencies/${currencyID}`)
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            }).then(currency =>{
            this.setState({loading:false,
                error:null,
                currency:currency})
        })
            .catch(error =>{
                this.setState({
                    loading:false,
                    error: error.errorMessage
                })
            })
    }
    render(){
        const {loading,error,currency} = this.state
        if(loading){
            return <div className="loading-container"><Loading/></div>
        }
        if(error){
            return <div className="error">{error}</div>
        }
        return(
            <div className="Detail">

                <h1 className="Detail-heading"> {currency.name} ({currency.symbol})  </h1>
                <div className="Detail-container">
                <div className="Detail-item">
                    Price <span className="Detail-value"> $ {currency.price}</span>
                </div>
                <div className="Detail-item">
                    Rank <span className="Detail-value">{currency.rank}</span>
                </div>
                <div className="Detail-item">
                   24 H CHANGE <span className="Detail-value">{this.changePercent(currency.percentChange24h)}</span>
                </div>
                    <div className="Detail-item">
                        <span className="Detail-title">Market cap</span>
                        <span className="Detail-dollar">$</span>
                        {currency.marketCap}

                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">24 H Volume</span>
                        <span className="Detail-dollar">$</span>
                        {currency.volume24h}

                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">Total supply</span>

                        {currency.totalSupply}

                    </div>
                </div>

            </div>
        )
    }
}

export default Detail