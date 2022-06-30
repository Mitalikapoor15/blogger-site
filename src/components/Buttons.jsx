import React from "react";
import "./Buttons.css";
import Button from 'react-bootstrap/Button';

function Buttons(props) {
    return (<Button href="#" className="nav-button" variant="secondary">{props.Type}</Button>);
}

export default Buttons;
