import './start.css';
import React, { Component }  from 'react';
import Key from '../../Icons/key.png';
import Note from '../../Icons/im.png';
import {Link} from "react-router-dom";

class StartPage extends Component{
    render(){
        return(
        <div className="startPage">
            <div className="big_title"> Personal Account </div>
            <img src={Key} className="big_icon"/>
            <img src={Note} className="big_icon"/>
            <div className="statement">find your marks and tasks</div>

            <button className="log_in">
                <Link to={{ pathname: '/login' }} style={{ textDecoration: 'none', color: 'black'}}>
                    Log in
                </Link>
            </button>

            <button className="sign_up">
                <Link to={{ pathname: '/signup' }} style={{ textDecoration: 'none', color: ' #FDC00F '}}>
                    Sign up
                </Link>
            </button>
            <button className="question"/>
        </div>
        )
    }
}
export default StartPage;