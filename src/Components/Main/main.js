import React, { Component } from 'react';

import Menu from '../Menu';
import Header from '../Header';
import Body from '../Body';
import './main.css';
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            User: props.User,
            Data: props.Data
        };
    }
    render(){
            return (
                <div className="s">
                    <div className="header"></div>
                    <div className="mainPart">
                        <FilterContainer User={this.state.User} isFees={this.props.isFees} Data={this.state.Data}
                                         getData={this.props.getData}
                                         logOut={this.props.logOut}/>
                    </div>
                </div>

            )


    }
}
export default Main;