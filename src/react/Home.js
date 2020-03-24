import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import { Link } from "react-router-dom";
import "./Home.css";


class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>"Evil is Evil. Lesser, greater, middling… <br/>
          Makes no difference. The degree is arbitrary. The definition is blurred. <br/>
          If I’m to choose between one evil and another, I’d rather not choose at all."</h2>
        <LoginForm />
        
        <button type="signup"> <Link to="/signup">Sign Up!</Link></button>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
