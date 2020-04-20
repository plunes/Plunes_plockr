import React, { Component } from 'react';
import Downloader from 'js-file-downloader';
import axios from 'axios'
import PlockrHeaderComponent from './PlockrHeaderComponent';

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
        axios.post('https://plunes.co/v4/user/logout', "", { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
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
        axios.post('https://plunes.co/v4/user/login', data)
            .then((res) => {
                if (res.status === 201 && res.data.user.userType !== 'User') {
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('auth', res.data.token)
                    localStorage.setItem('uploaderUserId', res.data.user._id)
                    localStorage.setItem('docDetails', JSON.stringify(res.data.user))
                    this.setState({
                        showLogin: false,
                    })
                }else{
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
        if (localStorage.getItem('isAuth')) {
            this.setState({
                showLogin: false
            })
        }
        await axios.get('https://plunes.co/v4/catalogue')
            .then((res) => {
                if (res.status == 201) {
                    let catalogue = res.data;
                    let specArray = [];
                    catalogue.forEach((c) => {
                        let speciality = {
                            id: c._id,
                            name: c.speciality
                        }
                        specArray.push(speciality)
                    })
                    localStorage.setItem('specialities', JSON.stringify(specArray))
                    this.setState({
                        specialities: specArray
                    })
                }
            })
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
                    <div className="navbar navbar-expand-lg navbar-light ">
                        <a href="/"> <img className="logo-img-sizeing" src="/logo.png" alt=".." /></a>
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
                            <div className='col-md-6'>
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
                            <div className="navbar navbar-expand-lg navbar-light row">
                                <div className='col-md-3'>
                                    <a href="/plockrapp" title='Home'> <img className="logo-img-sizeing" src="/logo.png" alt=".." /></a>
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
                                        <button className="prescription-button2"> <a href='/prescription_builder'>Prescriptions</a></button>
                                    </div>
                                    <div className='col-sm-2'></div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-8'>
                                        <button className="prescription-button"><a href='/plockr-dashboard'>Diagnostic Reports</a></button>
                                    </div>
                                    <div className='col-sm-2'></div>
                                </div>
                            </div>
                            <div className='col prescription-img'>
                            <img className="prescription-img1" src="prescription.png" alt=".."/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default PlockrMainComponent;