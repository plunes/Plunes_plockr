import React, { Component } from 'react';
import ContainerComponent from './ContainerComponent'
import axios from 'axios'
import './PlockrAppComponent.css'
import PlockrProfileEditComponent from './PlockrProfileEditComponent'
import PlockrHeaderComponent from './PlockrHeaderComponent'
import MyComponent from './MyComponent';
import Downloader from 'js-file-downloader';
import search from "../../images/search.svg"
import share from "../../images/share.svg"
import rotate from "../../images/rotate.svg"
import rectangle from "../../images/rectangle.svg"
import annote from "../../images/annote.svg"
import aero from "../../images/aero.svg"
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
            showFile : false,
            failed: false,
            loading:false,
            stackElements:[]

        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            stackElements:data
        })
    }

    componentWillMount(){
    }

    async componentDidMount() {
        if (localStorage.getItem('isAuth')) {
            this.setState({
                showNumber: true,
                showLogin: false,
                loading:true
            })
        }
        await axios.get('https://plunes.co/v4/catalogue')
            .then((res) => {
                if (res.status == 201) {
                    let catalogue = res.data;
                    let specArray = [];
                    catalogue.forEach((c) => {
                        let speciality = {
                            id: c._id,
                            name: c.speciality
                        }
                        specArray.push(speciality)
                    })
                    localStorage.setItem('specialities', JSON.stringify(specArray))
                    this.setState({
                        specialities: specArray,
                        loading:false
                    })
                }
            })
    }

    handleLogout(select){
        this.setState({
            showLogin : select,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            mobileNumber: this.state.mobileNo,
            password: this.state.password
        }
        axios.post('https://plunes.co/v4/user/login', data)
            .then((res) => {
                console.log(res.status)
                if (res.status === 201) {
                    //console.log(res.status)
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('auth', res.data.token)
                    localStorage.setItem('uploaderUserId', res.data.user._id)
                    this.setState({
                        showLogin: false,
                        showNumber: true
                    })
                }
            })
            .catch((e)=> {
                    this.setState({
                        failed : true,
                        mobileNo : '',
                        password : ''
                    })
            })
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value.trim()
        })
    }

    toggleLoading = () =>{
        console.log(this.state.loading," this.props.toggleLoading")
        this.setState({
            loading:!this.state.loading
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
                    <PlockrHeaderComponent />
                   
         <div className="row">
              <h6 className="hme">Home > <a className="plo" href="#">Plockr </a></h6>
         </div>
                    <div className='row background-black'>
                    <div className='col-md-8 viewFile'>
                        {!this.state.showFile &&  <div className="annonate_header">
                    <ul>
                        <li className="image_size b-relative-3"><i className="fa fa-plus" ></i><span className="pan b-relative-5">Pan</span></li>
                        <li className="image_size"><img src={annote} className="cursor-pointer" /><span className="pan">Annotate</span></li>
                        <li className="image_size"><img src={search} className="cursor-pointer" /><span className="pan">Magnify</span></li>
                        <li className="image_size"><img src={rectangle} className="cursor-pointer" /><span className="pan">Rectangular</span></li>
                        <li className="image_size"><img src={rotate} className="cursor-pointer" /><span className="pan">Rotate</span></li>
                        <li className="image_size"><img src={aero} className="cursor-pointer" /><span className="pan">Scroll</span></li>
                    </ul>
                        </div> }
                   
                        {
                                this.state.showFile ?
                                    <div>
                                        <div className='pdfContainer'>
                                            <CornerstoneElement stack= {this.state.stackElements} data={this.state.reportDet} imageId = {this.state.reportDet.url} />
                                            {/* <MyComponent className='viewFile' key={Math.random().toString()} data={this.state.reportDet} /> */}
                                        </div>
                                      
                                    </div>
                                    : <div className='row'>
                                       <div className='pdfContainer'>
                                        <div className="dummy">
                                            {/* <img className="dummy-img" src="dummySvg" /> */}
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='col-md-4'>
                            <ContainerComponent toggleLoading = {()=>this.toggleLoading()} handleSelection={this.handleSelection} />
                        </div>

                    </div>
                                                <div className='row'>
                         <PlockrProfileEditComponent key={Math.random().toString()} data={this.state.reportDet} />
                         </div>
                    </div>
                </div></div>
            );
        }
    
}

export default PlockrAppComponent;