import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { logout } from "../../redux";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
   
      <div class="menu" id="appbar">
        <h1 class="logo">Twitcher</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messagefeed" id="msg">Message Feed</Link>
            <Link to="/profiles/:username" id="profile">Profile</Link>
            <Link to="/" id="logout" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.logout.result,
    loading: state.auth.logout.loading,
    error: state.auth.logout.error
  }),
  { logout }
)(Menu);
