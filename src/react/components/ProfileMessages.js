import React from "react";
import { MessageCard} from ".";
import { getmessages } from "../../redux/messages";
import { connect } from "react-redux";



class ProfileMessages extends React.Component {
  componentDidMount(){
    this.props.getmessages()
  }
  

  render() {
    
    if (this.props.result === null) {
      return null
    }
    return this.props.result.messages.filter(message => (message.username === this.props.username)).map(filteredmessage => {
      return (
    
         <MessageCard
            key={filteredmessage.id}
            text={filteredmessage.text}
            createdAt={new Date(filteredmessage.createdAt).toDateString()}
            username={filteredmessage.username}
          //likes
          />
          
      )
    })
   }  
  }
    
     

const mapStateToProps = state => {
  return {
    username: state.auth.login.result.username,
    result: state.messages.getmessages.result,
    loading: state.messages.getmessages.result,
    error: state.messages.getmessages.result
  }
}

const mapDispatchToProps = {
  getmessages
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMessages);
