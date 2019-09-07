import './start.css';
import React, { Component }  from 'react';
import Key from '../../Icons/key.png';
import Note from '../../Icons/im.png';
import Help from '../../Icons/question.png'
import {Link} from "react-router-dom";

class StartPage extends Component{
    render(){
        return(
        <div className="startPage container-fluid">
            <div className="row">
                <div className="col-sm-12 row header">
                    <img src={Help} alt="?" className="question col-12 col-sm-1 col-lg-1 col-md-1 col-xl-1 "/>
                    <button className="log_in col-12 col-sm-2">
                        <Link to={{ pathname: '/login' }} style={{ color: 'black'}}>
                            Log in
                        </Link>
                    </button>

                    <button className="sign_up col-12 col-sm-2">
                        <Link to={{ pathname: '/signup' }} style={{ color: ' #FDC00F '}}>
                            Sign up
                        </Link>
                    </button>

                </div>
                <div className="col-12 col-sm-12 title"><b> Personal Account </b></div>
                <div className="col-sm-12">
                    <img src={Key} className="big_icon col-sm-6" />
                    <img src={Note} className="big_icon col-sm-6"/>
                    <div className="statement"><b>find your marks and tasks</b></div>
                </div>

            </div>
        </div>
        )
    }
}
export default StartPage;