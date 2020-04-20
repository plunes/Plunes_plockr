import React, { Component } from 'react';
import "./EnquiryComponent.css";
import axios from 'axios'
import { Redirect } from 'react-router'


class EnquiryContainer extends Component {
    constructor(props) {
        super(props);
        this.root = props.root;
        this.state = {
            searchDoctor: false,
            enquiryInput: '',
            specialities: [],
            selectedSpecialityId: ''
        }
        this.data = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getAllSpecialities = this.getAllSpecialities.bind(this);
        this.getAllEnquiries = this.getAllEnquiries.bind(this)
    }

    getAllEnquiries() {
        // console.log('anshu');
        return new Promise(async (resolve, reject) => {
                let enquiries = await axios.get('http://13.233.151.26:8000/enquiry', {
                    headers: {
                        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGQyNzk4ZmVkZTQ0MDQ5ZmU3MDU4NzQiLCJpYXQiOjE1NzQwNzg5ODF9.LqOooiVJf7YsuaVZAxGRJeBzOZcjZXYoqhq2TTxanTE',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                    })
                    .then(response => {
                        console.log(response, 'responseList')
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error);
                    });
        })
    }

    getAllSpecialities(list) {
        return new Promise(async (resolve, reject) => {
            try {
                this.setState({
                    specialities: list
                })
                resolve();
            } catch (error) {
                console.log(error)
                reject();
            }
        })
    }

    handleChange(e) {
        this.setState({ enquiryInput: e.target.value });
        if (this.state.enquiryInput.length > 1) {
            const { enquiryInput, specialities } = this.state;
            const lowercasedFilter = enquiryInput.toLowerCase();
            const filteredData = specialities.filter(item => {
                let result = false;
                Object.keys(item).forEach(key => {
                    let smallData = item[key].toString().toLowerCase();
                    if (smallData.includes(lowercasedFilter)) {
                        result = true;
                    }
                });
                return result;
            });
            this.data = filteredData
        }
    }

    async handleClick(e) {
        let selectedId = e.currentTarget.dataset.value;
        this.setState({
            selectedSpecialityId: selectedId,
            searchDoctor: true
        })
        this.root.selectedEnquiryId = selectedId
    }


    async componentDidMount() {
        let serviceList = this.root.serviceList;
        await this.getAllSpecialities(serviceList);
        await this.getAllEnquiries();
    }

    render() {
        const { searchDoctor } = this.state;
        // console.log(this.state.docList, 'doclist')
        if (searchDoctor) {
            return <Redirect to={{
                pathname: "/enquiryResult/",
            }} />;
        }

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <input className="form-control" placeholder="Choose Speciality" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleChange} />
                            <div className='row'>
                                <ul>
                                    {
                                        this.data.map((item, i) => (
                                            <li key={i} data-value={item.specialityId} onClick={this.handleClick} >
                                                {item.speciality}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    </div>
                </div>
                <div className='row'>
                    <h3>Previous Enquiry</h3>
                </div>
            </div>
            
        )
    }
}

export default EnquiryContainer;