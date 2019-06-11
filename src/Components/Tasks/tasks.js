import React, { Component }  from 'react';
import avatar from '../../Icons/01.png';
import './tasks.css';
import $ from 'jquery';
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";
//var data;
class Tasks extends Component {

    constructor(props){
        super(props);

    }

    render(){
        console.log(this.props.Data);
        return(
            <div>
           <table>
               <thead>
                <tr>
                    <td>Задание</td>
                    <td>Дата создания</td>
                    <td>DeadLine</td>
                    <td>Важность</td>
                </tr>
               </thead>
               <tbody>
               {this.props.Data.map( (key) =>
                   <tr>
                       <td>{key.task}</td>
                       <td>{key.date}</td>
                       <td>{key.deadline}</td>
                       <td>5</td>
                   </tr>
               )}
               </tbody>
           </table>
                   </div>
        );

    }

}
export default Tasks;