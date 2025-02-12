import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/jarnail-majhi.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Jarnail Majhi</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>
          Background: Msc in Geology at Chandigarh University, from a farmer's
          family,
        </p>
        <p>Size of the farm: 8 acres</p>
        <p>
          Average number of farm workers:3 (himself, his father and his brother)
        </p>
        <p>Location: Sangrur district, Punjab</p>
        <p></p>
        <p>
          <strong>Why did you switch to NF?</strong>
        </p>
        <p>
          {" "}
          For the last 20 years, there hasn't been any miraculous increase of
          the production in chemical farming. Chemical farming is reaching a
          plateau. There were really no miraculous achievements. Instead, we
          suffered from the rising cost of the inputs leading to an increasing
          cost of production. There isn't much scope for growth and development.
          So chemical farming is actually not economically viable, it rather
          tends to destroy the small farmers, because of the debt trap (having
          to take more and more loans to produce).
        </p>
        <p>
          <strong>How did you do the transition?</strong>
        </p>
        <p>
          Five years ago, I did it all in one go, after attending workshop and
          studying the books of Subash Palekar and Masanobu Fukuoka.
        </p>
        <p>
          <strong>
            {" "}
            What are the difficulties you faced during the transition period?
          </strong>
        </p>
        <p>
          {" "}
          Mostly, I suffered from a decrease in the yield and many attacks on
          the crops by pests. There was also a great deal of fear and ignorance
          of the new model within the family. We also faced some problems due to
          improper use of Jeevamrita and Bijamrita. I think a complete knowledge
          of the method would have led to no loss and no problem at all. But
          there was a lack of knowledge of the new model of natural agriculture.
          That was the main difficulty.
        </p>
        <p>
          <strong> Any difficulties now? </strong>
        </p>
        <p>
          {" "}
          Now, there is no problem at all. After one year, I realized where the
          weak points and the negligence on my part were, and year after year I
          am improving and refining my methods.
        </p>
        <p>
          <strong>
            {" "}
            What do you cultivate on your farm and how do you do it?
          </strong>
        </p>
        <p>
          {" "}
          My total land holding is 8 acres here (my brother possesses 12 acres
          and I am planning to create a banana orchard under natural farming on
          3 acres of his land). The techniques that I use are those prescribed
          by Subash Palekar: Mix cropping, bijamrita, jivamrita, I try to follow
          a North-South orientation for my planting to optimize the reception of
          sunlight by my plants, and enhance the photosynthesis. I also use
          green-manure. I have only one desi cow that gives around 11 liters of
          milk per day (milked twice a day). I use a special method for
          sugarcane. I use a scruvar to take only the eyes of the sugarcane and
          not the pulp (which is much more economical). Then I treat these eyes
          with bijamrita and I leave it in fresh cow dung for 4 to 5 days.
          During this lapse of time, the eyes grow up to 2 inches, which is
          usually reached only after one month when sown in the soil directly.
          Then, I use the eyes in a densely sown nursery after one or two
          months. When the plants are one foot tall, I transplant them using a 8
          x 2 feet pattern in order to apply mix-cropping, with vegetable,
          commercial crops and eventually, ginger (that likes shade).
        </p>
        <p>
          On my farm, I practice a wheat-paddy rotation, I grow sugarcane and
          vegetable in intercropping, I also grow pulses. Paddling and flooding,
          using azola as a nitrogen fixing water plant and I practice mulching
          when I grow wheat.
        </p>
        <p>
          My other sources of income are raising poultry and renting of my
          combine-harvester.
        </p>
        <p>
          <strong> Where do you get the seeds from?</strong>
        </p>
        <p>
          I am planning to keep and save some seeds. I personally keep on
          experimenting (changing the orientation where needed), planting fruit
          trees (mostly mango and citrus). I will only plant trees that have a
          commercial value…
        </p>
        <p>
          {" "}
          <strong>How do you promote NF?</strong>{" "}
        </p>
        <p>
          I try to organize and attend event. I rely a little bit on word of
          mouth. I recently held a food festival on my farm. I also encourage
          people to come and visit my farm, especially the youngsters. I let
          them compare my budget to those of chemical farmers. I also spread the
          message just by speaking.
        </p>
        <p>
          <strong> How do you market your products?</strong>
        </p>
        <p>
          {" "}
          For marketing, honesty is very important, because it is mostly our
          reputation that creates our market. And I practice direct marketing
          mostly with people from the neighborhood. It is becoming easier
          because nowadays there is a craze for healthy food among educated
          people, who are health and environment-conscious. The farmer’s name
          and fame is quite important in the marketing of the product. People
          are now aware of the world-crisis and of the ill-effects of chemicals
          for the environment, the health and the economy of a country. I sell
          my products at a premium price which is at least double that of
          conventional products market price. Because of the fear of poisonous
          food, well-settled families want nutritious and healthy for their
          children.
        </p>
        <p>
          <strong>
            What do you think the government agricultural policy should be in
            Punjab and in India?
          </strong>
        </p>
        <p>
          {" "}
          I think we should not have hope for or be dependent on subsidies.
          Natural farming is also zero-budget farming and therefore it is
          independent farming. Nature is the teacher to learn how to practice
          farming, not the agricultural department, or some universities… The
          farmer should consider himself as a scientist: doing experiments with
          new techniques and methods in the cultivation of crops. Chemical
          farming will be in decline in the future. Yields are stable or
          decreasing, so there isn’t much scope for development. On the other
          hand, there is much scope for development in Natural farming. Natural
          farming should be started in a cooperative way, the farmer should sell
          after consultation with the cooperative. Within the cooperative, the
          farmers should be helping each other without relying on labor.
        </p>
        <p>
          <strong>
            {" "}
            Is Natural farming only caring for the needs of rich customers?
          </strong>
        </p>
        <p>
          {" "}
          No, in the initial stage, we need higher prices, to encourage and
          support the farmer in his initiative. When he is well settled and he
          can bear the price fluctuation, then he should try to apply a fair
          price instead of the maximum price. Then, the natural farmer can
          really work for the welfare of the people (but before that, he needs
          to be strong enough himself). Eventually, poor people should also be
          allowed to buy safe food.
        </p>
        <p>
          <strong> What are the duties of the Natural Farmer?</strong>
        </p>
        <p>
          {" "}
          He should practice farming carefully and consciously. He should take
          the firm decision and make sure that no chemicals should enter on his
          farm. His food should be poison-free, safe and nutritious. To
          determine these characteristics, it may be helpful for them to work
          hand in hand with laboratories. A Natural farmer should provide pure
          food for the public and society. He should claim the purity of his
          products with confidence. He should construct a cooperative group (a
          team of around six members) to check each other so that there is no
          abuse of the public’s trust. The cooperative system would make it
          possible to prevent fraud and the misuse of the techniques. In this
          way, there is no need of a policy provided by the government. The
          farmers can handle their work themselves.
        </p>
        <p>
          <strong>
            {" "}
            How to transmit this sense of duty to younger generation?
          </strong>
        </p>
        <p>
          {" "}
          For the transmission of this ideal to the new generation, we should
          take revolutionary action such as: food festivals, events, workshops,
          we should create awareness about the disadvantages of chemical farming
          and the benefits of Natural farming. Media and universities should be
          used for this mission of the spreading of the message, by writing and
          publishing about natural farming and by exposing the flaws of chemical
          farming.
        </p>
        <p>
          <strong> What is the ideal farm?</strong>
        </p>
        <p>
          As far as the size is concerned, I would say between 10 to 20 acres,
          it should be sufficient for a family of five to six members on
          average. The ideal farmer should work with his own hands. The basis of
          the marketing should be private market because public agencies with
          commission agents create distortions and corruption. If the farmer is
          hard-working, he can be successful even on three acres of land. The
          farmer should have devotion and dedication, and a strong system of
          thinking. I am also trying to convince, to give lectures and to show
          practically, day and night that it is possible and that it works.
        </p>
        <p></p>
        <p>
          <strong>
            {" "}
            How do you promote natural farming among other farmers?
          </strong>
        </p>
        <p>
          The most important factor in the promotion of this model is honesty.
          The society is a mirror. What we give, we shall be given back. Society
          reflects our way of thinking and of acting through the relation that
          we develop with it.
        </p>
        <p></p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Jarnail Majhi" />;
