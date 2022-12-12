import { Link } from "gatsby";
import React, { Component } from "react";
import logo from "../../images/logo.svg";
import RightMenu from "./RightMenu";

class Navbar extends Component {
  render() {
    return (
      <nav className="menu">
        <div className="menu__logo">
          <Link to="/">
            <img src={logo} /> <h1>Kheti Virasat Mission</h1>
          </Link>
        </div>
        <div className="menu__container">
          <div className="menu_right">
            <RightMenu mode="horizontal" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
