import React from "react";
import {ListOfMessages, Menu, CreatePost} from "./components";
import { userIsAuthenticated } from "./HOCs";
import "./MessageFeed.css"

class MessageFeed extends React.Component {
    render() {
        return (
            <div id="home">
            {<Menu isAuthenticated={this.props.isAuthenticated}/>}
            <CreatePost />
            <ListOfMessages />
            </div>
        )
    }
}

export default userIsAuthenticated(MessageFeed);