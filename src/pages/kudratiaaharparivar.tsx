import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import kap1 from "../images/kap1.jpg";
import kap2 from "../images/kap2.jpg";
import kap3 from "../images/kap3.jpg";
import kap4 from "../images/kap4.jpg";
import kap5 from "../images/kap5.jpg";
import kap6 from "../images/kap6.jpg";

export default () => (
  <PageLayout>
    <SEO title="Kudrati Aahar Parivar" />

    <h1>Kudrati Aahar Parivar</h1>

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

    <Card title="Collaborative Initiative of Organic Farmers" bordered={false}>
      <p>
        Kudrati Aahar Parivar is a collaborative initiative of organic farmers
        associated with Kheti Virasat Mission and Nature-loving and Health
        conscious Consumers from all over Punjab ​. Consumers are not mere
        costumers here, we regard them as environmental activists and supporters
        of Organic Farming movement. These consumers are partners in a
        collective effort to bringing Punjab out of ecological crisis. They are
        performing their environmental duties to protect Nature and Food and to
        Make this Earth livable for our future generations.
      </p>
    </Card>

    <Card title="Commitment of Quality" bordered={false}>
      <p>
        Kudrati Aahar Parivar understands that as the quality of the crops grown
        by natural farmers, and the products prepared from them is not an
        accident, but the degree of excellence or superiority, is a combination
        of attributes of growing techniques, properties of such foods, or
        characteristics that give each commodity value in terms of its intended
        use with respect to the Size, Shape, Color, Gloss, Sweetness, Sourness
        [Acidity], Astringency, Bitterness, Aroma, Firmness, Crispiness,
        Juiciness, Mealiness, Toughness as well as Off-flavourness, Defects and
        decay beside the Nutritional factors as Vitamins (C,A,B, Thiamine,
        Niacin), Minerals, Dietary Fiber, Fat, Oil, Carotenoids, Flavonoids,
        Sterols and Antioxidants. This also involves the manufacturing
        processes.
      </p>

      <ul>
        <li>
          All products are grown organically/naturally without any chemicals and
          poisonous pesticides
        </li>
        <li>
          Not only are they grown without any chemicals, but processing and
          storage is also done without any chemicals
        </li>
        <li>
          They are sourced and packed with great care and expertise of KVM,
          ensuring the products are not only organic, but all other facets of
          ecology and lifestyles are addressed
        </li>
        <li>
          The farmers behind each of these products are sticklers to organic
          principles and have the nature, health and ecology in mind
        </li>
        <li>
          The farmers are paid fair price to compensate the cost of production
          fairly and to enable good livelihood.
        </li>
        <li>
          All these products come with a high social responsibility and health
          factor
        </li>
        <li>
          Promoting healthy, sustainable and ecofriendly activities - both on
          the producer side and the consumer side..
        </li>
        <li>
          Bringing back the community participation in buying. They organize
          organic bazars where the farmers and consumers are brought together in
          a lively and chemical free atmosphere every week
        </li>
      </ul>
    </Card>
  </PageLayout>
);
