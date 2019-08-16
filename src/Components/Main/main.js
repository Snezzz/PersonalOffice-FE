import React, { Component } from 'react';
import './main.css';
import BodyContainer from "../../Containers/BodyContainer/BodyContainer";

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
                    <div className="header"/>
                    <div className="col-sm-12 mainPart">
                        <BodyContainer User={this.state.User} isFees={this.state.isFees} Data={this.state.Data}
                                       type={this.state.type} logOut={this.props.logOut} update={this.update}/>
                    </div>
                </div>

            )


    }
}
export default Main;