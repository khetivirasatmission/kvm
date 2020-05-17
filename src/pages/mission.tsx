import { Card } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/seo";

export default () => (
  <PageLayout>
    <SEO title="Mission" description="" lang="en" />

    <h1>About Us</h1>

    <Card title="Who we are" bordered={false}>
      <p>
        We are the pioneers of the ‘Organic Movement' in Punjab, the state
        ruined by Green Revolution. Based at Jaitu, district Faridkot, our
        mission came into existence in late 90s as a thought process and in 2005
        as a registered charitable trust. To revive the lost glory and serenity
        of Punjab, we initially focused on the farming community, for it is the
        backbone of the state. We started ‘Mission Natural Farming’; keeping in
        mind the need to work on three essentials- Health, Environment and Safe
        food. But, shortly afterwards, we realized that Punjab is a dying
        civilization and thus we are facing a ‘Crisis of Civilization’. Thus,
        expanding our horizons, we adopted a holistic approach inclusive of
        physical, mental & spiritual health, forests, seed conservation, women
        empowerment, community culture, livelihood, ecology and resource
        management.
      </p>
      <p>
        We are bridging the gap between various stakeholders- farmers,
        consumers, experts, academicians, youngsters, women and commoners;
        providing them with a platform to interact, discuss, guide and serve
        each other.
      </p>
    </Card>
    <Card title="Our Vision" bordered={false}>
      <p>
        We shall co-create and reconnect with the pristine origins of Punjab.
        Our Land shall, once again, rejoice the prosperity consciousness and the
        culture of giving amongst naturally thriving sacred forests and
        indigenous farming practices.
      </p>
    </Card>

    <Card title="Our Mission" bordered={false}>
      <p>
        We are focused to revive and conserve natural farming practices,
        traditional and healthy food, organic clothing, traditional handicrafts,
        vernacular architecture and edible food forests in Punjab. We aim to
        save the precious seeds of wisdom and knowledge so that we can pass them
        on to the generations to come.
      </p>
    </Card>

    {/* <h2>Core Team</h2>
    <Row gutter={18}>
      <Col span={8}>
        <Card className="card-team" bordered={false} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">
            <img alt="Shri Umendra Dutt" width="100%" src={t1} />
          </div>
          <div className="custom-card">
            <h3>Shri Umendra Dutt</h3>
            <p>Executive Director</p>
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="card-team" bordered={false} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">
            <img alt="Shri Ajay Tripathi" width="100%" src={t2} />
          </div>
          <div className="custom-card">
            <h3>Shri Ajay Tripathi</h3>
            <p>
              Director of Marketing, Skill Development & Human Resource
              Development
            </p>
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="card-team" bordered={false} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">
            <img alt="Dr Amar Singh Azad" width="100%" src={t3} />
          </div>
          <div className="custom-card">
            <h3>Dr Amar Singh Azad</h3>
            <p>Director of Environmental Health Action & Research</p>
          </div>
        </Card>
      </Col>
    </Row> */}
  </PageLayout>
);
