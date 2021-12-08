import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="home-hero">
        <h1> Welcome to the website! </h1>
        <h4> Looking for somewhere to start? </h4>
        <Link to="/signup" className="btn btn-primary">Get Start!</Link>
    </div>
)

export default HomePage;