import React, { Component } from 'react';
import './main.css';
import BodyContainer from "../../Containers/BodyContainer/BodyContainer";
import key from '../../Icons/logotype.gif';
import Help from '../../Icons/question.png'

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            User: props.User,
            Data: props.Data,
            isFilter: props.isFilter,
            type: localStorage.getItem("type")
        };
        this.click = this.click.bind(this);
        this.update = this.update.bind(this);
    }

    click(type){
        this.setState({
            type: type
        })
    }
    update(user){
        this.setState({
            User:user
        });
    }
    render(){
            return (
                <div className="container-flex">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-12 col-md-12 col-xl-12">
                            <div className="header">
                            <div className="row">
                                <nav className="col-4 col-sm-3 col-lg-3 col-md-3 col-xl-3">
                                <img src={key} alt="here" className="logotype"/>
                                 </nav>
                            <nav className="col-5 col-sm-7 col-lg-8 col-md-8 col-xl-8">
                            <b>Добро пожаловать в личный кабинет, {this.state.User.firstName} {this.state.User.partonymic}</b>
                            </nav>
                            <nav className="col-3 col-sm-2 col-lg-1 col-md-1 col-xl-1">
                                <img src={Help} alt="?" className="question "/>
                            </nav>
                    <div className="col-sm-12">
                        <div className="mainPart">
                             <BodyContainer User={this.state.User} isFees={this.state.isFees} Data={this.state.Data}
                                       type={this.state.type} logOut={this.props.logOut} update={this.update}/>
                        </div>
                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            )


    }
}
export default Main;