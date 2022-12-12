import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "gatsby";

import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";

import f1 from "../../images/farmers/gurmeet-singh.jpg";
import f2 from "../../images/farmers/amarjeet-sharma.jpg";
import f3 from "../../images/farmers/ashish-ahuja.jpg";
import f4 from "../../images/farmers/avtar-singh.jpg";
import f5 from "../../images/farmers/gagan-singh.jpg";
import f6 from "../../images/farmers/gaurav-sahai.jpg";
import f7 from "../../images/farmers/gujant-singh.jpg";
import f8 from "../../images/farmers/manjeet-singh.jpg";
import f9 from "../../images/farmers/gurtej-singh.jpg";
import f10 from "../../images/farmers/jarnail-majhi.jpg";
import f11 from "../../images/farmers/kamaljeet-hayer.jpg";
import f12 from "../../images/farmers/madan-lal.jpg";
import f13 from "../../images/farmers/nirmal-singh.jpg";
import f14 from "../../images/farmers/ravdeep-singh.jpg";
import f15 from "../../images/farmers/satinder-singh.jpg";
import f16 from "../../images/farmers/sher-singh.jpg";
import f17 from "../../images/farmers/swarn-singh.jpg";
import f18 from "../../images/farmers/vinod-jyani.jpg";
import f19 from "../../images/farmers/jaspal-kaur.jpg";
import f20 from "../../images/farmers/jaspreet-kaur.jpg";
import f21 from "../../images/farmers/sukhjeet-kaur.jpg";
import f22 from "../../images/farmers/sukhpreet-kaur.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Organic Farmers</h1>

      <Row gutter={18}>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/jaspalkaur">
            <Profile designation="Jaspal Kaur" image={f19} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/jaspreetkaur">
            <Profile designation="Jaspreet Kaur" image={f20} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/sukhjeetkaur">
            <Profile designation="Sukhjeet Kaur" image={f21} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/sukhpreetkaur">
            <Profile designation="Sukhpreet Kaur" image={f22} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/gurmeetbhawalpur">
            <Profile designation="Gurmeet Bhawalpur" image={f1} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/amarjeetsharma">
            <Profile designation="Amarjeet Sharma" image={f2} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/ashishahuja">
            <Profile designation="Aashish Ahuja" image={f3} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/avtarsingh">
            <Profile designation="Avtar Singh" image={f4} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/gagansingh">
            <Profile designation="Gagan Singh" image={f5} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/gauravsahai">
            <Profile designation="Gaurav Sahai" image={f6} />
          </Link>
        </Col>

        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/gujantmanjeet">
            <Profile designation="Gujant Singh" image={f7} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/gujantmanjeet">
            <Profile designation="Manjeet Singh" image={f8} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/gurtejsingh">
            <Profile designation="Gurtej Singh" image={f9} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/jarnailmajhi">
            <Profile designation="Jarnail Majhi" image={f10} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/kamaljeethayer">
            <Profile designation="Kamaljeet Hayer" image={f11} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/madanlal">
            <Profile designation="Master Madan Lal" image={f12} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/nirmalsingh">
            <Profile designation="Nirmal Singh" image={f13} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/ravdeepsingh">
            <Profile designation="Ravdeep Singh" image={f14} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/satindersingh">
            <Profile designation="Satinder Singh" image={f15} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/shersingh">
            <Profile designation="Sher Singh" image={f16} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/swarnsingh">
            <Profile designation="Swarn Singh" image={f17} />
          </Link>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Link to="/organicfarmers/vinodjyani">
            <Profile designation="Vinod Jyani" image={f18} />
          </Link>
        </Col>
      </Row>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Organic farmers" />;
