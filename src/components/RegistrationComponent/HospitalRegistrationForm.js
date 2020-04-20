import React, { Component } from 'react';

class HospitalRegistrationForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-check-inline">
            <label class="form-check-label">
              <input type="radio" class="form-check-input plockr-app-form" value='M' name="gender" onChange={this.handleChange} />Male
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label">
              <input type="radio" class="form-check-input plockr-app-form" value='F' name="gender" onChange={this.handleChange} />Female
            </label>
          </div>
          <div className="form-group">

            <input className="form-control2 plockr-app-form" name="fullName" placeholder="Hospital Name" onChange={this.handleChange} required />
          </div>
          <div className="form-group">

            <textarea className="form-control2 plockr-app-form" rows="3" name="fullName" placeholder="Address" onChange={this.handleChange} required></textarea>
          </div>
          <div className="form-group">

            <input className="form-control2 plockr-app-form" name="fullName" placeholder="Mobile Number" onChange={this.handleChange} required />
          </div>
          <div className="form-group">

            <textarea className="form-control2 plockr-app-form" rows="3" name="fullName" placeholder="About Hospital" onChange={this.handleChange} required></textarea>
          </div>
          <div className="form-group">

            <input className="form-control2 plockr-app-form" name="fullName" placeholder="Registration No" onChange={this.handleChange} required />
          </div>
          <div><p className=" hospital-text">Add specialization<br></br><a href="#">Add Specialization & Service </a></p>

          </div>
          <div className="form-group" className='buttonSignUp'>
            <button type="submit" className="btn btn-success btn-lg btn-block">Add</button>
          </div>

        </form>

        <div className="add-doctors">
          <hr></hr>
          <p className="signup-add-doctor"> Add Doctors</p>
          <p className="signup-add-doctor2"><div class="container">



            <button data-toggle="modal" className="add-button" data-target="#myModal">
              Add manually
 </button>

            <div class="modal fade" id="myModal">
              <div class="modal-dialog">
                <div class="modal-content">

                  <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>


                  <div class="modal-body">
                    Modal body..
       </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>

                </div>
              </div>
            </div>

          </div>
          </p>
          <hr></hr>
          <p className="signup-add-doctor">Manage Account</p>
          <p className="signup-add-doctor2"> <a href="#">Add Manually</a></p>
          <p>Admin</p>
          <p>Add user</p>
          <div className="form-group">

            <input className="form-control2 plockr-app-form" name="fullName" placeholder="User Email" onChange={this.handleChange} required />
          </div>
          <div className="form-group">

            <input className="form-control2 plockr-app-form" name="fullName" placeholder="User Password" onChange={this.handleChange} required />
          </div>
          <p className="signup-add-doctor3">Please enter at least 8 character Password</p>
          <div className="form-group" className='buttonSignUp'>
            <button type="submit" className="btn btn-success btn-lg btn-block">Submit</button>
          </div>


        </div>
      </div>
    );
  }
}

export default HospitalRegistrationForm;