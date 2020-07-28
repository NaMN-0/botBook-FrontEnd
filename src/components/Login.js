import React, { Component } from 'react';
import './login-register.css';

class Login extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        let clr;
        if(this.props.msgType==="error"){
            clr = {
                "color" : "white"
            }
        }
        else if(this.props.msgType==="loading"){
            clr = {
                "color" : "black"
            }
        }
        else if(this.props.msgType==="success"){
            clr = {
                "color" : "green"
            }
        }
        return (
            <div className="login minheight">
                <div className="px-5 py-4 mt-5 mx-auto text-center mainDiv">
                    <div>
                        <h3 className="pt-1"><span className="sp1">Bot</span><span className="sp2">Book</span></h3>    
                    </div>
                    <hr/>
                    <h3 className="my-4 loginHead">Login</h3>
                    <form onSubmit={(e) => this.props.loginHandler(e)}>
                        <input className="form-control" type="text" name="username" placeholder="Enter ID"/><br/>
                        <input className="form-control" type="password" name="pass" placeholder="Enter Password"/><br/>
                        <p style={clr}>{this.props.msg}</p>
                        <button className="my-0 mx-2 px-2 btn btn-success" type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Login;