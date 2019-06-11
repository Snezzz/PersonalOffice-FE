
import React, { Component }  from 'react';
import './body.css';
import Filter from "../Filter/filter";
import Export from "../Export/export";
import Table from "../Table/table";
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";
import Tasks from "../Tasks/tasks";

const URL = 'http://localhost:8080/'

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: props.Data,
            filter: props.filter,
            component:props.component
        };
        this.getData = this.getData.bind(this);
    }
    getData(type){
        this.props.getData(localStorage.getItem("User"),type);
    }
    render() {
            return (
                <div className="body">
                    {this.props.component(this.state.Data)}
                </div>
            )

    }
}
export default Body;