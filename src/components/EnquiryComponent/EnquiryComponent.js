import React, { Component } from 'react'
import DashboardHeader from '../DashboardComponent/DashboardHeader'
import EnquiryContainer from "./EnquiryContainer";

 class EnquiryComponent extends Component {
     constructor(props){
         super(props)
         this.root = props.root
     }
    render() {
        return (
            <div className = 'container-fluid'>
                <DashboardHeader root = {this.root} />
                <EnquiryContainer root = {this.root}/>
            </div>
        )
    }
}

export default EnquiryComponent