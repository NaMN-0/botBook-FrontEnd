import React,{Component} from 'react';
import './page.css';
import './network.css';
import Header from './Header';
import Header_p from './Header_p';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import Feed from './Feed';
import MyPosts from './MyPosts';
import NewPost from './NewPost';
import Profile from './Profile';

class Page extends Component{
    constructor(){
        super();
        this.state = {
            permit : 0,
            page : 'home',
            profile : {},
            msg : '',
            msgType : 'none',
            allPosts : [],
            searchResult : {},
        };
        this.urlb = "https://botbook-backend-0.herokuapp.com/";
    }

    //Functions

    loginHandler = (e) => {
        e.preventDefault();
        this.setState({msg : "Please Wait!", msgType : "loading"});

        let username = e.target.username.value;
        let pass = e.target.pass.value;

        fetch(`${this.urlb}/login`, {
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({username,pass})
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {throw err})
        .then(data => {
            if(data){
                const user = {
                    _id : data._id,
                    name : data.name,
                    username : data.username,
                    pass : data.pass,
                    myPost : data.myPost,
                    follower : data.follower,
                    following : data.following,
                }
                this.setState({permit : 1, page : 'welcome', profile : user, msg : "", msgType : ""});
            }
            else{
                this.setState({msg : 'Invalid Details', msgType : 'error'});
            }
        })
        .catch(err => {throw err});
    }

    registerHandler = (e) => {
        e.preventDefault();
        this.setState({msg : "Please Wait!", msgType : "loading"});
        const name = e.target.name.value;
        const username = e.target.username.value;        
        const pass = e.target.pass.value;        
        const repass = e.target.repass.value;
        if((pass===repass)&&(pass)&&(name)&&(username)){
            fetch(`${this.urlb}/register`, {
                method : 'POST',
                headers: {'Content-Type':'application/json'},
                body : JSON.stringify({name,username,pass})
            })
            .then(res => {
                return res.json();
            })
            .catch(err => {throw err})
            .then(data => {
                if(data===1){
                    this.setState({
                        msg : "Registered Successfully.",
                        msgType : "success"
                    });
                }
                else{
                    this.setState({
                        msg : "Username already taken.",
                        msgType : "error"
                    });
                }
            })
            .catch(err => {throw err});                
        }
        else{
            if(pass&&repass&&name&&username){
                this.setState({
                    msg : "Password should be same as Re-entered password.",
                    msgType : "error"
                });
            }
            else{
                this.setState({
                    msg : "All fields not filled.",
                    msgType : "error"
                });
            }
        }
    }

    // Navigators

    loginNavigate = () =>{
        this.setState({
            page : 'login',
            msg : '',
            msgType : ''
        })
    }

    registerNavigate = () =>{
        this.setState({
            page : 'register',
            msg : '',
            msgType : ''
        })
    }

    homeNavigate = () =>{
        this.setState({
            page : 'home',
            msg : '',
            msgType : ''
        })
    }

    feedNavigate = () =>{
        this.setState({
            page : 'feed',
            msg : '',
            msgType : ''
        })
    }

    myPostsNavigate = () =>{
        this.setState({
            page : 'myPosts',
            msg : '',
            msgType : ''
        })
    }

    newPostNavigate = () =>{
        this.setState({
            page : 'newPost',
            msg : '',
            msgType : ''
        })
    }

    profileNavigate = () =>{
        this.setState({
            page : 'profile',
            msg : '',
            msgType : ''
        })
    }

    searchNavigate = () =>{
        this.setState({
            page : 'search',
            msg : '',
            msgType : ''
        })
    }

    feedHandler = () => {
        this.setState({msg : "Please Wait!", msgType : "loading"});
        fetch(`${this.urlb}/feed`, {
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({_id : this.state.profile._id})
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {throw err})
        .then(data => {
            if(data.length===0){
                this.setState({
                    posts : [],
                    page : 'feed',
                    msg : 'No posts to show!',
                    msgType : 'neutral',
                    searchResult : {}
                });
            }
            else{
                this.setState({
                    posts : data,
                    page : 'feed',
                    msg : '',
                    msgType : "",
                    searchResult : {},
                });
                data.map(post => {console.log(post)});
            }
        })
        .catch(err => {throw err});
    }

    newPostHandler = (e) => {
        this.setState({msg : "Please Wait!", msgType : "loading"})
        e.preventDefault();
        let content = e.target.postData.value;
        let writer_id = this.state.profile._id;
        let writer_name = this.state.profile.name;
        fetch(`${this.urlb}/newpost`, {
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({content,writer_id,writer_name})
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {throw err})
        .then(data => {console.log(data)})
        .catch(err => {throw err});

        let myPosts = this.state.profile.myPost;
        myPosts.push({writer_id,writer_name,content});
        const tmp = {
            _id : this.state.profile._id,
            name : this.state.profile.name,
            username : this.state.profile.username,
            pass : this.state.profile.pass,
            myPost : myPosts,
            follower : this.state.profile.follower,
            following : this.state.profile.following,
        }
        this.setState({profile : tmp, msg : "Posted!", msgType : "neutral"});
        e.target.reset();
    }

    findHandler = (e) => {
        this.setState({msg : "Please Wait!", msgType : "loading"});
        e.preventDefault();
        let username = e.target.curName.value;
        fetch(`${this.urlb}/find`, {
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({username})
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {throw err})
        .then(data => {
            if((data===null)||(data===undefined)){
                this.setState({
                    searchResult : {},
                    msg : "No such user exists!",
                    msgType : "error"
                })
            }
            else{
                this.setState({
                    searchResult : data,
                    msg : "",
                    msgType : ""
                })
            }
        })
        .catch(err => {throw err});
    }

    followHandler = () => {
        this.setState({msg : "Please Wait!", msgType : "loading"})
        const sender_id = this.state.profile._id;
        const receiver_id = this.state.searchResult._id;
        const sender_name = this.state.profile.name;
        const receiver_name = this.state.searchResult.name;

        fetch(`${this.urlb}/follow`, {
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({sender_id,receiver_id,sender_name,receiver_name})
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {throw err});

        let following = this.state.profile.following;
        following.push({_id : receiver_id, name : receiver_name});
        const tmp = {
            _id : this.state.profile._id,
            name : this.state.profile.name,
            username : this.state.profile.username,
            pass : this.state.profile.pass,
            myPost : this.state.profile.myPost,
            follower : this.state.profile.follower,
            following : following,
        }
        this.setState({profile : tmp, msg : "", msgType : ""});
    }

    unfollowHandler = (receiver_id) => {
        this.setState({msg : "Please Wait!", msgType : "loading"});
        const sender_id = this.state.profile._id;

        fetch(`${this.urlb}/unfollow`, {
            method : 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({sender_id,receiver_id})
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {throw err});

        let following = this.state.profile.following.filter((person) => 
            (person._id)!==(receiver_id)
        );

        const tmp = {
            _id : this.state.profile._id,
            name : this.state.profile.name,
            username : this.state.profile.username,
            pass : this.state.profile.pass,
            myPost : this.state.profile.myPost,
            follower : this.state.profile.follower,
            following : following,
        }
        this.setState({profile : tmp, msg : "", msgType : ""});
    }

    logoutHandler = () =>{
        this.setState({
            permit : 0,
            page : 'home',
            profile : {},
            msg : '',
            msgType : '',
            allPosts : [],
            searchResult : {},
        })
    }

    render(){

        let content;
        let header;

        if(this.state.permit===0){
            header = 
                <Header
                    loginNavigate = {this.loginNavigate}
                    registerNavigate = {this.registerNavigate}
                    homeNavigate = {this.homeNavigate}
                />
            if(this.state.page==='login'){
                content = <Login loginHandler={this.loginHandler} msg={this.state.msg} msgType={this.state.msgType}/>
            }
            else if(this.state.page==='register'){
                content = <Register registerHandler={this.registerHandler} msg={this.state.msg} msgType={this.state.msgType}/>
            }
            else if(this.state.page==='home'){
                content = <Home/>
            }
        }
        else{
            header = 
                <Header_p
                    feedHandler = {this.feedHandler}
                    myPostsNavigate = {this.myPostsNavigate}
                    newPostNavigate = {this.newPostNavigate}
                    profileNavigate = {this.profileNavigate}
                    searchNavigate = {this.searchNavigate}
                    logoutHandler = {this.logoutHandler}
                />            
            if(this.state.page==='welcome'){
                content = 
                <div>
                    <p className="text-center mt-3">{this.state.msg}</p>
                    <Welcome username={this.state.profile.username} feedHandler={this.feedHandler}/>
                </div>
            }
            else if(this.state.page==='feed'){
                content = 
                <div>
                    <p className="text-center mt-3">{this.state.msg}</p>
                    <Feed posts={this.state.posts}/>
                </div>
            }
            else if(this.state.page==='myPosts'){
                content = 
                <div>
                    <p className="text-center mt-3">{this.state.msg}</p>
                    <MyPosts posts={this.state.profile.myPost}/>
                </div>
            }
            else if(this.state.page==='newPost'){
                content = 
                <div>
                    <NewPost newPostHandler={this.newPostHandler}/>
                    <p className="text-center mt-3">{this.state.msg}</p>
                </div>
            }
            else if(this.state.page==='profile'){
                content = 
                <div>
                    <p className="text-center mt-3">{this.state.msg}</p>
                    <Profile profile={this.state.profile} unfollowHandler ={this.unfollowHandler}/>
                </div>
            }
            else if(this.state.page==='search'){
                let toShow;
                if(Object.keys(this.state.searchResult).length===0){
                    toShow = 
                    <p className = "text-center">{this.state.msg}</p>
                }
                else{
                    let found = 0;
                    this.state.profile.following.forEach(person => {
                        if(person._id===this.state.searchResult._id){
                            found = 1;
                        }
                    });
                    let itself = 0;
                    if(this.state.searchResult._id===this.state.profile._id){
                        itself = 1;
                    }
    
                    if(itself===1){
                        toShow = 
                        <div className="searchResult">
                            <p className = "text-center">{this.state.msg}</p>
                            <div className="searchResult px-5 py-3">
                                <h4><span>{this.state.searchResult.username}</span></h4>
                                <hr class="hr"/>
                                <div class="p-3">
                                    <h6>{this.state.searchResult.name}</h6>
                                    <br/>
                                    <h6>Followers : {this.state.searchResult.follower.length}</h6>
                                    <h6>Following : {this.state.searchResult.following.length}</h6>
                                    <h6>Posts : {this.state.searchResult.myPost.length}</h6>
                                </div>
                            </div>
                        </div>
                    }
                    else{
                        if(found===0)
                            {
                                toShow = 
                                <div className="searchResult px-5 py-3">
                                    <p className = "text-center">{this.state.msg}</p>
                                    <h4><span>{this.state.searchResult.username}</span></h4>
                                    <hr class="hr"/>
                                    <div class="p-3">
                                        <h6>{this.state.searchResult.name}</h6>
                                        <br/>
                                        <h6>Followers : {this.state.searchResult.follower.length}</h6>
                                        <h6>Following : {this.state.searchResult.following.length}</h6>
                                        <h6>Posts : {this.state.searchResult.myPost.length}</h6>
                                    </div>
                                    <button className="btn btn-light" onClick={() => this.followHandler()}>Follow</button>
                                </div>
                            }
                            else{
                                toShow = 
                                <div className="searchResult px-5 py-3">
                                    <p className = "text-center">{this.state.msg}</p>
                                    <h4><span>{this.state.searchResult.username}</span></h4>
                                    <hr class="hr"/>
                                    <div class="p-3">
                                        <h6>{this.state.searchResult.name}</h6>
                                        <br/>
                                        <h6>Followers : {this.state.searchResult.follower.length}</h6>
                                        <h6>Following : {this.state.searchResult.following.length}</h6>
                                        <h6>Posts : {this.state.searchResult.myPost.length}</h6>
                                    </div>
                                    <h4>Already Following!</h4>
                                </div>
                            }
                        }
                    }
    
                content = 
                <div class="row p-0 m-0">
                    <div class="col-lg-3 col-md-3 col-sm-1"></div>
                    <div class="profile-1 col-lg-6 col-md-6 col-sm-10 py-5">
                        <div className="search">
                            <form className="form-group text-center" onSubmit={(e) => {this.findHandler(e)}}>
                                <span><input type="text" className="form-control p-2" name="curName" placeholder="Search for people!"/></span>
                                <span><button type="submit" className="btn btn-dark my-2">Search</button></span>
                                {toShow}
                            </form>
                            <br/>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-1"></div>
                </div>
                }
        }

        return(
            <div>
                {header}
                {content}
            </div>
        )
    }

}

export default Page;
