import { Button, Carousel, Col, Row } from "antd";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import f1 from "../images/f1.jpg";
import f2 from "../images/f2.jpg";
import f3 from "../images/f3.jpg";
import f4 from "../images/f4.jpg";
import f5 from "../images/f5.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel effect="fade" autoplay={true} dots={false}>
      <div>
        <img src={f1} />
        <div className="slideWrapper">
          <div className="slide">
            <h4>Save the ecology</h4>
            <h1>Organic Farming</h1>
            <Button>Donate now </Button>
          </div>
        </div>
      </div>
      <div>
        <img src={f2} />
        <div className="slideWrapper">
          <div className="slide">
            <h4>Support the families</h4>
            <h1>Organic Kitchen Gardening</h1>
            <Button>Donate now </Button>
          </div>
        </div>
      </div>
      <div>
        <img src={f3} />
        <div className="slideWrapper">
          <div className="slide">
            <h4>Improve the literacy</h4>
            <h1>Kudrati Kheti Gurukul</h1>
            <Button>Donate now </Button>
          </div>
        </div>
      </div>
      <div>
        <img src={f4} />
        <div className="slideWrapper">
          <div className="slide">
            <h4>Support the women</h4>
            <h1>Women Action for Ecology</h1>
            <Button>Donate now </Button>
          </div>
        </div>
      </div>
      <div>
        <img src={f5} />
        <div className="slideWrapper">
          <div className="slide">
            <h4>Start a movement</h4>
            <h1>Advocacy & campaigning</h1>
            <Button>Donate now </Button>
          </div>
        </div>
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
          <Button>Learn</Button>
        </div>
      </Col>
      <Col xs={24} sm={12} lg={6} className="col-colored-2">
        <div>
          <h1>Become a volunteer</h1>
          <p>
            Join the ecological movement by associating with KVM as Volunteer,
            Intern, Supporter, Campaigner and Donor
          </p>
          <Button>Join</Button>
        </div>
      </Col>
      <Col xs={24} sm={12} lg={6} className="col-colored-3">
        <div>
          <h1>Get Involved</h1>
          <p>
            Learn more about organic farming by reading our publications and
            attending Kudrati Kisan Haats in your city
          </p>
          <Button>Media</Button>
        </div>
      </Col>
      <Col xs={24} sm={12} lg={6} className="col-colored-4">
        <div>
          <h1>Donate Now</h1>
          <p>
            Donate and contribute to a movement for ecological rejuvenation of
            Punjab and its agricultural heritage
          </p>
          <Button>Donate</Button>
        </div>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
