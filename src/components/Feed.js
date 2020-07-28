import React,{Component} from 'react';

class Feed extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const posts = this.props.posts;
    const sortedposts = posts.sort(function(a,b){
        return (new Date(b.date_ob) - new Date(a.date_ob));
    });
    return ( 
        <div className="posts mb-5">
            {
            sortedposts.map(post => (
                <div className="row p-0 m-0">
                    <div className="col-lg-3 col-md-3 col-sm-1"></div>
                    <div className="main-posts col-lg-6 col-md-6 col-sm-10 p-4 mt-3">
                        <div>
                            <h5 className="spl1"><span>{post.writer_name}</span> <span className="float-right"><h6 className="spl2">{post.date} {post.time}</h6></span> </h5>
                            <hr className="hr"/>
                            <p>
                                {post.content}
                            </p>
                        </div>
                        <hr className="hr"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-1"></div>
                </div>
            ))
            }
        </div>
     );
  }
}
 
export default Feed;