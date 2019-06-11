import React, { Component } from 'react';

import Menu from '../Menu';
import Header from '../Header';
import Body from '../Body';
import './main.css';
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";
import BodyContainer from "../../Containers/BodyContainer/BodyContainer";

class Main extends Component{

    constructor(props) {
        super(props);
        console.log(localStorage.getItem("type"))
        this.state = {
            User: props.User,
            Data: props.Data,
            isFilter: props.isFilter,
            type: localStorage.getItem("type")
        };
        this.click = this.click.bind(this);
    }

    click(type){
        this.setState({
            type: type
        })
    }
    render(){
        console.log(this.state.type)
            return (
                <div className="s">
                    <div className="header"></div>
                    <div className="mainPart">

                        <BodyContainer User={this.state.User} isFees={this.state.isFees} Data={this.state.Data}
                                       type={this.state.type} logOut={this.props.logOut}/>
                    </div>
                </div>

            )


    }
}
export default Main;