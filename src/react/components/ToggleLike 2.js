import React from "react";
import { Button } from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { toggleLike} from "../../redux";
import  { connect } from "react-redux"


class ToggleLike extends React.Component {
    handleToggleLike = event => {
        this.props.toggleLike(this.props.likes, this.props.messageId);
    };

    render() {
        if (this.props.result === null) {
            return null
          }
        const isLiked = this.props.likes.find(
            like => like.username === this.props.loggedInUsername
        );
        
        return (
            <Button
                outline
                className="like"
                theme="primary"
                size="sm"
                onClick={this.handleToggleLike}
            >
                <FontAwesomeIcon icon={faThumbsUp} size="lg"></FontAwesomeIcon>{" "}
               
            </Button>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        loggedInUsername: state.auth.login.result.username
    };
};
const mapDispatchToProps = {
   toggleLike
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLike);