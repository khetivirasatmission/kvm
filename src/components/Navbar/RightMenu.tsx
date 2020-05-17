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
          {/* <Menu.Item key="team">
            <Link to="/team">Team</Link>
          </Menu.Item> */}
        </SubMenu>
        {/* <SubMenu title={<span>Initiatives</span>}>
          <Menu.Item key="organicfarmersmarket">
            <Link to="/organicfarmersmarket">Organic Farmers' Market</Link>
          </Menu.Item>
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

          <Menu.Item key="kudratiaaharparivar">
            <Link to="/kudratiaaharparivar">Kudrati Aahar Parivar</Link>
          </Menu.Item>
          <Menu.Item key="foodheritage">
            <Link to="/foodheritage">Revival of Food Heritage</Link>
          </Menu.Item>
          <Menu.Item key="trinjan">
            <Link to="/trinjan">Trinjan</Link>
          </Menu.Item>
          <Menu.Item key="advocacy">
            <Link to="/advocacy">Advocacy and Campaign</Link>
          </Menu.Item>
        </SubMenu> */}

        <SubMenu title={<span>Organic Farming</span>}>
          <Menu.Item key="certification">
            <Link to="/certification">Certification</Link>
          </Menu.Item>
          <Menu.Item key="farmers">
            <Link to="/organicfarmers">Organic Farmers</Link>
          </Menu.Item>
          <Menu.Item key="organicfarmersmarket">
            <Link to="/organicfarmersmarket">Organic Farmers' Market</Link>
          </Menu.Item>
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
        </SubMenu>

        <SubMenu title={<span>Heritage</span>}>
          <Menu.Item key="kudratiaaharparivar">
            <Link to="/kudratiaaharparivar">Kudrati Aahar Parivar</Link>
          </Menu.Item>
          <Menu.Item key="foodheritage">
            <Link to="/foodheritage">Revival of Food Heritage</Link>
          </Menu.Item>
          <Menu.Item key="trinjan">
            <Link to="/trinjan">Trinjan</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu title={<span>Education</span>}>
          <Menu.Item key="kudratikhetigurukul">
            <Link to="/kudratikhetigurukul">Kudrati Kheti Gurukul</Link>
          </Menu.Item>
          <Menu.Item key="research">
            <Link to="/research">Research</Link>
          </Menu.Item>
          <Menu.Item key="publications">
            <Link to="/publications">Publications</Link>
          </Menu.Item>
          <Menu.Item key="internship">
            <Link to="/internship">Internship</Link>
          </Menu.Item>
          <Menu.Item key="volunteer">
            <Link to="/volunteer">Volunteer</Link>
          </Menu.Item>
          <Menu.Item key="education">
            <Link to="/education">Eco-tours</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu title={<span>Campaign</span>}>
          <Menu.Item key="advocacy">
            <Link to="/advocacy">Advocacy and Campaign</Link>
          </Menu.Item>
          <Menu.Item key="wae">
            <Link to="/wae">Women Action for Ecology</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="press">
          <Link to="/press">Press</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
