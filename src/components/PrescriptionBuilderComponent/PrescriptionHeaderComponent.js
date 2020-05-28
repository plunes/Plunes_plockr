import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router'
import { withRouter, Link } from 'react-router-dom'
import Downloader from 'js-file-downloader';

class PrescriptionHeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigate: false
        }

        this.handleDownload = this.handleDownload.bind(this);
        this.handlelogout = this.handlelogout.bind(this);
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
        const res = await axios.get('https://api.plunes.com/v5/installer/' + localStorage.getItem('uploaderUserId'));
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


    render() {
        const { navigate } = this.state
        if (navigate) {
            return <Redirect to={{
                pathname: '/plockrapp',
            }} />
        }

        return (
            <div className='container-fluid'>
                <div className="navbar navbar-expand-lg navbar-light row back_ground">
                    <div className='col-md-3'>
                        <Link to="/plockrapp"
                        >
                         <img className="logo-img-sizeing" src="/logo.png" alt=".." /></Link>
                    </div>
                    <div className='col-md-3 text-right'>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-2 text-right'>
                        <Link
                        to="/plockr-dashboard"
                        >
                            <button type="button" className="btn builder-button">Create Report</button>
                            </Link>
                    </div>
                    {/* <div className='col-md-2 text-right'>
                        <button type="button" className="btn builder-button" onClick={this.handleDownload}>Download PLOCKR</button>
                    </div> */}
                    <div className='col-md-2'>
                        <button type="button" className="btn logout" onClick={this.handlelogout}>Logout</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PrescriptionHeaderComponent);