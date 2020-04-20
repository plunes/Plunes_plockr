import React, { Component } from 'react';
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class ThankyouComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobileNumber: '',
            modalIsOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        })
    }


    async handleSubmit(e) {
        e.preventDefault()
        let body = {
            "name": this.state.name,
            "mobileNumber": this.state.mobileNumber,
            "message": this.state.message
        }
        let response = await axios.post("https://plunes.co/v4/notification/covidInfo", body)
            .then((res) => {
                // console.log(data);
                if (res.data.success) {
                    this.setState({
                        modalIsOpen: true,
                        name: '',
                        mobileNumber: '',
                        message: ''
                    })
                }

            })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
            <div className='container-fluid '>
                {/* <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/covid19-test" />
                    <title>About Us Plunes India's First Utility Network </title>
                    <meta name='keywords' content='utility network, plunes, AI-powered, real-time solutions, one stop solution, consultation, procedures'></meta>
                    <meta name="description" content="Know about Plunes one of India's First utility network. Providing the best service to find the doctors including Gynecologist, Psychotherapist. Get Free Consultation.">
                    </meta>
                </Helmet> */}
                <div>
                    <LandingHeader />
                </div>
                <div className="Thanku">
                    <div className="text-center" style={{fontSize:"25px"}}>
                        <div><b>Thank You For Booking!</b></div><br></br>
                        <div>One of our representatives will call you back shortly, if the matter is urgent then please <br></br>
                            <b> Call/Whatsapp: +91-7701805081".</b>
                        </div><br></br>
                        <div>Please <b>DOWNLOAD PLUNES APP</b> for further consultation, also you can refer some useful tips 
                            & guidelines given by Government of India & medical bodies to prevent yourself & your family from 
                            <b style={{color:"#E60000"}}> COVID-19.</b>
                        </div><br></br>
                    </div>
                    
                    <div><b><u><h3>Important Links</h3></u></b></div>
                    <ul>
                        <h3>
                        <li><a href="https://icmr.nic.in/node/39071">https://icmr.nic.in/node/39071</a></li>
                        <li><a href="https://www.mohfw.gov.in/">https://www.mohfw.gov.in/</a></li>
                        <li><a href="https://www.mygov.in/covid-19/">https://www.mygov.in/covid-19/</a></li>
                        <li><a href="https://ncdc.gov.in/index4.php?lang=1&level=0&linkid=127&lid=432">https://ncdc.gov.in/</a></li>
                        </h3>
                    </ul>
                </div>
                {/* <div className='row justify-text-center'>
                <div><b>Thank You For Booking!</b></div><br></br>
                        <div>One of our representatives will call you back shortly, if the matter is urgent then please
                            <b> Call/Whatsapp: +91-7701805081".</b>
                        </div><br></br>
                        <div>Please <b>DOWNLOAD PLUNES APP</b> for further consultation, also you can refer some useful tips
                            & guidelines given by Government of India & medical bodies to prevent yourself & your family from
                            <b style={{ color: "#E60000" }}> COVID-19.</b>
                        </div>
                    <br></br>
                </div>
                </div> */}
                {/* <div className="Thanku">
                    <div className="text-center">
                        <div><b>Thank You For Booking!</b></div><br></br>
                        <div>One of our representatives will call you back shortly, if the matter is urgent then please
                            <b> Call/Whatsapp: +91-7701805081".</b>
                        </div><br></br>
                        <div>Please <b>DOWNLOAD PLUNES APP</b> for further consultation, also you can refer some useful tips
                            & guidelines given by Government of India & medical bodies to prevent yourself & your family from
                            <b style={{ color: "#E60000" }}> COVID-19.</b>
                        </div><br></br>
                    </div>

                    <div><b><u><h3>Important Links</h3></u></b></div>
                    <ul >
                        <h3>
                            <li className="mobileLinks"><a href="https://icmr.nic.in/node/39071">https://icmr.nic.in/node/39071</a></li>
                            <li className="mobileLinks"><a href="https://www.mohfw.gov.in/">https://www.mohfw.gov.in/</a></li>
                            <li className="mobileLinks"><a href="https://www.mygov.in/covid-19/">https://www.mygov.in/covid-19/</a></li>
                            <li className="mobileLinks"><a href="https://ncdc.gov.in/index4.php?lang=1&level=0&linkid=127&lid=432">https://ncdc.gov.in/</a></li>
                        </h3>
                    </ul>
                </div> */}
                <div>
                    <LandingFooter />
                </div>
            </div>
            </div>
        );
    }
}

export default ThankyouComponent;