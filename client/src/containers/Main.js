import React from "react";
import { Switch, Route, withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import AuthForm from "../components/authform";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "./MessageForm";
import MyMessageList from "./MyMessageList";
import MessagesList from "./MessagesList";


const Main = props => {
    const {authUser,errors,removeError,currentUser} = props;
    return(
        <div className="container">
            <Switch>
                {/*the route of home page*/}
                <Route 
                    exact 
                    path="/" 
                    render={props => <HomePage currentUser={currentUser} {...props}/>}
                />
                {/*the route of sign in*/}
                <Route 
                    exact 
                    path="/signin" 
                    render={props => {
                        return (
                            <AuthForm 
                                removeError = {removeError}
                                errors = {errors}
                                onAuth = { authUser }
                                buttonText="Log in" 
                                heading = "Welcome Back!" 
                                {...props}
                            />
                            )}
                        }
                />
                {/*the route of sign up*/}
                <Route 
                    exact   
                    path="/signup" 
                    render={props => {
                        return(
                            <AuthForm
                            removeError={removeError}
                            errors = {errors}
                            onAuth = {authUser}
                            signUp
                            buttonText="Sign up" 
                            heading = "Welcome to sign up!" 
                            {...props}
                            />
                        )}
                    }
                />
                <Route
                    exact
                    path="/users/:id/messages/new"
                    component={withAuth(MessageForm)}
                />
                <Route
                    exact
                    path="/users/:id/messages/mymessages"
                    component={withAuth(MyMessageList)}
                />
            </Switch>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors,
    };
}

export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));