import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/seo";
import w1 from "../images/seedconserve/w1.jpg";
import w2 from "../images/seedconserve/w2.jpg";
import w3 from "../images/seedconserve/w3.jpg";
import Profile from "../components/Profile";
import be_kudrati from "../images/be_kudrati.jpg";

export default () => (
  <PageLayout>
    <SEO title="Design your garden" />
    <h1>Design your garden</h1>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={6} />
      <Col xs={24} md={12} lg={12}>
        <Profile image={be_kudrati} />
      </Col>
      <Col xs={24} md={12} lg={6} />
    </Row>

    <p style={{ color: "#72a230", fontSize: "18px", textAlign: "center" }}>
      <em>
        ‘In every gardener is a child, who loves to play in the dirt. In every
        child is the gardener, ready to grow.’
      </em>
    </p>
    <p>
      To nurture them both, KVM is promoting{" "}
      <strong>'Garden for Anyone Anywhere'</strong>. Be it a small patch in your
      backyard, some pots on the window sill or children’s playground, our team
      will help you to apply a bit of the creativity and innovation to grow
      food.
    </p>

    <Card title="Choose Your Garden" bordered={false}>
      <p>
        We offer complete consultancy for setting up and maintaining a garden.
        We provide you a holistic model inclusive of Organic Food, Edible
        Landscapes, Water Conservation, Composting, Waste Management, Soil
        Preparation, Pest Management, Seed Conservation and much more.
      </p>
      <p>
        Choose a garden that suits you the most. And, we will grow it Together.
      </p>

      <h4>Backyard Garden</h4>
      <p>
        If you are planning to convert the land in your backyard into a garden,
        we will help you design it. Grow a beautiful canvas of trees, herbs,
        flowers and vegetables; and invite birds, insects, butterflies and bees
        all throughout the year. The garden will be a thing of beauty and a joy
        for dinner.
      </p>

      <h4>Rooftop Garden</h4>
      <p>
        The unused roof space can be utilised to grow enough food to sustain a
        family. Plants can be grown either by building a green roof or using
        containers.
      </p>
      <p>
        We will help you plan a rooftop farm keeping into account all the
        technical details like building structure, sunlight, water, drainage,
        wind direction etc.
      </p>

      <h4>Vertical Garden</h4>
      <p>
        If not green roofs, then how about green walls! Vertical garden is the
        most in-thing these days. Living walls reduce the temperature of the
        building, filter the air and adds-on to the aesthetics of the house.
        Paint your walls green with us.
      </p>

      <h4>Windowsills and Balcony Garden</h4>
      <p>
        Even if there is no room to make an elaborated garden, you can still
        grow food. In typical urban set-ups, we offer the gardeners to grow
        microgreens, herbs and vegetables in hanging baskets, containers and on
        trellises by selecting the suitable candidates that require less space.
      </p>

      <h4>Community Garden</h4>
      <p>
        A piece of land shared by people in a locality can be developed into a
        community garden where the space, resources, labour and the produce are
        shared. Beside being a place for recreational activities, such gardens
        can become the hubs for social interaction. The culture of Giving,
        Sharing, Togetherness, Brotherhood and Harmony which is rare to be
        found, can be re-established in the communities.
      </p>

      <h4>School Garden</h4>
      <p>
        With their hands in the dirt, heads in the sun and hearts in the nature,
        children should emerge as a young gardeners. Allowing them to understand
        and appreciate how the food is grown, is their initiation into
        sustainable and natural living. We work with educational institutions to
        grow food on terraces, sidewalks and grounds with active involvement of
        students.
      </p>
    </Card>

    <Card title="Let’s Begin" bordered={false}>
      <p>Growing the garden will include two dimensions:</p>
      <ul>
        <li>
          <strong>Designing and setting-up the garden :</strong> The experts
          will help you design a customized garden with most compatible
          resources, irrigation techniques, planting materials and plant
          diversity; taking into account all the geographical and topographical
          factors.{" "}
        </li>
        <li>
          <strong>Training the gardener :</strong> The gardener will be trained
          in soil preparation composting, bio fertilizers, pest management,
          waste management, seed conservation etc. This shall happen either
          through one on one teachings or attending KVM's Organic Kitchen
          Gardening workshops at your nearest locale.
        </li>
      </ul>
      <p>
        Kindly fill the form below. And you will receive a call from our team.
      </p>

      <Row gutter={64}>
        <Col md={24} lg={24}>
          <iframe
            style={{ border: "0", width: "100%" }}
            src="https://docs.google.com/forms/d/e/1FAIpQLSedIw_WdODWVA58_cWNyqz4nKum3zTFlq7CWPz3tWs5Sh8DGw/viewform?embedded=true"
            width="640"
            height="1350"
          >
            Loading...
          </iframe>
        </Col>
      </Row>

      <h5>Note:</h5>
      <ul>
        <li>
          <small>
            Currently, we are providing our services in Punjab and Chandigarh
          </small>
        </li>
        <li>
          <small>
            Our experts will pay visits to the garden as and when required
          </small>
        </li>
        <li>
          <small>
            Our approach is flexible and varies as per the location, size and
            design of the garden
          </small>
        </li>
        <li>
          <small>
            The terms will be laid in accordance to the specific requirements of
            individuals
          </small>
        </li>
      </ul>
    </Card>
  </PageLayout>
);
