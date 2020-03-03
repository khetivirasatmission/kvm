import { Card } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/seo";

export default () => (
  <PageLayout>
    <SEO title="Mission" description="" lang="en" />

    <h1>About Us</h1>

    <Card title="Our mission" bordered={false}>
      <p>
        KVM’s mission is to transition the society towards nature-aligned
        lifestyle.{" "}
      </p>
      <p>
        KVM is forged by the pain and agony caused by the Green Revolution and
        industrialisation for our day-to-day needs. KVM has evolved as a result
        of constant efforts and dedication to re-vitalize our society; to make
        our ecology prosper with imperishable abundance by providing holistic
        transformation to live natural lifestyle. KVM is obligated to the future
        generations to protect its ecology.
      </p>
    </Card>

    <Card title="Our Vision" bordered={false}>
      <p>
        KVM’s vision is to inspire society towards natural living. Green
        Revolution and industrialization has brought economic prosperity but it
        had seriously destructive effects upon the ecology and people’s health.
        It is the need of the hour to inspire the society to switch over to
        natural living (food forests, natural building and natural lifestyle)
        practices. The situation is alarming and the signs are ominous. Given
        the present circumstances, those that are in-tune with nature are the
        only alternatives.
      </p>
    </Card>

    <Card title="Work at grassroot level" bordered={false}>
      <p>
        Kheti Virasat Mission is committed to protecting farmers’ right to land,
        income security, good livelihood &amp; agriculture sovereignty as well
        as protecting consumers’ right to safe and healthy food. KVM recognizes
        that in order to achieve these goals, we must put the health of the
        ecosystem . KVM is working at the grassroots with decentralized
        participatory methods covering the vast arenas of sustainable
        agriculture, conservation of ecology and natural resources,
        environmental health, cultural aspect of ecology and other issues
        related to globalization, livelihood, environmental and social justice.
        By involving the very first stakeholders-- the farmers, especially the
        most marginalized-- KVM had undertaken various activities to enhance
        their capacities, enabling them to undertake the endeavor of sustainable
        development and sustainable use of natural resources. KVM has a dream to
        make farmers, especially the small and marginal farmers, debt-free and
        living within a non-exploitative system; self-reliant while nurturing
        their genetic resources and conserving their knowledge system.
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
