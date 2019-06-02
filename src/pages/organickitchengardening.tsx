import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import okg1 from "../images/okg1.jpg";
import of1 from "../images/of1.jpg";

export default () => (
  <PageLayout>
    <SEO title="Organic Farming & Kitchen Gardening" />

    <h1>Organic Farming & Kitchen Gardening</h1>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={12}>
        <Profile designation="" image={okg1} />
      </Col>
      <Col xs={24} md={12} lg={12}>
        <Profile designation="" image={of1} />
      </Col>
    </Row>

    <Card title="Natural Farming" bordered={false}>
      <p>
        To detoxify the ecology of Punjab and to make the state a pesticide-free
        region, KVM has propagated organic farming across Punjab since its
        inception. In the last few years, hundreds of farmers have adopted
        natural farming. KVM undertakes a variety of activities to educate,
        sensitize, & train farmers for organic farming through Workshops,
        Seminars, Farmer Field Schools and Participatory Resource Appraisals.
      </p>
    </Card>
    <Card title="Seeds Conservation" bordered={false}>
      <p>
        KVM seeks to revive our local traditional seed varieties and actively
        promotes their production. KVM motivates farmers to save their own seeds
        and then use those seeds in farming practices. As a result, many farmers
        are now saving their own seeds. For this, KVM has provided them a great
        deal of indigenous seeds from different states of the country like
        Andhra Pradesh, Maharashtra, Uttar Pradesh, Himachal Pradesh etc., and
        this holy work is ongoing.
      </p>
    </Card>
    <Card title="Chemical-free Kitchen Gardening" bordered={false}>
      <p>
        Women Action for Ecology, (WAE) a branch of KVM, encourages women to
        start growing vegetables in their kitchen gardens. "Feed your children
        with poison free safe food" is the slogan of this campaign. It begins
        with making kitchens poison-free: free from that food which is grown
        with pesticides and other agro-chemicals. Through this campaign, women
        are motivated to start small kitchen gardens to grow seasonal vegetables
        organically. This initiative is also ensuring more diverse and safe food
        for the new generation of Punjab. From its beginnings in two villages,
        Chaina and Bhotna, this campaign is now slowly spreading to nine more
        villages. A key dimension of this campaign is the conservation of native
        diversity of vegetable seeds. In the era of IPRs (private patents on
        seeds) it is important to have our own seeds in our own hands.
      </p>
    </Card>
    <Card title="Inter-cropping System" bordered={false}>
      <p>
        KVM works to enhance the biodiversity in the fields. For this it
        encourages the farmers to adopt an intercropping crop system. This
        increases the soil fertility and diversity of food. Intercropping offers
        farmers the opportunity to engage nature's principle of diversity on
        their farms.
      </p>
    </Card>

    <Card title="Training workshops for farmers" bordered={false}>
      <p>
        KVM organizes regular workshops and training on natural farming
        practices. KVM provides training on the following topics:
      </p>

      <ul>
        <li>Natural farming</li>
        <li>Conservation of seeds </li>
        <li>Inter cropping farming system</li>
        <li>Millets based farming system</li>
        <li>Non-pesticide management</li>
        <li>Chemical-free kitchen gardening</li>
      </ul>

      <p>
        In the last eight years, KVM has provided extension services to the
        farmers. For this purpose, more than 4,000 village level awareness
        meetings and farmer field workshop were organized across the state. More
        than 15,000 farmers had participated in these workshops and meetings. At
        present, more than 2,500 farmers are practicing natural farming in
        association with KVM. These farmers have adopted various natural methods
        of soil nutrition management, pest management, crop management and water
        management. The Natural Farming experts associated with KVM also update
        beginner Natural Farmers with the latest technological information and
        new farming practices.
      </p>
    </Card>

    <Card title="Revival of Food heritage" bordered={false}>
      <p>
        KVM also works to revive food heritage in the Malwa region of Punjab.
        For this, it is working to promote the use of millets like Bajra, Jowar,
        Makki, as they are very nutritious and part of our traditional food
        habits. KVM organizes “Bebe Di Rasoi”, a traditional food based festival
        to promote millet based food habits every year.
      </p>
    </Card>

    <Card
      title="Establishing a pool of local resource persons all around the state"
      bordered={false}
    >
      <p>
        This is another big achievement of KVM-- that we have successfully
        established so many of common people/farmers as local resource persons
        on different environmental, agricultural and health issues.
      </p>
    </Card>

    <Card title="Awareness about GM crops" bordered={false}>
      <p>
        KVM is also generating awareness about the negative effects of GM crops
        on soil, environment as well as on health. KVM also creates awareness
        about the effect of these crops on their seed sovereignty.
      </p>
    </Card>

    <Card title="Bi-monthly magazine in Punjabi" bordered={false}>
      <p>
        To impart knowledge about agricultural practices, current issues about
        environment, agriculture and health, KVM has started its bi-monthly
        magazine named ‘Balihari Kudrat’ in Punjabi.
      </p>
    </Card>
  </PageLayout>
);
