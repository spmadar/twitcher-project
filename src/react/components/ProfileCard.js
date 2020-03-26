import React from "react";
import { connect } from "react-redux";
import { Card, Image, Modal, Form, Button } from "semantic-ui-react";
import {addpicture} from "../../redux/users";


class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureLocation: this.props.pictureLocation
        };
        this.handleAddPicture = this.handleAddPicture.bind(this);
    }

    handleAddPicture = event => {
        event.preventDefault();
        this.props.addpicture(event.target);
        this.setState({ pictureLocation: this.props.pictureLocation });
    }



    render() {
        return (
            <Card>
                <Image src={`https://kwitter-api.herokuapp.com/users/${this.props.username}/picture`}
                    wrapped
                    ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.username}</Card.Header>
                    <Card.Meta>
                        <span className='date'>joined on {new Date(this.props.createdAt).toDateString()}</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Modal trigger={<Button>Upload a Photo</Button>} closeIcon>
                        <Modal.Header >Select a file</Modal.Header>
                        <Modal.Actions>
                            <Form onSubmit={this.handleAddPicture}>
                                <input type='file' name='picture' />
                                <input type='submit' value='Submit' />
                            </Form>
                        </Modal.Actions>
                    </Modal>
                </Card.Content>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.login.result.username,
        createdAt: state.user.getuser.result.user.createdAt,
        pictureLocation: state.user.getuser.result.user.pictureLocation,
        //   loading: state.user.deleteUser.loading,
        //   error: state.user.deleteUser.error,
        //   result: state.user.deleteUser.result
    };
};

const mapDispatchToProps = {
    addpicture
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
