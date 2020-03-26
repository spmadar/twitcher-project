import React from "react";
// import Spinner from "react-spinkit";
import { connect } from "react-redux";
import {createuser}  from "../../redux/users";
import {Button, Form, Segment} from "semantic-ui-react";

class RegistrationForm extends React.Component {
  state = { username: "", displayName: "", password: "" };

  // handleSignUp = e => {
  //   e.preventDefault();
  //   this.props.createuser(this.state);
  // };

  handleChange = e => {

    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  handleSignUp = event => {
    this.props.createuser(
      this.state.username,
      this.state.displayName,
      this.state.password
    );
  };

  render() {
    if (this.props.result) {
      console.log(this.props.result, "first")
      if (this.props.result.statusCode === 200) {
        console.log(this.props.result)
        return null
      }
    }
  
    return (
      <React.Fragment>
        <div className="regpage">
          <h1>Create Your Account</h1>
        <form id="registration-form" onSubmit={this.handleLogin}>
          <label htmlFor="username" id= "reguser">Username, or email address</label>
          <input
            id="rinput"
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="display name" id="regdisp">Display Name</label>
          <input
            id="rinput"
            type="display"
            name="display"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password" id="regpass">Password</label>
          <input
            id="rinput"
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
    
    //   <Segment inverted>
    //   <Form inverted>
    //     <Form.Group widths='equal'>
    //       <Form.Input name="username" fluid label='Username' placeholder='Username' onChange={this.handleChange} />
    //       <Form.Input name="displayName" fluid label='Display Name' placeholder='Display Name' onChange={this.handleChange}/>
    //       <Form.Input fluid name="password" label='Password' placeholder='Password' onChange={this.handleChange}/>
    //     </Form.Group>
       
    //     <Button type='submit' onClick={this.handleSignUp}>Sign Up!</Button>
    //   </Form>
    // </Segment>
    );
  }
}


const mapStateToProps = state => {
  return {
    loading: state.user.createuser.loading,
    error: state.user.createuser.error,
    result: state.user.createuser.result
  };
};
const mapDispatchToProps = {
  createuser
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);