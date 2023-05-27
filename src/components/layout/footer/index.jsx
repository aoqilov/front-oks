import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <Link to={"/test"}>
        <button>test</button>
      </Link>
    </footer>
  );
};

export default index;
