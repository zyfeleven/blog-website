import React,{Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="/">HomePage</a>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                  <li className="nav-item">
                      <Link to="/signup" className="nav-link"> Sign up</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/signin" className="nav-link"> Log in</Link>
                  </li>
                  <li></li>
                </ul>
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

export default connect(mapStateToProps)(Navbar);