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
                <span className='date'>joined on {new Date(this.props.createdAt).toDateString()}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
            </Card.Content>
          </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
      username: state.auth.login.result.username,
      createdAt: state.user.getuser.result.user.createdAt
    //   pictureLocation: state.user.getUser.result.user.pictureLocation,
    //   loading: state.user.deleteUser.loading,
    //   error: state.user.deleteUser.error,
    //   result: state.user.deleteUser.result
    };
  };



export default connect(mapStateToProps, null)(ProfileCard);
