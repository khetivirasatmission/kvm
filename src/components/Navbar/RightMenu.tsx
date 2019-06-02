import { Menu } from "antd";
import { Link } from "gatsby";
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
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu title={<span>About us</span>}>
          <Menu.Item key="org">
            <Link to="/mission">Mission</Link>
          </Menu.Item>
          <Menu.Item key="team">
            <Link to="/team">Team</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title={<span>Initiatives</span>}>
          <Menu.Item key="organickitchengardening">
            <Link to="/organickitchengardening">
              Organic Farming &amp; Kitchen Gardening
            </Link>
          </Menu.Item>
          <Menu.Item key="urbankitchengardening">
            <Link to="/urbankitchengardening">
              Urban Farming &amp; Kitchen Gardening
            </Link>
          </Menu.Item>
          <Menu.Item key="wae">
            <Link to="/wae">Women Action for Ecology</Link>
          </Menu.Item>

          <Menu.Item key="foodheritage">
            <Link to="/foodheritage">Revival of Food Heritage</Link>
          </Menu.Item>
          <Menu.Item key="advocacy">
            <Link to="/advocacy">Advocacy and Campaign</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="certification">
          <Link to="/certification">Certification</Link>
        </Menu.Item>

        {/* <Menu.Item key="volunteers">
          <a href="#">Volunteers</a>
        </Menu.Item> */}
        <Menu.Item key="contact">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
