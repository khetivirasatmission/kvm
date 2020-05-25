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
            <Link to="/mission">Our Mission and Vision</Link>
          </Menu.Item>
          {/* <Menu.Item key="team">
            <Link to="/team">Our Team</Link>
          </Menu.Item>
          <Menu.Item key="team">
            <Link to="/team">Our Partners</Link>
          </Menu.Item> */}
        </SubMenu>
        <SubMenu title={<span>Our Work</span>}>
          <SubMenu title={<span>Farming</span>}>
            <Menu.Item key="organicfarming">
              <Link to="/organicfarming">
                Organic farming
            </Link>
            </Menu.Item>
            <Menu.Item key="organickitchengardening">
              <Link to="/organickitchengardening">
                Kitchen Gardening
            </Link>
            </Menu.Item>
            <Menu.Item key="urbankitchengardening">
              <Link to="/urbankitchengardening">
                Urban Farming
            </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu title={<span>Women Empowerment</span>}>
            <Menu.Item key="trinjan">
              <Link to="/trinjan">Trinjan</Link>
            </Menu.Item>
            <Menu.Item key="projectkitchengardens">
              <Link to="/projectkitchengardens">Project Kitchen Gardens</Link>
            </Menu.Item>
            <Menu.Item key="kudratiaaharparivar">
              <Link to="/kudratiaaharparivar">Kudrati Aahar Parivar</Link>
            </Menu.Item>
            <Menu.Item key="foodheritage">
              <Link to="/foodheritage">Revival of Food Heritage</Link>
            </Menu.Item>
            <Menu.Item key="wae">
              <Link to="/wae">Women Action for Ecology</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu title={<span>Marketing</span>}>
            <Menu.Item key="organicfarmersmarket">
              <Link to="/organicfarmersmarket">Kissan Haats</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="certification">
            <Link to="/certification">PGS Certification</Link>
          </Menu.Item>

          <SubMenu title={<span>Education</span>}>
            <Menu.Item key="kudratikhetigurukul">
              <Link to="/kudratikhetigurukul">Kudrati Kheti Gurukul</Link>
            </Menu.Item>
            <Menu.Item key="research">
              <Link to="/research">Research</Link>
            </Menu.Item>
            <Menu.Item key="education">
              <Link to="/education">Eco-tours</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu title={<span>Campaigns</span>}>
            <Menu.Item key="advocacy">
              <Link to="/advocacy">Advocacy and Campaign</Link>
            </Menu.Item>
          </SubMenu>

        </SubMenu>

        <Menu.Item key="farmers">
          <Link to="/organicfarmers">Stories of Evolution</Link>
        </Menu.Item>

        <SubMenu title={<span>Get Involved</span>}>
          <Menu.Item key="internship">
            <Link to="/internship">Internship</Link>
          </Menu.Item>
          <Menu.Item key="volunteer">
            <Link to="/volunteer">Volunteer</Link>
          </Menu.Item>
          <Menu.Item key="donate">
            <Link to="/donate">Become a donor</Link>
          </Menu.Item>
        </SubMenu>


        <SubMenu title={<span>Media Room</span>}>
          <Menu.Item key="publications">
            <Link to="/publications">Publications</Link>
          </Menu.Item>
          <Menu.Item key="press">
            <Link to="/press">Press</Link>
          </Menu.Item>
        </SubMenu>


        <Menu.Item key="contact">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
