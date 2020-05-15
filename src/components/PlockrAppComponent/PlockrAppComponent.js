import React from 'react';
import ContainerComponent from './ContainerComponent'
import axios from 'axios'
//import './PlockrAppComponent.css'
import PlockrProfileEditComponent from './PlockrProfileEditComponent'
import PlockrHeaderComponent from './PlockrHeaderComponent'
import PDFViewer from 'pdf-viewer-reactjs'
import Downloader from 'js-file-downloader';
import Loader from "react-loader-spinner"
import CornerstoneElement from '../Viewer'
// import dummySvg from "../../images/dummy.svg"


class PlockrAppComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showNumber: false,
            userDetails: {},
            mobileNo: '',
            patientMobileNo: '',
            showLogin: true,
            password: '',
            specialities: [],
            fileType: '',
            fileUrl: '',
            reportDet: {},
            showFile: false,
            failed: false,
            loading: false,
            stackElements: [],
            businessReceivedReports: [],
            businessSentReports: []
        }
        this.getReports = this.getReports.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
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

    handleSelection(select, data) {
        console.log(select, data, 'callback in PlockrAppComponent')
        this.setState({
            reportDet: select,
            showFile: true,
            stackElements: data
        })
    }

    async getReports() {
        let token = localStorage.getItem('auth')
        // this.props.toggleLoading()
        await axios.get('https://devapi.plunes.com/v5/report/', { 'headers': { 'Authorization': token } })
            .then(res => {
                if (res.status === 201) {
                    let sharedReports = res.data.sharedReports
                    let uploadedReports = res.data.uploadedReports
                    sharedReports.forEach((r) => {
                        var datetime = new Date(r.createdTime);
                        var now = datetime.toLocaleString();
                        r.createdTime = now;
                        r.reportName = r.reportName ? r.reportName.split('_').join(' ') : '';
                        r.reportType = 'received'
                        // console.log(r.reportUrl, 'report url')
                    })
                    uploadedReports.forEach((r) => {
                        var datetime = new Date(r.createdTime);
                        var now = datetime.toLocaleString();
                        r.createdTime = now
                        r.reportName = r.reportName.split('_').join(' ');
                        r.reportType = 'sent'
                    })
                    this.setState({
                        businessReceivedReports: uploadedReports,
                        businessSentReports: sharedReports
                    })
                }
            })
        // this.props.toggleLoading()
    }

    componentWillMount() {
        this.getReports()
    }

    async componentDidMount() {
        if (localStorage.getItem('isAuth')) {
            this.setState({
                showNumber: true,
                showLogin: false,
                loading: false
            })
        }
    }

    handleLogout(select) {
        this.setState({
            showLogin: select,
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value.trim()
        })
    }

    toggleLoading = () => {
        console.log(this.state.loading, " this.props.toggleLoading")
        this.setState({
            loading: !this.state.loading
        })
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

        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <PlockrHeaderComponent getReports={this.getReports} />
                        <div className="row">
                            <h6 className="hme">Home > <a className="plo" href="#">Plockr </a></h6>
                        </div>
                        <div className='row background-black' style={{ width: '100vw' }}>
                            <div className='col-md-9 viewFile'>
                                {
                                    !this.state.showFile ?
                                        '' :
                                        <div>
                                            {this.state.reportDet.type === 'pdf' ?
                                                <div className="boxMod">
                                                    <PDFViewer document={{ url: this.state.reportDet.url }} />
                                                </div> :
                                                <div className='pdfContainer'>
                                                    <CornerstoneElement stack={this.state.stackElements} data={this.state.reportDet} imageId={this.state.reportDet.url} />
                                                    {/* <MyComponent className='viewFile' key={Math.random().toString()} data={this.state.reportDet} /> */}
                                                </div>
                                            }

                                        </div>
                                }
                            </div>
                            <div className='col-md-3'>
                                <ContainerComponent
                                 toggleLoading={() => this.toggleLoading()}
                                 handleSelection={this.handleSelection}
                                 businessSentReports={this.state.businessSentReports || []}
                                 businessReceivedReports={this.state.businessReceivedReports || []}
                                 getReports={this.getReports}
                                />
                            </div>

                        </div>
                      
                    </div>
                     <div className='row'>
                                <PlockrProfileEditComponent 
                                key={Math.random().toString()} 
                                data={this.state.reportDet} 
                                />
                        </div>
                </div></div>
                
        );
      
    }
    

}

export default PlockrAppComponent;