import './table.css';
import React, { Component }  from 'react';
import Key from '../../Icons/key.png';
import Note from '../../Icons/im.png';
import {Link} from "react-router-dom";

class Table extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Data: props.Data
        };
    }
    render(){
        return(
        <div className="markTable">
            {(this.props.Data.length > 0) ? (<table className="table">
                    <thead>
                    <tr>
                        <td>Дисциплина</td>
                        <td>Преподаватель</td>
                        <td>Курс</td>
                        <td>Семестр</td>
                        <td>Тип</td>
                        <td>Оценка</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.Data.map((data) =>
                        <tr key={data.id}>
                            <td>{data.subject}</td>
                            <td>{data.lecturer}</td>
                            <td>{data.course}</td>
                            <td>{data.semester}</td>
                            <td>{data.type}</td>
                            <td>{data.fee}</td>
                        </tr>
                    )
                    }
                    </tbody>
                </table>) :
                (<p>Данных не существует</p>)
            }
        </div>
        )
    }
}
export default Table;