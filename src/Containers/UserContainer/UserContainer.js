import React, { Component }  from 'react';
import Main from '../../Components/Main'
import LogInContainer from "../LogInContainer";

const URL = 'http://localhost:8080/'


class UserContainer extends Component {

    constructor(props){
        super(props);
        this.state ={
            User: {},
            Data:[],
            isFees : false
        };
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.getData= this.getData.bind(this);

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
                }).then(()=>{this.getData(this.state.User.id,"fees")});


        }
    }

    logOut(){
        localStorage.clear();
        window.location.assign("/login")
    }
    componentWillMount(){
        this.logIn(localStorage.getItem("User")); //заходим
    }


    //оценки и задачи
    getData(user_id,type){
        console.log(type)
        var Data = [];
        fetch(`${URL}`+type)
            .then((response) => response.json())
            .then((response) => {

               for (let i of response){

                   if(i.student_id == user_id){
                       Data.push(i);
                   }
                   else{
                       continue;
                   }
               }

               if(type==="fees") {
                   console.log(type)
                   this.setState({
                       Data: Data,
                       isFees: true
                   });
               }
               else if(type==="tasks"){
                   this.setState({
                       Data: Data,
                       isFees: false
                   });
               }
            })

    }


    render() {
        console.log(this.state.User.login);
        console.log(this.state.User.login);
        if ((this.state.User.login!==undefined)&&(this.state.Data.length>0)) {
            return (
                <Main User={this.state.User}
                          Data={this.state.Data}
                      getData={this.getData}
                      isFees={this.state.isFees}
                        logOut={this.logOut}
                />

            )
        }
    else{
            return (
               <h1>Waiting please...</h1>
            )
        }

}
}
export default UserContainer;