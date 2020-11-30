import React from "react";
import { Link } from "react-router-dom";

import SignedIn from "./Signedin";
import SignedOut from "./SignedOut";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey darkern-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            MarioPlan
          </Link>
          <SignedIn />
          <SignedOut />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
