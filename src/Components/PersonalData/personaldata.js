import React, { Component }  from 'react';
import avatar from '../../Icons/01.png';
import './personaldata.css';
import $ from 'jquery';
import FilterContainer from "../../Containers/FilterContainer/FilterContainer";
import Filter from "../Filter/filter";
import Export from "../Export/export";
import Table from "../Table/table";

class Personaldata extends Component {

    constructor(props){
        super(props);
        this.state = {
            checked : true
        };
        this.upload = this.upload.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.check = this.check.bind(this);
        this.get = this.get.bind(this);
    }
    get(e){
        let val =  $(e.target).val();
        if(val.length>11){
            let new_val = val.toString().substring(0,11);
            $(e.target).val(new_val);
        }
    }
    check(e){
        e.preventDefault();
        let type = $(e.target).attr("datatype");
        let value = $(e.target).val();
        let checked  = true;
        let reg = new RegExp("[0-9]|[a-zA-Z]")
        switch (type){
            case "fullname":
               if(value.match(reg)){
                   checked = false;
               }
               else{
                    checked = true;
               }
                break;
            case "number":
                 reg = new RegExp("[a-z]|[A-Z]")
                if((value.length!=12)||(value.match(reg))) {
                    checked = false;
                }
                else checked = true;
                break;
            case "snils":
                reg = new RegExp("[a-z]|[A-Z]")
                if((value.length!=12)||(value.match(reg))) {
                    checked = false;
                }
                else checked = true;
                break;

        }
        if(value.length===0)checked = true;
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
    checkPassword(e){
        let old_password;
        let check;
        let el = $(e.target);
        let checked = true;
        switch(el.attr("id")) {
            case "inputPassword":
                old_password = $(e.target).val();
                check = this.props.Data.password;
                if (old_password != check) {
                    checked = false;
                }
                break;
            case "repeatPassword":
                old_password = $("#newPassword").val();
                check = $("#repeatPassword").val();
                if (old_password != check) {
                    checked = false;
                }
                break;
            default:
                old_password = $("#newPassword").val();
                break;
        }
           if(old_password.length<6)
               checked = false;

        if (!checked) {
            $(e.target).css("borderColor", "red");
            $(e.target).removeAttr("checked")
        }
        else {
            $(e.target).css("borderColor", "green");
            $(e.target).attr("checked","");

        }
    }
    upload(e){
        let type = $(e.target).text();
        let elem;
        let Data = this.props.Data;
        switch (type){
            case "Сохранить":
                let check = true;
                elem = $(".personal")[0];
                Data.firstName = $("#firstname").val();
                Data.sirName = $("#sirname").val();
                Data.partonymic = $("#partonymic").val();
                Data.number = $("#number").val();
                Data.snils =  $("#snils").val();
                if(this.state.checked){
                    this.props.upload(Data);
                }
                else
                    alert("Проверьте правильность введенных данных")
                break;
            case "Обновить":
                let inputs = $("input[type=password]");
                let checked = true;
                let new_password;
                $.each(inputs, function (i,v) {
                    if(i===1) {
                        new_password =$(v).val();
                        return
                    }
                    if($(v).attr("checked")==undefined) checked = false;
                 });
                if(checked) {
                    Data.password = new_password;
                    this.props.upload(Data);
                    $('button[data-toggle="popover"]').popover('hide')
                    alert("Пароль успешно обновлен")
                }

                else{
                    $('button[data-toggle="popover"]').popover('show')
                }
                break;
        }

    }

    componentDidMount(){
        $('button[data-toggle="popover"]').popover({
            trigger : 'click',
            delay: {
                show: "10",
                hide: "2000"
            }
        });
    }
    render(){

            return (

                <div className="data">
                    <form className="personal">
                        <div className="form-group row">
                            <label htmlFor="firstname" className="col-sm-3 col-form-label">Имя*</label>
                            <div className="col-12 col-md-7 col-sm-8 col-lg-8 col-xl-8">
                                <input type="text" datatype="fullname" className="form-control" id="firstname"
                                       placeholder="" defaultValue={this.props.Data.firstName}
                                       onBlur={this.check}
                                       data-container="body"
                                       data-toggle="popover" data-placement="right"
                                       data-content="Проверьте правильность"
                                       checked />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="sirname" className="col-sm-3 col-form-label">Фамилия*</label>
                            <div className="col-12 col-md-7 col-sm-8 col-lg-8 col-xl-8">
                                <input type="text" datatype="fullname" className="form-control" id="sirname"
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
                                    col-form-label">Уровень</label>
                            <div className="col-8 col-md-8 col-sm-8 col-lg-8 col-xl-8">
                                <input type="text" readOnly className="form-control-plaintext" id="staticType"
                                       defaultValue={this.props.Data.type} checked />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticCourse" className="col-3 col-md-3 col-sm-3 col-lg-3 col-xl-3  col-form-label">Курс</label>
                            <div className="col-8 col-md-8 col-sm-8 col-lg-8 col-xl-8">
                                <input type="text" readOnly className="form-control-plaintext" id="staticCourse"
                                       defaultValue={this.props.Data.course} checked/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="staticDirection" className="col-5 col-md-3 col-sm-3 col-lg-3 col-xl-3   col-form-label">Направление</label>
                            <div className="col-7 col-md-8 col-sm-8 col-lg-8 col-xl-8">
                                <input type="text" readOnly className="form-control-plaintext" id="staticDirection"
                                       defaultValue={this.props.Data.direction} checked/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="number" className="col-sm-3 col-form-label">Phone</label>
                            <div className="col-sm-8">
                                <input type="text" datatype="number" className="form-control" id="number"
                                       placeholder="+7**********"  defaultValue={this.props.Data.number}
                                       data-container="body"
                                       data-toggle="popover" data-placement="left"
                                       data-content="Проверьте правильность"
                                       maxlength="12"
                                       onBlur={this.check}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="snils" className="col-sm-3 col-form-label">СНИЛС</label>
                            <div className="col-sm-8">
                                <input type="text" datatype="snils" className="form-control" id="snils"
                                       placeholder="без '-'"  defaultValue={this.props.Data.snils}  onBlur={this.check}
                                       data-container="body"
                                       data-toggle="popover" data-placement="left"
                                       data-content="Проверьте правильность"
                                       onChange={this.get}/>
                            </div>
                        </div>
                        </form>
                    <button className="btn btn-outline-primary right" onClick={this.upload}>Сохранить</button>

                    <form className="personal">
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Old password</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="inputPassword"
                                       placeholder="Password before" onBlur={this.checkPassword} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="newPassword" className="col-sm-3 col-form-label">New password</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="newPassword"
                                       placeholder="******" onBlur={this.checkPassword} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="repeatPassword" className="col-sm-3 col-form-label">Password repeat</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="repeatPassword"
                                       placeholder="******" onBlur={this.checkPassword} />
                            </div>
                        </div>
                    </form>
                    <button  className="btn btn-outline-primary right" onClick={this.upload}  data-container="body"
                             data-toggle="popover" data-placement="left"
                             data-content="Проверьте правильность паролей"
                    >Обновить</button>

                </div>

            );


        }


}
export default Personaldata;