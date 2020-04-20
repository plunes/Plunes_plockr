import React, { Component } from 'react';
import '../PlockrAppComponent/PlockrAppComponent.css';
import axios from 'axios';

class PrescriptionListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            docDetails: {},
            selectedDoctor: {},
            presList: [],
            filterList : [],
            filter: ''
        }
        this.getDoctors = this.getDoctors.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.getSentPrescription = this.getSentPrescription.bind(this);
        this.onSearchQuery = this.onSearchQuery.bind(this);
    }

    onSearchQuery(e){
        this.setState({ filter: e.target.value }, () => {
            if (this.state.filter.length > 0) {
                const { filter, presList } = this.state;
                const lowercasedFilter = filter.toLowerCase();
                const filteredData = presList.filter(item => {
                    let result = false;
                    if(item.patientName){
                        let smallData = item['patientName'].toLowerCase();
                        if(smallData.includes(lowercasedFilter)){
                            result = true;
                        }
                    }
                    return result;
                });
                this.setState({
                    filterList : filteredData
                })
            }
            if(this.state.filter.length  === 0){
                this.setState({
                    filterList : this.state.presList
                })
            }
        });
     
    }

    getSentPrescription() {
        let auth = localStorage.getItem('auth')
        return new Promise(async function (resolve, reject) {
            await axios.get('https://plunes.co/v4/prescription/', { headers: { "Authorization": `Bearer ${auth}` } })
                .then((res) => {
                    let presList = res.data.prescriptions.businessPrescriptions;
                    let listArray = [];
                    if (presList && presList.length > 0) {
                        presList.map((p) => {
                            if (p.prescriptionUrl && p.prescriptionUrl.length > 0) {
                                listArray.push(p)
                            }
                        })
                    }
                    console.log(listArray, 'listArray')
                    resolve(listArray)
                })
                .catch((e) => {
                    reject(e)
                })
        })
    }

    async handleEditClick(select) {
        this.props.handleEditTemplate(select)
    }

    async handleClick(select) {
        await this.props.handleCreateTemplate(select);
    }


    getDoctors() {
        let auth = localStorage.getItem('auth')
        return new Promise(async function (resolve, reject) {
            await axios.get('https://plunes.co/v4/user/whoami', { headers: { "Authorization": `Bearer ${auth}` } })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((e) => {
                    reject(e)
                })
        })
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.refreshList) {
            let prescriptionList = await this.getSentPrescription()
            this.setState({
                presList: prescriptionList,
                filterList : prescriptionList
            })
        }
        if (nextProps) {
            let doctors = await this.getDoctors();
            this.setState({
                docDetails: doctors
            })
        }
    }

    async componentDidMount() {
        let doctors = await this.getDoctors();
        this.setState({
            docDetails: doctors
        })
        let prescriptionList = await this.getSentPrescription()
        this.setState({
            presList: prescriptionList,
            filterList : prescriptionList
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                    <div className='row justify-content-center'>
                    <p><h5 className="send-prescription">Sent Prescriptions</h5></p><br></br>
                        {/* Add Class in This input */}
                        
                        <input type='text' className="PLSearchBar" name='filter' onChange={this.onSearchQuery} placeholder='Search'></input>
                        <img className="PLsearchicon" src={window.location.origin + '/PLsearchbar.png'} />
                    <ul className='fileContainer2 row'>
                        {
                          this.state.filterList.length > 0  ?  this.state.filterList.map((p, index) => (
                                <a href={p.prescriptionUrl} target='_blank' key={Math.random().toString()}>
                                    <div className="send-box" key={Math.random().toString()}>
                                        <li className='headTab' key={Math.random().toString()} >
                                            <img className='headTabimg' src={p.prescriptionUrl + '.thumbnail.png'} height='112' width='150' onError={(e) => { e.target.onerror = null; e.target.src = "/screenshot.svg" }}></img>
                                            <p className="view-plockr-builder">{p.patientName}</p>
                                        </li>
                                    </div>
                                </a>
                            )) : <div>No Records Found</div> 
                        }
                    </ul>
                </div>
                <div className='row justify-content-center'>
                    <h3 className="send-prescription">Doctor's List</h3>
                    {
                        this.state.docDetails.userType === 'Hospital' ? this.state.docDetails.doctors.map((item, index) => (
                            <div className='row docTemplates' key={index}>
                                <div className='col-md-6'>{item.name}</div>
                                <div className='col-md-3' onClick={() => this.handleClick(item)}>
                                    {
                                        Object.entries(item.prescription).length > 1 ? true :
                                            <button type="button" className="btn btn-link edit">Create</button>
                                    }
                                </div>
                                <div className='col-md-3' onClick={() => this.handleEditClick(item)} >
                                    {
                                        Object.entries(item.prescription).length > 1 ? <button type="button" className="btn btn-link edit">Edit</button>
                                            : false
                                    }

                                </div>
                            </div>

                        )) :
                            <div className='row docTemplates' >
                                <div className='col-md-6'>{this.state.docDetails.name}</div>
                                <div className='col-md-3' >
                                </div>
                                <div className='col-md-3' onClick={() => this.handleEditClick(this.state.docDetails)} >
                                    <button type="button" className="btn btn-link edit">Edit</button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default PrescriptionListComponent;