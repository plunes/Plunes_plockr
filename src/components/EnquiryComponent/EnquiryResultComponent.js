import React, { Component } from 'react';
import axios from 'axios'
import ProfileEnquiryComponent from '../ProfileComponent/ProfileEnquiryComponent'
import DashboardHeader from '../DashboardComponent/DashboardHeader';

class EnquiryResultComponent extends Component {
    constructor(props){
        super(props);
        this.root = props.root
        this.state = {
            selectedId: '',
            docList:[]
        }
        this.getAllDoctors = this.getAllDoctors.bind(this);
    }
    
    async getAllDoctors(id){
        return new Promise(async (resolve, reject) => {
            try{
                const response = await axios.get('http://13.233.151.26:8000/user?specialityId=' + id);
                // console.log(response.data, 'specialityId');
                this.setState({
                    docList : response.data
                })
            }catch (error){
                console.log(error)
            }
        })
    }

    async componentDidMount(){
        let selectedId = this.root.selectedEnquiryId
        console.log(this.root.selectedEnquiryId)
        let doctors = await this.getAllDoctors(selectedId) 
    }

    render() {
        // console.log(this.root, 'enquiry result container')
        return (
            <div className = 'container-fluid'>
                <DashboardHeader root = {this.root} />
                <div className = 'profileComponent'>
                {
                    this.state.docList.map((pdata) => {
                        // console.log(pdata)
                        return <ProfileEnquiryComponent key = {pdata._id} data={pdata}  root = {this.root} />
                    })
                }
            </div>
            </div>
        );
    }
}

export default EnquiryResultComponent;