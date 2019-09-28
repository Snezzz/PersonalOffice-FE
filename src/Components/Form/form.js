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
        let logIn = $("#login").val();
        let password = $("#password").val();
        if((logIn)&&(password))
            this.props.log(logIn, password);
        else
            alert("Введите логин и пароль!")
    }
    signup(){
        let login = $("#login").val();
        this.props.signup(login);
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
                                <div>
                            <div className="header">
                                <div className="login_page">
                                    <div className="page_title">
                                        <div className="row">
                                            <div className="col-4 col-sm-8">
                                                <Link to={{pathname: '/start'}}
                                                  style={{ textDecoration: 'none', color:"red"}}>
                                                    <b>PA</b>
                                                    <img src={key} alt="here" />
                                                </Link>
                                            </div>
                                            <div className="col-8 col-sm-4">
                                                <b><Link to={type} >Wanted to {this.state.type}?</Link></b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6 row">
                                    <nav className="col-sm-12 justify-content-center">
                                        <img alt="" src={avatar} />
                                    </nav>
                                    <nav className="col-sm-12 ">
                                        <div className="row str">
                                            <b className="col-12 col-lg-3 col-md-3 col-sm-3 col-xl-3">Login:</b>
                                            <input className="col-8 col-lg-5 col-md-5 col-sm-5 col-xl-5" id="login" type="text" placeholder="st010203"/>
                                        </div>
                                        {this.state.type!=="login"?(
                                            <div className="row str">
                                            <b className="col-12 col-lg-3 col-md-3 col-sm-3 col-xl-3">Password:</b>
                                            <input className="col-8 col-lg-5 col-md-5 col-sm-5 col-xl-5" id="password" type="password" placeholder="****"/>
                                        </div>):(undefined)
                                        }

                                        <div className="col-12 col-lg-12">
                                        {this.state.type==="signup"? (
                                                <div className="row">
                                                    <a href="">Forgot your password?</a>
                                                    <button className="col-12" onClick={this.log}> Log In</button>
                                                </div>
                                            ):
                                            (
                                                <div className="row">
                                                <button className="col-12" onClick={this.signup}>
                                                Sign Up
                                                  </button>
                                                </div>)}
                                        </div>
                                    </nav>
                                    </div>
                            </div>
                        )}

                </div>
            )
        }
        else {
            return (
                    <UserContainer User={this.state.User}/>
            );
        }
    }


}

export default Form