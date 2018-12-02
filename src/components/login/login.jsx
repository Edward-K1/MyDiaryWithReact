import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import '../../styles/signup.css';
import loginUser from '../../actions/loginActions';
import { toggleLoader } from '../../common/functions';
import Loader from 'react-loader-spinner';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

    onChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }

    onSubmit(evt) {
        evt.preventDefault();
        const credentials = {
          email: this.state.email,
          password: this.state.password
        }
        toggleLoader('loader-div', 'block');
        loginUser(credentials)
      }

    
  render() {
    return (
        <div className="container get-started">
        <form onSubmit={this.onSubmit} className="container card col-lg-5">
          <div className="form-group p-4 m-2">
            <h4 className="title-text">Login to My Diary</h4>
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" className="form-control" value={this.state.email} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <input id ="login-btn" type="submit" className="btn btn-primary btn-block" value="Login" />
            <ToastContainer />
          </div>
          <div>
            &nbsp;
          </div>
        </form>
        <div id="loader-div"><Loader  type="ThreeDots" color="#fff" height="80" width="80" /> </div>
      </div>
    )
  }
}

export default Login;
