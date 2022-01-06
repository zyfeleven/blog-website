import React from "react";
import MessagesList from "../containers/MessagesList";
import UserAside from "./UserAside";

const MessagesTimeLine = props =>{
    return (
        <div className="row">
            <UserAside 
                profilePictureUrl={props.profilePictureUrl}
                userName={props.userName}
            />
            <MessagesList />
        </div>
    )
}

export default MessagesTimeLine;