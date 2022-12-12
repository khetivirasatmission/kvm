import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/satinder-singh.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Satinder Singh, Ghugh, Jalandhar - The flag bearer of nature</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>
          “Instead of paying interests to lenders, we should repay our debt to
          the mother earth, which has been showering us with such great natural
          wealth for ages.” These words don’t come from highly placed
          intellectuals or policy makers, but a humble farmer silently working
          closer to nature amidst all the challenges. Satinder Singh of Khug
          village near Jalandhar may own just over 3 acres of land but has a
          resolve which is greater than the biggest landlord.
        </p>
        <p></p>
        <p>
          A newspaper article on organic farming by Gurpreet Singh of Kheti
          Virasat Mission proved to be god sent for Satinder who was on the
          lookout for guidance in 2009. “While using chemicals I was always
          pained at how we were damaging the environment, especially the soil,
          which has given us so much. But I had several doubts stopping me from
          take the plunge. The team from KVM sorted out all of them to my
          satisfaction,” he says. The experiment started with fodder grass
          bersem. “I competed with my father who used chemicals to grow the same
          crop on equal piece of land. My crop reached the height of 7.5 feet
          which was a wonder but everybody called it a fluke. This shows that
          those doing chemical farming never give up easily even when facts are
          presented to them,” he informs.
        </p>
        <p></p>
        <p>
          Though going organic was an obvious choice for Satinder, it was not an
          easy one. Till four years back he was tilling the 24 acre family
          fields along with his two brothers and father. But his family members
          refused to put up with what they called ‘madness for organic’ and the
          family land was divided. But Satinder is not the one to give up
          easily. When the income from farming does not see him through, he
          works as a daily wager on the fields of neighbours. “Nowadays farmers
          have grown big egos and to satisfy them they claim to have got higher
          yields than others. But everybody knows the truth. The yields are
          dwindling as soil is getting infertile due to bad practices. I am
          satisfied with what I have chosen. My input cost is much less so I
          don’t need to take loans to buy fertilizers and seeds. In fact, in
          last four years, I have gone completely debt free,” Satinder says.
        </p>
        <p></p>
        <p>
          He has been using cow dung as a fertiliser to prepare the fields which
          sees him through for three years. The higher moisture content of the
          soil has also reduced the demand of water. “Even paddy requires just a
          week of flooding. What I am looking for now is the indigenous Sahewal
          cow which is supposed to be the best not only because of its
          nutritious milk but also the dung and urine,” he informs.
        </p>
        <p></p>
        <p>
          Though his resolve is strong, what hurts Satinder is when he sees the
          brand ‘organic’ being used wrongly. “There are many people who are
          certified organic farmers but use chemicals in their farms. Not only
          are they doing a great disservice to the society, these farmers don’t
          believe in the goodness of nature,” he laments.
        </p>
        <p></p>
        <p>
          However, that does not affect his work. In fact, Satinder feels when
          you start working with nature, the virtuousness seeps into your being.
          “It affects every aspect of your life. I stopped making false claims,
          have turned more grateful towards God and forgive easily. It’s more of
          a spiritual experience than just a shift in practice. Organic farming
          requires patience and belief in goodness of this world,” he shares his
          thoughts. This wisdom has been the obvious outcome of his faith in
          nothing but nature.
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
  <SEO title="Satinder Singh, Ghugh, Jalandhar - The flag bearer of nature" />
);
