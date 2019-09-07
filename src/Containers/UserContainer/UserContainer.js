import React, { Component }  from 'react';
import Main from '../../Components/Main'
import LogInContainer from "../LogInContainer";
import $ from 'jquery'

const URL = 'http://localhost:8080/'

class UserContainer extends Component {


    constructor(props){
        super(props);
        this.state ={
            User: {},
            Data:[],
            isFilter:true,
            isFees : false,
            load: false,
        };
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logIn(login){
        console.log(login)
        if(login!==undefined) {
            fetch(`http://localhost:8080/id/${login}`, {
                method: 'get',
                headers: {'Content-Type': 'application/json'}
            }).then((response) => response.json())
                .then((response) => {
                    console.log(response)
                    this.setState({
                        User: response,
                        Data: [],
                        isFees: true
                    });
                });


        }
    }

    logOut(){
        localStorage.clear();
        $.removeCookie('User', { path: '/' });
        window.location.assign("/login")
    }


    render() {
                return (
                    <Main User={JSON.parse($.cookie("User"))}
                          Data={{}}
                          isFees={this.state.isFees}
                          isFilter={this.state.isFilter}
                          logOut={this.logOut}
                    />

                )
}
}
export default UserContainer;