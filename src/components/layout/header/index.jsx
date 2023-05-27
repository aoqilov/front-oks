import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <header>
      <Link to={"/"}>
        <button>home</button>
      </Link>
      <div className="container header__wrapper">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </header>
  );
};

export default index;
