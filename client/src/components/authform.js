import React,{Component} from "react";
import { Link } from "react-router-dom";

class AuthForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            userName:"",
            password:"",
            profileImageUrl:"",
        }
    }
    
    render(){
        const {email, userName, password, profileImageUrl} = this.state;
        const {heading, buttonText} = this.props;
        return(
            <div>
                <div className="row justifycontent-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            <label htmlFor="Email">Email:</label>
                            <input className="form-control" 
                                   id="email" name="email" 
                                   onChange={this.handleChange} 
                                   value={email} 
                                   type="text"
                            /> 
                            <label htmlFor="password">UserName:</label>
                            <input className="form-control" 
                                   id="password" name="password" 
                                   onChange={this.handleChange} 
                                   value={password} 
                                   type="text"
                            /> 
                            <label htmlFor="UserName">UserName</label>
                            <label htmlFor="">Email</label>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthForm;