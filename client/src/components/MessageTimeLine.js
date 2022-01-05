import React from "react";
import MessagesList from "../containers/MessagesList";
import UserAside from "./UserAside";

const MessagesTimeLine = props =>{
    return (
        <div className="row">
            <UserAside/>
            <MessagesList />
        </div>
    )
}

export default MessagesTimeLine;