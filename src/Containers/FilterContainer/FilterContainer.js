import React, { Component }  from 'react';
import Main from '../../Components/Main'
import Filter from "../../Components/Filter/filter";
import Body from "./../../Components/Body/body";
import Menu from '../../Components/Menu/menu';
import BodyContainer from "../BodyContainer/BodyContainer";
const URL = 'http://localhost:8080/'


class FilterContainer extends Component {

    constructor(props){
        super(props);
        this.state= {
            User: props.User,
            isFees:props.isFees,
            Data: props.Data
        };


        this.filter = this.filter.bind(this);
    }

    filter(course,semester,type){
      //  console.log(course+","+semester+type)
        let query;
        let userID = localStorage.getItem("User");
        query = "id="+userID+"&course="+course+"&semester="+semester+"&type="+type;
        //console.log(query);
        fetch(`${URL}fees/filter?${query}`)
            .then((response) => response.json())
            .then((response) => {
                    this.setState({
                        Data: response
                    })

            }).catch((error)=>{console.log(error)});
    }

    render() {
        return (
            <div className="contant">
            <Menu User={this.state.User} getData={this.props.getData}
                  logOut={this.props.logOut} filter={this.filter}/>
            <BodyContainer isFees={this.state.isFees} Data={this.state.Data}/>
            </div>
        )
    }
}
export default FilterContainer;