import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../../styles/signup.css';
import registerUser from '../../actions/signupActions';
import { toggleLoader, showErrorMsg } from '../../common/functions';
import Loader from 'react-loader-spinner';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstname:'',
          lastname:'',
          username: '',
          email: '',
          password: '',
          confirmpass: '',
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

    onChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }
    onSubmit(evt) {
        evt.preventDefault();
        if(this.state.password !== this.state.confirmpass){
          showErrorMsg("The passwords do not match");
          return
        }
        const user = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        }
        toggleLoader('loader-div', 'block');
        registerUser(user)
      }

    
  render() {
    return (
        <div className="container get-started">
        <form onSubmit={this.onSubmit} className="container card col-lg-5">
          <div className="form-group p-4 m-2">
            <h4 className="title-text">Create an Account on My Diary</h4>
          </div>

          <div className="form-group">
            <input type="text" id="firstname" name="firstname" placeholder="Firstname" className="form-control" value={this.state.firstname} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <input type="text" name="lastname" placeholder="lastname" className="form-control" value={this.state.lastname} onChange={this.onChange} required />
          </div>

          <div className="form-group">
            <input type="text" name="username" placeholder="Username" className="form-control" value={this.state.username} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" className="form-control" value={this.state.email} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChange} required />
          </div>
          <div className="form-group">
          <input type="password" name="confirmpass" placeholder="Confirm password" className="form-control" value={this.state.confirmpass} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <input id ="signup-btn" type="submit" className="btn btn-primary btn-block" value="Signup" />
            <ToastContainer />
          </div>
          <div className="form-group p-2 m-1 align-content-center">
            <span>Already have an account? </span><Link to="/login">Login</Link>
            <br/>
          </div>
        </form>
        <div id="loader-div"><Loader  type="ThreeDots" color="#fff" height="80" width="80" /> </div>
      </div>
    )
  }
}

export default Signup;
