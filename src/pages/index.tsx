import { Button, Carousel, Col, Row } from "antd";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import f1 from "../images/f1.jpg";
import f2 from "../images/f2.jpg";
import f3 from "../images/f3.jpg";
import f4 from "../images/f4.jpg";
import f5 from "../images/f5.jpg";

const SlideWrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  height: 700px;
  /* position: absolute; */
  z-index: 1;
  background-image: url(${props => props.image});
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel effect="fade" autoplay={true}>
      <div style={{ minHeight: "400px" }}>
        {/* <img src={f1} /> */}
        <SlideWrapper image={f1}>
          <div className="slide">
            <h4>Save the ecology</h4>
            <h1>Organic Farming</h1>
            <Link to="/donate">
              <Button>Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
      <div>
        {/* <img src={f2} /> */}
        <SlideWrapper image={f2}>
          <div className="slide">
            <h4>Support the families</h4>
            <h1>Organic Kitchen Gardening</h1>
            <Link to="/donate">
              <Button>Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
      <div>
        {/* <img src={f3} /> */}
        <SlideWrapper image={f3}>
          <div className="slide">
            <h4>Improve the literacy</h4>
            <h1>Kudrati Kheti Gurukul</h1>
            <Link to="/donate">
              <Button>Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
      <div>
        {/* <img src={f4} /> */}
        <SlideWrapper image={f4}>
          <div className="slide">
            <h4>Support the women</h4>
            <h1>Women Action for Ecology</h1>
            <Link to="/donate">
              <Button>Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
      <div>
        {/* <img src={f5} /> */}
        <SlideWrapper image={f5}>
          <div className="slide">
            <h4>Start a movement</h4>
            <h1>Advocacy &amp; campaigning</h1>
            <Link to="/donate">
              <Button>Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
    </Carousel>

    <Row>
      <Col xs={24} sm={12} lg={6} className="col-colored-1">
        <div>
          <h1>Save the planet</h1>
          <p>
            Promote healthy food produced by organic farming and contribute to
            the ecological balance
          </p>
          <Button>
            <Link to="/education">Learn</Link>
          </Button>
        </div>
      </Col>
      <Col xs={24} sm={12} lg={6} className="col-colored-2">
        <div>
          <h1>Become a volunteer</h1>
          <p>
            Join the ecological movement by associating with KVM as Intern,
            Supporter, Campaigner and Donor
          </p>
          <Button>
            <Link to="/volunteer">Join</Link>
          </Button>
        </div>
      </Col>
      <Col xs={24} sm={12} lg={6} className="col-colored-3">
        <div>
          <h1>Get Involved</h1>
          <p>
            Learn more about organic farming from our publications and attend
            Kudrati Kisan Haats in your city
          </p>
          <Button>
            <Link to="/publications">Publications</Link>
          </Button>
        </div>
      </Col>
      <Col xs={24} sm={12} lg={6} className="col-colored-4">
        <div>
          <h1>Donate Now</h1>
          <p>
            Donate and contribute to a movement for ecological rejuvenation of
            Punjab and its agricultural heritage
          </p>
          <Button>
            <Link to="/donate">Donate</Link>
          </Button>
        </div>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
