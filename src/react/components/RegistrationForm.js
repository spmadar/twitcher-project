import React from "react";
// import Spinner from "react-spinkit";
import { connect } from "react-redux";
import {createuser}  from "../../redux/users";
import {Form, Segment} from "semantic-ui-react";
import "./RegistrationForm.css"

class RegistrationForm extends React.Component {
  state = { username: "", displayName: "", password: "" };
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
      
      <Segment inverted>
        <h1>Create Your Account</h1>
      <Form inverted>
        <Form.Group widths='equal'>
          <Form.Input id="reguser" name="username" fluid label='Username' placeholder='Username' onChange={this.handleChange} />
          <Form.Input id="regdisp" name="displayName" fluid label='Display Name' placeholder='Display Name' onChange={this.handleChange}/>
          <Form.Input id="regpass"name="password" fluid label='Password' placeholder='Password' onChange={this.handleChange}/>
        </Form.Group>
       
        <button type='submit' className="glow-on-hover" onClick={this.handleSignUp}>Sign Up!</button>
      </Form>
    </Segment> 
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