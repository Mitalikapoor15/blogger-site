import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header-cont">
    <div className="text">
      <h1 className="header">The Blogger Site</h1>
      <h2 className="author-name">by {props.Author}</h2>
      </div>
    </div>
   
  );
}

export default Header;
