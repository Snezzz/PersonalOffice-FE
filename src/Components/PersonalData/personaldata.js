import React, { Component }  from 'react';
import avatar from '../../Icons/01.png';
import './personaldata.css';
import $ from 'jquery';
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";
import Filter from "../Filter/filter";
import Export from "../Export/export";
import Table from "../Table/table";

class Personaldata extends Component {

    constructor(props){
        super(props);


    }


    render(){
            return (
                <div className="data">
                    <ul>
                        <li><p>Имя:</p><input value={this.props.Data.firstName}/></li>
                        <li><p>Фамилия:</p><input value={this.props.Data.sirName}/></li>
                        <li><p>Отчество:</p><input value={this.props.Data.partonymic}/></li>
                    </ul>

                </div>
            );
        }

}
export default Personaldata;