import React from "react";
import { Link } from "react-router-dom";
import MessageTimeLine  from "./MessageTimeLine";

const HomePage = ({currentUser}) => {
    if(!currentUser.isAuthenticated){
        return(
        <div className="home-hero">
        <h1> Welcome to the website! </h1>
        <h4> Looking for somewhere to start? </h4>
        <Link to="/signup" className="btn btn-primary">Get Start!</Link>
        </div>
        );
    }
    return(
        <div className="container">
            <div className="col">
                <h1>Welcome to your personal Page</h1>
            </div>
            <div className="col">
                <ul title="personal info">
                    <h4>PERSONAL INFO</h4>
                    <li>username:{currentUser.user.userName}</li>
                    <li>profileImage:{currentUser.user.profilePictureUrl}</li>
                </ul>
            </div>
            <MessageTimeLine/>
        </div>
    )
}

export default HomePage;