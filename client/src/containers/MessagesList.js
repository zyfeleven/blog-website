import React, {Component} from "react";
import {connect} from "react-redux";
import { fetchMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessagesList extends Component {
    componentDidMount(){
        this.props.fetchMessages();
    }
    render(){
        const {messages} = this.props;
        let messagesList = messages.map(m => (
            <MessageItem 
                key={m._id} 
                date={m.createAt} 
                text={m.text} 
                userName={m.user.username}
                profilePictureURL={m.user.profilePictureURL}  
            />
        ))
        return (
            <div className="row col-sm-8">
            <div className="offset-1 col-sm-10">
              <ul className="list-group" id="messages">
                {messagesList}
              </ul>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages:state.messages,
    };
}
export default connect(mapStateToProps, {fetchMessages})(MessagesList);