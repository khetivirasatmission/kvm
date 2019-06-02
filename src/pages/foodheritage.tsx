import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import fh1 from "../images/fh1.png";
import okg2 from "../images/okg2.jpg";

export default () => (
  <PageLayout>
    <SEO title="Revival of Food Heritage" />

    <h1>Revival of Food Heritage</h1>

    <Row gutter={18}>
      <Col xs={24} md={6} lg={6} />
      <Col xs={24} md={12} lg={12}>
        <Profile designation="" image={fh1} />
      </Col>
      <Col xs={24} md={6} lg={6} />
    </Row>

    <blockquote>Food is not only a food but also a medicine</blockquote>

    <Card title="Serving Traditional Punjabi Food" bordered={false}>
      <p>
        This is a informal group of 10 ladies in Bhotna village in Barnala
        District. This group provides services of Punjabi Traditional Food.
        Purpose of this group is to revive not only traditional Punjabi food but
        also nutritious and health food.
      </p>
    </Card>

    <Card title="Relish dishes from the past" bordered={false}>
      <p>Menu is basically based on traditional Punjabi items that include -</p>
      <ul>
        <li>Makki di Roti-Sarson Ka saag</li>
        <li>Different Saags- Chaulai Tandla, Bhakhra, Itt-Sitt</li>
        <li>Kheer-Mal-poore</li>
        <li>Rabri</li>
        <li>Millets pkaude</li>
        <li>Millet based different Kheers (Makki, Sama)</li>
        <li>DifferentTraditional Roties </li>
        <li>Different Chatnies</li>
        <li>Millet Based Halwa</li>
        <li>Snacks</li>
        <li>
          Diffrent Sharbats- Falsa, Pudina, Gudh, Thandiyai, Sharbat-e-Jigar and
          many more
        </li>
      </ul>

      <p>(Menu will be changed according to the season)</p>
    </Card>
  </PageLayout>
);
