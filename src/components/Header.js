import React,{Component} from 'react';
import './header.css'

class Header extends Component {
  constructor(props){
    super(props);
  }
  render() { 
    return ( 
      <div className="header">
          <div className="navbar navbar-expand-md navbar-dark bg-dark">
              <span className="navbar-brand ml-5"><span className="logo1">Bot</span><span className="logo2">Book</span></span>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse ml-5" id="navbarCollapse">
                  <div className="navbar-nav">
                      <span onClick={this.props.homeNavigate} className="nav-item nav-link">Home</span>
                  </div>
                  <div className="navbar-nav ml-auto">
                      <span onClick={this.props.loginNavigate} className="nav-item nav-link spa">Login</span>
                      <span onClick={this.props.registerNavigate} className="nav-item nav-link spa">Register</span>
                  </div>
              </div>
          </div>
      </div>
     );
  }
}
 
export default Header;