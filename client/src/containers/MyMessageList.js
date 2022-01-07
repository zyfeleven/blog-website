import React, {Component} from "react";
import {connect} from "react-redux";
import { fetchMessages, removeMessage} from "../store/actions/messages";
import MyMessageItem from "../components/MyMessageItem";

class MyMessagesList extends Component {
    componentDidMount(){
        this.props.fetchMessages();
    }
    render(){
        const {messages, removeMessage, currentUser} = this.props;
        let MyMessagesList = messages.map(m => (
            <MyMessageItem 
                key={m._id} 
                date={m.createAt} 
                text={m.text} 
                userName={m.user.userName}
                profilePictureUrl={m.user.profilePictureUrl}  
                removeMessage={removeMessage.bind(this, m.user._id, m._id)}
                isCorrectUser={currentUser === m.user._id}
            />
        ))
        return (
            <div className="row col-sm-8">
            <div className="offset-1 col-sm-10">
              <ul className="list-group" id="messages">
                {MyMessagesList}
              </ul>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages:state.messages,
        currentUser: state.currentUser.user.id
    };
}
export default connect(mapStateToProps, {fetchMessages, removeMessage})(MyMessagesList);