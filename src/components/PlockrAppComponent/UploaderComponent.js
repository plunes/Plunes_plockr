import React, { Component } from 'react';
import axios from 'axios'
import Modal from 'react-modal';
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
class ContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businessRecievedReports: [],
            businessSentReports: [],
            active: true,
            showRecieved: true,
            modalIsOpen: false,
            file: [],
            reportUrl: '',
            data: {},
            modalIsOpen: false,
        }
        this.openModal = this.openModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleReports = this.handleReports.bind(this);
        this.getReports = this.getReports.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleReports = this.handleReports.bind(this);
        this.getExtension = this.getExtension.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        //this.handleImage = this.handleImage.bind(this);
    }
    async handleSubmit(e) {
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem('docDetails'))
        let token = localStorage.getItem('auth')
        let data = {
            reportUrl: this.state.reportUrl,
            userId: user._id,
            self: false
        }
        await axios.post('https://plunes.co/v4/report', data, { headers: { "Authorization": `Bearer ${token}` } })
            .then((res) => {
                console.log(res.data)
                // const file = document.querySelector('.file');
                // file.value = '';
                document.getElementById('uploadFile').value = "";
            })
            .catch((e) => {
                console.log(e)
            })
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            file: e.target.files[0],
        }, () => {
            const data = new FormData();
            data.append('file', this.state.file)
            axios.post("https://plunes.co/v4/upload", data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }).then(res => {
                if (res.status === 200) {
                    this.setState({
                    reportUrl: "https://plunes.co/v4/" + res.data.path
                })
                }
            });
        });
    };
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    handleClick(e) {
        let fileType = this.getExtension(e.currentTarget.dataset.url)
        let data = {
            fileName: e.currentTarget.dataset.filename,
            url: e.currentTarget.dataset.url,
            type: fileType,
            id: e.currentTarget.dataset.id,
            showFile: true
        }
        this.props.handleSelection(data)
    }
    getExtension(url) {
        var extStart = url.indexOf('.', url.lastIndexOf('/') + 1);
        if (extStart == -1) return false;
        var ext = url.substr(extStart + 1),
            extEnd = ext.search(/$|[?#]/);
        return ext.substring(0, extEnd);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
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
    async componentDidMount() {
        this.getReports();
        this.interval = setInterval(this.getReports, 10000);
    }
    async getReports() {
        let token = localStorage.getItem('auth')
        await axios.get('https://plunes.co/v4/report/', { 'headers': { 'Authorization': token } })
            .then(res => {
                if (res.status === 201) {
                    let reports = res.data.businessReports;
                    let sentReports = reports.filter((r) => r.patientMobileNumber && !r.reportUrl.includes('prescription') ? true : false)
                    let recieveReports = reports.filter((r) => !r.patientMobileNumber ? true : false)
                    recieveReports.forEach((r) => {
                        var datetime = new Date(r.createdTime);
                        var now = datetime.toLocaleString();
                        r.createdTime = now;
                        r.reportName = r.reportName ? r.reportName.split('_').join(' ') : '';
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
    render() {
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
        return (
            <div className='container-fluid'>
                <div>
                    <button type="button" className="btn btn-uploader" onClick={this.openModal}>Upload Reports</button>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                  >
                    <h2>Upload Report</h2>
                    <button onClick={this.closeModal}>close</button>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                                <div className='row'>
                                    <input id='uploadFile' className="input-uploader file-path-wrapper" name='file' multiple onChange={this.handleChange} type="file" />
                                </div>
                            </div>
                            <div className='input-group'>
                            <button className="uploader-button" type="submit">Send</button>
                            </div>
                    </form>
                </Modal>
                <div>
                    <h5 className='fileHeading'>Report List</h5>
                    <div className='text-center row'>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-md-5 colhead' onClick={(e) => this.handleReports('r')}>
                            <li className='tabReport' >New</li>
                            <hr style={this.state.active ? greenStyle : greyStyle}></hr>
                        </div>
                        <div className='col-md-5 colhead' onClick={(e) => this.handleReports('s')}>
                            <li className='tabReport'>Sent</li>
                            <hr style={this.state.active ? greyStyle : greenStyle}></hr>
                        </div>
                        <div className='col-md-1'>
                        </div>
                    </div>
                    <ul className='fileContainer row'>
                        {
                            this.state.showRecieved ? this.state.businessRecievedReports.map((b, index) => (
                                <div className='fileList' key={Math.random().toString()}>
                                    <li className='headTab' key={Math.random().toString()} data-url={b.reportUrl} data-filename={b.reportName} data-id={b._id} onClick={this.handleClick}>
                                        <img src={b.reportUrl + '.thumbnail.png'} height='112' width='150' onError={(e) => { e.target.onerror = null; e.target.src = "/screenshot.svg" }}></img>
                                        <p className='fileName'>{b.reportName}</p>
                                    </li>
                                </div>
                              ))
                                : this.state.businessSentReports.map((b, index) => (
                                    <div className='fileList' key={Math.random().toString()}>
                                        <li className='headTab' key={Math.random().toString()} data-url={b.reportUrl} data-filename={b.reportName} data-id={b._id} onClick={this.handleClick}>
                                            <img src={b.reportUrl + '.thumbnail.png'} height='112' width='150' onError={(e) => { e.target.onerror = null; e.target.src = "/screenshot.svg" }}></img>
                                            <p className='fileName'>{b.reportName}</p>
                                        </li>
                                    </div>
                                ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default ContainerComponent;