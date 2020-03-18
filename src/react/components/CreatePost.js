import React from 'react';
import { Form, Button} from 'semantic-ui-react';
import { connect } from "react-redux";
import {createpost} from "../../redux/messages";

class CreatePost extends React.Component {
    state = {
        text: ""
        
    }

    handlePost = e => {
        e.preventDefault();
        this.props.createpost(this.state);
    }

    handleChange = e => {
        this.setState({[this.state.message.text]: e.target.value})
    }


    // export const addTodo = todoTitle => {
    //     const newTodo = {
    //         userId: 1,
    //         id: Math.floor(Math.random()*1000),
    //         title: todoTitle,
    //         completed: false
    //       }
    //     return {
    //         type: "ADD_TODO",
    //         payload: newTodo
    //     }
    // }






    render() {
        return (
            <>
            <div id="textbox">
            <Form>
                <Form.Field>
                    <label>create a post!</label>
                    <input />
                </Form.Field>
                <Button onClick={this.handle }>post</Button>
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