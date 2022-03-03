import React from "react";
import naira from "../images/naira.svg";

const Header = ({ text, amount,textColor}) => {
  
  return (
    <h2 style={{ textAlign: "center",color:textColor }}>
      {text} <br />
      ${amount}
    </h2>
  );
};

export default Header;
