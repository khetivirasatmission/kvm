import { Button, Drawer, Icon } from "antd";
import React, { Component } from "react";
import logo from "../../images/logo.jpeg";
import LeftMenu from "./LeftMenu";
import "./Navbar.css";
import RightMenu from "./RightMenu";
import { Link } from "gatsby";

class Navbar extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className="menu">
        <div className="menu__logo">
          <Link to="/">
            <img src={logo} /> <h1>Kheti Virasat Mission</h1>
          </Link>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            {/* <LeftMenu mode="horizontal" /> */}
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={this.showDrawer}
          >
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
