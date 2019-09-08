import './start.css';
import React, { Component }  from 'react';
import Key from '../../Icons/key.png';
import Note from '../../Icons/im.png';
import Help from '../../Icons/question.png'
import {Link} from "react-router-dom";
import key from '../../Icons/logotype.gif';

class StartPage extends Component{
    render(){
        return(
        <div className="startPage container-fluid">
            <div className="row">
                <div className="col-sm-12 row header">
                    <div className="col-12 col-sm-12 col-lg-5 col-md-12 col-xl-5">
                        <img src={key} alt="here" className="logotype"/>
                        <img src={Help} alt="?" className="question "/>
                    </div>
                    <button className="log_in col-6 col-md-4 col-sm-4 col-lg-3 col-xl-2">
                        <Link to={{ pathname: '/login' }} style={{ color: 'black'}}>
                            Log in
                        </Link>
                    </button>

                    <button className="sign_up col-6 col-md-4 col-sm-4 col-lg-3 col-xl-2">
                        <Link to={{ pathname: '/signup' }} style={{ color: ' #FDC00F '}}>
                            Sign up
                        </Link>
                    </button>

                </div>
                <div className="col-12 col-sm-12 title"><b> Personal Account </b></div>
                <div className="col-sm-12 row">
                    <img src={Key} className="big_icon col-sm-6" />
                    <img src={Note} className="big_icon col-sm-6"/>
                    <div className="statement col-12"><b>find your marks and tasks</b></div>
                </div>

            </div>
        </div>
        )
    }
}
export default StartPage;