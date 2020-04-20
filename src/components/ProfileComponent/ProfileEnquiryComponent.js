import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

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
Modal.setAppElement('#root');

class ProfileEnquiryComponent extends Component {
    constructor(props) {
        super(props);
        this.root = props.root;
        this.state = {
            modalIsOpen: false,
            data: this.props.data,
            concernInput : '',
            showForm : true
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handleChange(e) {
        this.setState({
            concernInput: e.target.value
        })

    }

    handleSubmit(e){
        e.preventDefault();
        let data = {
            'enquiry' : this.state.concernInput,
            'fromUserId' : '5dcfbd9fbb9a061db52671a1',
            'toUserId' : '5dd25e7419b4ea462221e7fb'
        }
        axios.post( "http://13.233.151.26:8000/enquiry", data)
        .then(({ data }) => {
            console.log(data);
            if (data.err) {
                console.log(data.err)
            }
            else {
                console.log(data);
                this.setState({
                    showForm : false
                })
            }
        })
    }


    render() {
        // console.log(this.props.data, "wsssss");

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>
                        Profile Image
                        </div>
                    <div className='col-md-4'>
                        {this.props.data.name}
                    </div>
                    <div className='col-md-4'>
                        <button type='button' onClick={this.openModal}>
                            Ask
                        </button>
                    </div>

                </div>
                <div className = 'row'>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {
                        this.state.showForm ? 
                        <div>
                             <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                        <button onClick={this.closeModal}>close</button>
                        <div>Post Concern</div>
                        <form onSubmit = {this.handleSubmit}>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Ask a Professional</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" onChange={this.handleChange} rows="3"></textarea>
                            </div>
                            <button type='submit'>Done</button>
                        </form>
                        </div>
                        : <div> 
                            Your Concern has been submitted
                            <button onClick={this.closeModal}>close</button>
                        </div>
                    }
                </Modal>
                </div>
                
            </div>
        );
    }
}

export default ProfileEnquiryComponent;