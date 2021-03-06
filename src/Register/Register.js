import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './Register.css';

class Register extends Component {

  state = {
    id: '',
    username: '',
    email: '',
    password: '',
    verify_password: '',
    is_admin: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegisterSubmit = async (e) => {
    e.preventDefault();
    this.props.handleRegister(this.state)
  }

  render() {
    return (
        <div className="Register">
        Register
        <form onSubmit={this.handleRegisterSubmit}>
            <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange}/>
            </label>

            <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange}/>
            </label>

            <label>
            Password:
            <input type="text" name="password" onChange={this.handleChange}/>
            </label>

            <label>
            Verify Password:
            <input type="text" name="verify_password" onChange={this.handleChange}/>
            </label>


            <button type="submit">REGISTER</button>

        </form>
        </div>
    );
  }
}

export default withRouter(Register);