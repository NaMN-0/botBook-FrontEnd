import React,{Component} from 'react';
import './profile.css';

class Feed extends Component {
  constructor(props){
    super(props);
  }
  render() { 
    return ( 
        <div>
            <div className="row p-0 m-0">
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
                <div className="profile col-lg-6 col-md-6 col-sm-10 py-5">
                    <div className="main-div p-5 mt-5">
                        <h4><span>{this.props.profile.username}</span></h4>
                        <hr className="hr"/>
                        <div className="p-3">
                            <h6>{this.props.profile.name}</h6>
                            <br/>
                            <h6>Followers : {this.props.profile.follower.length}</h6>
                            <h6>Following : {this.props.profile.following.length}</h6>
                            <h6>Posts : {this.props.profile.myPost.length}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
            </div>

            <div className="row p-0 m-0">
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
                <div className="profile col-lg-6 col-md-6 col-sm-10 py-5">
                    <div className="main-div p-5 mt-0">
                        <h4><span>Following</span><span> ( {this.props.profile.following.length} )</span></h4>
                        <hr className="hr mb-3"/>
                        {this.props.profile.following.map(mitr => (
                            <div className="mx-5 text-center">
                            <span>{mitr.name} <button  onClick={()=>this.props.unfollowHandler(mitr._id)} className="btn btn-light btn-cross float-right">X</button></span>
                            <hr className="lite-hr"/>
                            <br/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
            </div>

            <div className="row p-0 m-0">
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
                <div className="profile col-lg-6 col-md-6 col-sm-10 py-5">
                    <div className="main-div p-5 mt-0">
                        <h4><span>Followers</span><span> ( {this.props.profile.follower.length} )</span></h4>
                        <hr className="hr mb-3"/>
                        {this.props.profile.follower.map(mitr => (
                            <div className="mx-5 text-center">
                            <span>{mitr.name}</span>
                            <hr className="lite-hr"/>
                            <br/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
            </div>

        </div>
     );
  }
}
 
export default Feed;