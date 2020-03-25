import React from "react";
import {connect} from "react-redux";
import {Card, Icon, Image} from "semantic-ui-react";

class ProfileCard extends React.Component {
    render() {
        return(
            <Card>
            <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.username}</Card.Header>
              <Card.Meta>
                <span className='date'>J{this.props.createdAt}</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        )
    }
}