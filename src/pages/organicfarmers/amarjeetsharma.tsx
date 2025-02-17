import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/amarjeet-sharma.jpg";
import a1 from "../../images/farmers/amarjeetseedbank.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Amarjeet Sharma, Chaina</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>
          <strong>Background</strong>: Used to be a shopkeeper but from a
          farmers’ family
        </p>
        <p>
          <strong>Size of the farm</strong>: 5 acres
        </p>
        <p>
          <strong>Average number of farm workers</strong>:&nbsp; himself
        </p>
        <p>
          <strong>Location</strong>: Chaina village, Faridkot, Punjab
        </p>
        <p>
          <em>
            <strong>
              Why did you switch to natural farming? And how did you do it?
            </strong>
          </em>
        </p>
        <p>
          “In 2006, I received my training on Natural Farming during a two-day’s
          workshop organized by KVM at Bhagtuana School with the participation
          of Manohar Bhai Pachure, a natural farmer from Maharastra. After that,
          I started applying NF on half an acre of my land. I grew wheat and
          vegetables along with fodder for the cattle. I got a very good result.
          Then in October 26th and 27th, I got the opportunity to attend a
          workshop conducted by Mr. Subash Palekar in Amritsar, at the
          Pingalwara Foundation. So in April 2007, I converted the totality of
          my 5 acres of land to NF. I sowed cotton and I got 6 quintal per acre
          (the average with BT cotton is 8 quintal per acre). I sold it for the
          normal price. It’s only after that that I started including more and
          more diversity in the cropping system on my farm. Since 2009, I sell
          my products to an institution that takes care of handicapped children,
          I get a premium price for them and the products are much appreciated.
          I’ve been told that the children are now having a better health and
          are therefore requiring fewer drugs for their treatment. The
          production on my farm is obviously also used for the self-consumption
          of my family.
        </p>
        <p>
          In 2007, I also started a Seed Bank to conserve indigenous seeds and
          become progressively self-sufficient as well as capable of spreading
          the use of our traditional varieties among other farmers. So far, I am
          able to grow 60 different types of crop on my 5 acres of land. I am
          distributing the seeds to friends who are willing to start NF on a
          piece of their land. In theory, they get the seeds as a loan and they
          are supposed to return twice the quantity that they received after one
          year. In actual fact, the farmers never returned any seeds. So far, I
          gave seeds to more than 200 farmers. The fact that they don’t return
          the seeds after one year makes me consider the possibility of selling
          the seeds instead of lending them (but then, the principle of the Seed
          bank will be lost). Or maybe, selling the seeds will be a strategy
          just in the initial stage.
        </p>
        <p>
          The reason why I switched from Chemical to Natural farming lies
          primarily in an economical calculation. In chemical farming, almost
          every year we see the cost of the inputs increasing (either because
          they are more expensive, or because we need to use them in larger
          quantity, or very often because of a combination of these two
          factors). So in these conditions, the farmer has to witness the
          ineluctable decrease of his profit margin while the production is
          reaching a plateau. Added to that is the fact that the fertilizers are
          heavily subsidized by the government, and we all know full well that
          the good yields under chemical farming are only the mechanical
          consequence of the use of pesticides and fertilizers. So then, what
          will happen in the future if the government stops subsidizing these
          chemicals? Finally, the cost of using chemicals in agriculture cannot
          be calculated only in monetary terms, it is now becoming more and more
          evident that the quality of the water we consume and eventually our
          very health&nbsp; have also to pay the toll on the degradation of the
          environment induced by the use of chemicals. So, all these factors are
          the reasons why I gave up chemical agriculture and adopted Natural and
          Organic farming.
        </p>
        <p>
          I have seen cases of people growing chemical vegetables and not eating
          them themselves because they know that these products are not good for
          their health. So when the farmers themselves do not have any trust in
          the food that they produce with their own hands then, you come to know
          that something must have gone terribly wrong in this system of
          chemical agriculture.
        </p>
        <p>
          Since I started Natural Farming, I have been able to reduce the
          consumption of water on my farm by around 50% because I am
          systematically using trenches. This method is said to reduce the water
          consumption up to 70%, so this also means the possibility of
          irrigating the field less often.
        </p>
        <p>
          Saying that, one should not believe that natural farming is an easy
          solution to avoid the problem caused by chemical farming. Actually,
          this kind of farming requires much more labour, so one has to be ready
          to actually spend more time on the field in order to grow natural
          products, because Nature has its own pace, its one rhythm. If one
          wants to get the finest fruits that Nature can provide us with, one
          has to accept to abide by its laws.
        </p>
        <p>
          Also, it is not always easy to market Natural products at a small
          scale. Let us take the example of millet. It is good for health, gives
          you a stronger immune system, it is very tasty, its production
          requires less inputs (water, time, etc), it attracts friendly insects,
          however, nowadays in Punjab, there is no market for millet. This kind
          of products would enable people to reduce their reliance on medicines
          for taking care of their health, but the tradition of consuming millet
          is nowadays almost completely lost in Punjab.
        </p>

        <p>
          <strong>
            <em>
              Why is there no massive switch from chemical to natural nowadays
              in spite of the fact that there is more and more awareness about
              the ill-effect of chemicals both on Human health and of the
              Environment?
            </em>
          </strong>
        </p>
        <p>
          It is above all a problem of mindset. The government encourages modern
          type of farming, with maximum mechanization and motorization and
          therefore maximum chemical consumption. Consequently, skills and
          hard-work are not promoted anymore. This mentality of getting the
          maximum by doing the minimum is the root of the problem. We always
          want to save our time and money so that we will be able to spend them
          more on entertainment. And if there is something that society provides
          us over-abundantly and without any restraint, it is not good food, and
          it is not a healthy environment, but it is certainly entertainment.
        </p>

        <p>
          <strong>
            <em>
              What are the perspectives about the government agricultural policy
              in Punjab?
            </em>
          </strong>
        </p>
        <p>
          There is a possibility that in the future, subsidies on chemicals will
          be reduced or maybe, even stopped. So then, there will be only two
          options left, either zero-budget natural farming, or corporate
          farming.&nbsp; I have a feeling that the government is waiting for the
          farmers to be ready to sell their land in order to reduce the
          subsidies. I don’t really assume that farmers like me will get any
          kind of tangible help from the government in the future. At least, I
          do not place too much of my hope on such a possibility.
        </p>
        <p>
          <strong>
            <em>What are the risks and dangers for NF?</em>
          </strong>
        </p>
        <p>
          Well, I think for natural farmers, right now, the government is more
          of a problem than a solution. Precisely because of all the incentives
          it gives to chemical farmers, and the almost nonexistent help provided
          to small natural farmers. So the risks and dangers for us are
          precisely coming from the government, especially given the influence
          that MNCs(Multi-national company) can have on it. And it also seems
          quite clear that the well-being of small farmer is no priority at all
          in these MNC’s agenda…
        </p>

        <p>
          <strong>
            <em>
              What are the next steps that you are going to take on your farm?
            </em>
          </strong>
        </p>
        <p>
          I would like to plant more trees, especially, fruit trees like jujube,
          peach, grape, papaya, banana, mango, orange and pear. I am planning to
          achieve this progressively over the next few years.”
        </p>
      </Card>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={a1} />
        </Col>
      </Row>
      <Card title="" bordered={false}>
        <p>
          Organic farmers of Chaina village have achieved many firsts, with the
          latest being the formation of a seed bank. The man behind this is
          Amarjit Sharma, who has dedicated a room in his house for this
          purpose. The seed bank has a number of traditional varieties of wheat
          (Bansi, Chaval Katta, Mundri and Sharbati) besides traditional seeds
          of cotton, jawar and bajra. Amarjit has travelled far and wide to
          collect the seeds, which include black corn and ‘rajmah’ varieties
          from Sikkim. The concept behind the bank was to ensure that farmers
          could have their own seeds. He had brought a few kilos of Bansi
          variety of seeds from Maharashtra because of its ability to withstand
          pests. It is available to farmers at the bank for cultivation in the
          state. He said the seed bank does not accept money but employs a novel
          concept. Farmers taking seeds from the bank have to return the
          original seed quantity as well as 25 per cent extra to ensure that
          there is enough for subsequent customers. Recently an Environment
          Society is also established which is presently engaged in talks with
          Nabard to supply them equipment worth Rs 10 lakh as a special grant.
          Sharma ji is the president of that society. Amarjeet Sharma is one of
          most known face of KVM movement. He was interviewed by several TV
          channels, newspapers Scientists and researchers. Here we are giving
          few of links of his interviews.
        </p>
        <ul>
          <li>
            <a
              href="http://www.npr.org/templates/story/story.php?storyId=104708731"
              target="_blank"
            >
              In India, Bucking The 'Revolution' By Going Organic
            </a>{" "}
          </li>
        </ul>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Amarjeet Sharma, Chaina" />;
