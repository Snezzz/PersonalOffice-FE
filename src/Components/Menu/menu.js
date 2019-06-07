import React, { Component }  from 'react';
import avatar from '../../Icons/01.png';
import './menu.css';
import $ from 'jquery';
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";
//var data;
class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            User : props.User
        };
        this.getBody = this.getBody.bind(this);
        this.logOut = this.logOut.bind(this);
        this.filter = this.filter.bind(this);

    }
//зачеты/экзамены
    filter(e){
        let type = $(e.target).attr("data-info");
        switch (type){
            case "exams":
                type = "экзамен";
                break;
            case "tests":
                type = "зачет";
                break;
        }
        this.props.filter(-1,-1,type);
    }
    logOut(){
        this.props.logOut();
    }
    componentDidMount(){
        $(".submenu").hide();
        $(".fees").click().css("backgroundColor","rgba(253,192,15,0.93)");

    }
    getBody(e){
        let attr  = $(e.target).attr("type");
       switch(attr) {
           case "fees":
                $(".submenu").fadeToggle(100);
                this.props.getData(this.state.User.id,"fees");
               break;
           case "f":

               break;
           case "tasks":
               this.props.getData(this.state.User.id,"tasks");
               break;
       }
    }

    render(){
        return(
            <div className="menu" >
                <img src={avatar}/>
                <p className="user">{this.state.User.sirName} {this.state.User.firstName} {this.state.User.partonymic}</p>

                <p>{this.state.User.type} {this.state.User.course} курс</p>
                <p>{this.state.User.direction}</p>
                <div className="mainMenu">
                <button type="data">Персональные данные</button>
                <button className="fees" type="fees" onClick={this.getBody}>Электронный дневник</button>
                    <ul className="submenu">
                        <li><button data-info="exams" onClick={this.filter}>Экзамены</button></li>
                        <li><button data-info="tests" onClick={this.filter}>Зачеты</button></li>
                    </ul>
                <button type="f" onClick={this.getBody}>Заявления</button>
                <button  type="tasks" onClick={this.getBody}>Задания</button>
                </div>
                <button className="logout" onClick={this.logOut}>Log out</button>
            </div>
        );

    }

}
export default Menu;