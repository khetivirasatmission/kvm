import { Button, Carousel, Col, Row } from "antd";
import { Link } from "gatsby";
import React from "react";
import { FacebookProvider, Page } from "react-facebook";
import styled from "styled-components";
import Layout from "../components/layouts/HomeLayout";
import SEO from "../components/seo";

import f1 from "../images/f1.jpg";
import f2 from "../images/f2.jpg";
import f3 from "../images/f3.jpg";
import f4 from "../images/f4.jpg";
import f5 from "../images/f5.jpg";
import f6 from "../images/trinjan-charkha.png";

import k1 from "../images/kudratutsav/ku1.png";
// import k2 from "../images/kudratutsav/ku2.png";
import k3 from "../images/kudratutsav/ku3.png";
import k4 from "../images/kudratutsav/ku4.png";
import k5 from "../images/kudratutsav/ku5.png";
import k6 from "../images/kudratutsav/ku6.png";
// import k3 from "../images/kudratutsav/ku3.jpeg";

const SlideWrapper = styled<any>("div")`
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  height: 720px;
  /* position: absolute; */
  z-index: 1;
  background-image: url(${(props) => props.image});
`;
const StatisticWrapper = styled.div`
  padding: 70px;
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* <SlideWrapper image={f6}>
      <div className="slide">
        <h4>Revive the tradition</h4>
        <h1>Trinjan</h1>
        <Link to="/trinjan" style={{ marginRight: "10px" }}>
          <Button>Know more</Button>
        </Link>
        <Link to="/donate">
          <Button type="primary">Donate now</Button>
        </Link>
      </div>
    </SlideWrapper> */}

    <Carousel effect="fade" autoplay={true}>
      <SlideWrapper image={k1}>
        <div className="slide">
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/donate">
            <Button type="primary">Donate now</Button>
          </Link>
        </div>
      </SlideWrapper>

      {/* <SlideWrapper image={k2}>
        <div className="slide">
          <h4>26-28 March 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/donate">
            <Button type="primary">Donate now</Button>
          </Link>
        </div>
      </SlideWrapper> */}

      <SlideWrapper image={k3}>
        <div className="slide">
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/donate">
            <Button type="primary">Donate now</Button>
          </Link>
        </div>
      </SlideWrapper>

      <SlideWrapper image={k4}>
        <div className="slide">
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/donate">
            <Button type="primary">Donate now</Button>
          </Link>
        </div>
      </SlideWrapper>

      <SlideWrapper image={k5}>
        <div className="slide">
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/donate">
            <Button type="primary">Donate now</Button>
          </Link>
        </div>
      </SlideWrapper>

      <SlideWrapper image={k6}>
        <div className="slide">
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/donate">
            <Button type="primary">Donate now</Button>
          </Link>
        </div>
      </SlideWrapper>

      {/* <SlideWrapper image={f6}>
        <div className="slide">
          <h4>Revive the tradition</h4>
          <h1>Trinjan</h1>
          <Link to="/trinjan" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/donate">
            <Button type="primary">Donate now</Button>
          </Link>
        </div>
      </SlideWrapper> */}

      {/* <div style={{ minHeight: "400px" }}>
        <SlideWrapper image={f1}>
          <div className="slide">
            <h4>Save the ecology</h4>
            <h1>Organic Farming</h1>
            <Link to="/organicfarmers" style={{ marginRight: "10px" }}>
              <Button>Know more</Button>
            </Link>
            <Link to="/donate">
              <Button type="primary">Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
      <div>
        <SlideWrapper image={f2}>
          <div className="slide">
            <h4>Support the families</h4>
            <h1>Organic Kitchen Gardening</h1>
            <Link to="/organickitchengardening" style={{ marginRight: "10px" }}>
              <Button>Know more</Button>
            </Link>
            <Link to="/donate">
              <Button type="primary">Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
      <div>
        <SlideWrapper image={f3}>
          <div className="slide">
            <h4>Improve the literacy</h4>
            <h1>Kudrati Kheti Gurukul</h1>
            <Link to="/kudratikhetigurukul" style={{ marginRight: "10px" }}>
              <Button>Know more</Button>
            </Link>
            <Link to="/donate">
              <Button type="primary">Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
      <div>
        <SlideWrapper image={f4}>
          <div className="slide">
            <h4>Support the women</h4>
            <h1>Women Action for Ecology</h1>
            <Link to="/wae" style={{ marginRight: "10px" }}>
              <Button>Know more</Button>
            </Link>
            <Link to="/donate">
              <Button type="primary">Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
      <div>
        <SlideWrapper image={f5}>
          <div className="slide">
            <h4>Start a movement</h4>
            <h1>Advocacy &amp; campaigning</h1>
            <Link to="/advocacy" style={{ marginRight: "10px" }}>
              <Button>Know more</Button>
            </Link>
            <Link to="/donate">
              <Button type="primary">Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div>
      <div>
        <SlideWrapper image={f6}>
          <div className="slide">
            <h4>Revive the tradition</h4>
            <h1>Trinjan</h1>
            <Link to="/trinjan" style={{ marginRight: "10px" }}>
              <Button>Know more</Button>
            </Link>
            <Link to="/donate">
              <Button type="primary">Donate now</Button>
            </Link>
          </div>
        </SlideWrapper>
      </div> */}
    </Carousel>

    <Row>
      <Col xs={24} md={12} xl={6} className="col-colored-1">
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
      <Col xs={24} md={12} xl={6} className="col-colored-2">
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
      <Col xs={24} md={12} xl={6} className="col-colored-1">
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
      <Col xs={24} md={12} xl={6} className="col-colored-2">
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

    {/* <Row>
      <Col xs={24} sm={12} lg={6}>
        <StatisticWrapper>
          <Statistic title="Active Users" value={112893} />
        </StatisticWrapper>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <StatisticWrapper>
          <Statistic title="Active Users" value={112893} />
        </StatisticWrapper>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <StatisticWrapper>
          <Statistic title="Active Users" value={112893} />
        </StatisticWrapper>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <StatisticWrapper>
          <Statistic title="Active Users" value={112893} />
        </StatisticWrapper>
      </Col>
    </Row> */}
    <Row>
      <Col xs={24} lg={8}>
        <div className="">
          <iframe
            style={{ border: "0", padding: "10px" }}
            width="100%"
            height="400"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/238237196&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </div>
      </Col>
      <Col xs={24} lg={10}>
        <div className="video-responsive">
          <iframe
            style={{ border: "0", padding: "10px" }}
            width="800"
            height="400"
            src="https://www.youtube.com/embed/videoseries?list=PLKMOgZ4mfxOvPSj2bxCYxG752mfTvG1o-"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen={true}
          />
        </div>
      </Col>
      <Col xs={24} lg={6}>
        <div className="">
          <div style={{ border: "0", padding: "10px" }}>
            <FacebookProvider appId="195658071778073">
              <Page
                href="https://www.facebook.com/khetivirasatmissionjaitu"
                tabs="timeline"
                showFacepile={true}
                smallHeader={true}
                adaptContainerWidth={true}
                width={460}
                height={380}
              />
            </FacebookProvider>
          </div>
        </div>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
