import React, { Component }  from 'react';
import Form from '../../Components/Form';

class SignUpContainer extends Component {


    constructor(props){
        super(props);
        this.signup = this.signup.bind(this);

    }
   signup(){
        alert("h")
    }
    render(){
        return(
            <Form signip={this.signup} type="login"/>
        )
    }

}
export default SignUpContainer;