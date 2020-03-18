import React from "react";
import {ListOfMessages, Menu, CreatePost} from "./components";

import { userIsAuthenticated } from "./HOCs";

class MessageFeed extends React.Component {
    render() {
        return (
            <>
            {<Menu isAuthenticated={this.props.isAuthenticated}/>}
            <CreatePost />
            <ListOfMessages />
            </>
        )
    }
}

export default userIsAuthenticated(MessageFeed);