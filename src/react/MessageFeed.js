import React from "react";
import { CreatePost, MessageCard} from "./components";
import { userIsAuthenticated } from "./HOCs";
// import { getmessages } from "./../redux/messages";
import "./MessageFeed.css";
// import { connect } from "react-redux";
import {Menu} from "./components";


class MessageFeed extends React.Component {
  // componentDidMount(){
  //   this.props.getmessages()
  // }

  render() {
    return (
  
    // if (this.props.result === null) {
    //   return null
    // }
    // return this.props.result.messages.map(message => {
    //   return (
    //       <div>
    //           <h2>{message.username}</h2>
    //           <p>{message.text}</p>
    //   <p>Created at {message.createdAt}</p>
    //       </div>
    //   )
    // }
      <>
    
        <div id="container">
        <Menu isAuthenticated={this.props.isAuthenticated} />
            <h1> twitcher feed </h1>
                <CreatePost />
                <MessageCard />
                <MessageCard />
                <MessageCard />
        </div>
        </>
    ) 
    
  }
}
// const mapStateToProps = state => {
//   return {
//     result: state.messages.getmessages.result,
//     loading: state.messages.getmessages.result,
//     error: state.messages.getmessages.result
//   }
// }

// const mapDispatchToProps = {
//   getmessages
// }

// export default connect(mapStateToProps, mapDispatchToProps) (MessageFeed);

export default userIsAuthenticated(MessageFeed);