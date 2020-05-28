import React, { Component } from 'react';
import Downloader from 'js-file-downloader';
import axios from 'axios'
import { Redirect } from 'react-router'
import { withRouter, Link } from 'react-router-dom'
import Modal from 'react-modal';
import { Form, Button, Spinner } from 'react-bootstrap'
import { PlunesBtn } from '../Layouts/Styles/styles'

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

class PlockrHeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: false,
            modalIsOpen: false,
            disabled: true,
            reportName: '',
            reportDisplayName: '',
            remarks: '',
            showError: false,
            errorText: '',
            problemAreaDiagnosis: '',
            precautions: ''
        }

        this.handleDownload = this.handleDownload.bind(this);
        this.handlelogout = this.handlelogout.bind(this);
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handlelogout(e) {
        e.preventDefault();
        let token = localStorage.getItem('auth');
        axios.post('https://api.plunes.com/v5/user/logout', "", { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
            .then((response) => {
                localStorage.removeItem('auth')
                localStorage.removeItem('isAuth')
                localStorage.removeItem('uploaderUserId')
                localStorage.removeItem('docDetails')
                this.setState({
                    navigate: true
                })

            })
            .catch(error => {
                localStorage.removeItem('auth')
                localStorage.removeItem('isAuth')
                localStorage.removeItem('uploaderUserId')
                localStorage.removeItem('docDetails')
                this.setState({
                    navigate: true
                })
                console.log(error, 'error')
            })
    }

    async handleDownload() {
        const res = await axios.get('https://plunes.co/v4/installer/' + localStorage.getItem('uploaderUserId'));
        if (res.status === 201) {
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

    handleChange = e => {
        e.preventDefault();
        this.setState({
            file: e.target.files[0],
        }, () => this.setState({ disabled: false }))
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.state.file && this.state.reportDisplayName) {
            let token = localStorage.getItem('auth')
            this.setState({
                pleaseWait: true,
                uploading: true,
                disabled: true
            })
            const data = new FormData();
            data.append('file', this.state.file)
            data.append('reportDisplayName', this.state.reportDisplayName)
            // data.append('userMobileNumber', this.state.mobileNumber)
            // data.append('remarks', this.state.remarks)
            // data.append('problemAreaDiagnosis', this.state.problemAreaDiagnosis)
            // data.append('precautions', this.state.precautions)

            console.log(data, 'data')
            await axios.post('https://api.plunes.com/v5/report/', data, { headers: { 'Content-Type': 'multipart/form-data', "Authorization": `Bearer ${token}` } })
                .then((res) => {
                    console.log("Report uploaded")
                    this.setState({
                        modalIsOpen: false,
                        reportName: '',
                        mobileNumber: '',
                        uploading: false,
                        reportDisplayName: '',
                        remarks: '',
                        problemAreaDiagnosis: '',
                        precautions: ''
                    }, () => {
                        this.props.getReports();
                    })
                })
                .catch((e) => {
                    console.log({ e },"PikaBooo")
                    if ( true) {
                        this.setState({
                            showError: true,
                            errorText: "Error uploading file",
                            uploading: false,
                            disabled: false
                        })
                    } else {
                        this.setState({
                            showError: true,
                            errorText: "Error uploading file",
                            uploading: false,
                            disabled: false
                        })
                    }
                })
        } else {
            this.setState({
                showError: true,
                errorText: "Please upload file and enter report name"
            })
        }
    }


    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { navigate } = this.state
        if (navigate) {
            return <Redirect to={{
                pathname: '/',
            }} />
        }

        return (

            <div className='container-fluid'>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <h2 className="text-center">Upload Report</h2>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className='row'>
                                <input id='uploadFile' className=" file-path-wrapper" name='file' onChange={this.handleChange} type="file" multiple />
                            </div>
                        </div>
                        <br />
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" name="reportDisplayName" placeholder="Enter report name" onChange={this.handleInput} value={this.state.reportDisplayName} />
                            </Form.Group>
                        </Form>
                        {this.state.uploading ?
                            <Spinner animation="grow" variant="success" /> : ''
                        }
                        {this.state.showError ? <div style={{ color: 'red' }}>{this.state.errorText}</div> : ''}
                        <div className='row'>
                            <div className='col'>
                                <button className="uploader-button-modal" type="submit" disabled={this.state.disabled}>Send</button>
                            </div>
                            <div className='col'>
                                <button type='button' className='send-button-modal' onClick={this.closeModal} >Close</button>
                            </div>
                        </div>
                    </form>
                </Modal>

                <div className="navbar navbar-expand-lg navbar-light row plock_shdo">
                    <div >
                        <Link to="/">
                            <img className="logo-img-sizeing" src="/logo.png" alt=".." /></Link>
                    </div>

                    {/* <div>
                     <button type="button" className="btn builder-button" onClick={this.openModal}>Upload Report</button>
                    </div> */}

                    <div className="header-btn">
                        <div className='upload-btn'>
                            <PlunesBtn type='button' bgClr='#01D35A' mbgClr='#01D35A' cWidth='135px' Color='#fff' mcolor='#fff' borderClr='#DFDFDF' onClick={this.openModal} >
                                <p>Upload Report</p>
                            </PlunesBtn>
                        </div>
                        <div className='logout-btn'>
                            <PlunesBtn type='button' bgClr='#fff' cWidth='80px' Color='#000' borderClr='#DFDFDF' mborderClr='#DFDFDF' onClick={this.handlelogout} >
                                <p>Logout</p>
                            </PlunesBtn>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                .header-btn{
                    float:right;
                    margin-left:auto;
                    display: flex;
                    justify-content: space-between;
                    margin-right:4rem
                }

                .logout-btn{
                    margin-left:2rem
                }
                p{
                align-item
                }
                }`}
                </style>
            </div>

        );

    }
}

export default withRouter(PlockrHeaderComponent);