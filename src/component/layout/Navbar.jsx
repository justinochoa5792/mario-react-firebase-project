import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedIn from "./Signedin";
import SignedOut from "./SignedOut";

const Navbar = (props) => {
  const { auth, profile } = props;

  const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;

  return (
    <div>
      <nav className="nav-wrapper grey darkern-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            MarioPlan
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
