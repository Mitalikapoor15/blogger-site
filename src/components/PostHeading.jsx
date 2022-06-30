import React from "react";
import "./PostHeading.css";

function PostHeading(props) {
    return (
        <div className="heading">
            <h2>{props.HeadingText}</h2>
        </div>
    );
}

export default PostHeading;