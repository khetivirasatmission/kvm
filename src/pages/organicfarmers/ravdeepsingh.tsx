import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/ravdeep-singh.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Ravdeep Singh</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>Background: MA Defence Studies, Grew up on farm</p>
        <p>Size of Farm: 11 Acres</p>
        <p>
          Average Number of Farm Workers: One Full time, 5-6 part time depending
          on the season
        </p>
        <p>Location: Farwahai village, Barnala District</p>
        <p>
          {" "}
          <strong>
            What was your role as a chemical farmer and what were your main
            worries?
          </strong>{" "}
        </p>
        <p>
          Before, I was of very aggressive nature. I was easily agitated. I was
          always worried about yields about getting newer, bigger equipment. I
          knew that using chemicals was dangerous to people’s health, but I was
          concerned about my profits while my loan debt continued to increase. I
          was in the rat race.
        </p>
        <p>
          <strong>What caused you to switch to Natural farming?</strong>
        </p>
        <p>
          My mother died of cancer in August 2011. In 2009 we came to know that
          she had cancer. For three years going from this hospital to that
          hospital I came to know what are the causes of cancer and to know the
          effects of pesticides. I just thought, my mother has cancer, I don’t
          want to be the cause of cancers in other people. Everything which
          comes off my farm should be healthy and poison free. Initially, I had
          very few resources and was worried my yields would go down, so the
          first year I grew on one and a half acres.
        </p>
        <p>
          <strong>
            What support did you get in making the change from chemical to
            natural farming?
          </strong>
        </p>
        <p>
          When I started, I didn’t have much knowledge on natural farming.
          Someone told me about the Pinglewara trust, so I went there, saw their
          farm and was very impressed. They gave me a small book by Subhash
          Palekar. After my first crop of wheat, I attended a training workshop
          of Kheti Virasat Mission (KVM) in a local village. From that workshop,
          I decided to do 2 more acres. The next month, I attended a lecture of
          Dr. Amar Singh Azad. He spoke on the devastating health status in
          rural Punjab. The information was shocking, I decided to make a
          complete change to organic on my 11 acres immediately. After, I
          attended workshop trainings (with KVM support) in Bangalore,
          Hyderabad, and Gujarat. KVM staff also frequently visited my farm and
          gave suggestions.
        </p>
        <p>
          <strong>
            How did your life/life principles change after changing to natural
            farming?
          </strong>
        </p>
        <p>
          Farming became something I really enjoyed doing. In chemical farming
          there is only monoculture, but in natural, you have to diversify. It
          is a constant challenge to the mind. I see new things coming every
          day. Every time I do a new work, with different crops. It is
          interesting. In many ways my way of thinking has changed. About
          farming, about life, about family, my mind is very easy now and I can
          enjoy life. Natural farming is not profit-oriented. If you meet a
          natural farmer, you can see that they are very happy and live a slow
          life. If unseasonal rains come, I am not worried. I am out of the rat
          race now.{" "}
        </p>
        <p>
          <strong>
            Does changing to natural farming require a decrease in income or
            quality of living? How have you reduced your input costs?
          </strong>
        </p>
        <p>
          Up to now, my net income in hard cash has been equal, and now
          beginning to increase. But my income in other things have gone up. I
          am mentally and physically relaxed, I am eating good things from my
          farm, and I am selling healthy things to other people so I have peace
          of mind. During chemical farming, I was spending about 1 lakh on
          chemical inputs per year. In organic, I have had to spend 25,000 per
          year on cow dung inputs. Next year, I will make my own compost using
          4-5 trolleys of cow dung from the onsite dairy and paddy straw. I
          think this will cost me up to 6,000 to 7,000 in labor cost only. For
          my basmati, I am spending less on inputs and my yields have remained
          the same or even increased compared to chemical! I love to travel. One
          or two times a year, I go on long motorbike rides. Between harvests I
          have plenty of time to spend with my family. Sure, I have to spend
          more time in my fields, but it is time that I enjoy.
        </p>
        <p>
          My other inputs are diesel, Jantar seed (green manure), and labour. I
          do less ploughing now, so my machinery use has gone down by 50%,
          further reducing my costs. I am now selling a great deal of my
          chemical machinery. Two or three years before I was thinking I needed
          to take a big tractor of 50 horse power to replace my 35 horse power
          tractor. I would have had to take loans for 2.5 lakh more. But I
          thought, why do I need big machinery.
        </p>
        <p>
          We are using 60% less water in natural farming. All of these chemicals
          are salts, they take up more moisture just like putting salt on your
          tongue. We also reduce water loss with mulching. The humus-like soil
          is able to hold water in it for longer time.
        </p>
        <p>
          <strong>
            What crops do you cultivate and what is your crop rotation?
          </strong>
        </p>
        <p>
          My main crops are basmati, then wheat and finally a green manure crop.
          Two crops for me and one for my land. On three acres, we are growing
          some cereals, pulses, bajra, moong, maize, mustard, and fodder. We
          have intercropped five crops in wheat: mustard, fenugreek, two types
          of grams, and coriander. In moong we are intercropping bajra, maize,
          and sorghum. In basmati bunds, we grow lady finger, bajra and sorghum.
          There is no monocropping. For vegetable crops, we sow 10-15 types on
          raised beds on two acres. I mix all of the vegetable seeds and then
          spread them randomly. The pests get confused and so there is little
          chance of attack. I have set aside one acre for a
          Horti-Silvi-Pastorial system (Orchards+Forestry+Livestock) using an
          indigenous breed of cows.{" "}
        </p>
        <p>
          <strong>
            What kind of natural farming techniques do you use? Have you made
            any innovations?
          </strong>
        </p>
        <p>
          We make some natural cultures to spray before paddy. They spray
          Jeevamurt, Gurvamurt, Garbage Enzyme, Biodynamic cow pats, paddy straw
          extract, basemen with cow dung/ urine extract. These are very powerful
          sprays, chemical sprays cannot compete with them. When I spray
          sometimes my neighbor farmers would see the results and say what did
          you do? We get better growth, more flowering, and everything. Quality
          of production has vastly increased. Each time we use these sprays we
          learn on which crop do they work. When we see it work we can determine
          which spray works on which crop. We share these practical experiences
          among farmers through KVM and we develop a network. Green manuring,
          mulching and enzyme sprays have been very effective to develop humus.
          For innovations, I was the first to try paddy extract and was able to
          get good results. So it has spread from there. I am also having
          success with a biodynamic spray made from eggs, jaggery, lemon juice
          and kapur (used in aruvedic medicines, like mint). It has helped
          increase flowering on mustard and pea crops.
        </p>
        <p>
          Last year, I found an indigenous mustard crop in my field. I decided
          to protect it. Using a technique called nipping (clipping the top of
          the plant), 7 or 8 new branches formed and the mustard plant grew
          double or triple. From the one plant, I yielded 375 grams of mustard.
          I kept the seed. Conventionally, a good yield of mustard is 6 quintal
          per acre. We calculated the potential yield for this crop could be
          above 20 quintals. Next year we will try in one acre and, between the
          4 ft spacing, we will plant grams. No water is required. It is not
          that I am doing these experiments, but nature is pushing me to do
          them.
        </p>
        <p>
          <strong>
            What kind of problems did you face at the initial stages of natural
            farming?
          </strong>
        </p>
        <p>
          At first, I faced the problems of weeds. I thought I needed to rid the
          field of all the weeds. In this crop, weeds have not been a problem. I
          realized that weeds do not harm your crop. If they are in certain
          number, they will help your crop. KVM introduced me a green manure
          called Aurogreen which consists of 10-15 seeds which is sown (10-15
          kilo per acre). Instead, I use only 2 kilo of Jantar per acre and
          allow some of the weeds that I want to stay in the field. This fixes
          nitrogen, maintains soil pH, it reduces alkalinity by absorbing the
          salts. Weeds are more powerful than our crops and when they are
          mulched they put all kinds of powerful nutrients back into the soil.
          Before sowing my crop (basmati), I will cut the weeds and mulch them
          into the soil.
        </p>
        <p>
          Up to today, it is very hard to find desi seeds. I have bought seeds
          from Bangalore and Gujarat and I am multiplying them. Some of the KVM
          farmers work a lot on seeds and they gave me some seeds. Slowly the
          seed banks are growing.
        </p>
        <p>
          In wheat, the yield has decreased, but we are working on new
          techniques which are giving promising results. In vegetables, the
          yield does not decrease, but they take much longer to reach maturity.
          For cabbage and cauliflower we used to harvest in 70-80 days, now it
          takes 110-120 days. I used to have three commercial crops, now I give
          one back to the land in the form of green manure.
        </p>
        <p>
          <strong>Do you have difficulties marketing your crop?</strong>
        </p>
        <p>
          I don’t have many problems. If my yield is okay (such as with
          Basmati), I can sell in the open market. I have been selling produce
          at a local store and do my marketing there. I really enjoy it. I
          learned from consumers that it (organic) tastes better, it is
          preserved for many more days. These things they tell me, I don’t ask.
          Every day, I am getting phone calls about my wheat, I have to tell
          them to wait until after I harvest. During chemical farming, I had no
          contact with the consumer, I just delivered to the market. Now, it
          feels good to meet the customers. When people tell you that what you
          are doing is good and visiting my farm, it feels good.
        </p>
        <p>
          <strong>What are the risks of Natural Farming?</strong>
        </p>
        <p>
          If you don’t operate within the principles of natural farming, yields
          may be low, so one needs to keep an open mind. The second risk is that
          the farmer doesn’t know how to market his yield. The dry crop is easy
          to market, but vegetables are perishable and so difficult to market.
        </p>
        <p>
          <strong>
            Why hasn’t natural farming been popularized and how can we better
            promote it?
          </strong>
        </p>
        <p>
          People’s mindset. In Punjab, the mind is all about hard cash. You can
          tell farmers all about the health impacts and the first question they
          will ask is, “What is the yield?” Natural farmers are in profit. They
          may have a small tractor, but they don’t have big loans. People are
          not willing to commit without government support.
        </p>
        <p>
          At first, people did not take me seriously, they said this is not
          possible. After seeing my basmati crop last year (18.5 quintals per
          acre) people were impressed and now three people have tried natural
          farming in my village. A fourth person will grow organic paddy this
          year.{" "}
        </p>
        <p>
          <strong>What are your views on government policy?</strong>
        </p>
        <p>
          Now agricultural policies are against farmers. They have allowed open
          air trials for GM crops, which is very dangerous. Farming should be
          pushed to grow certain crops which match the particular region. Punjab
          should not be growing the majority of the rice in India. The rice
          produced in Punjab is not of good quality, it is not eaten anywhere in
          India. All of the states have their own traditional varieties. The
          rice here goes to a central government pool FCIE. This is stored and
          during emergency times they give the rice. Otherwise, it is spoiling
          in their warehouses.
        </p>
        <p>
          There is no market in Punjab for organic food, so there is no money in
          it for Artia (middle-men/moneylenders). If the government supports
          organic agriculture, the market will be created. If government support
          or policy is there, then organizations like KVM and Pingalwara trust
          will be able to convert all of Punjab to natural farming in 5-7 years.
          Karnataka government has its own state organic policy and their
          agricultural department helps people to convert. So they have had a
          high rate of switching to organic. KVM has started a signature
          campaign against GM which is being sent to the prime minister. Last
          August, 2-3000 farmers went to protest GM crops in Delhi organized by
          KVM.
        </p>
        <p>
          <strong>What do you plan for the future?</strong>
        </p>
        <p>
          I am still trying to find the best spacing for the wheat crop. Before,
          I tried growing at 7 inches, but was unable to get maximum growth.
          This year I spaced the wheat at 12 inches, but I think this was too
          much. I will try 9 inches next year.{" "}
        </p>
        <p>
          Three acres have been selected for direct sowing (one acre fodder, two
          acres pulses, ½ acre paddy/ wheat combo). I would like to do as much
          direct sowing as I can to reduce the amount of tractor work and water
          required. In 2016, I am planning an open organic desi cow dairy. I
          have never seen this anywhere so I will start with between 5 and 10
          cows to see if one acre is enough fodder for them. The key is for this
          one acre to bring income of 40-50 thousand rupees per year to offset
          taking our basmati-wheat crop out of the acre. I have also started an
          orchard with bananas, mango and other fruits.{" "}
        </p>
        <p></p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Ravdeep Singh" />;
