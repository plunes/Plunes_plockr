import React, { Component } from 'react';
import '../ServicesComponent/ContactusComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";
import axios from 'axios'

class ContactusComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        axios.post('https://plunes.co/v4/notification/contact', data)
            .then(res => { // then print response status
                console.log(res.statusText)
                if (res.status === 201) {
                    this.setState({
                        name: '',
                        email: '',
                        message: ''
                    })
                }
            })
    }


    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com/contact" />
                    <title>Contact Us Plunes India's First Utility Network </title>
                    <meta name='keywords' content='contact us, email id, you can ask us, phone number, comment, get in touch'></meta>
                    <meta name="description" content="For more information Contact Us at Plunes India's First Utility Network.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>

                <div className='container-fluid contact-align'>
                    <div className='row justify-content-center'>
                        <h1 className="ploker-header">CONTACT US</h1>
                    </div>
                    <div className="section">
                        <div className="row contact-us justify-content-center">
                            <div className="card" className="cont">
                                <img className="contact-img" src="/inbox.png" alt=".." />
                                <div className="card-body font">
                                    <h5 className="card-title email-align">Email</h5>
                                    <p className="card-text info-align">info@plunes.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <form onSubmit={this.handleSubmit}>
                            <div className='row justify-content-center'>
                                <h1 className="contact-header">Get In Touch</h1>
                            </div>
                            <hr width="10%"></hr>
                            <div className="row">
                                <div className='col-sm-3'></div>
                                <div className='col-sm-6'>
                                    <div className='row'>
                                        <div className='col'>
                                            <input className="contact-us-form" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                                        </div>
                                        <div className='col'>
                                            <input className="contact-us-form" name="email" placeholder="Email ID" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col'>
                                            <textarea placeholder="Message" name='message' className="contact-textarea" value={this.state.message} onChange={this.handleChange}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-3'></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                </div>
                                <div className="col-sm-4">
                                    <button type='submit' className="contactus-button">Submit</button>
                                </div>
                                <div className="col-sm-4">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default ContactusComponent;