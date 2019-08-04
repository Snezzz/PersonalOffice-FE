
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
        console.log(className)
        if(className=="get") {
           course = $("#course").val();
           semester = $("#semester").val();
           type = $("#type").val();
            if (course == "all")
                course = -1;
            if (semester == "all")
                semester = -1;
            switch (type) {
                case "exams":
                    type = "экзамен";
                    break;
                case "tests":
                    type = "зачет"
                    break;
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
            <div className="filter">
                <div className="col-sm-8 selection">
                    <div>
                    <p>Курс:</p>
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
                    <div>
                    <p>Семестр:</p>
                    <select id="semester">
                        <option value='all'>оба семестра</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                    </select>
                    </div>
                    <div>
                    <p>Режим:</p>
                    <select id="type">
                        <option value='all'>все</option>
                        <option value='tests'>зачеты</option>
                        <option value='exams'>экзамены</option>
                    </select>
                    </div>
                </div>
                <div className="col-sm-3 action">
                    <button className="cancel" onClick={this.filter}></button>
                    <button className="get" onClick={this.filter}></button>
                </div>
            </div>
        )
    }
}
export default Filter;