import React, { Component } from 'react';
import CreateBuilderComponent from '../PrescriptionBuilderComponent/CreateBuilderComponent'
import ShowEditPrescriptionComponent from '../PrescriptionBuilderComponent/ShowEditPrescriptionComponent'
import PrescriptionListComponent from '../PrescriptionBuilderComponent/PrescriptionListComponent'
import PrescriptionHeaderComponent from '../PrescriptionBuilderComponent/PrescriptionHeaderComponent'
import SendPrescriptionComponent from './SendPrescriptionComponent';
import axios from 'axios';


class PrescriptionDashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docDetails: this.props.location.state ? this.props.location.state.docDetails : {},
            showCreateTemplate: true,
            showSendPrescription: false,
            showEditTemplate: false,
            refreshList: false
        }
        this.handleSaveTemplate = this.handleSaveTemplate.bind(this);
        this.checkSavedPrescription = this.checkSavedPrescription.bind(this);
        this.handleCreateTemplate = this.handleCreateTemplate.bind(this);
        this.handleEditTemplate = this.handleEditTemplate.bind(this);
        this.handleSentPrescription = this.handleSentPrescription.bind(this);
        this.handleUpdatedTemplate = this.handleUpdatedTemplate.bind(this);
    }

    handleSentPrescription(select) {
        if (select) {
            this.setState({
                refreshList: true
            })
        }
    }

    async handleEditTemplate(docValue) {
        let checkSavedPrescription = await this.checkSavedPrescription();
        if (checkSavedPrescription.userType === 'Doctor') {
            if (checkSavedPrescription.hasOwnProperty("prescription") && Object.entries(checkSavedPrescription.prescription).length > 1) {
                this.setState({
                    showCreateTemplate: false,
                    showSendPrescription: false,
                    showEditTemplate: true,
                    docDetails: checkSavedPrescription
                })
            }
        } else if (checkSavedPrescription.userType === 'Hospital') {
            let data = checkSavedPrescription.doctors.filter((doc) => docValue._id === doc._id ? true : false)
            console.log(data, 'docValue')
            if (data.length > 0 && Object.entries(data[0].prescription).length > 1) {
                this.setState({
                    showCreateTemplate: false,
                    showSendPrescription: false,
                    showEditTemplate: true,
                    docDetails: data[0]
                })
            } else {
                this.setState({
                    docDetails: data[0]
                })
            }
        }
    }

    async handleCreateTemplate(docValue) {
        let checkSavedPrescription = await this.checkSavedPrescription();
        if (checkSavedPrescription.userType === 'Doctor') {
            if (checkSavedPrescription.hasOwnProperty("prescription") && Object.entries(checkSavedPrescription.prescription).length > 1) {
                this.setState({
                    showSendPrescription: false,
                    showEditTemplate: false,
                    showCreateTemplate: true,
                    docDetails: checkSavedPrescription
                })
            }
        } else if (checkSavedPrescription.userType === 'Hospital') {
            let data = checkSavedPrescription.doctors.filter((doc) => docValue._id === doc._id ? true : false)
            // console.log(data, 'docValue')
            if (data.length > 0) {
                this.setState({
                    showSendPrescription: false,
                    showEditTemplate: false,
                    showCreateTemplate: true,
                    docDetails: data[0]
                }, () => {
                    console.log(this.state.docDetails, 'doc details')
                })
            }
        }
    }

    checkSavedPrescription() {
        let auth = localStorage.getItem('auth')
        return new Promise(async function (resolve, reject) {
            await axios.get('https://plunes.co/v4/user/whoami', { headers: { "Authorization": `Bearer ${auth}` } })
                .then((res) => {
                    localStorage.setItem('docDetails', JSON.stringify(res.data))
                    resolve(res.data)
                })
                .catch((e) => {
                    reject(e)
                })
        })
    }

    async handleUpdatedTemplate() {
        console.log('anshul')
        let checkSavedPrescription = await this.checkSavedPrescription();
        if (checkSavedPrescription.userType === 'Doctor') {
            if (checkSavedPrescription.hasOwnProperty("prescription") && Object.entries(checkSavedPrescription.prescription).length > 1) {
                this.setState({
                    showCreateTemplate: false,
                    showEditTemplate: false,
                    showSendPrescription: true,
                    docDetails: checkSavedPrescription
                })
            }
        } else if (checkSavedPrescription.userType === 'Hospital') {
            let data = checkSavedPrescription.doctors.filter((doc) => this.state.docDetails._id === doc._id ? true : false)
            if (data.length > 0 && Object.entries(data[0].prescription).length > 1) {
                this.setState({
                    showCreateTemplate: false,
                    showEditTemplate: false,
                    showSendPrescription: true,
                    docDetails: data[0]
                }, () => {
                    console.log(this.state.docDetails, "after create")
                })
            }
        }
    }
    async handleSaveTemplate(select) {
        let checkSavedPrescription = await this.checkSavedPrescription();
        if (checkSavedPrescription.userType === 'Doctor') {
            if (checkSavedPrescription.hasOwnProperty("prescription") && Object.entries(checkSavedPrescription.prescription).length > 1) {
                this.setState({
                    showCreateTemplate: false,
                    showEditTemplate: false,
                    showSendPrescription: true,
                    docDetails: checkSavedPrescription
                })
            }
        } else if (checkSavedPrescription.userType === 'Hospital') {
            // console.log(this.state.docDetails, 'doc details')
            let data = checkSavedPrescription.doctors.filter((doc) => this.state.docDetails._id === doc._id ? true : false)

            if (data.length > 0 && Object.entries(data[0].prescription).length > 1) {
                this.setState({
                    showCreateTemplate: false,
                    showEditTemplate: false,
                    showSendPrescription: true,
                    docDetails: data[0]
                }, () => {
                    console.log(this.state.docDetails, "after create")
                })
            }
        }
    }

    async componentDidMount() {
        let checkSavedPrescription = await this.checkSavedPrescription();
        if (checkSavedPrescription.userType === 'Doctor') {
            this.setState({
                docDetails: checkSavedPrescription
            })
            if (checkSavedPrescription.hasOwnProperty("prescription") && Object.entries(checkSavedPrescription.prescription).length > 1) {
                this.setState({
                    showCreateTemplate: false,
                    showSendPrescription: true,
                    docDetails: checkSavedPrescription
                })
            }
        } else if (checkSavedPrescription.userType === 'Hospital') {
            let data = checkSavedPrescription.doctors.filter((doc) => this.state.docDetails._id === doc._id ? true : false)
            if (data.length > 0 && Object.entries(data[0].prescription).length > 1) {
                this.setState({
                    showCreateTemplate: false,
                    showSendPrescription: true,
                    docDetails: data[0]
                })
            }
        }
    }

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <PrescriptionHeaderComponent />
                        <div className='col-md-1'></div>
                        <div className='col-md-7'>
                            <div>
                                <ul className="breadcrumb breadcrumb-style">
                                    <li><a href="/plockrapp" title='home'>Home</a></li>
                                    <li className="header-font2" ><a className="breadcrumb-text" href="/plockrapp">Generate Prescription</a></li>
                                </ul>
                            </div>
                            {
                                this.state.showCreateTemplate ? <CreateBuilderComponent doctor={this.state.docDetails} handleSaveTemplate={this.handleSaveTemplate} /> : false
                            }
                            {
                                this.state.showSendPrescription ? <SendPrescriptionComponent doctor={this.state.docDetails} handleSentPrescription={this.handleSentPrescription} /> : false

                            }
                            {
                                this.state.showEditTemplate ? <ShowEditPrescriptionComponent doctor={this.state.docDetails} handleUpdatedTemplate={this.handleUpdatedTemplate} /> : false
                            }
                        </div>
                        <div className='col-md-4 prescriptionList'>
                            <PrescriptionListComponent refreshList={this.state.refreshList} handleEditTemplate={this.handleEditTemplate} doctor={this.state.docDetails} handleCreateTemplate={this.handleCreateTemplate} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PrescriptionDashboardComponent;