import React from "react";
import {Menu, CreatePost, ProfileCard, ProfileMessages} from "./components";
import {connect} from "react-redux";
import {getuser} from "../redux/users";
import { userIsAuthenticated } from "./HOCs";
import { Card, Icon, Image } from 'semantic-ui-react'

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        const CardExampleCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
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
      </>
    );
  }
}

export default userIsAuthenticated(Profile);





// export default CardExampleCard

