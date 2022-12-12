import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/Seo";
import w1 from "../images/seedconserve/w1.jpg";
import w2 from "../images/seedconserve/w2.jpg";
import w3 from "../images/seedconserve/w3.jpg";
import Profile from "../components/Profile";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Seed Conservation</h1>

      <p style={{ color: "#72a230", textAlign: "center" }}>
        They tried to <strong>bury us</strong>,
      </p>
      <p style={{ color: "#72a230", textAlign: "center" }}>
        They didn’t know we were <strong>Seeds</strong>..
      </p>

      <Card title="Introduction" bordered={false}>
        <p style={{ fontSize: "18px" }}>
          <strong>The creation of a thousand forests is in one acorn.</strong> -{" "}
          Ralph Waldo Emerson
        </p>
        <p>
          So mighty is the strength of a seed. Our ancestors acknowledged this
          fact. Therefore, from times immemorial, every community had its own
          ways of conserving, preserving and sharing the seeds. The seed
          diversity was religiously passed down to the generations who preserved
          it with sanctity and dedication.
        </p>
        <p>
          Our ancestors were also the ultimate plant breeders. They domesticated
          wild plants and developed several new varieties by natural selection.
          For instance, Indian farmers had developed around 2 lakh varieties of
          rice, each adapted to specific growing conditions and soil type;
          having distinct flavour & aroma; specified uses; medicinal properties
          and morphological characteristics.{" "}
        </p>
        <p>
          But, with the invasion of MNCs, Seed & Agro industries, this culture
          was brutally shattered and this wisdom was obliterated. Patented
          Hybrid seeds, which require high doses of chemicals, were introduced.
          These seeds, developed in laboratories with the aim of monopolising
          the global agriculture, were never able to match the vigour, vitality
          and life force energy of those developed naturally over centuries. The
          hybrid seeds captured the market in no time. Thus we lost the Seed
          Sovereignty. We lost the Seed Diversity, along with.
        </p>
      </Card>

      <Card title="Our Approach" bordered={false}>
        <p>
          Seeds are <strong>sentient entities</strong>, to be treated with
          respect and compassion. They can’t be monopolised to achieve the
          ulterior motives. From farmers, who sow the seeds systematically in
          their fields; to any individual who would randomly throw and allow
          them to grow in his backyard -{" "}
          <em>our vision is make indigenous seeds freely available to all</em>.
        </p>
        <p>
          KVM is restoring the Seed Diversity and reviving the culture of Seed
          Conservation in Punjab. We are working on:
          <ul>
            <li>
              Village Level Mapping of traditional seed varieties of various
              crops
            </li>
            <li>Mapping of traditional seed</li>
            <li>Locating the knowledge keepers</li>
            <li>Sample collection of traditional seeds</li>
            <li>Characterisation of the identified seed varieties</li>
            <li>
              Mobilising farmers for seed production and in-situ seed
              conservation
            </li>
          </ul>
        </p>
      </Card>

      <Card title="Our Initiatives" bordered={false}>
        <h4>Seed Conservation Workshops</h4>
        <p>
          We organise technical workshops on conservation, multiplication and
          marketing of traditional seeds, where we invite internationally
          acclaimed experts to facilitate trainings and practical demonstrations
          for:
          <ul>
            <li>Crop characterisation</li>
            <li>Organic production of Open Pollinated seeds</li>
            <li>
              Different Isolation techniques for maintaining germ plasm purity
              vis-a-vis time isolation, distance isolation, bagging, caging,
              tunnelling etc.
            </li>
            <li>Seed extraction methods for vegetables</li>
            <li>Developing new varieties by Natural Selection</li>
            <li>Traditional seed storage mechanisms</li>
          </ul>
        </p>

        <h4>Farmers as Seed Savers</h4>
        <p>
          So far, we have trained 500 farmers in our workshops. Since Punjab was
          void of its local diversity, we initially outsourced the native seeds
          from states like Andhra Pradesh, Maharashtra, Uttar Pradesh, Himachal
          Pradesh etc. and distributed among farmers. At present, there are{" "}
          <strong>350 farmers</strong> who are conserving, multiplying and
          marketing the native seeds of grains, pulses, vegetables fruits and
          medicinal herbs.
        </p>

        <h4>Family Seed Banks</h4>
        <p>
          This idea mushroomed with the realisation that our kitchen gardeners
          had to look upon us every year to get the seeds. To make them
          independent, Seed Conservation became an integral part of our Kitchen
          Gardening workshops. Housewives, students, rooftop and urban gardeners
          eventually evolved as Seed Savers. Today we have{" "}
          <strong>110 Family Seed Banks</strong> –{" "}
          <em>
            sacred and cosy corners in the gardeners’ houses. Here, the seeds
            wait patiently till they go back into the soil and reap abundance.
          </em>
        </p>

        <h4>Young Seed Keepers</h4>
        <p>
          This was a group of <strong>20 young girls</strong> trained into
          conservation of indigenous seeds. Their classroom was a one-acre
          rented plot in Chaina village of Faridkot district. They were trained
          to manage the farm; grow organic & indigenous vegetables; conserve the
          seeds, preserve them with traditional practices and market them in
          various public events, under the auspices of KVM. These seeds were
          sold as ‘seed kits’, yielding an annual earning of 80,000 INR; which
          was distributed among the group itself.
        </p>

        <h4>Battle against Genetically Modified Seeds</h4>
        <p>
          GM technique has a drastic potential to do a permanent damage to our
          food chain, environment and health. Nobody can prevent Genetic
          Pollution and Contamination caused by GM Crops.
        </p>
        <p>
          We owe the responsibility to create awareness among masses by exposing
          the under the table introduction of GM crops in India. We have
          initiated anti-GMO movement in Punjab which includes regular
          campaigns, public dialogues, experts' talks & seminars regarding:
          <ul>
            <li>
              The potential harmful effects of GMOs on the environment and human
              health
            </li>
            <li>Loss of bio-diversity due to GM seeds</li>
            <li>
              Failure of Bt Cotton in India and other GM crops in the world
            </li>
            <li>The socio-political impacts of GM seeds</li>
            <li>
              Risks for farmers -increased input costs, seed sovereignty etc.
            </li>
          </ul>
        </p>
      </Card>

      <Card title="Our Activities" bordered={false}>
        <Row gutter={18}>
          <Col xs={24} md={8} lg={6}>
            <Profile
              designation="1st Seed Workshop"
              image={w1}
              file="1st-Seed-Workshop.pdf"
            />
          </Col>
          <Col xs={24} md={8} lg={6}>
            <Profile
              designation="2nd Seed Workshop"
              image={w2}
              file="2nd-Seed-Workshop.pdf"
            />
          </Col>
          <Col xs={24} md={8} lg={6}>
            <Profile
              designation="3rd Seed Workshop"
              image={w3}
              file="3rd-Seed-Workshop.pdf"
            />
          </Col>
        </Row>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Seed Conservation" />;
