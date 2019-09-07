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
            checked: false
        };
        this.signup = this.signup.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.check = this.check.bind(this);
    }

    signup(){
        let Data = {
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
        if(this.state.checked){
            this.props.signup(Data);
        }
        else
            alert("Проверьте правильность введенных данных")
    }
    checkPassword(e){
        let old_password;
        let check;
        let el = $(e.target);
        let checked = true;

        switch(el.attr("id")) {
            case "newPassword":
                old_password = $(e.target).val();
                if(old_password.length<6)
                    checked = false;

                break;
            case "repeatPassword":
                old_password = $("#newPassword").val();
                check = $("#repeatPassword").val();
                if (old_password != check) {
                    checked = false;
                }
                break;
        }

        if (!checked) {
            $(e.target).css("borderColor", "red");
            $(e.target).removeAttr("checked")
        }
        else {
            $(e.target).css("borderColor", "green");
            $(e.target).attr("checked","");

        }
    }

    check(e){
        e.preventDefault();
        let type = $(e.target).attr("datatype");
        let value = $(e.target).val();
        let checked  = true;
        let reg = new RegExp("[0-9]|[a-zA-Z]|")
        let logReg = new RegExp("[s][t]");
        switch (type){
            case "login":
                (!value.match(logReg))?(
                      checked = false
            ):( checked = true);
                break;
            case "fullName":
                (value.match(reg))?(checked = false):(checked = true);
                break;
            case "course":
                reg = new RegExp("[a-z]|[A-Z]");
                ((!Number(value))||(value.match(reg))) ?
                    ( checked = false):
                    (
                        ((value.length>1)&&((Number(value)>=7)||(Number(value)===0)))?(checked = false):(checked = true)
                    );
                break;

        }
        (value.length===0)?(checked = false):(checked = true);
        if(!checked){
            $(e.target).css("borderColor", "red");
            $(e.target).removeAttr("checked");
            $(e.target).popover('show')
            $(e.target).focus();
            this.setState({
                checked: false
            })
        }
        else{
            $(e.target).css("borderColor", "green");
            $(e.target).popover('hide');
            $(e.target).attr("checked",true)
            this.setState({
                checked: true
            })
        }
    }

    cancel(){
        let conf = window.confirm("Передумали регистрироваться? Данные будут потеряны");
        if(conf){
            window.location.assign('/signup')
        }
    }
    render() {

        return(

      <div className="row">
          <form className="personal col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12">
              <div className="form-group row">
                  <label htmlFor="login" className="col-sm-3 col-form-label">Login*</label>
                  <div className="col-12 col-md-7 col-sm-8 col-lg-8 col-xl-8">
                      <input type="text" datatype="login" className="form-control" id="login"
                             placeholder="For example: st030201" defaultValue={this.props.Data.login}
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
                             placeholder=""
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
                      <input type="text" datatype="fullName" className="form-control" id="sirName"
                             placeholder="" onBlur={this.check}
                             data-container="body"
                             data-toggle="popover" data-placement="left"
                             data-content="Проверьте правильность"
                             checked/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="partonymic" className="col-sm-3 col-form-label">Отчество*</label>
                  <div className="col-12 col-md-7 col-sm-8 col-lg-8 col-xl-8">
                      <input type="text" datatype="fullName" className="form-control" id="partonymic"
                             placeholder=""  onBlur={this.check}
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
                      <input type="text" datatype="course" className="form-control" id="course"
                             defaultValue="1" onBlur={this.check}
                             data-container="body"
                             data-toggle="popover" data-placement="right"
                             data-content="Проверьте правильность"
                             checked/>
                  </div>
              </div>

              <div className="form-group row">
                  <label htmlFor="staticDirection"
                         className="col-5 col-md-3 col-sm-3 col-lg-3 col-xl-3   col-form-label">Направление*</label>
                  <div className="col-7 col-md-8 col-sm-8 col-lg-8 col-xl-8">
                      <select className="form-control" id="direction">
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
                      <input type="text" className="form-control" id="newPassword"
                            placeholder="******" defaultValue={this.props.Data.password} onBlur={this.checkPassword}/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="repeatPassword" className="col-sm-3 col-form-label">Password repeat*</label>
                  <div className="col-sm-8">
                      <input type="password" className="form-control" id="repeatPassword"
                             placeholder="Repeat your password" onBlur={this.checkPassword} />
                  </div>
              </div>

          </form>
          <div className="actions">
              <button  className="btn btn-outline-danger" onClick={this.cancel}>Назад</button>
          <button  className="btn btn-outline-primary" onClick={this.signup}  data-container="body"
                   data-toggle="popover" data-placement="left"
                   data-content="Проверьте правильность паролей">Зарегистрироваться</button>
          </div>
      </div>
        );
    }


}

export default Registration