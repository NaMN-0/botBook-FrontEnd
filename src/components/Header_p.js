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
                <span className="logom navbar-brand ml-5"><span className="logo1">Bot</span><span className="logo2">Book</span></span>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse ml-5" id="navbarCollapse">
                    <div className="navbar-nav">
                        <span onClick={this.props.feedHandler} className="nav-item nav-link">Feed</span>
                        <span onClick={this.props.myPostsNavigate} className="nav-item nav-link">My Posts</span>
                        <span onClick={this.props.newPostNavigate} className="nav-item nav-link">New Post</span>
                        <span onClick={this.props.profileNavigate} className="nav-item nav-link">Profile</span>
                        <span onClick={this.props.searchNavigate} className="nav-item nav-link">Search</span>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <span onClick={this.props.logoutHandler} className="nav-item nav-link spa">Logout</span>
                    </div>
                </div>
            </div>
        </div>

     );
  }
}
 
export default Header;