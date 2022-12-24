import * as React from "react";
import styled from "styled-components";
import { Button, Carousel, Col, Row } from "antd";
import { Link } from "gatsby";

import k4 from "../images/aaharseaarogya/ku6.png";

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

const Slideshow = () => (
  <Carousel effect="fade" autoplay={true} dots={false}>
    <SlideWrapper image={k4}>
      <Slide>
        <h4>Starts 19 Sep, 2022</h4>
        <h1>Aahaar Se Arogya</h1>
        <Link to="/aahaarsearogya" style={{ marginRight: "10px" }}>
          <Button>Know more</Button>
        </Link>
        {/* <Link to="/aarogyaseaahar">
            <Button type="primary">Register now</Button>
          </Link> */}
      </Slide>
    </SlideWrapper>
  </Carousel>
);

export default Slideshow;
