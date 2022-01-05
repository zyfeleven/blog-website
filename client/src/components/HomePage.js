import React from "react";
import { Link } from "react-router-dom";

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
                    <li>username:`${currentUser.userName}`</li>
                    <li>email:</li>
                    <li>profileImage:</li>
                </ul>
            </div>
            
        </div>
    )
}

export default HomePage;