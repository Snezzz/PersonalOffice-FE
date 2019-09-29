import React, { Component }  from 'react';
import './statements.css';
import $ from 'jquery';
import Form from "../Form/form";

class Statements extends Component {

    constructor(props){
        super(props);
        this.state = {
            status: false,
            User: props.User,
        //    Data: this.props.Data
        };
        this.add = this.add.bind(this);
        this.send = this.send.bind(this);
        this.delete = this.delete.bind(this);
    }
    add(){
        this.setState({
           status:true
        });
    }

    send(data){
        let number = this.random(6,1,9);
        let status = "Новое";
        let student_id = JSON.parse($.cookie("User")).id;
        data.creationDate = new Date();
        data.number = number;
        data.status = status;
        data.student_id = student_id;
        this.props.send(data,'statement');
        alert("Заявление сформировано");
        this.setState({
            status:false
        });

    }
    random(n,min,max){
        let result='';
        min = Math.ceil(min);
        max = Math.floor(max);
        for(let i = 0; i<n; i++) {
            let rand = Math.floor(Math.random() * (max - min)) + min;
            result+=rand.toString();
        }
        return result;
    }
    delete(e){
        e.preventDefault();
        let statement = $($(e.target).parent().parent().children()[0]).html();
        const del = window.confirm("Are you sure?");
        if(del){
            this.props.delete("statement",statement);
            alert("Успешно удалено!")
        }


    }
    render(){
        return(
            <div>
                {this.state.status  ?(
                    <Form type="statement" send={this.send} data={this.state.Data}/>):
                    (
                    <div className="table-responsive-sm">
                        {this.props.Data.length>0?(
                    <table id='statements' className="table table-sm table-bordered">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">№ Заявления</th>
                            <th scope="col">Дата создания</th>
                            <th scope="col">Заголовок</th>
                            <th scope="col">Описание</th>
                            <th scope="col">Статус</th>
                        </tr>
                        </thead>
                        <tbody className="table-warning table-bordered">
                        {
                            this.props.Data.map( (key) =>

                                <tr>
                                    <td key="number">{key.number}</td>
                                    <td key="date">{key.creationDate.substring(0,10)}</td>
                                    <td key="header">{key.header}</td>
                                    <td key="description">{key.text}</td>
                                    <td key="status">{key.status}</td>
                                    <td><button className="cancel" onClick={this.delete}/></td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                            ):(null)}
                        <button className="add" onClick={this.add}/>
                    </div>
                        )

                        }
            </div>

        );

    }

}
export default Statements;