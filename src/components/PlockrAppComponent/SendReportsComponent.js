import React, { Component } from 'react';
import axios from 'axios'
import MyComponent from './MyComponent';
import './PlockrAppComponent.css'
import PlockrProfileEditComponent from './PlockrProfileEditComponent'
import PlockrAppComponent from './PlockrAppComponent'
import Downloader from 'js-file-downloader';

class SendReportsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businessRecievedReports: [],
            businessSentReports: [],
            reportDet: this.props.reportDet,
            showFile: false,
            showLogin: false,
            userId: localStorage.getItem('uploaderUserId'),
            sentReports: [],
            recievedReports: [],
            showRecieved: true,
            active: true
        }

        this.handleClick = this.handleClick.bind(this);
        this.getExtension = this.getExtension.bind(this);
        this.handlelogout = this.handlelogout.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
        this.handleReports = this.handleReports.bind(this);
        this.getReports = this.getReports.bind(this);
    }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    componentWillReceiveProps(props){
        console.log()
    }
    async componentDidMount() {
        // this.setState({
        // })
        //this.showFile = false
        // let counter = this.getReports();
        // this.interval = setInterval(this.getReports, 10000);
    }

    async getReports() {
        let token = localStorage.getItem('auth')
        await axios.get('https://plunes.co/v4/report/', { 'headers': { 'Authorization': token } })
            .then(res => {
                if (res.status === 201) {
                    console.log('a')
                    let reports = res.data.businessReports;
                    let sentReports = reports.filter((r) => r.patientMobileNumber ? true : false)
                    let recieveReports = reports.filter((r) => !r.patientMobileNumber ? true : false)
                    recieveReports.forEach((r) => {
                        var datetime = new Date(r.createdTime);
                        var now = datetime.toLocaleString();
                        r.createdTime = now;
                        r.reportName = r.reportName.split('_').join(' ');
                    })
                    sentReports.forEach((r) => {
                        var datetime = new Date(r.createdTime);
                        var now = datetime.toLocaleString();
                        r.createdTime = now
                        r.reportName = r.reportName.split('_').join(' ');
                    })
                    this.setState({
                        businessRecievedReports: recieveReports,
                        businessSentReports: sentReports
                    })
                }
            })
    }

    handleReports(e) {
        if (e == 'r') {
            this.setState({
                showRecieved: true,
                active: true
            })
        } else {
            this.setState({
                showRecieved: false,
                active: false
            })
        }
    }

    async handleDownload() {
        const res = await axios.get('https://plunes.co/v4/installer/' + this.state.userId);
        if (res.status === 201) {
            // console.log(res.data);
            new Downloader({
                url: res.data.downloadUrl
            })
                .then(function () {
                    // Called when download ended
                })
                .catch(function (error) {
                    // Called when an error occurred
                });
        }
    }

    handlelogout(e) {
        e.preventDefault();
        let token = localStorage.getItem('auth');
        axios.post('https://plunes.co/v4/user/logout', "", { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
            .then((response) => {
                localStorage.removeItem('auth')
                localStorage.removeItem('isAuth')
                localStorage.removeItem('uploaderUserId')
                this.setState({
                    showLogin: true
                })
            })
            .catch(error => {
                console.log(error, 'error')
            })
    }

    getExtension(url) {
        // Extension starts after the first dot after the last slash
        var extStart = url.indexOf('.', url.lastIndexOf('/') + 1);
        if (extStart == -1) return false;
        var ext = url.substr(extStart + 1),
            // end of extension must be one of: end-of-string or question-mark or hash-mark
            extEnd = ext.search(/$|[?#]/);
        return ext.substring(0, extEnd);
    }

    handleClick(e) {
        console.log('id')
        let fileType = this.getExtension(e.currentTarget.dataset.url)
        let data = {
            fileName: e.currentTarget.dataset.filename,
            url: e.currentTarget.dataset.url,
            type: fileType,
            id: e.currentTarget.dataset.id
        }
        this.setState({
            reportDet: data,
            showFile: true
        })
    }



    render() {
        if (this.state.showLogin) {
            return <PlockrAppComponent />
        } else {
            const greenStyle = {
                background: "#01D35A 0% 0% no-repeat padding-box",
                opacity: 1,
                height: "6px",
                marginTop : '0px !important',
                marginBottom : '0px !important'
            }
            const greyStyle = {
                background: "#DCDCDC 0% 0% no-repeat padding-box",
                opacity: 1,
                height: "6px",
                marginTop : '2px !important',
                marginBottom : '0px !important'
            }

            return (
                <div className='container-fluid'>
                            {
                                this.state.showFile ?
                                    <div>
                                        <div className='pdfContainer'>
                                            <MyComponent className='viewFile' key={Math.random().toString()} data={this.state.reportDet} />
                                        </div>
                                        <div className='row'>
                                            <PlockrProfileEditComponent key={Math.random().toString()} data={this.state.reportDet} />
                                        </div>
                                    </div>
                                    : <div className='row'>
                                        <PlockrProfileEditComponent key={Math.random().toString()} data={this.state.reportDet} />
                                    </div>
                            }
                        
                </div>
            );
        }
    }
}

export default SendReportsComponent;