import React from "react";

import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <nav className="">
      <div className="" href="#" title="Home">
        <Link to={`/signup`}>SignUp</Link>
      </div>
      <div className="" href="#" title="Home">
        {" "}
        <Link to={`/login`}>Login</Link>
      </div>
      <div className="" href="#" title="About">
        <Link to={`/adverts`}>Adverts</Link>
      </div>
      <div className="" href="#" title="Store">
        <Link to={`/logout`}>LogOut</Link>
      </div>
    </nav>
  );
}
