import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import avatar from '../../Icons/01.png';
import key from '../../Icons/key.png';
import './form.css';
import UserContainer from "../../Containers/UserContainer/UserContainer";

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            type: props.type,
            User:{}
        };
        this.log = this.log.bind(this);
        this.signup = this.signup.bind(this);
    }
    log(e){
        let logIn = e.target.parentNode.parentElement.childNodes[2].value;
        let password = e.target.parentNode.parentElement.childNodes[4].value;
        this.props.log(logIn,password);

    }
    signup(){
        this.props.signup();
    }
    render() {

        if (!this.state.User.length > 0) {
            let type = "/"+this.state.type;
            return (
                <div className="login_page">
                    <div className="page_title">
                        <b>PA</b>
                        <img src={key} alt="here" />
                        <b><Link to={type} >Wanted to {this.state.type}?</Link></b>
                    </div>
                    <div className="form">
                        <img src={avatar}/>
                            <b>Login:</b>
                        <input type="text" placeholder="st010203"/>
                            <b>Password:</b>
                        <input type="password" placeholder="****"/>
                        {this.state.type==="signup"? (
                            <div>
                        <a href="">Forgot your password?</a>
                        <button onClick={this.log}> Log In</button>
                            </div>
                            ):
                            ( <button onClick={this.signup}> Sign Up</button>)}
                    </div>
                </div>
            )
        }
        else {
            return (
                <UserContainer User={this.state.User}/>
            )
        }
    }


}

export default Form