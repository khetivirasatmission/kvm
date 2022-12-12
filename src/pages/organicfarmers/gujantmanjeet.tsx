import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/gujant-singh.jpg";
import farmer2 from "../../images/farmers/manjeet-singh.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Gujant and Manjeet Singh</h1>

      <Row gutter={18}>
        <Col xs={24} md={12} lg={12}>
          <Profile name="Gujant Singh" image={farmer} />
        </Col>
        <Col xs={24} md={12} lg={12}>
          <Profile name="Manjeet Singh" image={farmer2} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>Background: From a farming family</p>
        <p>Size of farm: 12 acres, 5 natural farming</p>
        <p>
          Average Number of Farm Workers: Family run (He, Manjeet, father, wife)
        </p>
        <p>Location: Barnala District, Punjab</p>
        <p>
          <strong>Since your childhood, how has farming changed?</strong>
        </p>
        <p>
          When I was a child there was much more diversification. When paddy
          came twenty years ago, the diversification began to stop. We haven’t
          had millets in commercial production for 25 years now. We used to have
          big fields of grams intercropped with the wheat. I didn’t want to be a
          farmer as a child, I wanted to do some kind of job, but was forced to
          take on the farm to sustain the family.
        </p>
        <p>
          We are heavily dependent on agriculture, it is a part of everyone’s
          life. In our family, everyone has a role on the farm.
        </p>
        <p>
          <strong>Do you want to continue natural farming (To Manjeet)?</strong>
        </p>
        <p>
          "After coming in contact with KVM and switching to natural farming, I
          no longer want to send my son overseas, I want him to work on the
          farm," said Gujant
        </p>
        <p>
          "Before I wanted to study science and go abroad. Seeing my father
          start organic farming, I want to continue farming because I enjoy it,"
          said Manjeet. " I want to go even further with this farming and make
          this entire farm organic. I believe we can make a good income here. I
          am in science stream now, but would like to go for arts in university
          instead. If I work on the farm, I don’t need a job which requires any
          special degree. I can study what I want."
        </p>
        <p>
          <strong>Why did you switch to natural farming?</strong>
        </p>
        <p>
          I started to suffer from a heart problem. I thought that maybe
          chemical farming was the source of that problem. I was operating the
          whole system. Before I met KVM, I decided that this was not good. I
          didn’t know any organic farmers, but found information in newspapers
          about organic farming and it seemed to be a way out.
        </p>
        <p>
          After starting organic nine months before, my health problems have
          reduced to comfortable levels. Eating organic vegetables has a direct
          effect on your body. If I go to a wedding and I have some of the
          vegetables there, I don’t feel well. This is why people are demanding
          organic vegetables.
        </p>
        <p>
          <strong>
            Who has helped you make the transition? Did you have any role
            models?{" "}
          </strong>
        </p>
        <p>
          KVM is my main source of information. They brought some resource
          people from South India and have conducted workshops here. These have
          been very helpful. Ravdeep Singh has been one of my main role models.
          Also Nirmal Singh, he is a very dedicated man and his leadership has
          been easy to follow.
        </p>
        <p>
          <strong>
            What were the main struggles when you began natural farming?
          </strong>
        </p>
        <p>
          People were telling me I wouldn’t be able to do it, making fun of me.
          For me, there was a decrease in yield at first. There is a big
          learning curve, I have had to learn a lot about my fields. Some pests
          have come, but the main cause is the lack of fertility of the soil.
          After a year or two, I don’t think I will have any more problems.
        </p>
        <p>
          <strong>
            How have your principles on life changed since beginning natural
            farming?
          </strong>
        </p>
        <p>
          I have developed peace of mind. Before, I did farming to make money.
          Now, this farming is a religious work for me. I want to make my yields
          for quality and hope to cut the middleman out of the selling. I want
          to the produce to go from farm directly to the consumer. I have just
          begun selling at the organic shop in Barnala. Meeting the customers is
          new for me and a bit stressful right now.
        </p>
        <p>
          <strong>
            What crops do you grow? What inputs do you give to the soil?
          </strong>
        </p>
        <p>
          I grow Basmati, wheat, pulses, moong, and potatoes. I grow basmati and
          then vegetables. On two acres, I am growing organic wheat and will go
          for green manure in-between the basmati crop. I have three cows and
          four buffalos, but I still have to purchase about 15 trolleys of
          manure each year which costs about 5,000 rupees.
        </p>
        <p>
          <strong>What Natural Farming techniques do you use?</strong>
        </p>
        <p>
          I use jeevamrut, vermiwash, buttermilk, cow dung cake extract, garbage
          enzyme, barseem extract and other cultures. Vermiwash and cow dung
          cakes have been the most effective.
        </p>
        <p>
          So far we have reduced our water consumption by about 30%. Next year,
          we will use mulching to bring this number to 60 or 70%. This will also
          reduce the amount of hoeing we have to do and control the weeds.
        </p>
        <p>
          <strong>
            What advice would you give to a farmer ready to switch to Natural
            Farming? How does your income compare?
          </strong>
        </p>
        <p>
          First, farmers should at least farm organic for their own consumption,
          for your own health. Plant trees and diversify your crop. You should
          have 4 or 5 crops and a multicrop pattern. The sowing should have a
          proper gap or there may be disease problems.
        </p>
        <p>
          As to compare to chemical farming, we are currently having the same
          income. We believe that in the future we will have even greater
          profits in natural than in chemical.
        </p>
        <p>
          <strong>
            What is keeping natural farming from becoming mainstream? What would
            be your message to people living in the cities?
          </strong>
        </p>
        <p>
          First thing is mindset, they don’t believe organic can be economical
          and is more of a regression. People are also trying to get out of
          farming and into more business jobs. Finally, people don’t like to
          work hard. I don’t think there are any risks in natural farming. We
          can promote through social media websites.
        </p>
        <p>
          Consumers should visit the farms of the organic farmers. They must
          know from where is their food coming from and how is it grown? You
          should give just as much research for your food as you do about your
          next mobile. We have to eat three times per day, three times per day
          we are putting these foods into our bodies, shouldn’t we know if it is
          healthy for us.
        </p>
        <p>
          <strong>
            Have many of your young friends taken up organic farming or started
            eating organic?
          </strong>
        </p>
        <p>
          My young friends are not interested in any kind of farming, chemical
          or organic. They want to go abroad or to open their own business. I
          can’t even convince them to eat the organic vegetables. Maybe 5-10%
          are interested in eating organic, but are not willing to grow it.
        </p>
        <p>
          <strong>
            What are your thoughts on the government’s agricultural policy?
          </strong>
        </p>
        <p>
          The policies are very dangerous for farmers and consumers, they do not
          support our health. The government supports chemicals and western
          things like low interest loans on new cars, new tractors. The policies
          should be about farmers, not the companies. They should not hurt us.
        </p>
        <p>
          <strong>What do you plan for the future?</strong>
        </p>
        <p>
          I am constructing a new house on the other side here, but I am
          planning to plant many trees there. I will go for organic milk and
          organic fruit such as Pomegranate, gooseberry, citrus and others. I
          will also install a biogas plant. I hope to open a shop in the nearby
          town in order to market my product.{" "}
        </p>
        <p></p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Gujant and Manjeet Singh" />;
