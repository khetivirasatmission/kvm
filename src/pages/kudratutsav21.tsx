import { Button, Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import e1 from "../images/kudratutsav/kudratutsav21.jpeg";

const registrationLink = "https://forms.gle/uQqrhTgh33BJh5oi9";

export default () => (
  <PageLayout>
    <SEO title="Kudrat Utsav 2021" />

    <div>
      <h1>
        Kudrat Utsav 2021
        <Button
          type="primary"
          size="large"
          href={registrationLink}
          target="_blank"
          style={{ float: "right" }}
        >
          Register
        </Button>
      </h1>
    </div>

    <Row gutter={18}>
      <Col xs={24}>
        <Profile designation="" image={e1} />
      </Col>
    </Row>

    <Row gutter={18} justify="center">
      <Button
        type="primary"
        size="large"
        href={registrationLink}
        target="_blank"
        style={{ margin: "auto", textAlign: "center" }}
      >
        Register now
      </Button>
    </Row>

    <Card title="KUDRAT UTSAV - 21" bordered={false}>
      <p>Kudrat Utsav 2021 is a festival dedicated to </p>
      <ul style={{ listStyle: "square inside none" }}>
        <li>Organic Farming & Food</li>
        <li>Holistic Health & Nutrition</li>
        <li>Sustainability & Ecology</li>
        <li>Tradition & Culture</li>
      </ul>
      <p>
        The event is being organized from 26th to 28th, March 2021 at Maharaja
        Ranjit Singh Punjab Technical University, Bathinda by Kheti Virasat
        Mission in association with Maharaja Ranjit Singh Punjab Technical
        University, Central University of Punjab and Bathinda Management
        Association
      </p>
    </Card>

    <Card title="Objectives" bordered={false}>
      <p>
        <ul style={{ listStyle: "square inside none" }}>
          <li>To introduce people to a sustainable food system</li>
          <li>
            To build a collaboration between Organic Farmers and Consumers
          </li>
          <li>To promote Millet Cultivation , Millet Diet and Food</li>
          <li>
            To showcase the work done by our farmers, specially in Millets
            cultivation
          </li>
          <li>
            To promote Medicinal Plant cultivation , incorporating Medicinal
            Plants in Kitchen Gardening and Educate people about traditional
            knowledge systems and practices.
          </li>
          <li>To promote Sustainable and Ecological Cotton Cultivation</li>
          <li>
            To make people understand the importance of Holistic Health through
            holistic diet and organic food
          </li>
          <li>
            To celebrate our weavers and artisans who make traditional cotton
            clothing.
          </li>
          <li>To create an joyful environment</li>
          <li>
            To Connect Youth in Organic Farming and Nature Oriented Activities
          </li>
          <li>
            To create a system for transferring our traditional wisdom to the
            younger generation
          </li>
          <li>
            To generate future opportunities for the younger generation in the
            field of Organic Farming, Holistic Health and other Nature oriented
            fields.
          </li>
        </ul>
      </p>
    </Card>
    <Card title="Activities" bordered={false}>
      <p>
        Keeping the festival objectives in perspective, following activities
        will be part of the Utsav.
        <ul style={{ listStyle: "square inside none" }}>
          <li>Organic Millet Food Festival Workshops</li>
          <li>Desi Seed Festival</li>

          <li>Kitchen Gardening Workshop</li>
          <li>Lok Swasthye Prampra - Talks on Holistic Health</li>
          <li>
            Holistic Health Consultation by Dr Khadar Wali / Dr. Azad and Others
          </li>
          <li>
            Discussions on
            <ol
              style={{
                listStyle: "lower-roman inside none",
                paddingLeft: "20px",
              }}
            >
              <li>Medicinal Plants In Farming / Organic Kitchen Gardening</li>
              <li>
                Ecological Agriculture Practices specially Crop residue
                management
              </li>
              <li>Punjab Millet Campaign</li>
            </ol>
          </li>

          <li>
            Farmers Workshops on
            <ol
              style={{
                listStyle: "lower-roman inside none",
                paddingLeft: "20px",
              }}
            >
              <li>Millet Cultivation</li>
              <li>Organic Cotton Cultivation</li>
              <li>Ecological methods of Paddy Sowing</li>
              <li>Medicinal Plant Cultivation</li>
              <li>Building Marketing Avenues of Organic Produce</li>
              <li>FPO Formation and Management</li>
            </ol>
          </li>
          <li>Kisan Haat / farmer stalls</li>
          <li>Farmers Consultation</li>

          <li>
            Competitions
            <ol
              style={{
                listStyle: "lower-roman inside none",
                paddingLeft: "20px",
              }}
            >
              <li>Quiz</li>
              <li>Rangoli</li>
              <li>On-the Spot Painting</li>
            </ol>
          </li>

          <li>
            Exhibitions
            <ol
              style={{
                listStyle: "lower-roman inside none",
                paddingLeft: "20px",
              }}
            >
              <li>Journey of KVM</li>
              <li>Miracle Millets</li>
              <li>Organic Farming Techniques</li>
              <li>Environmental Health</li>
              <li>Holistic Health</li>
              <li>Pest Literacy</li>
              <li>Medicinal Plants</li>
              <li>Lok Swasthye Prampra</li>
              <li>Ecological Straw Management</li>
              <li>Organic Kitchen Gardening</li>
              <li>Fruit and Food Forest</li>
              <li>Trinjan - Rural Artisans of Punjab</li>
              <li>Live Demonstrations - Trinjan weavers and artisans</li>
            </ol>
          </li>
          <li>Cultural Evening</li>
          <li>Movie screenings</li>
        </ul>
      </p>
    </Card>
  </PageLayout>
);
