import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router'

class UserRegistrationForm extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props.userType)
        this.state = {
            fullName: '',
            emailId: '',
            password: '',
            phoneNumber: '',
            dob: '',
            refCode: '',
            gender: '',
            userType: 'User',
            showLogin: false
        }
        this.baseUrl = 'http://13.233.151.26:8000/';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = {
            'email': this.state.emailId,
            'mobileNumber': this.state.phoneNumber,
            'password': this.state.password,
            'name': this.state.fullName,
            'address': this.state.address,
            'userType': this.state.userType,
            'birthDate': this.state.dob,
            'gender': this.state.gender,
        }
        console.log(data)
        axios.post(this.baseUrl + 'user/register', data)
            .then(({ data }) => {
                console.log(data);
                if (data.err) {
                    //message.error(data.msg);
                    console.log(data.err)
                }
                else {

                    this.setState({ showLogin: true })
                }
            })
    }

    render() {
        const { showLogin } = this.state
        if (showLogin) {
            return <Redirect to={{
                pathname: "/log-in/",

            }} />;
        }
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="form-control2 plockr-app-form" name="fullName" placeholder="Name" onChange={this.handleChange} required />
                    </div>
                    <div class="form-check-inline">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input plockr-app-form" value='M' name="gender" onChange={this.handleChange} />Male
                        </label>
                    </div>
                    <div class="form-check-inline">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input plockr-app-form" value='F' name="gender" onChange={this.handleChange} />Female
                        </label>
                    </div>
                    <div className="form-group">
                        <input className="form-control2 plockr-app-form" name="phoneNumber" placeholder="Mobile Number" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <input className="form-control2 plockr-app-form" name="emailId" placeholder="Email id" onChange={this.handleChange} required />
                    </div>

                    <div class="form-group">
                        <input class="form-control2 plockr-app-form" type='date' name='dob' id="example-datetime-local-input" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group"><span>
                        <input type="password" className="form-control2 plockr-app-form" placeholder="Password" onChange={this.handleChange} name="password" required /></span>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control2 plockr-app-form" rows="3" placeholder='Address' name='address' onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <input className="form-control2 plockr-app-form" placeholder="Enter Referal Code (Optional)" onChange={this.handleChange} name="refCode" />
                    </div>
                    <div className="form-group" className='button'>
                        <button type="submit" className="btn btn-success btn-lg btn-block">Sign Up</button>
                    </div>
                </form>
                <div>
                    <p className="last-text">By registering, you agree to our<br></br><a href="/terms-of-use" >T&C </a> </p>
                </div>
            </div>
        );
    }
}

export default UserRegistrationForm;