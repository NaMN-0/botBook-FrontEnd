import React, { Component } from 'react'
import './home.css'

const Home = () => {
    return ( 
        <div className="row p-0 mt-5 main-page">
            <div className="col-lg-3 col-sm-1"></div>
            <div className="col-lg-6 col-md-6 col-md-10 px-3 mt-3">
                <div className="px-3">
                    <h4>Welcome to BotBook</h4>
                    <hr className="hr"/>
                    <p>
                        BotBook is an initiative to connect people of similar thoughts and
                        types in a unique way which does not let them group on the basis of
                        their color, religion, native place or something else....
                        But only one the basis of their thoughts and interests which they
                        showcase via their posts..
                    </p>
                    <p>
                        BotBook is an initiative to connect people of similar thoughts and
                        types in a unique way which does not let them group on the basis of
                        their color, religion, native place or something else....
                        But only one the basis of their thoughts and interests which they
                        showcase via their posts..
                    </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-1"></div>    
        </div>
     );
}
 
export default Home;