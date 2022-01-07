import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfilePictureURL from "../images/yukino.jpg"

const MessageItem = ({date, profilePictureUrl, text, userName, removeMessage,
  isCorrectUser}) => (
    <div>
      <li className="list-group-item">
        <img 
          src={profilePictureUrl||DefaultProfilePictureURL} 
          alt={userName}
          height="100"
          width="100"
          className="timeline-image"
        />
        <div className="message-area">
          <Link to="/">@{userName}</Link>
          <span className="text-muted">
            <Moment className="text-muted" format="YYYY MM DD">  
              {date}
            </Moment>
          <p>{text}</p>
          {isCorrectUser && (
          <a className="btn btn-danger" onClick={removeMessage}>
            Delete
          </a>
        )}
          </span>
        </div>
        </li>
    </div>
)

export default MessageItem;