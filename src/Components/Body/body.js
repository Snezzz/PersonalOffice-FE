
import React, { Component }  from 'react';
import './body.css';
import Filter from "../Filter/filter";
import Export from "../Export/export";
import Table from "../Table/table";
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";

const URL = 'http://localhost:8080/'
class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: props.Data,
            filter: props.filter
        };


    }

    render() {
        console.log(this.props.Data)
        return (
            <div className="body">
                {this.props.isFees ? (
                    <div>
                        <Filter filter={this.state.filter}/>
                        <Table Data={this.props.Data}/>
                        <Export/>
                    </div>
                ) : (<div>{this.state.Data[0].id}</div>)

                }
            </div>
        )
    }
}
export default Body;