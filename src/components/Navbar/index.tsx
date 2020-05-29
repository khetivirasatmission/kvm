import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "gatsby";
import React, { Component } from "react";
import logo from "../../images/logo.jpeg";
import "./Navbar.css";
import RightMenu from "./RightMenu";

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
          <div className="menu_right">
            <RightMenu mode="horizontal" />
          </div>
          <Button className="menu__mobile-button" onClick={this.showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            {/* <LeftMenu mode="inline" /> */}
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
