import React from "react";
import { Switch, Route, withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../components/HomePage";

const Main = props => {
    return(
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <HomePage{...props}/>}>

                </Route>
            </Switch>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    };
}

export default withRouter(connect(mapStateToProps,null)(Main));