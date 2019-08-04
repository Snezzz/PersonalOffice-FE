import React, { Component }  from 'react';
import Main from '../../Components/Main'
import Tasks from '../../Components/Tasks'
import LogInContainer from "../LogInContainer";

const URL = 'http://localhost:8080/'

class TasksContainer extends Component {


    constructor(props){
        super(props);
        this.state={
            Data:[]
        };
        this.getData= this.getData.bind(this);
    }
    getData(id){
        let Data = [];
        fetch(`http://localhost:8080/tasks`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        }).then((response) => response.json())
            .then((response) => {
                for (let tasks of response){
                    if(tasks.student_id==id){
                        Data.push(tasks);
                    }
                    else
                        continue;
                    }
            }).then(()=>{
                this.setState({
                    Data: Data
                })
        });

    }

    componentWillMount(){
        this.getData(localStorage.getItem("User")); //заходим
    }

    render() {
            if (this.state.Data.length>0) {
                return (
                    <Tasks Data = {this.state.Data} />
                )
            }

    else{
            return (
               <h1>Waiting please...</h1>
            )
        }

}
}
export default TasksContainer;