import { Card, Col, Row, Table } from "antd";
import React from "react";
import PageLayout from "../components/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import certificate_of_authorization from "../images/certificate_of_authorization.jpg";
import pdf from "../images/pdflogo.png";
import c1 from "../images/pgs.jpg";
import pgs1 from "../images/pgs1.jpg";
import pgs2 from "../images/pgs2.jpg";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Designation",
    dataIndex: "designation",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

const data = [
  {
    key: "1",
    name: "Ajay Kumar Tripathi",
    designation: "Project Director",
    phone: 9915195061,
    email: "ajayk61@gmial.com",
  },
  {
    key: "2",
    name: "Rajeev Kohli",
    designation: "Director Marketing",
    phone: 7087107163,
    email: "rajeevsays@gmail.com",
  },
  {
    key: "3",
    name: "Gurpreet Singh",
    designation: "Associate Director, Training",
    phone: 9915195062,
    email: "gurpreet.kvm@gmail.com",
  },
  {
    key: "4",
    name: "Jagtar Singh",
    designation: "Assistant Director Training",
    phone: 7087107166,
    email: "jagtarecologist@gmail.com",
  },
  {
    key: "5",
    name: "Mridul Gupta",
    designation: "Project Coordinator RC-PGS",
    phone: 947839852,
    email: "mridul.gupta68@gmail.com",
  },
  {
    key: "6",
    name: "Gurpreet Singh",
    designation: "Technical Support Executive RC-PGS",
    phone: 9815738096,
    email: "gurpretsingh868@gmail.com",
  },
];

export default () => (
  <PageLayout>
    <SEO title="Organic Certification in Punjab, Haryana and Chandigarh" />

    <h1>Organic Certification</h1>

    <div
      style={{
        display: "block",
        margin: "0 auto",
        textAlign: "center",
        width: "350px",
      }}
    >
      <Profile image={c1} />
    </div>

    <Card title="Participatory Guarantee System" bordered={false}>
      <p>
        Participatory Guarantee System (PGS) is a quality assurance initiative
        that is locally relevant, emphasize the participation of stakeholders,
        including producers and consumers and operate outside the frame work of
        third party certification. As per IFOAM (2008) definition "Participatory
        Guarantee Systems are locally focused quality assurance systems. They
        certify producers based on active participation of stakeholders and are
        built on a foundation of trust, social networks and knowledge exchange”.
        PGS is a process in which people in similar situations (in this case
        small holder producers) assess, inspect and verify the production
        practices of each other and take decision on organic certification
        (PGS-Green and PGS Organic ).
      </p>

      <Row gutter={18}>
        <Col xs={24} md={12} lg={8} />
        <Col xs={24} md={12} lg={8}>
          <Profile
            designation="Certificate of Authorization"
            image={certificate_of_authorization}
          />
        </Col>
        <Col xs={24} md={12} lg={8} />
      </Row>

      <p>
        <blockquote>
          KVM is authorized Regional Council for providing organic certification
          under Participatory Guarantee System in Punjab, Haryana and Chandigarh
        </blockquote>
      </p>
    </Card>

    <Card
      title="Advantages of PGS over third party certification system"
      bordered={false}
    >
      <p>
        In PGS organic farmers have full control over the certification process
        and are able to produce far more credible and effective system of
        quality assurance compared to third party certification. Important
        benefits of this system over third party certification system are as
        follows:
      </p>
      <p>
        <ol>
          <li>
            The procedures are simple; documents are basic and use the local
            languageunderstandable to farmers.
          </li>
          <li>
            All the members are local and known to each other. Being themselves
            practicing organic farmers have high degree of understanding on
            day-to-day knowledge or acquaintance of the farm.
          </li>
          <li>
            Peer appraisers are among the group and live in the same village,
            therefore have betteraccess to surveillance{" "}
          </li>
          <li>
            Peer appraisal instead of third party inspections reduces cost
          </li>
          <li>
            Mutual recognition and support between Regional PGS groups ensures
            better networking for processing and marketing.
          </li>
          <li>Empowers farmers with increased capacity building</li>
          <li>Bring consumers to the farm without the need of middleman</li>
          <li>
            Unlike grower group certification system, PGS offer every farmer
            with individual certificate and each farmer is free to market its
            own produce independent of group.
          </li>
          <li>
            Consumers and buyers are often involved in production and
            verification process
          </li>
          <li>
            Random residue testing at regular intervals ensures the integrity
            and increases thetrust.
          </li>
        </ol>
      </p>
    </Card>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={4} />
      <Col xs={24} md={12} lg={8}>
        <Profile
          designation="PGS-India Green (organic products obtained from the agriculture fields which are under process of organic conversion)"
          image={pgs1}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <Profile
          designation="PGS-India Organic (organic products obtained from agriculture fields which are completely converted into organic farming)"
          image={pgs2}
        />
      </Col>
      <Col xs={24} md={12} lg={4} />
    </Row>

    <h3>PGS Operational Manuals</h3>
    <Row gutter={24}>
      <Col xs={12} md={6} lg={4}>
        <Profile
          designation="Hindi"
          image={pdf}
          file="pgs-india_operational_manual.pdf"
        />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Profile
          designation="English"
          image={pdf}
          file="pgs-india_operational_manual_hindi.pdf"
        />
      </Col>
    </Row>

    <h3>PGS Regional Council Central Team</h3>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      size="middle"
    />
  </PageLayout>
);
