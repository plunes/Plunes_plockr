import React from 'react';
import '../LandingComponent/Landing.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import UserRegistrationForm from "../RegistrationComponent/UserRegistrationForm";
import DoctorRegistrationForm from "../RegistrationComponent/DoctorRegistrationForm";
import HospitalRegistrationForm from '../RegistrationComponent/HospitalRegistrationForm'

import './RegistrationComponent.css'

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.root, "Registration")
        this.root = props.root
        this.state = {
            showLogin: false,
            showGeneralUserForm: true,
            showDoctorForm: false,
            showHospitalForm: false,
        };
        this.baseUrl = 'http://10.34.18.136:8000/'
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let selectedValue = e.target.value;
        switch(selectedValue){
            case 'userForm':
                this.setState({
                    showGeneralUserForm : true,
                    showDoctorForm : false,
                    showHospitalForm : false,
                })
                break;
            case 'docForm':
                    this.setState({
                        showGeneralUserForm : false,
                        showDoctorForm : true,
                        showHospitalForm : false,
                    })
                break;
            case 'hospitalForm':
                    this.setState({
                        showGeneralUserForm : false,
                        showDoctorForm : false,
                        showHospitalForm : true,
                    })
                break;    
        }
    }

   
  


    render() {
        const { showLogin } = this.state
        const { serviceList } = this.root
        console.log(serviceList, 'serviceList');

        if (showLogin) {
            return <Redirect to='/log-in/' />
        }

        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <img className="signImage" src="/signup.png" alt=".."/>
                    </div>
                    <div className='col-md-6'>
                        <div className='col-md-1'>
                        </div>
                        <div className="col-md-6 signupContainer">
                            <div className='row'>
                                <h1 class="signUpText">Sign up</h1>
                            </div>
                            <div class="form-group">
                                <select class="form-control2 plockr-app-form option-signup" onChange = {this.handleChange}>
                                    <option value= 'userForm'>General User</option>
                                    <option value= 'docForm'>Doctors</option>
                                    <option value= 'hospitalForm'>Hospitals</option>
                                </select>
                            </div>
                            {
                                this.state.showGeneralUserForm ?
                                <UserRegistrationForm  /> : null
                            }
                            {
                                this.state.showDoctorForm ? 
                                <DoctorRegistrationForm  /> : null
                            }
                            {
                                this.state.showHospitalForm ?
                                <HospitalRegistrationForm /> : null 
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegistrationComponent
