import React from "react";

import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  return (
    <nav className="nav">
      <div className="btn btn--white" href="#" title="Home">
        <Link to={`/signup`}>SignUp</Link>
      </div>
      <div className="btn btn--white" href="#" title="Home">
        {" "}
        <Link to={`/login`}>Login</Link>
      </div>
      <div className="btn btn--white" href="#" title="About">
        <Link to={`/adverts`}>Adverts</Link>
      </div>
      <div className="btn btn--white" href="#" title="Store">
        <Link to={`/logout`}>LogOut</Link>
      </div>
    </nav>
  );
}
