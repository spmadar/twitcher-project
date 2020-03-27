import React from "react";
import {Menu, CreatePost, ProfileCard, ProfileMessages} from "./components";
import {connect} from "react-redux";
import {getuser} from "../redux/users";
import { userIsAuthenticated } from "./HOCs";


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

const mapStateToProps = state => {
    return {
        username: state.auth.login.result.username,
        result: state.users.getuser.result,
        loading: state.users.getuser.loading,
        error: state.users.getuser.error
    }
}

const mapDispatchToProps = {
    getuser
}

export default userIsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(Profile));


