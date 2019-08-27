import React, { Component }  from 'react';
import Form from '../../Components/Form';
import Registration from "../../Components/Registration/registration";

class SignUpContainer extends Component {


    constructor(props){
        super(props);
        this.state = {
            newUser: false,
            Data:{},
            directions:[]
        };
        this.signup = this.signup.bind(this);
        this.add = this.add.bind(this);
    }
   signup(login, password){
        let Data = {
            login: login,
            password: password
        };
        this.setState({
            newUser: true,
            Data: Data
        });

       fetch(`http://localhost:8080/directions`,{
           method:"get"
       }).then((response)=>response.json())
           .then(response => {
                   this.setState({
                       directions: response
               })
               }
           )
           .catch(error => console.log(error))

    }

    add(Data){
        fetch(`http://localhost:8080/user`,{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Data)
        })
            .then(()=>{
                this.setState({
                    newUser: !this.state.newUser
                })
            }).then(alert("Успешно зарегистрированы!"))
            .catch(error => console.log(error))
    }
    render(){
        if(!this.state.newUser){
        return(
            <Form signup={this.signup} type="login"/>
        )}
            else {
            return(
                <Registration directions={this.state.directions} Data={this.state.Data} signup={this.add}/>
            )
        }

    }

}
export default SignUpContainer;