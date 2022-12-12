import { Card, Col, Row } from "antd";
import React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PageLayout from "../../components/layouts/PageLayout";
import { StoryList } from "../../components/StoryOne";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import { Timeline } from "../../components/Timeline";

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

      <Card title="Introduction" bordered={false}>
        <p>
          It is an undeniable fact that the ecology of Punjab is showing the
          results of decades of neglect and over exploitation of natural
          resources. Monocropping, loss of biodiversity, decrease in the water
          table are just a few scars out of many, which Punjab has to show for a
          state which was chosen as the champion of the Green Revolution. Today,
          we are looking at a dinner plate from which an entire spectrum of
          grain was intentionally wiped out.
        </p>
        <p>
          MILLETS (Kodra, Kangni, Ragi, Kutki, Hari Kangni, Swank, Bajra) Which
          formed a major part of Punjab's diet, are now replaced with Wheat and
          Rice. Not only high in ibre, iron and other trace minerals, Millets
          were a de facto rain fed crop of Punjab until it was replaced with the
          water guzzling paddy in the late 1960s.
        </p>
        <p>
          Kheti Virasat Mission has been systematically trying to revive this
          heritage grain for the past few years. We have recognized that this
          revival not only brings back nutritional security to the consumers but
          also addresses the issues of declining water table, loss of
          biodiversity, soil health and rural unemployment. Kheti Virasat
          Mission has taken up the challenge of building a value chain of
          organically grown Millets ‘From Farm to Plate’.
        </p>
      </Card>

      <p
        style={{ color: "#72a230", fontSize: "20px", textAlign: "center" }}
        className="font-bold"
      >
        <em>
          ‘KVM Recognized as Best NGO for Promotion of Millets - Poshak Anaj
          Awards by ICAR - IIMR’
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

        <div className="block m-auto text-center">
          <StaticImage
            src="../../images/millets/punjab-water.png"
            alt="Punjab Water Depletion logo"
            placeholder="blurred"
            width={400}
            layout="constrained"
            className="mr-4"
          />
          <StaticImage
            src="../../images/millets/water-requirement.png"
            alt="Water Requirement"
            placeholder="blurred"
            width={450}
            layout="constrained"
            className="ml-4"
          />
        </div>

        <ul className="mt-4 list-disc">
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
          minerals. High iber content of all millets gives a very low Glycemic
          Index (GI) to these miracle grains.A low GI means millet balances the
          blood sugar which helps to eliminate/reduce diseases such as diabetes,
          cardiac problems, cancer , arthritis and many more. Unlike Rice and
          Wheat, where the sugar spike in bodies is a common occurrence. Millet
          grains are also gluten free, which makes these an ideal diet for
          patients with Celiac diseases.
        </p>

        <StoryList list={millets} />
      </Card>

      <Card title="Millets for Environment" bordered={false}>
        <p>
          Punjab has lost an entire spectrum of food grains. A heritage has been
          lost. The ruthless mono-cropping and encouraging the cycle of Paddy
          and Wheat, has resulted in immense damage to the Ecology. Soil health
          is directly related to the vast number of microorganisms which thrive
          inside. The more diverse crops we plant, the more diverse population
          of these bacteria and fungi we invite in the soil. Growing Millets on
          a large scale will have a huge positive impact on enviroment.
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

      <Card title="KVM's endeavour for millet promotion" bordered={false}>
        <Timeline />
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
