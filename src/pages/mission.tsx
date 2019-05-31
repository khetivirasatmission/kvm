import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/PageLayout";
import SEO from "../components/seo";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";

export default () => (
  <PageLayout>
    <SEO title="Mission" />

    <h1>About Us</h1>

    <Card title="Our mission" bordered={false}>
      <p>
        The mission of KVM, forged by the pain and agony caused by the Green
        Revolution, is founded by a conviction and commitment for voluntary
        work. The formation of KVM has evolved as a result of constant efforts
        and dedication to re-vitalize our society; to make our motherland
        prosper with imperishable abundance and sustainable life systems. KVM is
        obligated to the future generations of Punjab to protect its ecology. We
        are a civil-society movement with a deep compassion for Nature as a
        Whole; our concerns include ecological sustainability & environmental
        health, and the safe food and livelihoods nature can provide especially
        for those who are socially and economically marginalized.
      </p>
    </Card>

    <Card title="Our Vision" bordered={false}>
      <p>
        While the Green Revolution has brought economic prosperity on one hand,
        it has had seriouslydestructive effects upon the ecology of Punjab and
        the health of its people on the other.This Grain Machine has started to
        rust and the repercussions have started to show like scars on the
        landscape of this Land of Five Rivers. It is the Vision of Kheti Virasat
        Mission to apply organic farming as the appropriate remedy. It is the
        need of the hour to motivate the farmers of Punjab to gradually switch
        over to organic farming practices to save the ecology of Punjab and the
        health of its people. The situation is alarming and the signs are
        ominous. We seem to be quite close to a stage which can rightly be
        called "agriculture chaos". The time to act is now. Given the present
        circumstances, organic farming practices and sustainable technologies--
        those that are in-tune with nature and its ecosystems--are perhaps the
        only alternatives which will help the people of Punjab to emerge from
        this agricultural, ecological, economic and civilizational crisis.
      </p>
    </Card>

    <h2>Core Team</h2>
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
    </Row>
  </PageLayout>
);
