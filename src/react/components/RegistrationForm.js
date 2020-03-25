import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import {user}  from "../../redux/users";
import "./RegistrationForm.css"


class RegistrationForm extends React.Component {
  state = { username: "", password: "" };

  handleSignUp = e => {
    e.preventDefault();
    this.props.createuser(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <div className="regpage">
          <h1>Create Your Account</h1>
        <form id="registration-form" onSubmit={this.handleLogin}>
          <label htmlFor="username" id= "reguser">Username, or email address</label>
          <input
            id="input"
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="display name" id="regdisp">Display Name</label>
          <input
            id="input"
            type="display"
            name="display"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password" id="regpass">Password</label>
          <input
            id="input"
            type="text"
            name="password"
            onChange={this.handleChange}
        />
          <button type="submit" class="glow-on-hover" disabled={loading}>
            Sign Up
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>} </div>
      </React.Fragment>
       
    );
  }
}

export default 
connect(
  state => ({
    result: state.user.result,
    loading: state.user.loading,
    error: state.user.error
  }),
    { user }
)
(RegistrationForm);
