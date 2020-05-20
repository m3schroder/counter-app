import React, { Component } from "react";
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "45.79.210.129",
  user: "matt",
  password: "sma||ba11",
  database: "reactApp",
});

con.connect(function (err) {
  if (err) throw err;
  con.query("select * from users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

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
