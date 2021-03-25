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

import k1 from "../images/kudratutsav/ku1.jpeg";
import k2 from "../images/kudratutsav/ku2.jpeg";
import k3 from "../images/kudratutsav/ku3.jpeg";
import k4 from "../images/kudratutsav/ku4.jpeg";
import k5 from "../images/kudratutsav/ku5.jpeg";
import k6 from "../images/kudratutsav/ku6.jpeg";
import k7 from "../images/kudratutsav/ku7.jpeg";
// import k3 from "../images/kudratutsav/ku3.jpeg";

const px2vw = (size, width = 1912) => `${(size / width) * 100}vw`;

const SlideWrapper = styled<any>("div")`
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: ${px2vw(717, 1912)};
  z-index: 1;
  background-image: url(${(props) => props.image});
`;
const StatisticWrapper = styled.div`
  padding: 70px;
  text-align: center;
`;

const Slide = styled<any>("div")`
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  padding: ${px2vw(40, 1912)};
  bottom: ${px2vw(40, 1912)};
  right: 0px;

  h4 {
    color: #fff;
    font-weight: 400;
    font-family: "Open Sans";
    text-transform: uppercase;
    font-size: ${px2vw(14, 1912)};
    margin-bottom: 10px;
    letter-spacing: 5px;
  }

  h1 {
    font-size: ${px2vw(64, 1912)};
    line-height: ${px2vw(70, 1912)};
    font-family: Raleway;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-style: normal;
    font-weight: 900;
    color: white;
    margin-top: -10px;
    margin-bottom: 5px;
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
    overflow: hidden;
  }

  button {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.25);
    height: ${px2vw(46, 1912)};
    // padding: ${px2vw(5, 1912)} ${px2vw(15, 1912)};
    //   box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

    span {
      color: white;
      text-transform: uppercase;
      font-size: ${px2vw(16, 1912)};
      line-height: ${px2vw(40, 1912)};
      font-weight: 400;
      font-family: "Open Sans";
      text-align: center;
      vertical-align: middle;
      display: block;
    }

    &:hover {
      background: white;
      span {
        color: black;
      }
    }
  }

  @media (min-width: 320px) {
    h4{
      font-size: ${px2vw(4, 320)};
      letter-spacing: 3px;
      font-weight: 900;
    }

    h1 {
      font-size: ${px2vw(16, 320)};
      line-height: ${px2vw(20, 320)};
    }

    button {
      height: ${px2vw(16, 320)};

      span {
        font-size: ${px2vw(6, 320)};
        line-height: ${px2vw(12, 320)};
      }
    }
  }

  @media (min-width: 768px) {
    h4{
      font-size: ${px2vw(8, 768)};
      font-weight: 400;
    }

    h1 {
      font-size: ${px2vw(40, 768)};
      line-height: ${px2vw(48, 768)};
    }

    button {
      height: ${px2vw(32, 768)};

      span {
        font-size: ${px2vw(12, 768)};
        line-height: ${px2vw(24, 768)};
      }
    }
  }

  @media (min-width: 1024px) {
    h4{
      font-size: ${px2vw(10, 1024)};
    }

    h1 {
      font-size: ${px2vw(48, 1024)};
      line-height: ${px2vw(54, 1024)};
    }

    button {
      height: ${px2vw(40, 1024)};

      span {
        font-size: ${px2vw(14, 1024)};
        line-height: ${px2vw(32, 1024)};
      }
    }
  }

  @media (min-width: 1280px) {
    h4{
      font-size: ${px2vw(12, 1280)};
    }

    h1 {
      font-size: ${px2vw(54, 1280)};
      line-height: ${px2vw(60, 1280)};
    }

    button {
      height: ${px2vw(36, 1280)};

      span {
        font-size: ${px2vw(12, 1280)};
        line-height: ${px2vw(32, 1280)};
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* <SlideWrapper image={f6}>
      <Slide>
        <h4>Revive the tradition</h4>
        <h1>Trinjan</h1>
        <Link to="/trinjan" style={{ marginRight: "10px" }}>
          <Button>Know more</Button>
        </Link>
        <Link to="/donate">
          <Button type="primary">Donate now</Button>
        </Link>
      </Slide>
    </SlideWrapper> */}

    <Carousel effect="fade" autoplay={true} dots={false}>
      <SlideWrapper image={k1}>
        <Slide>
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/kudratutsav21">
            <Button type="primary">Register now</Button>
          </Link>
        </Slide>
      </SlideWrapper>

      <SlideWrapper image={k2}>
        <Slide>
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/kudratutsav21">
            <Button type="primary">Register now</Button>
          </Link>
        </Slide>
      </SlideWrapper>

      <SlideWrapper image={k3}>
        <Slide>
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/kudratutsav21">
            <Button type="primary">Register now</Button>
          </Link>
        </Slide>
      </SlideWrapper>

      <SlideWrapper image={k4}>
        <Slide>
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/kudratutsav21">
            <Button type="primary">Register now</Button>
          </Link>
        </Slide>
      </SlideWrapper>

      <SlideWrapper image={k5}>
        <Slide>
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/kudratutsav21">
            <Button type="primary">Register now</Button>
          </Link>
        </Slide>
      </SlideWrapper>

      <SlideWrapper image={k6}>
        <Slide>
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/kudratutsav21">
            <Button type="primary">Register now</Button>
          </Link>
        </Slide>
      </SlideWrapper>

      <SlideWrapper image={k7}>
        <Slide>
          <h4>Starts 26 March, 2021</h4>
          <h1>Kudrat Utsav</h1>
          <Link to="/kudratutsav21" style={{ marginRight: "10px" }}>
            <Button>Know more</Button>
          </Link>
          <Link to="/kudratutsav21">
            <Button type="primary">Register now</Button>
          </Link>
        </Slide>
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
