import React from "react";
import { MessageCard} from ".";
import { getmessages } from "../../redux/messages";
import { connect } from "react-redux";
import "./ListOfMessages.css"



class ListOfMessages extends React.Component {
  componentDidMount(){
    this.props.getmessages()
  }
  

  render() {
    
    if (this.props.result === null) {
      return null
    }
    return this.props.result.messages.map(message => {
      return (
    
         <MessageCard
          key={message.id}
          text={message.text}
          createdAt={new Date(message.createdAt).toDateString()}
          username={message.username}
          likes={message.likes}
          id={message.id}
          />
          
      )
    })
   }  
  }
  


  
        // <div id="container">
        // <Menu isAuthenticated={this.props.isAuthenticated} />
        //     <h1> twitcher feed </h1>
        //         <CreatePost />
        //         <MessageCard />
        //         <MessageCard />
        //         <MessageCard />
        // </div>
      
    



const mapStateToProps = state => {
  return {
    result: state.messages.getmessages.result,
    loading: state.messages.getmessages.result,
    error: state.messages.getmessages.result
  }
}

const mapDispatchToProps = {
  getmessages
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfMessages);



// export default userIsAuthenticated(MessageFeed);