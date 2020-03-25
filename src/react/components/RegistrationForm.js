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
        <form id="registration-form" onSubmit={this.handleLogin}>
          <label htmlFor="username" id= "user">Username, or email address</label>
          <input
            id="input"
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="display name" id="display">Display Name</label>
          <input
            id="input"
            type="display"
            name="display"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password" id="pass">Password</label>
          <input
            id="input"
            type="text"
            name="password"
            onChange={this.handleChange}
        />
          <button type="submit" id="button" disabled={loading}>
            Sign Up
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
       
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
