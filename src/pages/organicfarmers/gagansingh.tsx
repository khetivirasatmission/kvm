import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import Profile from "../../components/Profile";
import SEO from "../../components/seo";
import farmer from "../../images/farmers/gagan-singh.jpg";

export default () => (
  <PageLayout>
    <SEO title="Gagan Singh" />

    <h1>Gagan Singh</h1>

    <Row gutter={18}>
      <Col xs={24} md={24} lg={24}>
        <Profile designation="" image={farmer} />
      </Col>
    </Row>

    <Card title="" bordered={false}>
      <p>Background: Not from Farming Family</p>
      <p>Size of Farm – 7 acres, 2 under organic</p>
      <p>Average Number of Farm Workers: Himself</p>
      <p>Location: Barnala district, Punjab</p>
      <p>
        <strong>What led you to start natural farming?</strong>
      </p>
      <p>
        I was attracted by farming, and I was inspired by traditional songs by
        Yamla Jutt. He has written many songs about traditional farming and
        these inspired me to take up the practice. Farming allows me to stay
        close to nature, it is just like worship; you can get close to God
        through this work. This is why I started this natural farming.
      </p>
      <p>
        <strong>
          Did you have any role models when you started Natural Farming? Who
          helped you get started?
        </strong>
      </p>
      <p>
        At first I met Gurmail Singh Gunike who lives about 32 km from here.
        After that, I met Amarjeet Sharma and was deeply inspired. He has been
        my main role model in natural farming. My motive for this farming is to
        conserve the indigenous seeds. I want to collect the maximum varieties I
        can and distribute them amongst the farmers. KVM supported me by
        connecting me with the other farmers, visiting my farm, and offering
        suggestions
      </p>
      <p>
        <strong>What crops do you grow? How many cattle do you have?</strong>{" "}
      </p>
      <p>
        I grow sugarcane, fodder crop (barseem), wheat, grams, flax seed, pulses
        and sesamum. There should be four or five crops in one field. I grow
        millets and sorghum for home consumption. I still grow paddy and wheat
        using chemicals on 5 acres. I have three buffalos and two desi bulls,
        one I purchased from Sharma Ji.
      </p>
      <p>
        <strong>
          How did your friends and family respond to your decision to be an
          organic farmer?
        </strong>
      </p>
      <p>
        People say you don’t look nice working with these bulls, that I look
        medieval. So people make jokes of me. People thought I had gone mad.
        Even my father brought a tractor salesman to my farm and tried to
        convince me to buy, but I love to work with the bulls. I just thought, I
        will show you. I am in love with this work and want to show people it
        can be done.
      </p>
      <p> </p>
      <p>
        <strong>What natural farming techniques do you use?</strong>
      </p>
      <p>
        The best type of manure is made from leaves. I make a heap of leaves,
        pour cow manure and urine on it and allow it to sit. I use some spray
        derived from a green manure called aak.
      </p>
      <p>
        <strong>What struggles have you faced?</strong>
      </p>
      <p>
        Right now, the soil is not up to the quality of our ancestors, so it is
        difficult to plow it with bulls. It takes a long time so I can only do
        it on two acres right now. This kind of farming is very beneficial for a
        small farmer. Before I used to plow a large area with my bulls. It took
        such a long time that the moisture level in the soil went down which
        hurt the germination period. These traditional equipment is also not
        easy to arrange. The traditional craftsman are no longer there, so I
        needed to train the bulls on my own.{" "}
      </p>
      <p>
        <strong>
          Are there other people who have seen what you are doing and gone into
          natural farming?
        </strong>
      </p>
      <p>
        Some of my friends tried thinking it was the cheapest way to farm, but
        it was too difficult for them. One or two of my friends are very
        interested in natural farming and seed multiplying as a social work, but
        they are just helping me right now.
      </p>
      <p>
        <strong>What are your farming inputs?</strong>
      </p>
      <p>
        I have to purchase some cow dung for the fields. My Desi cows eat less,
        they need less fodder than these HF cows which can only do 4 or 5
        lactations in their lifetime and take up more resources. I have no
        problem feeding them. Other inputs include cow dung and goat manure.
        When I change my crop rotation using one dicot and one moncot, I will no
        longer need these inputs. I am the biggest follower of Sharma Ji, he is
        a saintly man and has multiplied many varieties of seeds.
      </p>
      <p>
        <strong>
          How can natural farming be promoted? How will you share these values
          with your family?
        </strong>
      </p>
      <p>
        We should advertise that people should at least do this for their own
        consumption. If people are growing for their own, the people in the
        cities may notice and demand that they also get chemical free food.
      </p>
      <p>
        I have one child, I will try to attach my child to the land, but it is
        their choice and I cannot pressure them. If a person has his own
        interest, he will do this work. This feeling must be genuine. I do this
        because I love to do it, if my child does not love it, then he should
        not do it.
      </p>
      <p>
        <strong>What do you plan to do in the future?</strong>
      </p>
      <p>
        I plan to continue to multiply seeds in the future. This way of farming
        is designed for a small area of land, so I don’t intend to spread it to
        the rest of my 5 acres. My main plan is to multiply seed, grow for my
        own consumption and work using traditional practices. If I completely
        switched on 7 acres, it may be too difficult for me to work in these
        traditional ways.
      </p>
      <p></p>
    </Card>
  </PageLayout>
);
