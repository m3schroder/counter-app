import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {/*props is passed in as a parameter and can be used in a simplier form than this.props.====*/}
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
