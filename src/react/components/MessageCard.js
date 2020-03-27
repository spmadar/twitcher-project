import React from 'react';
import { Comment, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./MessageCard.css";
import ToggleLike from "./ToggleLike";


class MessageCard extends React.Component {
    render() {
        return (
            <div class="msgcard">
                <Comment.Group id="container">
                    <Comment>
                        <Comment.Content>
                            <Button id="likebutton" as='div' labelPosition='right' size='tiny'>
                                {/* <p> Likes: {this.props.likes.length}</p> */}
                                <ToggleLike messageId={this.props.id} likes={this.props.likes} />
                            </Button>

                            <Comment.Avatar id="avatar" as='a' src={`https://kwitter-api.herokuapp.com/users/${this.props.username}/picture`}
                            onError={ e => (e.target.style.display ="none")}
                            size='medium'
                            wrapped= "true"
                            />
                            <div id="content">
                                <Comment.Author > {this.props.username}</Comment.Author>
                                <Comment.Metadata>
                                    {this.props.createdAt}
                                </Comment.Metadata>
                                <Comment.Text>
                                    {this.props.text}
                                </Comment.Text>
                            </div>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            </div>
        )
    }
};


export default MessageCard;
