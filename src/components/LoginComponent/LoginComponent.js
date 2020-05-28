import React, { Component } from 'react'
import LandingHeader from '../LandingComponent/LandingHeader'
import LoginContainer from '../LoginComponent/LoginContainer'
import axios from 'axios'
import { Redirect } from 'react-router'
import { Helmet } from "react-helmet";

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.root = props.root
        this.state = {
            emailId: '',
            password: '',
            phone_number: '',
            redirect: false
        }
        // this.baseUrl = 'https://plunes.co/v3/';
        this.baseUrl = 'https://api.plunes.com/v5'
    }

    
    render() {
        // const { isAuth } = this.root;
        // console.log(isAuth);
        const { redirect } = this.state
        if (redirect) {
            //console.log('anshul');
            return <Redirect to={{
                pathname: '/dashboard',
            }} />;
        }
        return (
            <div class="container-fluid">
                {/* <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/login" />
                    <title>Login to India's First Utility Network, Plunes</title>
                    <meta name='keywords' content='login, log in, password, email id'></meta>
                    <meta name="description" content="Login to get access at Plunes for book instantly from top doctors/hospitals near you in Gurgaon.">
                    </meta>
                </Helmet> */}
                <LandingHeader root = {this.root}/>
                <LoginContainer root = {this.root} />
            </div>
        )
    }
}


 