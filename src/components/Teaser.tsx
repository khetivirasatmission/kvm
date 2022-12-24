import * as React from "react";
import styled from "styled-components";
import { Button, Carousel, Col, Row } from "antd";
import { Link } from "gatsby";

import lunch from "../images/press/lunch.png";
import jeevamrit from "../images/press/jeevamrit.png";
import beej from "../images/press/beej.jpg";
import rambabu from "../images/press/rambabu.png";
import organicfarmermarket from "../images/press/organicfarmermarket.jpg";
import workshop from "../images/press/workshop.jpg";
import aahararogya from "../images/press/aahaar-arogya.jpg";

const px2vw = (size, width = 1912) => `${(size / width) * 100}vw`;

const SlideWrapper = styled<any>("div")`
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: ${px2vw(420, 1912)};
  z-index: 1;
  background-image: url(${(props) => props.image});
`;

const Slide = styled<any>("div")`
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  padding: ${px2vw(6, 1912)} ${px2vw(8, 1912)};
  bottom: 0;
  right: 0px;

  h4 {
    color: #fff;
    font-weight: 500;
    font-family: "Open Sans";
    font-size: ${px2vw(14, 1912)};
    margin: 5px;
    letter-spacing: 3px;
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
    h4 {
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
    h4 {
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
    h4 {
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
    h4 {
      font-size: ${px2vw(10, 1280)};
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

const Teaser: React.FC = () => (
  <Carousel effect="fade" autoplay={true} dots={false}>
    <SlideWrapper image={lunch}>
      <Slide>
        <a
          href="https://www.tribuneindia.com/news/chandigarh/include-millets-in-daily-diet-chandigarh-administrator-456827"
          target="_blank"
          rel="noopener norefferer"
        >
          <h4>
            Punjab Governor and UT Administrator Banwarilal Purohit launches
            International Year of Millets 2023 at Raj Bhawan
          </h4>
        </a>
      </Slide>
    </SlideWrapper>
    <SlideWrapper image={jeevamrit}>
      <Slide>
        <a
          href="https://www.tribuneindia.com/2009/20090207/saturday/main1.htm"
          target="_blank"
          rel="noopener norefferer"
        >
          <h4>
            Jeevamrit - an organic replacement for fertilizers for sustainable
            farming
          </h4>
        </a>
      </Slide>
    </SlideWrapper>
    <SlideWrapper image={beej}>
      <Slide>
        <a
          href="https://www.tribuneindia.com/2009/20090207/saturday/main1.htm"
          target="_blank"
          rel="noopener norefferer"
        >
          <h4>Amarjit Sharma at the seed bank at Chaina village, Bathinda</h4>
        </a>
      </Slide>
    </SlideWrapper>
    <SlideWrapper image={rambabu}>
      <Slide>
        <a
          href="https://india.postsen.com/local/71112.html"
          target="_blank"
          rel="noopener norefferer"
        >
          <h4>
            Live kitchen session by Millets Chef Rambabu at Chandigarh Institute
            of Hotel Management
          </h4>
        </a>
      </Slide>
    </SlideWrapper>
    <SlideWrapper image={organicfarmermarket}>
      <Slide>
        <a
          href="https://www.thebetterindia.com/226770/unjab-organic-farming-revolution-kheti-virasat-mission-umendra-dutt-india-nor41/"
          target="_blank"
          rel="noopener norefferer"
        >
          <h4>
            Organic Farmers' Market organized by KVM in different regions of
            Punjab
          </h4>
        </a>
      </Slide>
    </SlideWrapper>
    <SlideWrapper image={workshop}>
      <Slide>
        <a
          href="https://www.thebetterindia.com/226770/unjab-organic-farming-revolution-kheti-virasat-mission-umendra-dutt-india-nor41/"
          target="_blank"
          rel="noopener norefferer"
        >
          <h4>
            KVM organizes farming workshops to educate on organic farming
            techniques and practices
          </h4>
        </a>
      </Slide>
    </SlideWrapper>

    <SlideWrapper image={aahararogya}>
      <Slide>
        <a
          href="https://timesofindia.indiatimes.com/entertainment/events/chandigarh/initiating-the-international-year-of-the-millets-2023-from-punjab/articleshow/92344720.cms?from=mdr"
          target="_blank"
          rel="noopener norefferer"
        >
          <h4>Aahaar Se Arogya - an evening with Dr. Khader Vali on Millets</h4>
        </a>
      </Slide>
    </SlideWrapper>
  </Carousel>
);

export default Teaser;
