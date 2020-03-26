import React from 'react';
import { Comment, Icon, Button, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./MessageCard.css";


class MessageCard extends React.Component {
    render() {
        return (
            <div class="msgcard">
                <Comment.Group id="container">
                    <Comment>
                        <Comment.Content>
                            <Button id="likebutton" as='div' labelPosition='right' size='tiny'>
                                <Button color='green' size="mini">
                                    <Icon name='heart' />
                                </Button>
                                    <Label as='a' basic color='green' pointing='left'> 2,400 likes </Label>
                            </Button>

                            <Comment.Avatar id="avatar" as='a' src='http://4.bp.blogspot.com/-vaCzQpw7YFU/Tq5oF9MLwQI/AAAAAAAADM8/jBjlL-ZkA9g/s1600/Beautiful_fish_pictures_wallpapers_Beautiful_Fish_Animals_Under_water_www.picturepool.blogspot.com_fish.jpg' />
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
} 

  
export default MessageCard;
