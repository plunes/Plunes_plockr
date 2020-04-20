import React from 'react';
// import './Dashboard.css';
import './SolutionSearchComponent.css'
import { Redirect } from 'react-router'
import axios from 'axios'

class SolutionSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props, "Solution")
        this.root = props.root
        this.state = {
            filter: "",
            searchInput: false,
            selectedData: [],
            docList: [],
            proceduresList: []
        }
        this.data = [];
        this.selectedProcedures = [];
        this.showForm = false;
        this.onSearchQuery = this.onSearchQuery.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.settingBid = this.settingBid.bind(this);
        this.viewAllBid = this.viewAllBid.bind(this);
    }

    async componentDidMount() {
        console.log("procedure list ", this.root.procedureList)
        //  return  await axios.get(this.baseUrl + 'bidding/list_of_procedures')
        //         .then(({ data }) => {
        //             console.log(data)
        //             if (data.err) {
        //                 console.log(data.err)
        //             }
        //             else {
        //                 // console.log(data, 'list of procedures');
        //                 //Copy from NoSQLBooster for MongoDB free edition. This message does not appear if you are using a registered version.
        //            this.root.procedureList = data.user;     
        //            this.setState({proceduresList : data.user});
        //             }
        //         })
    }

    async viewAllBid(id) {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGI5MmYyZDVlYTYzYTIzMjMwMWFjMTgiLCJpYXQiOjE1NzI2MTYzNDN9.GmQ7IVX9EJWFDndjdHBVEIKMndynAnKT4qGvFjGKOvY'
        let response = await axios.get(this.baseUrl + 'bidding/view_bids/' + id, { headers: { "Authorization": `Bearer ${token}` } })
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    console.log(data.err)
                } else {
                    console.log(data)
                    return data
                }
            })
        // console.log(response)
        return response;
    }

    async  viewBidsProcedures(bidId) {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGI5MmYyZDVlYTYzYTIzMjMwMWFjMTgiLCJpYXQiOjE1NzI2MTYzNDN9.GmQ7IVX9EJWFDndjdHBVEIKMndynAnKT4qGvFjGKOvY'
        let response = await axios.get(this.baseUrl + 'bidding/view_bids_of_procedure/' + bidId, { headers: { "Authorization": `Bearer ${token}` } })
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    console.log(data.err)
                } else {
                    // console.log(data)
                    return data
                }
            })
        // console.log(response)
        return response;
    }

    async settingBid(proceduresArray) {
        let proceduresString = proceduresArray.join();
        let body = {
            "Userid": '5db92f2d5ea63a232301ac18',
            "Username": "Demo user",
            "Location": "90b, Delhi - Jaipur Expy, Sector 18, Gurugram, Haryana 122008, India",
            "Diagnostics": 'Gynaecologist Consultation',
            "Long": "77.0749492",
            "Lat": "28.4851501",
            "Concern": "",
            "Images": "",
            "Quantity": "1"
        }
        let response = await axios.post(this.baseUrl + 'bidding/setting_bid', body)
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    //message.error(data.msg);
                    console.log(data.err)
                }
                else {
                    return data
                }
            })
        return response;
    }



    async handleSubmit(e) {
        e.preventDefault();
        //    let settingBid = await this.settingBid(this.state.selectedData);
        let userId = '5db92f2d5ea63a232301ac18';
        let viewBids = await this.viewAllBid(userId);

        //  put the bid ids in local storage
        // console.log(viewBids)
        let bidId = viewBids.user[0]._id
        let viewBidsOfProcedures = await this.viewBidsProcedures(bidId);
        let listOfDoc = viewBidsOfProcedures.user.data;

        this.root.doctorList = listOfDoc


        this.setState({
            searchInput: true
        })
    }

    handleClick(e) {
        let selectedValue = e.currentTarget.dataset.value;
        // console.log(selectedValue);
        this.selectedProcedures.push(selectedValue);
        // console.log(this.selectedProcedures);
        this.setState({
            selectedData: this.selectedProcedures
        })
        this.showForm = true;

    }

    onSearchQuery(e) {
        this.setState({ filter: e.target.value });
        if (this.state.filter.length > 1) {
            const { filter, proceduresList } = this.state;
            const lowercasedFilter = filter.toLowerCase();
            const filteredData = proceduresList.filter(item => {
                let result = false;
                Object.keys(item).forEach(key => {
                    if (key == 'procedure' || key == 'tag') {
                        let smallData = item[key].toString().toLowerCase();
                        if (smallData.includes(lowercasedFilter)) {
                            result = true;
                        }
                    }
                });
                return result;
            });
            this.data = filteredData
        }
    }

    render() {
        const { searchInput } = this.state;
        if (searchInput) {
            return <Redirect to={{
                pathname: "/solutionResult",
            }} />;
        }

        return <div className='container-fluid' >
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='row centerContent'>
                        <div className='row'>
                            <h2>
                                Find the best offers on Diagnotic <br />
                                Tests & Medical Procedures.<br />
                            </h2>
                        </div>
                        <div className="row rowSolution">
                            <input type="text" className='solutionSearch' placeholder="Name the procedure or test here..." onChange={this.onSearchQuery} >
                            </input>
                            <img src='./search.png' className='searchImgDashboard' alt='Search Img' height='40px' width='40px'></img>
                        </div>
                        <div className='row'>
                            <ul>
                                {
                                    this.data.map(item => (
                                        <li key='' data-value={item.procedure} onClick={this.handleClick} >
                                            {item.procedure}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='row'>
                            <ul>
                                {
                                    this.showForm ? <form onSubmit={this.handleSubmit}>
                                        {
                                            this.state.selectedData.map(item =>
                                                (
                                                    <li key=''>{item}</li>
                                                ))
                                        }
                                        <button type='submit' > Proceed </button>
                                    </form> : null
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    }
}

export default SolutionSearchComponent
