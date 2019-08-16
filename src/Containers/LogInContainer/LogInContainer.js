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
        }).then((response) => response.json())
            .then((response)=>{ if(response){
                    if (password === response.password){
                        let date = new Date();
                        let minutes = 30; // 30 minutes
                        date.setTime(date.getTime() + (minutes * 60 * 1000));
                        $.cookie("User",JSON.stringify(response),{expires:date});
                        localStorage.setItem("User",response.id)
                        localStorage.setItem("type","fees");
                        User = response;
                        this.setState({
                            validation : true
                        })
                    }
                    else alert('Wrong password!');
                } else alert('No such user!');
        }).catch((error) => {
            console.log(error);
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