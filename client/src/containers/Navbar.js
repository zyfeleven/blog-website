import React,{Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "../store/actions/auth";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="/">HomePage</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                {!this.props.currentUser.isAuthenticated&&(
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link to="/signup" className="nav-link"> Sign up</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/signin" className="nav-link"> Log in</Link>
                  </li>
                  <li></li>
                </ul>
                )}
                {this.props.currentUser.isAuthenticated&&(
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link to={`/users/${this.props.currentUser.user.id}/messages/new`} className="nav-link"> Create new Messages</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={`/users/${this.props.currentUser.user.id}/messages`} className="nav-link"> My Messages</Link>
                  </li>
                  <li className="nav-item">
                      <a onClick={this.logout} href="/" className="nav-link"> Log out</a>
                  </li>
                  <li></li>
                </ul>
                )}
                
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
    };
}

export default connect(mapStateToProps, {logout})(Navbar);