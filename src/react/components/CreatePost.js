import React from 'react';
import { Form, Button} from 'semantic-ui-react';
import { connect } from "react-redux";
import {createpost} from "../../redux/messages";

class CreatePost extends React.Component {
    state = {message: {
        id: 0,
        text: "",
        username: "",
        createdAt: ""
    }}

    handlePost = e => {
        e.preventDefault();
        this.props.createpost(this.state);
    }

    handleChange = e => {
        this.setState({[this.state.message.text]: e.target.value})
    }

    render() {
        return (
            <>
            <div id="textbox">
            <Form>
                <Form.Field>
                    <label>create a post!</label>
                    <input />
                </Form.Field>
                <Button>post</Button>
            </Form>
            </div>
          </>
        )
    }
} 

  
export default connect(
    state => ({
      result: state.messages.createpost.result,
      loading: state.messages.createpost.loading,
      error: state.messages.createpost.error
    }),
    { createpost }
  )(CreatePost);

// export default CreatePost;