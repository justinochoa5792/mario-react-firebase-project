import React from "react";
import { NavLink } from "react-router-dom";

const Signedin = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          JO
        </NavLink>
      </li>
    </ul>
  );
};

export default Signedin;
