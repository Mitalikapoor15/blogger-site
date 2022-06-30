import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
      <p>Copyright @ {year}</p>
    </div>
  );
}

export default Footer;
