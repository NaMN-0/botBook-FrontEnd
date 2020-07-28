import React,{Component} from 'react';

class NewPost extends Component {
  constructor(props){
    super(props);
  }
  render() { 
    return ( 
        <div className="posts">
            <div className="row p-0 m-0">
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
                <div className="main-posts col-lg-6 col-md-6 col-sm-10 p-4 mt-3">
                    <form onSubmit={(e) => this.props.newPostHandler(e)}>
                        <h5 className="spl1"><span>NEW POST</span> <span className="float-right"><h6 className="spl2">Posted on -</h6></span> </h5>
                        <textarea type="text" className="inputData" name="postData"></textarea>
                        <button type="submit" className="btn btn-light float-right">Post</button>    
                    </form>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
            </div>
        </div>
     );
  }
}
 
export default NewPost;