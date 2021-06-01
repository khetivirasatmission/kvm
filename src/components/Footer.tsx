/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { Layout as AntLayout, Menu } from "antd";
import { Link } from "gatsby";
import React from "react";

const { Footer: AntFooter } = AntLayout;

const Footer = () => (
  <AntFooter>
    Copyright © {new Date().getFullYear()} Kheti Virasat Mission. All rights
    reserved.
    <Menu mode="horizontal" className="footer-menu">
      <Menu.Item key="faq">
        <Link to="/faq">FAQ</Link>
      </Menu.Item>
      {/* <Menu.Item key="support">
        <Link to="/support">Support</Link>
      </Menu.Item> */}
    </Menu>
  </AntFooter>
);

Footer.propTypes = {};

export default Footer;
