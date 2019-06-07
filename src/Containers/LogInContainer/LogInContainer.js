import React, { Component }  from 'react';
import Form from '../../Components/Form';
import UserContainer from "../UserContainer/UserContainer";

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
                        localStorage.setItem("User",response.id)
                        User = response;
                        this.setState({
                            validation : true,
                            User:response
                        })
                    }
                    else alert('Wrong password!');
                } else alert('No such user!');
        })//.then(()=>{
            //localStorage.setItem("User",User.login)})
            .catch((error) => {
            console.log(error);
        })
    }
    render(){
        if(!this.state.validation===true) {
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