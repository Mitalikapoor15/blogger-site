import React from "react";
import "./Post.css";
import PostHeading from "./PostHeading";


function Post(props) {
    return (<div className="post">
        <PostHeading HeadingText={props.Heading} />
        <div className="post-container">
        <img className="post-img" src={props.PostImg}/>
        </div>
        <div class="text-container">
        <p className="post-text">{props.PostText}</p>
        <a href="#">Read more.</a>
        </div>
    </div>);
}

export default Post;