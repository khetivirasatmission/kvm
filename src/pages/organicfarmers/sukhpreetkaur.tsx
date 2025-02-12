import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/sukhpreet-kaur.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Sukhpreet Kaur, RodiKapura Village, Faridkot District</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>
          Sukhpreet Kaur, is in her mid 20s from a landless household. Their
          livelihood depends on working as hired farm labour. Recently they have
          also set up a small shop outside their house selling everyday
          groceries. They also tried farming on 12 acres of leased land. They
          sowed cotton and guar beans, but had to incur losses and went into a
          debt of Rs 2 lakhs. So they gave up on cultivation. She says, “On the
          leased land we were farming with chemicals and therefore the input
          costs were very high. The yield was not as much as the costs of
          production.”
        </p>
        <p>
          She started cultivating vegetables in a small plot in her household
          yard since the beginning of summer. She says, “I do all the work on
          the vegetable plot myself. On the first attempt there was no yield,
          then I tried again. The KVM activist guided me on how to go step by
          step and taught me the proper methods. First of all she told me which
          are the summer season vegetables. So we got those seeds from the
          market. Then we applied manure on the plot, and then applied a mixture
          of certain boiled leaves before sowing the seeds, to increase soil
          fertility and strength. Then after ploughing, we sowed the seeds. This
          time there has been good yield. But there was a severe pest attack as
          well. I made an organic spray and the pests were controlled. I have
          harvested guar beans, pumpkins, various kinds of gourds, cucumber and
          chillies once this season. Now they are ready to be harvested a second
          time. The vegetables have been sufficient for our household
          consumption needs. We do not have to buy anything from the market.”
        </p>
        <p>
          “Looking after the vegetable plot does not take up that much time
          every day, it has not increased my workload significantly. Usually, in
          the mornings I get up and feed the cattle, then fill water. We have a
          small shop. I help out there and there are everyday chores of cooking
          and cleaning. I manage to find some time to look after the vegetables,
          to keep track of any pests or other diseases. Most of my time though
          goes in attending to the shop where we sell groceries. That is also my
          responsibility. Before opening the shop we had tried farming on rented
          land just once. But we do not farm anymore because it was very
          expensive and we ran into losses. Our source of livelihood before we
          tried farming was mostly daily wage labour on farms or through
          MGNREGA. MGNREGA work is available only for 15 days in a year even
          though it is supposed to be 100 days. There has been a lot of uproar
          and many people went complained to the sarpanch but nothing has
          changed. I have gone personally. We also have a MGNREGA committee in
          the village. Fifteen days work means hardly any money in a year. On
          top of that the payments are delayed for a whole year. The work
          generally involves cleaning water channels and minor repair work. Many
          women go outside the village to pick cotton with their husbands. I
          have only picked cotton within the village though. But more and more
          farmers are not sowing cotton anymore, which means less work for us.
          In any case cotton picking lasts for about two months in a year. My
          husband works in transplanting paddy as well, but that also lasts for
          about 1.5 months. During the winter there is no work available for
          wage labour.
        </p>
        <p>
          “Growing vegetables at home appealed to me because we would be able to
          meet our own consumption needs with good quality vegetables. I am able
          to save a lot of money. In addition to saving money, eating vegetables
          that are grown without harmful chemicals is beneficial to our health
          as well. So I decided to do it. I can see that it has a made a
          difference in terms of health even in such a short time. I have
          started growing vegetables only this season. But even before that I
          had started getting vegetables grown without chemicals from someone
          else’s house. The pain in my joints has subsided to a large extent. I
          will definitely continue to grow vegetables at home as it saves a lot
          of money.”
        </p>
        <p></p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => (
  <SEO title="Sukhpreet Kaur, RodiKapura Village, Faridkot District" />
);
