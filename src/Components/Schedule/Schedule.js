import React, { Component }  from 'react';
import avatar from '../../Icons/01.png';
import './Schedule.css';
import $ from 'jquery';
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";
import Filter from "../Filter/filter";
import Export from "../Export/export";
import Table from "../Table/table";

//var data;
class Schedule extends Component {

    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="data row">
                <Filter filter={this.props.filter}/>
                {this.props.Data.length > 0 ? (
                    <div className="col-sm-12">
                        <Table Data={this.props.Data}/>
                    </div>) : (<p>Нет данных</p>)
                }
            </div>
                    )

    }

}
export default Schedule;