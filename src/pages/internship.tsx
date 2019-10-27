import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import e2 from "../images/e2.jpg";
import i1 from "../images/maya.jpg";

export default () => (
  <PageLayout>
    <SEO title="Internship" />

    <h1>Internship</h1>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={12}>
        <Profile
          designation="Maya Sikand from Brown University, America"
          image={i1}
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
      title="National & International Internships in Organic Farming and Environmental Activism"
      bordered={false}
    >
      <p>
        For students from India and other countries who want to explore social
        action for ecology, natural farming and various issues related to
        environmental activism, KVM offers internships for short and long
        duration.
      </p>

      <p>
        KVM offers internships in different ecological interventions and organic
        farming to the students from India and abroad with its selected Guru
        Organic Farmers at different locations in Punjab. KVM welcomes students
        with high motivation and concern for ecology, to join as an internee to
        practice natural farming as trainees working with Organic Farmers and to
        learn organic farming. KVM will provide proper guidance, exposure and
        scope projects with organic farmers and ecological campaigners. Our hope
        is that these interns will adopt organic farming as part of their world
        view and mission to serve humanity.
      </p>
      <p>
        KVM has the largest network of organic / natural farmers in Punjab.
        These farmers are great scientists indeed. They are soil scientists,
        entomologist, biologists, and ecologists, seed keepers - plant breeders
        and persons saturated with traditional wisdom and compassion for nature
        at one time. Internees will get personalized supervision from these
        farmers.
      </p>
      <p>
        Interns will get a wide range exposure of different variants of natural
        / organic farming technologies and its different social dimension. These
        interns will allocate different tasks and venture in organic farms with
        an expectation that they will do assigned work with high integrity and
        sincerity. They may work alone or in a team of interns or volunteers, or
        side-by-side with community members. They can share and exchange
        information and their experiences about natural farming, needs and
        benefits of natural farming, health risks of over-usage of chemical
        fertilizers and insecticide sprays.
      </p>

      <p>
        Experiences of Our Internees
        <ul>
          <li>Trent Brown, from University of Wollongong, Australia</li>
          <li> Swarup Datta, PhD, Delhi School of Economics, New Delhi</li>
        </ul>
      </p>
    </Card>
  </PageLayout>
);
