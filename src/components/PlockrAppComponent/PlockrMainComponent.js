import React, { Component } from 'react';
import Downloader from 'js-file-downloader';
import { Link } from "react-router-dom"
import axios from 'axios'
import PlockrHeaderComponent from './PlockrHeaderComponent';
import PlockrHeader from './PlockrHeader'

class PlockrMainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin: true,
            failed: false,
            mobileNo: '',
            password: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlelogout = this.handlelogout.bind(this);
    }

    handlelogout(e) {
        e.preventDefault();
        let token = localStorage.getItem('auth');
        axios.post('https://devapi.plunes.com/v5/user/logout', "", { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
            .then((response) => {
                localStorage.removeItem('auth')
                localStorage.removeItem('isAuth')
                localStorage.removeItem('uploaderUserId')
                localStorage.removeItem('docDetails')
                this.setState({
                    showLogin: true,
                    mobileNo: '',
                    password: ''
                })

            })
            .catch(error => {
                localStorage.removeItem('auth')
                localStorage.removeItem('isAuth')
                localStorage.removeItem('uploaderUserId')
                localStorage.removeItem('docDetails')
                this.setState({
                    showLogin: true,
                    mobileNo: '',
                    password: ''
                })
                console.log(error, 'error')
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            mobileNumber: this.state.mobileNo,
            password: this.state.password
        }
        axios.post('https://devapi.plunes.com/v5/user/login', data)
            .then((res) => {
                if (res.status === 201 && res.data.user.userType !== 'User') {
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('auth', res.data.token)
                    localStorage.setItem('uploaderUserId', res.data.user._id)
                    localStorage.setItem('docDetails', JSON.stringify(res.data.user))
                    this.setState({
                        showLogin: false,
                    })
                } else {
                    this.setState({
                        failed: true,
                        mobileNo: '',
                        password: ''
                    })
                }
            })
            .catch((e) => {
                this.setState({
                    failed: true,
                    mobileNo: '',
                    password: ''
                })
            })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value.trim()
        })
    }

    async componentDidMount() {
        console.log(this.props.match.params.auth)
        if (this.props.match.params.auth) {
            const token = this.props.match.params.auth
            axios.get('https://devapi.plunes.com/v5/user/whoami', { headers: { Authorization: token } }).then(res => {
                console.log(res.data)
                localStorage.setItem('auth', token)
                localStorage.setItem('isAuth', true)
                localStorage.setItem('uploaderUserId', res.data._id)
                localStorage.setItem('docDetails', JSON.stringify(res.data))
                this.setState({
                    showLogin: false
                })
            })
        } else if (localStorage.getItem('isAuth')) {
            this.setState({
                showLogin: false
            })
        }
    }

    componentWillReceiveProps() {
        // console.log(this.props)
        this.setState({
            showLogin: true,
            mobileNo: '',
            password: ''
        })
    }

    render() {
        if (this.state.failed) {
            setTimeout(
                function () {
                    this.setState({
                        failed: false,
                    });
                }
                    .bind(this),
                3000
            );
        }

        if (this.state.showLogin) {
            return (
                <div className='container-fluid'>
                    <div className="row">
                        <PlockrHeader />
                    </div>
                    <div>
                        <br></br>
                        <h3 className='justify text-center headingTag'>Welcome to PLOCKR</h3>
                        <br></br>
                        <p className='paragraph'>
                            An Intelligent Cloud Solution allowing you to share all of the Reports or Prescriptions<br></br>
                            with your patients in one click.
                        <br></br>
                            Unlimited cloud storage for free; Save on all your stationary costs.
                        </p>
                        <br></br>
                        <div className='row'>
                            <div className='col-4'>
                            </div>
                            <div className='col-4 loginForm'>
                                {
                                    this.state.failed ?
                                        <div className='fail'>
                                            <p style={{ color: "red" }}>Invalid Login Credentials</p>
                                        </div> : false}
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="tel" className="form-control-app plockr-app-form" name='mobileNo' placeholder="Mobile No" value={this.state.mobileNo} onChange={this.handleChange} />
                                    </div><br></br>
                                    <div className="form-group">
                                        <input type="password" className="form-control-app plockr-app-form" name='password' placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" className="btn plockrapp-button">Login</button>
                                </form>
                            </div>
                            <div className='col-4'>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6' style={{ textAlign: "center" }}>
                                <img src='/plockrimages.png' height='300' width='690'></img>
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='container-fluid'>
                        <div className='container-fluid'>
                            <div className="navbar navbar-expand-md navbar-light row back_shado ">
                                <div className='col-md-3'>
                                <Link
                                  to ="/">
                                <img className="logo-img-sizeing" src="/logo.png" alt=".." />
                                </Link>
                                </div>
                                <div className='col-md-7'>
                                </div>
                                {/* <div className='col-md-2 text-right'>
                        <a href="/prescription_builder">
                            <button type="button" className="btn builder-button">Create Prescription</button>
                        </a>
                    </div> */}
                                <div className='col-md-2'>
                                    <button type="button" className="btn logout" onClick={this.handlelogout}>Logout</button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-8'>
                                        <button className="prescription-button2">
                                        <Link
                                  to ="/plockr-dashboard">
                                         Diagnostic Reports</Link></button>
                                    </div>
                                    <div className='col-sm-2'></div>
                                </div>
                                {/* <div className='row'>
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-8'>
                                        <button className="prescription-button">
                                        <Link
                                  to ="/plockr-dashboard">
                                    Diagnostic Reports</Link></button>
                                    </div>
                                    <div className='col-sm-2'></div>
                                </div> */}
                            </div>
                            <div className='col prescription-img'>
                                <img className="prescription-img1" src="prescription.png" alt="prescription" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default PlockrMainComponent;