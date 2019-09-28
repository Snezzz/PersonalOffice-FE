import React, { Component }  from 'react';
import avatar from '../../Icons/01.png';
import './menu.css';
import $ from 'jquery';

let prev = null;
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
            default:
        }
        this.props.filter(-1,-1,type);
    }
    logOut(){
        this.props.logOut();
    }
    componentDidMount(){
        $(".submenu").hide();
     //   $(".fees").css("backgroundColor","rgba(253,192,15,0.93)");
        $(".fees").addClass("active")
    }
    getBody(e){

        if(prev){
            $(prev).removeClass("active");
        }
        $(".submenu").fadeOut(100);
        let attr  = $(e.target).attr("type");
        $(e.target).addClass("active");
        if(attr==="fees"){
            $(".submenu").fadeIn(100);
        }
        this.props.getData(this.state.User.id,attr);
        prev =  $(e.target);
    }

    render(){
        let inf = $.cookie("User");
       console.log(inf)
        let User = JSON.parse($.cookie("User"));
        return(
            <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-3 menu" >
                <img alt="" src={avatar}/>
                <p className="user">{User.sirName} {User.firstName} {User.partonymic}</p>

                <p>{User.type} {User.course} курс</p>
                <p>{User.direction}</p>
                <div className="mainMenu">
                <button className="btn btn-outline-warning" type="user" onClick={this.getBody}>Персональные данные</button>
                <button className="btn btn-outline-warning fees" type="fees" onClick={this.getBody}>Электронный дневник</button>
                    <ul className="submenu">
                        <li><button className="btn btn-outline-warning" data-info="exams" onClick={this.filter}>Экзамены</button></li>
                        <li><button className="btn btn-outline-warning" data-info="tests" onClick={this.filter}>Зачеты</button></li>
                    </ul>
                <button className="btn btn-outline-warning" type="statements" onClick={this.getBody}>Заявления</button>
                    <button className="btn btn-outline-warning"  type="tasks" onClick={this.getBody}>Задания</button>
                </div>
                <button className="logout btn btn-outline-info" onClick={this.logOut}>Log out</button>
            </div>
        );

    }

}
export default Menu;