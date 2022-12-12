import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/gurtej-singh.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>
        Gurtej Singh, Mehatpur, Jalandhar - A natural devotee, by grace of Gurus
      </h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>
          Gurtej Singh is a devout man but he does not regard religion just as a
          theory which has to be substantiated through rituals. He knows several
          verses of Gurbani by heart and always relates them to life. From Guru
          Nakak to Bhagat Dhanna Jatt, he reflects how all the great preachers
          always talked about relation between man and nature. “Religious
          hymns-also talk about biodiversity and simple living. But now
          everything is lost in rituals. We bow our heads to cows roaming on the
          streets but don’t know why we are supposed to value them. The
          traditional knowledge about having a cow at home is absent,” he
          laments
        </p>
        <p></p>
        <p>
          Living in a big house with all the modern facilities, it’s a pleasant
          surprise to know that Gurtej has not ignored the traditional way of
          living. His family grows indigenous varieties of crops and vegetables
          through natural means, has a wheat mill at home, and uses copper and
          earthen vessels to cook food.
        </p>
        <p></p>
        <p>
          It was in 2007 that Gurtej read about organic or natural farming in a
          Punjabi newspaper. Some guidance by a distant relative and Kheti
          Virasat Mission got him started on 1 acre which soon expanded to 6
          acre. “Nowadays, farmers take farming as just another business. They
          have forgotten that this is the only occupation which feeds
          generations and keeps them physically and mentally sound. We are
          because of the food we eat and food is there because of the soil.
          Unless we improve the soil quality, how can we expect a healthy
          society,” he asks and answers almost immediately: “There’s no better
          place to start from than home.” Gurtej grows most vegetables, wheat,
          maize, basmati rice and fodder naturally and now aims to reduce market
          dependency for fruits. “At least we should have those which grow
          naturally in Punjab,” he beams.
        </p>
        <p></p>
        <p>
          To those who ask him about the yield he’s getting, Gurtej suggests
          they look at the balance sheet. “With natural farming, you save
          anywhere between Rs 6,000-8,000 per acre besides reduction in water
          use and increased soil health. The food being healthier is a bonus.
          But it’s not easy to explain this to people who think only in terms of
          monetary benefits. They are too scared to experiment and lack the
          courage to go organic,” he informs as a matter of fact. Initially, his
          mother was also not in favour of taking such drastic steps. But today
          she understands and in fact has taken responsibility of several tasks
          like preparation of organic manure using cow dung and urine.
        </p>
        <p></p>
        <p>
          Gurtej feels the battle against agrochemicals won’t be won in one day
          since the problem did not emerge in one day. “But we have to take
          steps today. At the end, the world has to return to nature as it’s the
          only way forward. It may take 100 years but the nature will reclaim
          what it rightfully owns. The reverse counting has already started as
          soil and water health are declining. One day nothing will grow and we
          will be on mercy of nature again,” he says firmly.
        </p>
        <p></p>
        <p>Contribution by Manu Moudgil</p>
        <p></p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => (
  <SEO title="Gurtej Singh, Mehatpur, Jalandhar - A natural devotee, by grace of Gurus" />
);
