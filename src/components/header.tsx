import { Link } from "gatsby";
import React from "react";

interface Props {
  children?: any;
  siteTitle: string;
}

const Header = (props: Props) => (
  <header>
    <div>
      <h1>
        <Link to="/">{props.siteTitle}</Link>
      </h1>
    </div>
  </header>
);

export default Header;
