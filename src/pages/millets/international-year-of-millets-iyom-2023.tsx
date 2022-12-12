import { Card, Col, Row } from "antd";
import React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PageLayout from "../../components/layouts/PageLayout";
import { StoryList } from "../../components/StoryOne";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";

import foxtail from "../../images/millets/foxtail.png";
import little from "../../images/millets/little.png";
import barnyard from "../../images/millets/barnyard.png";
import kodo from "../../images/millets/kodo.png";
import browntop from "../../images/millets/browntop.png";
import finger from "../../images/millets/finger.png";
import pearl from "../../images/millets/pearl.png";
import proso from "../../images/millets/proso.png";
import sorghum from "../../images/millets/sorghum.png";

import kap1 from "../../images/millets/foxtail2.png";
import kap2 from "../../images/millets/little2.png";
import kap3 from "../../images/millets/barnyard2.png";
import kap4 from "../../images/millets/kodo2.png";
import kap5 from "../../images/millets/browntop2.png";

const millets = [
  {
    key: "foxtail",
    name: "Foxtail",
    image: kap1,
    expanded: true,
    story:
      "Nervous strength, Mental strength, prevents arthritis, seizures & Parkinson's disease",
  },
  {
    key: "little",
    name: "Little",
    image: kap2,
    expanded: false,
    story:
      "Prevents ovarian disorders, thyroid disorders, low sperm count, infertility issues and PCOS",
  },
  {
    key: "barnyard",
    name: "Barnyard",
    image: kap3,
    expanded: false,
    story:
      "Enhances liver and kidney health, prevents jaundice, high cholestrol and endocrine disorders",
  },
  {
    key: "kodo",
    name: "Kodo",
    image: kap4,
    expanded: false,
    story:
      "Purifies blood, improves immunity, prevents diabetes, constipation and insomnia",
  },
  {
    key: "browntop",
    name: "Browntop",
    image: kap5,
    expanded: false,
    story:
      "Improves digestive system, eye health, blood pressure, prevents obesity and arthritis",
  },
];

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>International Year of Millets (IYOM) 2023</h1>

      <div className="block m-auto text-center">
        <StaticImage
          src="../../images/millets/kvm.png"
          alt="KVM logo"
          placeholder="blurred"
          width={225}
          layout="constrained"
          className="mr-4"
        />
        <StaticImage
          src="../../images/millets/IYM2023_H_Col_EN.png"
          alt="IYoM logo"
          placeholder="blurred"
          width={725}
          layout="constrained"
          className="ml-4 border-l border-gray-400"
        />
      </div>

      <p
        style={{ color: "#72a230", fontSize: "18px", textAlign: "center" }}
        className="mt-10"
      >
        <em>
          ‘KVM gives a calrion call to bring back the magic of millets, the
          nutri cereals’
        </em>
      </p>
      <Card title="Variety of Millets" bordered={false}>
        <Row gutter={18}>
          <Col xs={24} md={8}>
            <Link to="/millets/foxtail-millets">
              <Profile designation="" image={foxtail} />
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link to="/millets/barnyard-millets">
              <Profile designation="" image={barnyard} />
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link to="/millets/browntop-millets">
              <Profile designation="" image={browntop} />
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link to="/millets/finger-millets">
              <Profile designation="" image={finger} />
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link to="/millets/kodo-millets">
              <Profile designation="" image={kodo} />
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link to="/millets/little-millets">
              <Profile designation="" image={little} />
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link to="/millets/pearl-millets">
              <Profile designation="" image={pearl} />
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link to="/millets/proso-millets">
              <Profile designation="" image={proso} />
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link to="/millets/sorghum-millets">
              <Profile designation="" image={sorghum} />
            </Link>
          </Col>
        </Row>
      </Card>

      <Card title="Millets for Agriculture" bordered={false}>
        <p>Millets promote sustainable agriculture model as mentioned below:</p>

        <ul className="list-disc">
          <li>Reduce farmers' dependence on one or two crops</li>
          <li>Mitigate the issue of paddy straw burning</li>
          <li>Millets and their residue are good animal fodder</li>
          <li>
            Reduce stress of farmers due to less water requirement, tolerance to
            high temperature
          </li>
          <li>Suitable for most soils and require no pesticides</li>
        </ul>
      </Card>

      <Card title="Millets for Health" bordered={false}>
        <p>
          Millets are a rich source of proteins, carbohydrates, vitamins and
          minerals
        </p>

        <p>Each type of millets is useful in its own way</p>

        <StoryList list={millets} />
      </Card>

      <Card title="Millets for Environment" bordered={false}>
        <p>
          Growing Millets on a large scale will have a huge positive impact on
          enviroment
        </p>

        <ul className="list-disc">
          <li>
            Millets do not need pesticides, insecticides or chemical fertilizers
            which leads to reduction of chemicals in soil, air and water.
          </li>
          <li>
            Millets need less water (30% compared to other crops). This leads to
            conservation of water and preventing depletion of water table.
          </li>
          <li>
            Millets promote biodiversity - both flora and fauna - that keeps the
            environment flourishing.
          </li>
          <li>
            Millets mitigate greenhouse gas emissions caused by water intensive
            wheat and paddy cultivation.
          </li>
        </ul>
      </Card>

      <Card title="Our endeavour for millet promotion" bordered={false}>
        <ul className="list-disc">
          <li>
            2005- 2006: Promoted millets among farmers as readily grown organic
            crops
          </li>
          <li>
            2007: Started serving millets at the introductory level in workshops
            and meetings.
          </li>
          <li>
            2007- 08: Exposure visit to Millet Festival organised by DDS,
            Hyderabad
          </li>
          <li>
            2008: First village-level millet mini mela at Bhotna village,
            Barnala district, followed by similar initiatives at China, Faridkot
          </li>
          <li>
            2009: Started ‘Bebe Di Rasoi’, a kitchen led by rural women to serve
            millet dishes at village and district-level workshops
          </li>
          <li>
            2009: Organised ‘Bebe-Di-Rasoi’ food festival at Press Club,
            Chandigarh, in collaboration with DDS, Hyderabad. Inaugurated by the
            then Chief Minister of Punjab Mr Parkash Singh Badal
          </li>
          <li>
            2009-15: Series of ‘Bebe Di Rasoi’ festivals organised at different
            villages
          </li>
          <li>
            2010-12: Kudrati Kheti Mela and ‘Bebe Di Rasoi’ organised at
            Bathinda and Chandigarh
          </li>
          <li>
            2015 : Millet Food Festival organised at National Organic Farmers’
            Conference, Chandigarh
          </li>
          <li>
            2017: Series of Mini Millet Melas at different towns and villages
          </li>
          <li>
            2018-19: Series of cookery classes across Punjab by eminent millet
            expert and chef Ram Babu from Hyderabad
          </li>
          <li>
            2018-20: Series of awareness meetings on holistic health and
            holistic food of millets by Dr Amar Singh Azad
          </li>
          <li>2019: Miracle Millet Utsav at Panjab University, Chandigarh</li>
          <li>
            2019-2020: Series of awareness meetings addressed by millet diet
            expert Dr Khadar Wali from Mysore. Also, organised series of
            meetings between millet farmers and consumers
          </li>
          <li>
            2020: ‘Millet Langar’ at Sultanpur Lodhi to celebrate 550th Year of
            Guru Nanak Dev ji
          </li>
          <li>
            2020-21 : Online classes and workshops on health, nutrition, natural
            immunity and holistic food
          </li>
          <li>
            2022 : Kudrat Utsav Millet festival at Chandigarh and Faridkot
          </li>
        </ul>
      </Card>

      <Card title="How can KVM  help you promote millets ?" bordered={false}>
        <ul className="list-disc">
          <li>Farmers’ workshops</li>
          <li>Seeds exchange</li>
          <li>Exposure visits</li>
          <li>Cookery classes</li>
          <li>Popularising millets through food festivals</li>
          <li>Encouraging value addition</li>
          <li>Marketing support through KKH network</li>
          <li>Publication of manuals and information booklets</li>
          <li>Awareness camps on millet diet and health</li>
          <li>
            Popularising holistic food and wellness concept through online and
            offline seminars
          </li>
          <li>
            Bringing doctors, dieticians and nutritionists into the 'Millet
            Movement'
          </li>
        </ul>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => (
  <SEO title="International Year of Millets IYOM 2023" />
);
