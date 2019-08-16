import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import avatar from '../../Icons/01.png';
import key from '../../Icons/key.png';
import './form.css';
import UserContainer from "../../Containers/UserContainer/UserContainer";
import $ from 'jquery';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            User:{}
        };
        this.log = this.log.bind(this);
        this.signup = this.signup.bind(this);
        this.add = this.add.bind(this);
        this.send = this.send.bind(this);
    }
    log(e){
        let logIn = e.target.parentNode.parentElement.childNodes[2].value;
        let password = e.target.parentNode.parentElement.childNodes[4].value;
        this.props.log(logIn,password);

    }
    signup(){
        this.props.signup();
    }
    add(e){
        let text = "Я,"+$(".user").html()+", прошу предоставить мне ...";
        $("#statementText").val(text)
    }
    send(e){
        e.preventDefault();
        let Data = {};
        Data.header = $("#header").val();
        Data.text = $("#statementText").val();
        this.props.send(Data);
    }
    render() {

        if (!this.state.User.length > 0) {
            let type = "/"+this.state.type;
            return (

                <div className="container">

                        {(this.state.type==='statement')?(
                            <div className="row">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Тип заявления</label>
                                        <select className="form-control" id="header"
                                       onChange={this.add} >
                                            <option>Заявление на матпомощь</option>
                                            <option>Заявление на смену элективного курса</option>
                                            <option>Заявление на смену образовательной программы</option>
                                            <option>Заявление на выселение из общежития</option>
                                            <option>Заявление на формирование справки</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Текст</label>
                                        <input type="text" className="form-control" id="statementText"
                                             /></div>
                                    <button className="btn btn-outline-primary" onClick={this.send}>Добавить</button>
                                </form>
                            </div>):(
                            <div className="row">
                                <div className="login_page">
                                    <div className="page_title">
                                        <b>PA</b>
                                        <img src={key} alt="here" />
                                        <b><Link to={type} >Wanted to {this.state.type}?</Link></b>
                                    </div>
                                    <div className="form">
                                        <img alt="" src={avatar}/>
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
                            </div>
                        )}

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