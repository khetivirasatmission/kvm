/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { Layout as AntLayout, Menu } from "antd";
import { graphql, Link, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./layout.less";
import Navbar from "./Navbar";

const { Footer, Content } = AntLayout;

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
              <Link to="/faq">FAQ</Link>
            </Menu.Item>
            <Menu.Item key="support">
              <Link to="/support">Support</Link>
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
