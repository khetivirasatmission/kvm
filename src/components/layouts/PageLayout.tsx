/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { Layout as AntLayout } from "antd";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./layout.less";

const { Content } = AntLayout;

const StyledContent = styled(Content)`
  margin: 3rem auto;
  width: 100%;
  max-width: 1024px;
  padding: 10px;
`;

const PageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SitePageQuery {
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
        <Footer />
      </AntLayout>
    )}
  />
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
