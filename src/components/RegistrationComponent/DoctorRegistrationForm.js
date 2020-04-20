import React, { Component } from 'react';

class DoctorRegistrationForm extends Component {
      render() {
            return (
                  <div>
                        {/* <input type="radio" name="gender" value="male"/> Male
                 <input type="radio" name="gender" value="female"/> Female */}

                        <form>
                              <div className="form-group">
                                    <input className="form-control2 plockr-app-form" name="fullName" placeholder=" Name" onChange={this.handleChange} required />
                              </div>
                              <div className="form-group">
                                    <input className="form-control2 plockr-app-form" name="fullName" placeholder="Mobile Number" onChange={this.handleChange} required />
                              </div>
                              <div className="form-group">
                                    <input className="form-control2 plockr-app-form" name="fullName" placeholder="Email Id" onChange={this.handleChange} required />
                              </div>
                              <div className="form-group">
                                    <input className="form-control2 plockr-app-form " name="fullName" placeholder="Date Of Birth" onChange={this.handleChange} required />
                              </div>
                              <div className="form-group">
                                    <input className="form-control2 plockr-app-form" name="fullName" placeholder="Password" onChange={this.handleChange} required />
                              </div>
                              <div className="form-group">
                                    <textarea className="form-control2 plockr-app-form" rows="3" name="fullName" placeholder="Location" onChange={this.handleChange} required></textarea>
                              </div>
                              <div className="form-group">
                                    <input className="form-control2 plockr-app-form" name="fullName" placeholder="Professional Reg. No" onChange={this.handleChange} required />
                              </div>
                              <div className="form-group">
                                    <input className="form-control2 plockr-app-form" name="fullName" placeholder="Specialization" onChange={this.handleChange} required />

                              </div>
                              <div className="form-group">
                                    <input className="form-control2 plockr-app-form" name="fullName" placeholder="Experience(in number)" onChange={this.handleChange} required />
                              </div>
                              <div className="form-group">
                                    <input className="form-control2 plockr-app-form" name="fullName" placeholder="Referal Code(opyional)" onChange={this.handleChange} required />
                              </div>
                              <div className="form-group" className='buttonSignUp'>
                                    <button type="submit" className="btn btn-success btn-lg btn-block">Sign up</button>
                              </div>

                        </form>
                        <div>
                              <p className="last-text">By registering, you agree to our<br></br><a href="#" >Terms of Service </a> </p>
                        </div>

                  </div>
            );
      }
}

export default DoctorRegistrationForm;