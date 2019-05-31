import { Menu } from "antd";
import React, { Component } from "react";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component<{
  mode: "vertical" | "horizontal" | "inline";
}> {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="home">
          <a href="/">Home</a>
        </Menu.Item>
        <SubMenu title={<span>About us</span>}>
          <Menu.Item key="org">
            <a href="/mission">Mission</a>
          </Menu.Item>
          <Menu.Item key="team">
            <a href="/team">Team</a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="initiatives">
          <a href="/initiatives">Initiatives</a>
        </Menu.Item>
        {/* <Menu.Item key="volunteers">
          <a href="#">Volunteers</a>
        </Menu.Item> */}
        {/* <SubMenu title={<span>Blogs</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu> */}
        {/* <Menu.Item key="faq">
          <a href="#">FAQ</a>
        </Menu.Item> */}
        <Menu.Item key="contact">
          <a href="/contact">Contact Us</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
