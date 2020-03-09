import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import {user}  from "../../../redux/users";


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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="display name">Display Name</label>
          <input
            type="display"
            name="display"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
        />
          <button type="submit" disabled={loading}>
            Sign Up!
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
