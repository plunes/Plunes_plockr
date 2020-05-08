import React, { Component } from 'react';
import axios from 'axios'
import Modal from 'react-modal';
import './index.css'
import { Table, Button } from 'react-bootstrap'
import { Modal as Modal2 } from 'react-bootstrap'
import ReportImage from '../../commonCompo/ReportImage';
import Loader from "react-loader-spinner"

class ContainerComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            showReceived: true,
            modalIsOpen: false,
            file: null,
            report: [],
            data: {},
            modalIsOpen: false,
            sent: false,
            disabled: true,
            pleaseWait: false,
            loading: false,
            showInfoModal: false,
            showDeleteModal: false
        }
        this.handleReports = this.handleReports.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleReports = this.handleReports.bind(this);
        this.getExtension = this.getExtension.bind(this);
    }

    componentWillMount() {
        console.log(this.props, "Container props")
    }

    handleClick(e, file) {
        console.log(e, file, "e and data in handleClick")
        let fileType = this.getExtension(file.reportName)
        let data = {
            fileName: file.reportDisplayName,
            url: file.reportUrl,
            type: fileType,
            id: file._id,
            showFile: true
        }
        let stack = file.self ? this.props.businessSentReports : this.props.businessReceivedReports
        console.log(this.state, "this.state in ComtainerComponent")

        this.props.handleSelection(data, stack)
    }

    getExtension(url) {
        var extStart = url.indexOf('.', url.lastIndexOf('/') + 1);
        if (extStart == -1) return false;
        var ext = url.substr(extStart + 1),
            extEnd = ext.search(/$|[?#]/);
        return ext.substring(0, extEnd);
    }

    handleReports(e) {
        if (e == 'r') {
            this.setState({
                showReceived: true,
                active: true
            })
        } else {
            this.setState({
                showReceived: false,
                active: false
            })
        }
    }

    showDetails = (e, f) => {
        console.log("Show details", e, f)
        this.setState({
            displayReportName: f.reportDisplayName,
            displayReportTime: f.createdTime,
            displayReportDiagnosis: f.problemAreaDiagnosis,
            displayReportPatientName: f.userName,
            displayReportPatientPhone: f.userMobileNumber,
            displayReportRemarks: f.remarks,
            displayReportPrecautions: f.precautions,
            displayReportPatientAddress: f.userAddress,
            showInfoModal: true
        })
    }

    closeInfoModal = () => {
        this.setState({
            showInfoModal: false
        })
    }

    deleteReport = (e) => {
        console.log("Delete report")
        axios.delete('https://devapi.plunes.com/v5/report/' + this.state.deleteReportId, { 'headers': { 'Authorization': localStorage.getItem('auth') } }).then(res => {
            console.log("Deleted report")
            this.setState({
                showDeleteModal: false,
                deleteReportId: '',
                deleteReportName: ''
            })
            this.props.getReports()
        })
    }

    closeDeleteModal = () => {
        this.setState({
            showDeleteModal: false
        })
    }

    openDeleteModal = (e, f) => {
        console.log({ e, f })
        this.setState({
            showDeleteModal: true,
            deleteReportName: f.reportDisplayName,
            deleteReportId: f._id
        })
    }

    shareReport = (e) => {

    }

    render() {

        if (this.state.loading) {
            return (
                <div className="loader-wrapper">
                    <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={200}
                        width={200}
                    // timeout={3000} //3 secs
                    />
                </div>
            )
        }


        if (this.state.sent) {
            setTimeout(
                function () {
                    this.setState({
                        sent: false,
                    });
                }
                    .bind(this),
                3000
            );
        }

        const greenStyle = {
            background: "#01D35A 0% 0% no-repeat padding-box",
            opacity: 1,
            height: "3px",
            marginTop: '0 !important',
            marginBottom: '0 !important'
        }

        const greyStyle = {
            background: "#DCDCDC 0% 0% no-repeat padding-box",
            opacity: 1,
            height: "3px",
            marginTop: '0 !important',
            marginBottom: '0 !important'
        }

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

        return (
            <div className=' repolist_images_wrapper'>
                {this.state.showInfoModal ?
                    <Modal
                        isOpen={this.state.showInfoModal}
                        onRequestClose={this.closeInfoModal}
                        style={customStyles}
                    >
                        <h2 className="text-center">Report Details</h2>
                        <br />
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>Report Name</td>
                                    <td>{this.state.displayReportName}</td>
                                </tr>
                                <tr>
                                    <td>Uploaded</td>
                                    <td>{this.state.displayReportTime}</td>
                                </tr>
                                <tr>
                                    <td>Patient Name</td>
                                    <td>{this.state.displayReportPatientName}</td>
                                </tr>
                                <tr>
                                    <td>Patient Phone</td>
                                    <td>{this.state.displayReportPatientPhone}</td>
                                </tr>
                                <tr>
                                    <td>Patient Address</td>
                                    <td>{this.state.displayReportPatientAddress}</td>
                                </tr>
                                <tr>
                                    <td>Diagnosis</td>
                                    <td>{this.state.displayReportDiagnosis}</td>
                                </tr>
                                <tr>
                                    <td>Precautions</td>
                                    <td>{this.state.displayReportPrecautions}</td>
                                </tr>
                                <tr>
                                    <td>Remarks</td>
                                    <td>{this.state.displayReportRemarks}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal>
                    : ''}
                {this.state.showDeleteModal ?
                    <Modal
                        isOpen={this.state.showDeleteModal}
                        onRequestClose={this.closeDeleteModal}
                        style={customStyles}
                    >
                        <h2 className="text-center">Delete Report</h2>
                        <br />
                        {`Are you sure you want to permanently delete report ${this.state.deleteReportName}?`}
                        <br />
                        <div className='row'>
                            <div className='col'>
                                <button className="uploader-button-modal" onClick={this.deleteReport}>Delete</button>
                            </div>
                            <div className='col'>
                                <button type='button' className='send-button-modal' onClick={this.closeDeleteModal} >Cancel</button>
                            </div>
                        </div>
                    </Modal>
                    : ''}
                {(this.props.businessReceivedReports.length > 0 || this.props.businessSentReports.length > 0) ?
                    <div>
                        {/* <div className='text-center row'>
                        <h5 className="text-center color-white">Report List</h5>
                    </div> */}
                        <div className='text-center row'>
                            <div className='col-md-1'>
                            </div>
                            <div className='col-md-5 colhead' onClick={(e) => this.handleReports('r')}>
                                <li className='tabReport color-white cursor-pointer' >Personal</li>
                                <hr style={this.state.active ? greenStyle : greyStyle}></hr>
                            </div>
                            <div className='col-md-5 colhead' onClick={(e) => this.handleReports('s')}>
                                <li className='tabReport color-white cursor-pointer' >Sent</li>
                                <hr style={this.state.active ? greyStyle : greenStyle}></hr>
                            </div>
                            <div className='col-md-1'>
                            </div>
                        </div>
                        <ul className='fileContainer row'>
                            {
                                this.state.showReceived ? this.props.businessReceivedReports.map((b, index) => (
                                    <ReportImage handleClick={this.handleClick} b={b} index={index} showDetails={this.showDetails} handleDelete={this.openDeleteModal} handleShare={this.shareReport} />
                                ))
                                    : this.props.businessSentReports.map((b, index) => (
                                        <ReportImage handleClick={this.handleClick} b={b} index={index} showDetails={this.showDetails} handleDelete={this.openDeleteModal} handleShare={this.shareReport} />
                                    ))
                            }
                        </ul>
                    </div> : ''
                }
            </div>
        );
    }
}
export default ContainerComponent;