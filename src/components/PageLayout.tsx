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
import styled from "styled-components";
import "./layout.less";
import Navbar from "./Navbar";

const { Footer, Content } = AntLayout;

const StyledContent = styled(Content)`
  margin: 3rem auto;
  width: 100%;
  max-width: 900px;
  padding: 10px;
`;

const PageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
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
        <StyledContent>{children}</StyledContent>
        <Footer>
          Copyright © {new Date().getFullYear()} Kheti Virasat Mission. All
          rights reserved.
          <Menu mode="horizontal" className="footer-menu">
            <Menu.Item key="faq">
              <a href="/faq">FAQ</a>
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

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
