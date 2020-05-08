import React, { Component } from 'react';
import Downloader from 'js-file-downloader';
import axios from 'axios'
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import Modal from 'react-modal';
import { Form, Button, Spinner } from 'react-bootstrap'

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
        axios.post('https://plunes.co/v4/user/logout', "", { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
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
        if (this.state.file) {
            let token = localStorage.getItem('auth')
            this.setState({
                pleaseWait: true,
                uploading: true,
                disabled: true
            })
            const data = new FormData();
            data.append('file', this.state.file)
            data.append('reportDisplayName', this.state.reportDisplayName)
            data.append('userMobileNumber', this.state.mobileNumber)
            data.append('remarks', this.state.remarks)
            data.append('problemAreaDiagnosis', this.state.problemAreaDiagnosis)
            data.append('precautions', this.state.precautions)

            console.log(data, 'data')
            await axios.post('https://devapi.plunes.com/v5/report/', data, { headers: { 'Content-Type': 'multipart/form-data', "Authorization": `Bearer ${token}` } })
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
                    console.log({ e })
                    if (e.response.data) {
                        this.setState({
                            showError: true,
                            errorText: e.response.data,
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
                errorText: "Please upload file"
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
                pathname: '/plockrapp',
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
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="number" placeholder="Patient's phone number" name="mobileNumber" onChange={this.handleInput} value={this.state.mobileNumber} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" name="reportDisplayName" placeholder="Enter report name" onChange={this.handleInput} value={this.state.reportDisplayName} />
                            </Form.Group>


                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Problem Area Diagnosis" name="problemAreaDiagnosis" onChange={this.handleInput} value={this.state.problemAreaDiagnosis} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Precautions" name="precautions" onChange={this.handleInput} value={this.state.precautions} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Remarks" name="remarks" onChange={this.handleInput} value={this.state.remarks} />
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
                    <div className='col-md-3'>
                        <a href="/plockrapp" title='Home'> <img className="logo-img-sizeing" src="/logo.png" alt=".." /></a>
                    </div>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-2 text-right'>
                        <button type="button" className="btn builder-button" onClick={this.openModal}>Upload Report</button>
                    </div>
                    <div className='col-md-2'>
                        <a href="/prescription_builder">
                            <button type="button" className="btn builder-button">Create Prescription</button>
                        </a>
                    </div>
                    <div className='col-md-1'>
                        <button type="button" style={{ width: "100%!important" }} className="btn logout" onClick={this.handlelogout}>Logout</button>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default withRouter(PlockrHeaderComponent);