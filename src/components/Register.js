import React, { Component } from 'react';
import './login-register.css';

class Register extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <div className="register minheight mb-5">
                <div className="px-5 py-4 mx-auto text-center mainDiv">
                    <div>
                        <h3 className="pt-1"><span className="sp1">Bot</span><span className="sp2">Book</span></h3>    
                    </div>
                    <hr/>
                    <h3 className="my-4 loginHead">Register</h3>
                    <form onSubmit={(e) => this.props.registerHandler(e)}>
                        <input className="form-control" type="text" name="name" placeholder="Enter name"/><br/>
                        <input className="form-control" type="text" name="username" placeholder="Enter username"/><br/>
                        <input className="form-control" type="password" name="pass" placeholder="Enter Password"/><br/>
                        <input className="form-control" type="password" name="repass" placeholder="Re-Enter Password"/><br/>
                        <p>{this.props.msg}</p>
                        <button className="my-0 mx-2 px-2 btn btn-success" type="submit">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Register;