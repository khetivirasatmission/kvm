import { Card, Col, Row, Table } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import kh1 from "../images/kh1.jpg";
import kh2 from "../images/kh2.jpg";

import kap1 from "../images/kap1.jpg";
import kap2 from "../images/kap2.jpg";
import kap3 from "../images/kap3.jpg";
import kap4 from "../images/kap4.jpg";
import kap5 from "../images/kap5.jpg";
import kap6 from "../images/kap6.jpg";

const columns = [
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Venue",
    dataIndex: "venue",
    width: 300,
  },
  {
    title: "Time",
    dataIndex: "time",
    width: 200,
  },
  {
    title: "Forum",
    dataIndex: "forum",
    width: 100,
    render: text =>
      text !== "" ? <a href={text}>Kudrati Kisan Haat</a> : null,
  },
  {
    title: "Contact",
    dataIndex: "contact",
  },
];

const data = [
  {
    key: "1",
    city: "Faridkot",
    venue:
      "Atma Kisan Hut, Agriculture Department Circular Sadik Road, Faridkot",
    time: "9 am to 6 pm",
    forum: "",
    contact: "7087107165",
  },
  {
    key: "2",
    city: "Jalandhar",
    venue: "Eklavya School Campus,  Behind Thind Eye Hospital, Model Town",
    time: "SUN 12:30 pm- 2 pm, WED 3:30 PM to 4:30PM",
    forum:
      "https://www.facebook.com/Kudrati-Kisaan-HaatJalandhar-453019001552861/?fref=photo",
    contact: "Pankaj Jain @9357821727",
  },
  {
    key: "3",
    city: "Bathinda",
    venue: "Phase 3, opposite Police Station, Model Town",
    time: "SUN/WED 12pm-5pm",
    forum:
      "https://www.facebook.com/Kudrati-Kisaan-Haat-Bathinda-508966729262853/?fref=ts",
    contact: "Balwinder @9815245626",
  },
  {
    key: "4",
    city: "Bathinda",
    venue: "​Kudrat Hut, Street no 3, Behined Bus stand",
    time: "Daily",
    forum:
      "https://www.facebook.com/Kudrati-Kisaan-Haat-Bathinda-508966729262853/?fref=ts",
    contact: "Balwinder @9815245626",
  },
  {
    key: "5",
    city: "Ludhiana",
    venue:
      "Kudrati Kisan Haat, 87-ax, model town ext. Near Tikkona park, Ludhiana",
    time: "11 am-1 pm",
    forum:
      "https://www.facebook.com/Kudrati-Kisaan-Haat-Ludhiana-1531650220490200/?fref=ts",
    contact: "Rakesh Kharbanda @9872211171",
  },
  {
    key: "6",
    city: "Ludhiana",
    venue: "Kudrat Hut, 87-Ax Model Town Ext, Near Tikkona Park, Ludhiana",
    time: "​Daily / Thu Off 10AM TO 3PM",
    forum:
      "https://www.facebook.com/Kudrati-Kisaan-Haat-Ludhiana-1531650220490200/?fref=ts",
    contact: "Rajeev Gupta @9814800554",
  },
  {
    key: "7",
    city: "Batala",
    venue: "Kudrat Hut, Virasat Copy House, Leek wala Khoo Paras Hotel",
    time: "​Daily / Sunday Off",
    forum:
      "https://www.facebook.com/KVM-Kudrati-Kisan-Haat-Gurdaspur-471162206418864/",
    contact: "Gurmukh S Rangilpur @ 9876524292",
  },
  {
    key: "8",
    city: "Gurdaspur",
    venue:
      "Swadeshi Haat Gurdaspur, 14, Riddhi Shopping Complex, Geeta Bhawan Road, Hanuman Chowk, Gurdaspur 143521",
    time: "Daily10 am to 7 pm",
    forum: "http://www.facebook.com/Swadeshi-Haat-Gurdaspur-391497431266837/",
    contact: "Rajeev Kohli @7009150976",
  },
  {
    key: "9",
    city: "Muktsar",
    venue:
      "Kudrat Hut, Pritpal Electricals, Near Kaar Sewa wali gali, Malout Rd.",
    time: "Daily / Sunday Off",
    forum:
      "https://www.facebook.com/Sohangarh-Natural-Farms-1744909785741965/?hc_ref=SEARCH&fref=nf",
    contact: "Kamaljit S Hayer @9814166467",
  },
  {
    key: "10",
    city: "Barnala",
    venue:
      "Kudrati Kisan Haat, Kacha College Rd.  Gali No 6 Goyal Property Dealer",
    time: "10 am to 2 pm",
    forum: "",
    contact: "Ravi Farwahi @9888180780",
  },
  {
    key: "11",
    city: "KotKapura",
    venue: "Kudrati Kisan Haat, Arora Book Depot, Near Battiya Wala Chowk",
    time: "Off nowadays",
    forum: "",
    contact: "01625-503415",
  },
  {
    key: "12",
    city: "Amritsar",
    venue: "​Kudrati Kisan Haat, near Verka Milk Booth Anand Park Ranjeet Ave",
    time: "Tuesday ​ 3 PM to 6 PM",
    forum: "",
    contact: "Ranjodh Singh @8437770043",
  },
  {
    key: "13",
    city: "Sangrur",
    venue:
      "​Kudrati kissan haat, Opp Mata Chintpurni Temple Nabha gate, Sangrur",
    time: "9 am to 9 pm",
    forum: "",
    contact: "Sukhwinder Pappi @94170-40717",
  },
];

export default () => (
  <PageLayout>
    <SEO title="Organic Farmers' Market" />

    <h1>Organic Farmers' Market</h1>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={12}>
        <Profile designation="" image={kh1} />
      </Col>
      <Col xs={24} md={12} lg={12}>
        <Profile designation="" image={kh2} />
      </Col>
    </Row>

    <Card
      title="Buy Organic Products Direct from Farmers
"
      bordered={false}
    >
      <p>
        <strong>Kudrati Kisaan Haat</strong> is weekly market mainly organised
        on Sunday for 2 to 3 hours
      </p>
      <p>
        <strong>Kudrati Kisaan Hut</strong> is a permanent setup where customers
        can buy products daily basis
      </p>

      <Row gutter={18}>
        <Col xs={24} md={12} lg={4}>
          <Profile designation="" image={kap1} />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile designation="" image={kap2} />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile designation="" image={kap3} />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile designation="" image={kap4} />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile designation="" image={kap5} />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile designation="" image={kap6} />
        </Col>
      </Row>
    </Card>

    <Card title="Organic Farmers' Market Venues in Punjab" bordered={false}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={true}
        size="middle"
      />
      <p>
        <br />
        For ordering these products, you can call at our office-
        01635-503415,503414 or Whatsapp 7087107163 or you can mail us at{" "}
        <a href="mailto:info@khetivirasatmission.org"> KVM </a>
      </p>
    </Card>
  </PageLayout>
);
