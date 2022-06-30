import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faFacebook, faMandalorian} from "@fortawesome/free-brands-svg-icons";
import Buttons from "./Buttons";


function NavBar() { //give it props so that the name of the button can be reproduced.

    return (
        <div className="nav-bar">
        <div className="nav-link">
   <div className="button-div"><Buttons Type = "HOME" /></div>
   <div className="button-div"><Buttons Type = "ABOUT" /></div>
   <div className="button-div"><Buttons Type = "SHOP" /></div>
   <div className="button-div"><Buttons Type = "BLOG" /></div>
   <div className="button-div"><Buttons Type = "CONTACT" /></div>
   </div>
   <div className="social">
   <div className="icon-div"><Buttons Type = {<FontAwesomeIcon icon={faMandalorian} />} /></div>
   <div className="icon-div"><Buttons Type = {<FontAwesomeIcon icon={faInstagram} />} /></div>
   <div className="icon-div"><Buttons Type = {<FontAwesomeIcon icon={faFacebook} />} /></div>
   <div className="icon-div"><Buttons Type = {<FontAwesomeIcon icon={faEnvelope} />} /></div>
   </div>
   </div>
  );
}
export default NavBar;