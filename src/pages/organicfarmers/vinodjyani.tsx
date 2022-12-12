import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/vinod-jyani.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Vinod Jyani</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>Background: MA in History, from a farmers’ family</p>
        <p>Size of the farm: 130 acres</p>
        <p>Average number of farm workers: Unknown (it depends)</p>
        <p>Location: Village Kathera, Fazilka, Punjab</p>
        <p>
          <strong>
            Why did you switch to natural farming? And how did you do it?
          </strong>
        </p>
        <p>
          The 21st of November 2005, in one day, I gave up chemical farming of
          the totality of my 130 acres of land. That was after attending a
          meeting organized by KVM and after reading the books of Subash Palekar
          on Zero-budget Natural Farming. I was really fed-up with chemical
          farming because we really needed too much pesticides and fertilizers.
          When I realized that an alternative existed, I converted all of my
          land in one go.
        </p>
        <p>
          <strong>
            Which are the difficulties that you faced in the initial stage and
            which problem are you still facing now?
          </strong>
        </p>
        <p>
          No one was doing it in a big way, so the main difficulty in the
          initial stage was that I could not get guidance from anyone. I had to
          experiment with the techniques myself. Added to that, there were no
          natural boundaries around my farm, no biodiversity inside, and no
          predators. So I had to create all these artificially myself. These
          were the main difficulties. Today, there are no more difficulties, but
          I am a bit late in some techniques: mulching, trenching and tree
          planting, to recreate biodiversity and attract birds and predators. So
          that is my main difficulty.
        </p>
        <p>
          <strong>Which techniques do you implement on your farm?</strong>
        </p>
        <p>
          The techniques implemented on the farm are mix-cropping,
          green-manuring, preparation of jivamrita and bijamrita, now a little
          bit of mulching, tree planting, use of culture one and culture two to
          feed the soil in effective micro-organisms provided for free by the
          government of Punjab, some composting in the future, crop rotation,
          trenching, sprinkler and drip-irrigation…
        </p>
        <p>
          <strong>Where do the seeds come from?</strong>
        </p>
        <p>
          Initially, they were provided by other natural farmers at a nominal
          cost (for the first two years). Presently, most of the seeds are from
          the farm itself, taken from the harvested crops and conserved. I
          cultivate four traditional varieties of wheat and plan to increase the
          diversity steadily and progressively. I think that the seeds I still
          buy from the market only represent 10% of the totality of the seeds
          that we use on the farm.
        </p>
        <p>
          <strong>How to promote natural farming?</strong>
        </p>
        <p>
          By organizing meetings at the farm, with different important promoters
          of Natural Farming (Subash Palekar…); also by marketing the products
          at a premium, in order to show that we can earn a living decently by
          practicing natural farming… Also, due to our direct marketing
          strategy, people are constantly coming to the farm and visiting. All
          these are subservient to the mission of spreading the knowledge about
          natural farming.
        </p>
        <p>
          <strong>Which market do you target?</strong>
        </p>
        <p>
          The market that I target is above all the local market for the people
          who can afford buying my products. Now, most of my products are bought
          on the farm directly, so there really isn't any difficulty in selling
          my products anymore.
        </p>
        <p>
          <strong>
            According to you, what is the main political problem in Punjab at
            the moment?
          </strong>
        </p>
        <p>
          Problems that are affecting Punjab are the same that what we find all
          over India. Mostly: leadership without aim. The population is
          considered as a problem, a burden rather than an asset. After India’s
          independence, the small units started disappearing. Mahatma Gandhi’s
          idea was lost. Instead, we saw the rapid growth of big units, big
          centralized industries. Village people were displaced towards cities’
          slums. Because of lack of job in the agriculture sector and no work
          after the harvest, life in villages underwent many changes. So that is
          the main drawback: too much centralization has left the local bodies
          without any power. Instructions are coming from above along with
          funds, and village people do not have a say in their future or on the
          projects that need to be supported, and the way the money should be
          used to create a positive impact on the village’s life. Two examples:
          village streets using brick lane: the money can only be spent for that
          purpose; but is that really the priority everywhere? Second example,
          the school system: in my village there are more classrooms than
          classes. So, because there is no discretion on the use of funds, the
          money is misused and does not serve to solve the real issues. The
          government is not able to guide the population in constructive work:
          so people tend to become idle. With no plan to provide job to the
          people, unemployment is become a really big issue in India. The
          Education system is also quite corrupted, and is not teaching positive
          values. After finishing high-school education the teenagers hate to do
          any kind of manual or physical work.
        </p>
        <p>
          <strong>How does it affect you?</strong>
        </p>
        <p>
          I feel affected by this situation when I see that this money cannot be
          used more freely and more intelligently. Also, because the poverty and
          weaknesses of the education system is reflected in the quality of the
          staff we get to work on our farm.
        </p>
        <p>
          <strong>
            What do you think the government policy should be in Punjab and in
            India regarding agriculture?
          </strong>
        </p>
        <p>
          We should not go for big industries; we should prefer small cottage
          industries that would provide employment at a local level. The
          government should help the farmers to process their production
          themselves.
        </p>
        <p>
          Ill-nutrition is also due to high yielding varieties: less nutritious
          food. Traditional varieties of wheat contained more than 14% of
          protein, and HYV less than 6 %. Total soluble sugars (carbohydrate)
          are also less by 0,5% in HYV. Millet used to be the main diet of rural
          people but with modernization it disappeared from our diet… Most
          farmers only cultivate wheat and rice, and the rice is not even for
          Punjab but for South India. In Punjab, people mainly consume wheat.
          And nowadays there is lack of diversity in food because of
          monoculture. To solve this problem, the government should give direct
          subsidies to the organic farmers and stop importing foreign chemicals
          like pesticides and fertilizers. A bag of urea is sold for Rs.260 to
          farmer whereas its actual value on the international market is Rs.850.
          Similarly, a bag of DAP is sold for Rs.460 to Indian farmers, when it
          is bought at 2600 (the international price). That means that
          indirectly, chemical farmers receive Rs.10000/acre/year from the
          government, if that money was used to support organic farming the
          situation would change completely and a more sustainable paradigm
          would emerge.
        </p>
        <p>
          <strong>
            And regarding other problems like poverty, ill-nutrition,
            inequalities, and unemployment?
          </strong>
        </p>
        <p>
          The problem of poverty is not taken seriously enough. There is a lack
          of availability of job and the infrastructures are not developed
          enough to keep pace with the growing population. The system of
          identification of the poor is not efficient, and the benefits are
          misused by the officials and politicians and therefore do not reach
          the poor and needy people. The government should have a list of poor
          people provided by the village… Public distribution system is one of
          the most corrupted in the world. The card system for benefit is
          inefficient and does not encourage physical work.
        </p>
        <p>
          Regarding inequalities: how to cope with it? I think the level of
          inequalities in India is the same as in developed countries. According
          to me, it is more a problem of management than a problem of
          distribution.
        </p>
        <p>
          What do you think your responsibilities are as a farmer? My duty as a
          farmer is to provide good and nutritious food to human beings.
          Secondly, as a farmer, I should try to have all the diversity of the
          food that I need on the farm itself. If all farmers were fulfilling
          these natural responsibilities, diversification would be recreated.
          And self-sufficiency of the people in their requirements and
          biodiversity in the field would flourish again.
        </p>
        <p>
          <strong>
            How do you think that this sense of duty can be transmitted to new
            generations of farmers?
          </strong>
        </p>
        <p>
          To transmit this sense of responsibility, we need to show the farmers
          who are happy in their fields and self-sufficient on their farm. The
          problem is that very often Indians are not duty-conscious and after
          education they tend to disregard manual/physical work. The corruption
          is actually already present in their diet. Indeed, we can all see that
          lots of Indian people are not physically well-built up and present a
          weak structure both because of a low protein diet and no physical
          work. The problem in the transmission of the sense of duty is that
          people are sometime aware, but they are also attracted by money so
          they don’t do what they know to be right and good. So this is the
          well-known greed problem that we find all over India and all over the
          world and that makes it difficult to transmit a sense of
          responsibility. Another problem is that farmers tend to lose interest
          in their activity, so when they have enough land they give it on
          contract for Rs.25 000/acre/year. But to be able to pay the rent, the
          farmer who is renting needs a bumper yield, and therefore uses more
          fertilizers and pesticides in spite of his awareness of the negative
          effects of these chemicals.
        </p>
        <p>
          <strong>
            What is your vision of the “ideal farmer” and how far do they think
            they stand from this ideal?
          </strong>
        </p>
        <p>
          I try to become an ideal farmer so that others can follow my example.
          I grow 40 types of food crops and more than eight different kinds of
          fruit. My ideal is self-consumption and self-marketing. I hope that
          after two years I can reach this ideal. Further steps will be
          identifying biodiversity and forestry as well as using
          non-conventional sources of energy.
        </p>
        <p>
          <strong>
            Which steps can they take in the coming years to get closer to your
            ideal?
          </strong>
        </p>
        <p>
          I use solar panels, I use biogas and I intend to develop the use of
          the bullock in order to stop using tractors on my farm. I plan to
          introduce more diversity over here and to be more self-dependent on
          building material. The motto of my farm is “Traditional wisdom with
          modern technologies.” As a Natural farmer, I consider that I am in a
          continuous learning-process. I will always be a student, experimenting
          on the ground, and trying to decipher Nature’s response to my
          different attempts to cultivate in the best possible way.
        </p>
        <p>
          <strong>
            How does the practice of natural farming influence your life,
            lifestyle, personal goal in life?
          </strong>
        </p>
        <p>
          My lifestyle has changed since I switched to organic farming. I
          started loving all living beings, birds and insects as well as all
          plants. I strongly approve the statement that says:
        </p>
        <p>
          “God created insects, man made them pest. God created plants, man made
          them weed.” I now enjoy seeing harmony on the farm. I became pure
          vegetarian, and this is now a rule on the farm, for every person who
          shares our food with us, whether it is the workers or whether it is
          the guests. I am now a Nature lover. Before my farming, I had no goal,
          it was just about making money. Now, I have a goal. My farming has
          become a goal in itself. It is a bound created between all living
          being on the farm.
        </p>
        <p>
          <strong>
            What is your opinion about the role of women on the farm; in
            society; in your personal life?
          </strong>
        </p>
        <p>
          The role of women is very important in Indian society. In my personal
          life, my mother and my wife have always been very supportive to me, in
          my mission of becoming a natural farmer. They have a great role in the
          task of processing and marketing the product. In Punjab, earlier, the
          women were fully part of the agricultural work, but after the Green
          Revolution, they were displaced outside of the farm, confined in the
          house. For the last 30 years, the traditional structure has been
          breaking down. As a result, women are now out of farming. They have
          the fundamental role of actually feeding the family. Nowadays, the
          biodiversity does not exist in Punjab , and has to be recreated
          artificially, but in the Past, when it was naturally there. The lady
          use to collect wild fruits and vegetable on their way back after
          bringing chapattis to their husband on the field, so they were really
          involved in farm. Unfortunately, it is not the case anymore.
        </p>
        <p>
          <strong>
            How do you deal with the social pressure to adopt consumerist’s
            behaviors?
          </strong>
        </p>
        <p>
          I don’t think I get any pressure from my family or friends to adopt
          consumerist behaviors. Once you get in harmony with Nature, working
          itself becomes leisure and a real pleasure. Now, I take everything as
          leisure.
        </p>
        <p>
          Bt cotton farmers are under constant tension and pressure because they
          invested a lot in seeds, fertilizers and pesticides and now they need
          to see the return. In my case, I am practicing zero-budget Natural
          farming. There is much less investment than under Chemical farming, so
          there is no pressure and no tension in my farming.
        </p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Vinod Jyani" />;
