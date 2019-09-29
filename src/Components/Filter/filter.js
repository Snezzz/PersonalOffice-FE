
import React, { Component }  from 'react';
import './filter.css';
import $ from "jquery";

class Filter extends Component{

    constructor(props){
        super(props);
        this.filter = this.filter.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    filter(e){
       let className =  $(e.target).attr("class");
        let course,semester,type;
        if(className === "get") {
           course = $("#course").val();
           semester = $("#semester").val();
           type = $("#type").val();
            if (course === "all")
                course = -1;
            if (semester === "all")
                semester = -1;
            switch (type) {
                case "exams":
                    type = "экзамен";
                    break;
                case "tests":
                    type = "зачет";
                    break;
                default:break;
            }
            this.props.filter(course,semester,type);
        }
        else{
            $("#course").val("all");
            $("#semester").val("all");
            $("#type").val("all");

        }

    }
    cancel(){

    }
    render(){
        return(
            <div className="filter col-sm-12">
                <div className="col-12 col-md-8 col-sm-9 col-lg-8 col-xl-12">
                    <div className="selection">

                            <div className="col-12 col-md-12 col-sm-12 col-lg-4 col-xl-4 justify-content-center">
                                <label className="selectName">Курс:</label>
                                <select id="course">
                                    <option value="all">все курсы</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                </select>
                            </div>
                            <div  className="col-12 col-md-12 col-sm-12 col-lg-4 col-xl-4 justify-content-center">
                                <label className="selectName">Семестр:</label>
                                <select id="semester">
                                    <option value='all'>оба семестра</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                </select>
                                </div>
                            <div  className="col-12 col-md-12 col-sm-12 col-lg-4 col-xl-4 justify-content-center">
                                <label className="selectName">Режим:</label>
                                <select id="type">
                                    <option value='all'>все</option>
                                    <option value='tests'>зачеты</option>
                                    <option value='exams'>экзамены</option>
                                </select>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-12">
                    <div className="action">
                        <button className="cancelFilter" onClick={this.filter}/>
                        <button className="getFilter" onClick={this.filter}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Filter;