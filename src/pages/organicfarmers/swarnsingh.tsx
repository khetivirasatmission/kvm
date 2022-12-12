import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/swarn-singh.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Swarn Singh</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>Interview taken by Meera </p>
        <p>
          In the village of Karamgarh, Swaram Singh has been farming since 1968,
          when the Green Revolution first came to Punjab. His father had 18
          acres, which were divided between he and his two brothers. He followed
          what everyone else was doing and used the chemicals on his crops until
          2002, when he decided to try natural farming. Swaram Singh made the
          change for two reasons. One was that the pests that the chemical
          companies promised wouldn’t come anymore were still destroying his
          crops. The other reason was that his mother was diagnosed with
          intestinal cancer, and he suspected that all the chemicals he and
          other farmers were putting on their fields might have something to do
          with it. So on two of his six acres he switched to natural methods to
          grow non-Bt cotton, guar, vegetables and fodder for his cows. At
          first, he faced quite a few problems because he didn’t have the
          experience, but he found KVM and they helped him figure out how to use
          natural materials from his farm such as cow manure and leaves from the
          neem tree, datura, and bitter plants to combat unwanted insects and
          help build the health of the soil.
        </p>
        <p> </p>
        <p>
          <strong>When did you begin farming?</strong>
        </p>
        <p>
          I started farming at the time of the Green Revolution. The chemicals
          were so toxic that people would die from just spraying. And I don’t
          think the yield was even that revolutionary. Without the pesticides,
          you got 32 quintals of wheat and with them, you got 40. My brothers
          and I experimented with and without chemicals and tractors before
          natural farming, but labor was a problem. The sharecroppers we worked
          the fields with weren't willing to forego the increased yield. It’s
          all an illusion that the Green Revolution has made India
          self-sufficient. We do import chemicals even if we don’t import food,
          and the chemicals are more expensive.
        </p>
        <p>
          <strong>What do you have to buy for your farm now?</strong>
        </p>
        <p>
          The input with natural farming is very low. I don't have to buy
          anything. I bought the seeds from Rajasthan and now I can save them.
          I’m earning the same as when I was doing all chemical farming.
        </p>
        <p>
          <strong>What’s your biggest challenge?</strong>
        </p>
        <p>
          Finding labor to work the fields. Last year, my cotton from the
          natural farming brought in more than the Bt cotton. Before that, it
          was almost balanced. If I had the labor, I’d do it all with natural
          farming. I’m more than ready to shift for the whole family. But I
          can’t get laborers who want to work with cow dung. They’d rather work
          with pesticides. They get intoxicated when they use the sprays. I
          don’t have drugs to give them when I ask them to work with cow dung.
        </p>
        <p>
          <strong>Is anyone else in the village farming naturally?</strong>
        </p>
        <p>
          Just one person, Brar, has 65 acres that are all-natural farming, with
          water tanks and very organized. But there are about five other
          households that have kitchen gardens where they grow naturally too.
        </p>
        <p>
          <strong>
            What did others in your village think when you made the change to
            natural?
          </strong>
        </p>
        <p>
          For the first couple years, people were quite critical. They thought I
          was mad! But now that chemical farming is failing, they are
          increasingly turning to me and to KVM to see what we’re doing. Their
          yield is failing. The crops need more and more inputs, more water, and
          the yield keeps decreasing. KVM did a survey and it was clear that the
          yield is decreasing considerably while the water and pesticide use is
          going up.
        </p>
        <p>
          <strong>Are you living naturally in other ways?</strong>
        </p>
        <p>
          Yes, I don’t use allopathic medicine, relying on homeopathic for my
          family, my animals and myself. No medicines. I’m healthy and happy.
          And I don’t watch TV. I feel that I inherited these values of caring
          about nature from my grandfather.
        </p>
        <p>
          <strong>Can natural farming happen on a large-scale?</strong>
        </p>
        <p>
          Yes, we just need to get rid of the subsidies! It’s easy if government
          wants to do it. Slash subsidies for fertilizers and pesticides, and
          subsidize labor for natural farming instead. Sure, there’ll be some
          loss in yield, but why spend money on Bt seeds from Monsanto? We’re
          sending our money away.
        </p>
        <p>
          <strong>What else would help improve natural farming?</strong>
        </p>
        <p>
          There should be more research to improve technology, innovation and
          mechanization for organic farmers to help deal with the labor
          shortage.
        </p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Swarn Singh" />;
