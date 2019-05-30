/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { Layout as AntLayout, Menu } from "antd";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./layout.less";
import Navbar from "./Navbar";

const { Header, Footer, Content } = AntLayout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <AntLayout>
        <Navbar />
        <Content>{children}</Content>
        <Footer>
          Copyright © {new Date().getFullYear()} Kheti Virasat Mission. All
          rights reserved.
          <Menu mode="horizontal" className="footer-menu">
            <Menu.Item key="faq">
              <a href="#">FAQ</a>
            </Menu.Item>
            <Menu.Item key="support">
              <a href="#">Support</a>
            </Menu.Item>
          </Menu>
        </Footer>
      </AntLayout>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
