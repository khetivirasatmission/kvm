import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import ukg1 from "../images/ukg1.jpg";
import ukg2 from "../images/ukg2.jpg";
import be_kudrati from "../images/be_kudrati.jpg";

export default () => (
  <PageLayout>
    <SEO title="Urban Farming & Kitchen Gardening" />

    <h1>Urban Farming &amp; Kitchen Gardening</h1>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={12}>
        <Profile designation="Urban Kitchen Garden Setup" image={ukg1} />
      </Col>
      <Col xs={24} md={12} lg={12}>
        <Profile
          designation="Kitchen Gardening Workshop at Mohali"
          image={ukg2}
        />
      </Col>
    </Row>

    <Card title="Be Kudrati" bordered={false}>
      <p>
        Be Kudrati is an initiative by KVM towards Environment, Safe food &
        Organic Kitchen Gardening in Chandigarh! It is an initiative to
        encourage, teach and help our citizens to have organic kitchen gardening
        to enjoy poison free food. It is an initiative towards social
        responsibility to promote better health in Chandigarh. ‘Be kudrati’ is a
        team work by the citizens of Chandigarh themselves who relate and
        promote the vision of KVM and understand the urgent need and requirement
        for our immediate action towards our food, health and environment.
      </p>

      <Row gutter={18}>
        <Col xs={24} md={12} lg={6} />
        <Col xs={24} md={12} lg={12}>
          <Profile image={be_kudrati} />
        </Col>
        <Col xs={24} md={12} lg={6} />
      </Row>

      <p>
        Our Vision is to provide and make available authenticated Organic
        Produce Directly from Farmers to Consumes by providing them a platform
        which is known as "Kissan Haat" and to make Chandigarh ‘City Beautiful’
        to be the first ‘City of Organic Kitchen Gardens’ in India. To create a
        platform for the city, which is full of citizens who are aware of their
        rights for poison free food and have their attentive approach towards
        it. Today more and more people are getting health conscious and
        awareness is spreading very fast.
      </p>
    </Card>
    <Card title="Urban Kitchen Gardening" bordered={false}>
      <p>
        We want to share the knowledge of Organic Kitchen Gardening and its
        benefits. We will help you to transform your existing Kitchen Garden to
        Organic Kitchen Garden or even plan a new one.{" "}
      </p>
    </Card>
    <Card title="Design a Garden" bordered={false}>
      <p>
        Don’t worry even if you have a terrace or small balcony, we create! Help
        you set up your own Organic Kitchen Garden while sharing the knowledge
        of: Organic Lifestyle, Water Conservations, Poison Free Food, Making
        Compost, Waste Management, Soil Preparation, Plant Growth Promoters,
        Understand & Managing Pests/Insects, Terrace Gardening and Vertical
        Gardening. (Trust us it is very easy!)
      </p>
    </Card>
    <Card title="Design a Farm" bordered={false}>
      <p>
        Help you develop your Organic Farm while sharing the knowledge of:
        Organic Lifestyle, Water Conservations, Poison Free Food, Making
        Compost, Waste Management, Soil Preparation, Plant Growth Promoters,
        Understand & Managing Pests/Insects.
      </p>
    </Card>

    <Card title="Organic Farmers Market" bordered={false}>
      <p>
        We organise "Kissan Haats" a platform where farmers directly interact
        with consumers and sell their organic produce
      </p>
    </Card>

    <Card title="Awareness Generation" bordered={false}>
      <p>
        Encourage and Educate in Interested Schools, Colleges, Institutes,
        Health Clubs, Resident Welfare Associations and Societies. Even to have
        Model Kitchen Gardens for better learning and understanding. Workshops
        and Field Schools for everyone.
      </p>
    </Card>

    <Card title="Helpline" bordered={false}>
      <p>
        Help you to design and conceptualize and even provide support later. We
        will help you set up Bird House. A birdhouse here, a birdhouse there and
        a birdhouse everywhere in Chandigarh! Don’t hesitate! We do everything
        for you! You just make the choice of a Poison Free Life for you and your
        family!
      </p>
    </Card>
  </PageLayout>
);
