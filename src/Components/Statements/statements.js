import React, { Component }  from 'react';
import avatar from '../../Icons/01.png';
import './statements.css';
import $ from 'jquery';
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";
import Filter from "../Filter/filter";
import Export from "../Export/export";
import Table from "../Table/table";

class Statements extends Component {

    constructor(props){
        super(props);


    }

    render(){
        return(
            <div>
              <p>Здесь будут заявления</p>
            </div>
        );

    }

}
export default Statements;