import React,{Component} from 'react';
import './header.css'

class Header extends Component {
  constructor(props){
    super(props);
  }
  render() { 
    return ( 
        <div className="row p-0 m-0">
            <div className="col-lg-3 col-md-3 col-sm-1"></div>
            <div className="welcome col-lg-6 col-md-6 col-sm-10 text-center">
                <h5><span>Welcome </span><span>{this.props.username}</span> </h5>
                <hr className="hr"/>
                <button onClick={this.props.feedHandler} className="btn btn-dark">Check Your Feed</button>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-1"></div>
        </div>
     );
  }
}
 
export default Header;