import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import e1 from "../images/e1.jpg";
import e2 from "../images/e2.jpg";

export default () => (
  <PageLayout>
    <SEO title="Publications" />

    <h1>Publications</h1>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={12}>
        <Profile
          designation="Students from The School, Chennai at Bhotna"
          image={e1}
        />
      </Col>
      <Col xs={24} md={12} lg={12}>
        <Profile
          designation="Students from Lady Shri Ram College for Women"
          image={e2}
        />
      </Col>
    </Row>

    <Card
      title="Educational Exposure Visits for Organic Farming"
      bordered={false}
    >
      <p>
        KVM also offers exclusive exposure visits and enlightening trips to
        students from educational institutes. For non-students individuals who
        want to experience joy of working in Natural fields, they can have Short
        Stay Experience with Natural Farmers and learn practical information
        about organic farming.
      </p>

      <p>
        Students from educational institutions and people with ecological
        perspective from civil society clubs and organization can have exposure
        visits and educational trips in various Organic / Natural farms of
        farmers associated with KVM. This will give first hand personal
        experience to know genuine issues of natural farming and an opportunity
        to learn organic farming in natural and organic farms which are
        authentic Open learning schools in real terms. These farms-cum-open
        schools will provide prospect to understand organic farming techniques,
        the farmers’ science behind these technologies, different methods to
        renovate ecology and farm-ecosystem, time-honored wisdom of farmers and
        traditional food heritage.
      </p>
      <p>
        Non-students can have different kind of learning openings in form of
        short stay-in with farmers. These Ecological-learners will work as farm
        assistants in the fields and shall work along with farmer. Thus they
        will experience the pleasure of being one with nature and growing safe
        food. Moreover, this will be a chance to become part of the intricate
        web of nature and to feel compassion for ones’ ecological surroundings.
      </p>
    </Card>
  </PageLayout>
);
