import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <button type="signup"> <Link to="/signup">Sign Up!</Link></button>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
