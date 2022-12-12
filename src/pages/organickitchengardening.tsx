import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "gatsby";
import Profile from "../components/Profile";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/Seo";
import okg1 from "../images/okg1.jpg";
import of1 from "../images/of1.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Organic Kitchen Gardening</h1>

      <p style={{ fontSize: "18px", color: "#72a230" }}>
        <strong>G</strong>row your own Safe Food
        <br />
        <strong>A</strong>bolish the Hospital bills
        <br />
        <strong>R</strong>estore Nature in the Backyard
        <br />
        <strong>D</strong>iscover the journey of plants from Pot to Platter
        <br />
        <strong>E</strong>at fresh and Healthy
        <br />
        <strong>N</strong>urture your body, mind & soul with Living Food
      </p>

      <Row gutter={18}>
        <Col xs={24} md={12} lg={12}>
          <Profile designation="" image={okg1} />
        </Col>
        <Col xs={24} md={12} lg={12}>
          <Profile designation="" image={of1} />
        </Col>
      </Row>

      <Card title="Introduction" bordered={false}>
        <p>
          A garden requires patient labour and attention. Plants do not grow
          merely to satisfy our ambitions. They thrive because someone had
          nurtured them will love and compassion. If we make such connection
          with the Plants, they will take care of us and cure us.{" "}
          <em>
            They will make right diagnosis and will prepare the customized
            remedy for the gardener by blending the Energies from the Universe
            and the Earth.
          </em>
        </p>
        <p>
          The Garden, thus, becomes your playground, your painting, your
          pharmacy, your provider and what not!
        </p>
      </Card>

      <Card title="Our Initiatives" bordered={false}>
        <p>
          Through Kitchen gardens, we are connecting with the non-farming
          community - urban folks, women, youngsters & students; who would have
          otherwise been alienated from the entire organic movement.
        </p>

        <h4>Kitchen Gardening Workshops</h4>
        <p>
          We conduct regular workshops on setting-up organic kitchen gardens in
          villages, educational institutes and urban areas. Our workshops
          answer:
          <br />
          <em>Why</em> to grow?
          <br />
          <em>What</em> to grow?
          <br />
          <em>When</em> to grow?
          <br />
          <em>Where</em> to grow?
          <br />
          <em>How</em> to grow?
          <br />
        </p>

        <h4>Design your Garden</h4>
        <p>
          Under the flagship of our movement – <strong>Be Kudrati</strong>, we
          provide technical assistance and expertise to start Organic Kitchen
          Gardens in varied setups, ranging from urban household to educational
          institutions.
        </p>
        <p>
          Put your skates on and{" "}
          <Link to="/designyourgarden">get a Garden designed</Link> for
          yourself!
        </p>

        <h4>Project Kitchen Garden</h4>
        <p>
          With the support of Association for India's Development (AID), we
          started the ‘
          <strong>Women Action for Organic Farming and Rural Livelihood</strong>
          ’ in 2011. Under this umbrella, we are training rural women to
          establish Organic Kitchen Gardens (inclusive of vegetables, fruits,
          medicinal plants and mushroom cultivation) in their backyards. Started
          from 4 villages in 2011, it has now spread across{" "}
          <strong>60 villages</strong> with <strong>6,000 women</strong>{" "}
          involved.
        </p>
        <p>
          <Link to="/projectkitchengardens">Click here</Link> to know more about
          our initiative.
        </p>

        <h4>Kitchen Garden for Students</h4>
        <p>
          Under the guidance of KVM, various educational institutions have set
          up Kitchen Gardens to involve students. Our experts pay their regular
          visits to interact with students and give their technical advice for
          the Kitchen Gardens.
        </p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Organic Kitchen Gardening" />;
