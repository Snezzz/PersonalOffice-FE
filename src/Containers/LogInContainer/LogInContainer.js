import React, { Component }  from 'react';
import Form from '../../Components/Form/form';
import UserContainer from "../UserContainer/UserContainer";
import $ from 'jquery';

let User={};
class LogInContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            validation:false,
            can:false
        };
        this.login = this.login.bind(this);
        this.get = this.get.bind(this);

    }
get(){
        return User;
}
    login(login,password){
        fetch(`http://localhost:8080/login/${login}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        }).then((response) => response.json().catch((error)=>console.log(error)))
            .then((responseJson) => {
                if (responseJson)
                {
                    if (password === responseJson.password) {
                        let date = new Date();
                        let minutes = 1; // 900 minutes
                        date.setTime(date.getTime() + (minutes * 60 * 1000));
                        //$.cookie("User", JSON.stringify(responseJson), {expires: date});
                        $.cookie("User", JSON.stringify(responseJson));
                        localStorage.setItem("User", responseJson.id)
                        localStorage.setItem("type", "fees");
                        User = responseJson;
                        this.setState({
                            validation: true
                        })
                    }
                    else alert('Wrong password!');
                }
                else alert("Нет такого пользователя")
            })

    }
    render(){

        if(($.cookie("User")==='null')||(!$.cookie("User"))) {
            return (
                <Form log={this.login} type="signup" get={this.get}/>
            )
        }
        else{
          window.location.assign('/cabinet');
        }

    }
}
export default LogInContainer;