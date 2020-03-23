import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import {Link} from "react-router-dom"

class Home extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <button type="signup"> <Link to="/signup">Sign Up!</Link></button>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
