import React,{Component} from "react";
import StudentsComponent from "./StudentsComponent";

export default class AllStudentsComponent extends Component(){
    state={
        student:{
            name:'Seif',
            age:28,
            email:'email:seif@gmail.com'
        }
    }
    render(){
        return(
            <>
                <StudentsComponent student={this.state.student} />
            </>
        )
    }
}