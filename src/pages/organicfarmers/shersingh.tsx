import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/sher-singh.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Sher Singh, Mirpur, Shahkot - The pied piper of Shahkot</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>
          {" "}
          Sher Singh is a well-known face in Shahkot. In fact, of all farmers
          who come from nearby villages to sell their vegetables, he is the most
          sought after notwithstanding the fact that his offerings are always
          priced Rs 15-20 higher than market price. They are sold within two and
          a half hours of his arrival in the city. Sher Singh never believed
          that going organic will actually spell big profits for him. “A friend
          advised me to go for it claiming it has great future. I never believed
          him but started experimenting since I always wanted to go natural. As
          the amount of agrochemicals used in fields is rising, so are the
          diseases. I felt at least this much service I should do to the society
          by offering healthier food,” he recalls.
        </p>
        <p>
          At first, Sher Singh got very dismal results. The vegetables took
          longer to develop and were really small. “Now it’s been five years and
          not only the produce is good, they taste great. It’s because of the
          organic tag that my vegetables are in great demand across Shahkot
          today,” he says.{" "}
        </p>
        <p></p>
        <p>
          Till 2009 Sher Singh was only selling vegetables at his village
          Mirpur. But in 2009 when he decided to turn organic, it also opened
          new avenues. He started taking vegetables to Shahkot where the friend,
          who motivated him to take up chemical-free farming, also got referred
          a few customers. “Buyers are usually reluctant initially as the
          vegetable is costlier than those grown using chemicals. So, they start
          with small quantities but after experiencing better quality, they
          stick with it. Many say instead of spending on medicines in future, we
          would instead buy costlier but better food today,” Sher Singh informs.
          With the word-of-mouth publicity, his popularity has risen so much
          that he does not need to go to each and every house to sell the
          vegetables. “I have around 35-40 families which are regular buyers.
          Others just call me on mobile, get to know my location and reach there
          to get their supplies.”{" "}
        </p>
        <p></p>
        <p>
          Of the total 14 acre of his farmland, Sher Singh is doing organic
          farming on six acres, including 3-4 acres kept for vegetables. He also
          grows turmeric, basmati rice and wheat without any chemicals. “When I
          started with organic, the yield dropped immediately but then recovered
          gradually with each passing year. Now the vegetables are also looking
          as good as vegetables of any other farmer. But I still have to sell
          them at higher rate as these take more time to grow,” he explains.
          Sher Singh’s motor-run cart offers around 30 vegetables, pulses,
          turmeric and dalia (wheat-based porridge).
        </p>
        <p></p>
        <p>
          In the field, he applies a mixture of cow dung and urine, jiggery and
          gram flour, which has given good results. “I also do mulching of
          unnecessary grass and vegetable waste. It helps increase the soil
          biomass,” he informs. Sher Singh still gets questions about the higher
          than market rates from newcomers. “I tell them I sell vegetables not
          poison and they understand. People are getting aware about what they
          are eating and I think it’s a good sign as once city residents start
          demanding chemical-free food, farmers would be forced to provide them.
          And cost would not be an issue,” he says optimistically.
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
  <SEO title="Sher Singh, Mirpur, Shahkot - The pied piper of Shahkot" />
);
