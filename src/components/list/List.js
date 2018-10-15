import React from "react"
import Loading from "../common/Loading"
import Table from "./Table"
import Pagination from "../common/Pagination"
const API_URL="https://api.udilia.com/coins/v1"


class List extends React.Component {
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
    handelPagination =(direction)=>{
        let nextPage = this.state.page
          nextPage = direction === "next" ? nextPage + 1 : nextPage -1;
        this.setState({page: nextPage},()=>this.fetchCurrencies())
    }

    fetchCurrencies(){
        fetch(`${API_URL}/cryptocurrencies?page=${this.state.page}&perPage=20`)
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                console.log('Success', data);
                this.setState({currencies:data.currencies, loading:false,totalPages : data.totalPages})
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading:false
                })
            });
    }



    constructor(props){
        super(props)
        this.state = {
            loading : false,
            currencies: [],
            error: null,

            page:1,
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        this.fetchCurrencies()
    }

    render(){

            if(this.state.loading){
                return <div className="loading-container"><Loading/></div>
            }

            return (
                <div>
                <Table currencies={this.state.currencies}
                changePercent={this.changePercent}/>
                    <Pagination handleClick={this.handelPagination} page={this.state.page} totalPage={this.state.totalPages}/>
                </div>
            )

    }
}

export default List