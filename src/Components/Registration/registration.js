import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import avatar from '../../Icons/01.png';
import key from '../../Icons/key.png';
import './registration.css';
import UserContainer from "../../Containers/UserContainer/UserContainer";
import $ from 'jquery';
import Personaldata from "../PersonalData/personaldata";

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.signup = this.signup.bind(this);
    }

    signup(){
        let Data = {
            //default,1,'ФИИТ','Петр','st040203','','Алексеевич','PmdJWkCw','Лейкин','','бакалавр'
            course: $("#course").val(),
            direction: $("#direction option:selected").html(),
            firstName: $("#firstName").val(),
            login: $("#login").val(),
            number: "",
            partonymic: $("#partonymic").val(),
            password: $("#password").val(),
            sirName: $("#sirName").val(),
            snils:"",
            type:$("#type option:selected").html()
        };
        //console.log(Data);
        this.props.signup(Data);
    }

    render() {
        return(
      <div className="row">
          <form className="personal">
              <div className="form-group row">
                  <label htmlFor="login" className="col-sm-3 col-form-label">Login*</label>
                  <div className="col-12 col-md-7 col-sm-8 col-lg-8 col-xl-8">
                      <input type="text" datatype="login" className="form-control" id="login"
                             placeholder="" defaultValue={this.props.Data.login}
                             onBlur={this.check}
                             data-container="body"
                             data-toggle="popover" data-placement="right"
                             data-content="Проверьте правильность"
                             checked/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="firstName" className="col-sm-3 col-form-label">Имя*</label>
                  <div className="col-12 col-md-7 col-sm-8 col-lg-8 col-xl-8">
                      <input type="text" datatype="fullName" className="form-control" id="firstName"
                             placeholder="" defaultValue={this.props.Data.firstName}
                             onBlur={this.check}
                             data-container="body"
                             data-toggle="popover" data-placement="right"
                             data-content="Проверьте правильность"
                             checked/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="sirName" className="col-sm-3 col-form-label">Фамилия*</label>
                  <div className="col-12 col-md-7 col-sm-8 col-lg-8 col-xl-8">
                      <input type="text" datatype="fullname" className="form-control" id="sirName"
                             placeholder="" defaultValue={this.props.Data.sirName} onBlur={this.check}
                             data-container="body"
                             data-toggle="popover" data-placement="left"
                             data-content="Проверьте правильность"
                             checked/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="partonymic" className="col-sm-3 col-form-label">Отчество*</label>
                  <div className="col-12 col-md-7 col-sm-8 col-lg-8 col-xl-8">
                      <input type="text" datatype="fullname" className="form-control" id="partonymic"
                             placeholder="" defaultValue={this.props.Data.partonymic} onBlur={this.check}
                             data-container="body"
                             data-toggle="popover" data-placement="left"
                             data-content="Проверьте правильность"
                             checked/>
                  </div>
              </div>

              <div className="form-group row">
                  <label htmlFor="staticType"
                         className="col-3 col-md-3 col-sm-3 col-lg-3 col-xl-3
                                    col-form-label">Уровень*</label>
                  <div className="col-8 col-md-8 col-sm-8 col-lg-8 col-xl-8">
                      <select id="type">
                          <option selected>бакалавриат</option>
                          <option>магистратура</option>
                          <option>аспирантура</option>
                      </select>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="course"
                         className="col-3 col-md-3 col-sm-3 col-lg-3 col-xl-3  col-form-label">Курс*</label>
                  <div className="col-8 col-md-8 col-sm-8 col-lg-8 col-xl-8">
                      <input type="text" className="col-7 col-md-8 col-sm-8 col-lg-8 col-xl-8" id="course"
                             defaultValue="1" checked/>
                  </div>
              </div>

              <div className="form-group row">
                  <label htmlFor="staticDirection"
                         className="col-5 col-md-3 col-sm-3 col-lg-3 col-xl-3   col-form-label">Направление*</label>
                  <div className="col-7 col-md-8 col-sm-8 col-lg-8 col-xl-8">
                      <select id="direction">
                          {this.props.directions.map((direction)=>
                              <option key={direction}> {direction.name}</option>
                          )}
                      </select>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="password"
                         className="col-5 col-md-3 col-sm-3 col-lg-3 col-xl-3   col-form-label">Password*</label>
                  <div className="col-7 col-md-8 col-sm-8 col-lg-8 col-xl-8">
                      <input type="text" className="col-7 col-md-8 col-sm-8 col-lg-8 col-xl-8" id="password"
                             defaultValue={this.props.Data.password} />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="repeatPassword" className="col-sm-3 col-form-label">Password repeat*</label>
                  <div className="col-sm-8">
                      <input type="password" className="form-control" id="repeatPassword"
                             placeholder="******" onBlur={this.checkPassword} />
                  </div>
              </div>

          </form>
          <button  className="btn btn-outline-primary right" onClick={this.signup}  data-container="body"
                   data-toggle="popover" data-placement="left"
                   data-content="Проверьте правильность паролей"
          >Зарегистрироваться</button>
      </div>
        );
    }


}

export default Registration