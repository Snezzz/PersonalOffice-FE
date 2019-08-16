import React, { Component }  from 'react';
import './tasks.css';
import $ from 'jquery';


class Tasks extends Component {

    constructor(props){
        super(props);
        this.state = {
            status:false
        };
        this.add = this.add.bind(this);
        this.send = this.send.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    add(){
        this.setState({
            status: !this.state.status
        })
    }
    cancel(e){
        e.preventDefault();
        let task_id = ($($(e.target).parent().parent()).attr("id"));
        const del = window.confirm("Are you sure?");
        if(del){
            this.props.delete("task",task_id);
            alert("Успешно удалено!")
        }

    }
    send(){
        let task = $("#task").val();
        let date = new Date();
        let deadline =  $("#deadline").val();
        let importance = $("#importance option:selected").html();
        let student_id = JSON.parse($.cookie("User")).id;
        let Data = {
            date:date,
            deadline:deadline,
            importance:importance,
            student_id:student_id,
            task:task
        };
        this.setState({
            status:false
        });
        this.props.send(Data,'task');
    }
    render(){

        return(
            <div>
            {this.state.status  ?(
                <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Задание</label>
                        <input type="text" className="form-control" id="task"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Deadline</label>
                        <input type="date" className="form-control" id="deadline"
                        /></div>
                    <div className="form-group">
                        <label htmlFor="importance">Важность</label>
                        <select id="importance">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </form>
                    <button className="btn btn-outline-primary" onClick={this.send}>Добавить</button>
                </div>
                ):(
        <div>
            {this.props.Data.length>0?(
           <table className="table table-bordered">
               <thead className="table-dark">
                <tr>
                    <th scope="col">Задание</th>
                    <th scope="col">Дата создания</th>
                    <th scope="col">DeadLine</th>
                    <th scope="col">Важность</th>
                </tr>
               </thead>
               <tbody className="table-warning table-bordered">
               {
                   this.props.Data.map( (key) =>

                   <tr id={key.id}>
                       <td key="task">{key.task}</td>
                       <td key="date">{key.date.substring(0,10)}</td>
                       <td key="deadline" className="table-danger">{key.deadline.substring(0,10)}</td>
                       <td key="2">{key.importance}</td>
                       <td><button className="cancel" onClick={this.cancel}/></td>
                   </tr>

               )}
               </tbody>
           </table>
                ):(null)}
            <button className="add" onClick={this.add}/>
        </div>
            ) }
                </div>
            );

    }

}
export default Tasks;