import React, { Component } from 'react';
import Api from "../../../services/Api";
import PriceTable from "../../shared/PriceTable/PriceTable";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      callApi=async ()=>{
        let url="https://jsonplaceholder.typicode.com/photos";
        let result=await Api(url);
        console.log('callApi: ',result);
        let sliceData=result.slice(0,3); // making list of 3 from array
        this.setState({
            items:sliceData,
            isLoaded:true,
        })
      }
      componentDidMount() {
        this.callApi();
      }
    render() {
        {console.log('items: ',this.state.items)}
        return (
            <div>
                <h3>welcome home</h3>
                <PriceTable data={this.state.items} />
            </div>
        )
    }
}
