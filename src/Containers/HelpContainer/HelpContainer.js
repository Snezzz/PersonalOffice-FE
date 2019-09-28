import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import UserContainer from "../UserContainer/UserContainer";
import SignUpContainer from "../SignUpContainer/SignUpContainer";


let go = false;
class HelpContainer extends Component {

    constructor(props){
        super(props);

    }
    componentDidMount(){
        if(localStorage.getItem("User")!=null){
            go = true;
        }
    }
    render(){
        if(go) {
            return (
                <UserContainer/>
            )
        }
        else{
            return (
                <SignUpContainer/>
            )
        }
    }
}
export default HelpContainer;