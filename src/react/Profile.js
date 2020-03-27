import React from "react";
import {Menu, CreatePost, ProfileCard, ProfileMessages} from "./components";
import {connect} from "react-redux";
import {getuser} from "../redux/users";
import { userIsAuthenticated } from "./HOCs";
import { Card, Icon, Image } from 'semantic-ui-react'

class Profile extends React.Component {
    componentDidMount(){
        this.props.getuser(this.props.username)
    }

    render() {
        if (this.props.result === null) {
            return null
        }

        const profile = this.props.result.user
        return (
            <>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <ProfileCard 
                  pictureLocation={profile.pictureLocation}
                  username={profile.displayName} 
                />
                <CreatePost />
                <ProfileMessages />
            </>
        );
    }
}

export default userIsAuthenticated(Profile);





// export default CardExampleCard

