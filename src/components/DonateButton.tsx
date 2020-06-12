import { Button } from "antd";
import React from "react";
import { Link } from "gatsby";

const Donate = () => (
  <Link to="/donate" style={{ float: "right" }}>
    <Button type="primary" size="large">
      Donate now
    </Button>
  </Link>
);

Donate.propTypes = {};

export default Donate;
