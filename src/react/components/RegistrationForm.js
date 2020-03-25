import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { createUser } from "../../redux";
class RegistrationForm extends React.Component {
    state = { username: "", password: "", displayName:"" };
    handleSignUp = e => {
        e.preventDefault();
        this.props.createUser(this.state);
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        const { loading, error } = this.props;
        return (
            <React.Fragment>
                <form id="registration-form" onSubmit={this.handleSignUp}>
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
                        name="displayName"
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
            result: state.user.createUser.result,
            loading: state.user.createUser.loading,
            error: state.user.createUser.error
        }),
        { createUser }
    )
        (RegistrationForm);
