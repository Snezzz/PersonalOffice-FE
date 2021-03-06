import React, { Component }  from 'react';
import Body from "./../../Components/Body/body";
import Menu from '../../Components/Menu/menu';
import Schedule from '../../Components/Schedule/Schedule';
import Tasks from '../../Components/Tasks/tasks';
import Personaldata from "../../Components/PersonalData/personaldata";
import Statements from "../../Components/Statements/statements";
import $ from'jquery';

const URL = 'http://localhost:8080/';


class BodyContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            User: props.User,
            isFees:props.isFees,
            type:props.type,
            Data:props.Data,
            component: ()=>(null)
        };
        this.getData = this.getData.bind(this);
        this.filter = this.filter.bind(this);
        this.upload = this.upload.bind(this);
        this.send = this.send.bind(this);
        this.delete = this.delete.bind(this);
    }

    upload(user){
        $.removeCookie("User");
        $.cookie("User",JSON.stringify(user));
       //console.log(JSON.parse($.cookie("User")));
   //     this.setState({
     //       User:user
       //     });
        this.props.update(user);
        fetch(`${URL}user`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).catch((error) => {
                console.log(error);
        });

}
delete(type,number){
    fetch(`${URL}${type}`, {
        method: 'delete',
        body: number
    }).then( ()=>{
        this.getData(this.state.User.id,type+"s")
    }).catch((error) => {
        console.log(error);
        });
}
//обновление
send(data,type){
    fetch(`${URL}${type}`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then( ()=>{
        this.getData(this.state.User.id,type+"s")
    }).catch((error) => {
        console.log(error);
    })
}
    filter(course,semester,type){
        let query;
        //let userID = localStorage.getItem("User");
        let userID = JSON.parse($.cookie("User")).id;
        query = "id="+userID+"&course="+course+"&semester="+semester+"&type="+type;
        fetch(`${URL}fees/filter?${query}`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    Data: response,
                    component:() =>(<Schedule Data={response} filter={this.filter}/>)
                });
            })
    }

    //оценки и задачи
    getData(user_id,type){

        localStorage.setItem("type",type);
        let Data = [];
        let query;

        if(type==="user"){
            fetch(`${URL}id/${user_id}`)
                .then((response) => response.json())
                .then((response) => {

                    this.setState({
                        Data: response,
                        isFees: false,
                        component: () => (<Personaldata Data={response} upload={this.upload}/>)
                    });
                });
        }
        else {
            query = type;
            fetch(`${URL}` + query)
                .then((response) => response.json())
                .then((response) => {

                    for (let i of response) {
                        if (i.student_id === user_id) {
                            Data.push(i);
                        }
                        else {
                            continue;
                        }
                    }
                   if (type === "fees") {
                        this.setState({
                            Data: Data,
                            isFees: true,
                            component: () => (<Schedule Data={Data} filter={this.filter}/>)
                        });
                    }
                    else if (type === "statements") {
                        console.log(Data);
                        this.setState({
                            Data: Data,
                            isFees: false,
                            component: () => (<Statements Data={Data} send={this.send}  delete={this.delete}/>)
                        });

                    }
                    else if (type === "tasks") {
                       this.setState({
                            Data: Data,
                            isFees: false,
                            isFilter: false,
                            component: () => (<Tasks Data={Data} send={this.send} delete={this.delete}/>)
                        });
                    }
                })
        }
    }

componentDidMount(){
    this.getData(this.state.User.id,this.state.type);

}

    render() {
            return (
                <div className="row">
                <Menu User={this.state.User} getData={this.getData}
                      click={this.click}
                      logOut={this.props.logOut} filter={this.filter}/>
                <Body User={this.state.User} isFees={this.state.isFees} type={this.state.type}
                      filter={this.filter} Data={this.state.Data} getData={this.getData}
                        component={this.state.component}/>
                </div>
                    )
    }
}
export default BodyContainer;