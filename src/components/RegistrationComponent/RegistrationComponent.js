import React from 'react';
import '../LandingComponent/Landing.css';
import LandingHeader from '../LandingComponent/LandingHeader'
import RegistrationContainer from './RegistrationContainer'
import axios from 'axios';
import { Helmet } from "react-helmet";



class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.root = props.root
    }

    render() {
        console.log(this.root, "asdfghjk")
        // const { serviceList } = this.root
        // console.log(serviceList)
        return <div className='container-fluid'>
            <Helmet>
                <link rel="canonical" href="https://www.plunes.com/sign-up" />
                <title>Sign Up Get Access  to India's First Utility Network, Plunes</title>
                <meta name='keywords' content='signup, sign up, name, enail id, password, address, general user, doctors, hospitals, specialization'></meta>
                <meta name="description" content="Create your account by Sign Up to get access at Plunes to find & book for consultation from top doctors/Hospitals in Gurgaon.">
                </meta>
            </Helmet>
            <LandingHeader root={this.root} />
            <RegistrationContainer root={this.root} />
        </div>
    }
}
export default RegistrationComponent