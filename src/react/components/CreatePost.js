import React from 'react';
import { Form, Button, Input} from 'semantic-ui-react';
import { connect } from "react-redux";
import {createpost} from "../../redux/messages";
import "./CreatePost.css"

class CreatePost extends React.Component {
    state = {
        messagetext: ""
        
    }

    
    handleChange = e => {
        e.preventDefault(); 
        this.props.createpost(this.state.messagetext);
        this.setState({messagetext: ""})
    }


    handlePost = e => {
        this.setState({ messagetext: e.target.value})
    }


    render() {
        return (
            
            <div id="createpost">
            <Form>
                <Form.Field>
                    <label id="calltoaction">Speak your mind...</label>
                    <Input onChange={this.handlePost} />
                </Form.Field>
                <Button onClick={this.handleChange}>post</Button>
            </Form>
           </div> 
          
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