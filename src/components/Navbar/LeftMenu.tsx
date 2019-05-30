import { Menu } from "antd";
import React, { Component } from "react";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component<{
  mode: "vertical" | "horizontal" | "inline";
}> {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="home">
          <a href="#">Home</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="#">About us</a>
        </Menu.Item>
        <SubMenu title={<span>About us</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="initiatives">
          <a href="#">Initiatives</a>
        </Menu.Item>
        <Menu.Item key="volunteers">
          <a href="#">Volunteers</a>
        </Menu.Item>
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
        <Menu.Item key="contact">
          <a href="#">Contact Us</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
