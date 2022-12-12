import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/nirmal-singh.jpg";
import f1 from "../../images/farmers/mulching-basmati-residue.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Nirmal Singh</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>Background: From a farming family, business owner</p>
        <p></p>
        <p>Size of Farm: 28 acres, 9 in natural farming, the rest rented</p>
        <p></p>
        <p>Average Number of Workers: One full time, many part-time</p>
        <p></p>
        <p>Location: Bhotna Village, Barnala District, Punjab</p>
        <p>
          <strong>
            Please tell me about your childhood. What was it like?
          </strong>
        </p>
        <p>
          My age was 10, when pesticides and fertilizer came into Punjab. I
          studied chemical farming and saw the yields increase. Seven years ago
          I learned that this is not sustainable. In Punjab, there used to be
          very dense forest, but now there is only 6%. According to WHO, we need
          33% forest to support our population. The 5 rivers of Punjab used to
          be very clean, now they are polluted. There is a law which requires no
          pollution of natural waters, but the same politicians planned our
          waterways to pollute the sources. The area of Pubjab uses 17 % of the
          pesticides in India. Personally, I have seen overuse of pesticides
          over the last 20 years, the wells have dropped to over 350 feet. We
          are suffering from lung cancers. My mental situation has changed since
          I started Natural Farming. Now I feel that I am doing special work.
        </p>
        <p>
          <strong>
            How has your life changed since beginning natural farming?
          </strong>{" "}
        </p>
        <p>
          Now farming is a pious thing, it brings me joy to purify the water and
          work with nature. This work is similar to freedom work. Many people
          contributed to freedom work in the revolution and KVM feels this fight
          for freedom in farming is just as important. He was known to Dr. Amar
          Azad and then meant Umendra Ji and they converted me. It was a long
          process. You cannot be converted in one meeting. I understood my own
          ignorance. I attended the workshop arranged by KVM of Subhash Palekar
          and I studied some books. I feel that if a man goes to a religious
          place and worships, he feels satisfaction, I feel my temple is doing
          natural farming.
        </p>
        <p>
          <strong>
            At the initial stage, what major problems did you face?
          </strong>
        </p>
        <p>
          My first big mistake was not living on the farm. My farm is about 20
          km away from my home.The most effective fertilizer on the farm is the
          farmers’ footstep. I am doing a business along with farming and do not
          work the farm by myself, so I do not go to the farm often enough. Many
          people criticized me at the start, but I was dedicated at that time
          and so I ignored these problems.
        </p>
        <p>
          <strong>Where did you find your seeds?</strong>
        </p>
        <p>
          Some of the traditional vegetable seeds (mostly coker bit) are
          available. I was able to get some of the seeds from a seed bank run by
          Amarjeet Sharma in Channa village near Jaitu.
        </p>
        <p>
          <strong>
            What natural farming techniques do you use? What crops do you grow?
          </strong>
        </p>
        <p>
          The first thing to do is make your soil healthy. If you have a healthy
          soil, pest problems will be less and the crops will have a strong
          immune system. In humans, the immune system saves us from many
          diseases. The soil is living and is the immune system for the plants.
          If the soil is strong than the soil will save the crop from diseases
          and pests. Just as allopathic medicine can weaken the immune system,
          so can pesticides weaken the soil. In less than nine years, desi
          cotton has been almost completely eradicated from Punjab.
        </p>

        <p>
          Second of all, they stopped burning all of the paddy straw in their
          field and composted it. In the first year, my wheat crop was very
          weak, discouraging. After, I added a great deal of cow dung to the
          field which really worked. Now, I am using aurogreen in the field each
          year and irrigate with a cow dung mixture. All of the residue should
          be completely be put back in the field with a mixture of cow dung and
          urine. Only directly after harvest is the ground directly exposed to
          the sun.{" "}
        </p>
        <p>
          I grow vegetables. At first, all of the people in my village were
          talking about how they could not find any pesticide free vegetables,
          so I took the challenge. Subash Sharma came and stayed in my house and
          convinced me to start this work. After his winter harvest people in
          the village began to believe it was possible. For 1 ½ years I grew
          almost exclusively vegetables before switching to mostly paddy and
          wheat. The agricultural chief came to my field and saw how he grew
          vegetables. I gave the same answer informing him that when the soil is
          healthy the crop will not be affected by pests.
        </p>
        <p>
          In vegetables and basmati, the yields have been good. For wheat, our
          yields have yet to match that of chemical farming.
        </p>
        <p>
          <strong>What inputs do you apply and how are they applied?</strong>
        </p>
        <p>
          I don’t have livestock, so I have to purchase about 10-15 trolleys of
          cow dung per year (300 rupees per trolley) from a local natural
          farming enthusiasts. I also apply aurogreen seeds (green manure).
        </p>
        <p>
          <strong>How do you manage weeds?</strong>
        </p>
        <p>
          Weeds are controlled manually from soil and then mulched. In addition,
          he controls the weeds with aurogreen. Some pest may also control the
          weeds.
        </p>
        <Row gutter={18}>
          <Col xs={24} md={24} lg={24}>
            <Profile designation="Mulching basmati residue" image={f1} />
          </Col>
        </Row>
        <p>
          <strong>What problems do you continue to face?</strong>
        </p>
        <p>
          One year ago, we had some cows, a non-desi cow. Now we are thinking of
          getting a desi cow. There was always this cow dung available. In
          villages, they used to herd all of the free cows in one place in the
          village to deposit manure. In our traditional system, we think that
          the cows are our mother. In chemical farming there is no place for
          cows. We are a part of nature, not the owner. In natural farming, we
          go with nature’s desire. Natural farming is just in a small area right
          now, they are hard to find. Even farmers here do not have desi cows,
          they are all worshiping American cows. In India, cow beef is not eaten
          openly. This is the major problem that hff cows have caused. After 4
          or 5 lactations, they are ready for slaughter, but here you cannot
          slaughter them. After a short time, they are simply eating up
          resources.
        </p>
        <p>
          <strong>How do you market your product?</strong>
        </p>
        <p>
          For wheat, we organized many meetings in the city and spread awareness
          to the consumers to buy it organically. After they came to the
          understanding, they demanded organic wheat from me.
        </p>
        <p>
          <strong>
            What is your view of the current government policy? Can Natural
            Farming be done on large scale?
          </strong>
        </p>
        <p>
          Organic farmers have lost their traditional knowledge. The government
          is not interested in helping them. They are aligned with the chemical
          companies who do not want to stop their market, but rather monopolize
          the seeds and inputs. I think natural farming can be done on a large
          scale, but slowly. Government does not want the farmers to switch.
          Many companies will love if natural farming gets big. They are aware
          of this fact. We are seeing these common causes of cancer in people
          from drinking the polluted water. I am hopeful for the future though,
          if a deep crisis occurs, people will convert. I am trying to do my
          part and helping people who want to change. Before people thought I
          had lost my mind, but now every farmer in my village has a garden for
          their own consumption. People will not listen by talk, so we are
          trying to build model farmers. If you prove the effectiveness of
          natural farming in one village, others will follow the example.
        </p>
        <p>
          <strong>What do you plan for the future?</strong>
        </p>
        <p>
          I hope to make my field a model farm to come and see and be inspired.
          My village is the first in this district to have 100% organic kitchen
          gardens and a majority of the farmers in the village grow some organic
          wheat and paddy. This is the first year we will try growing paddy
          without paddling. This is not a natural process and we hope to be able
          to reduce water use by 50% in our paddy fields. I sell my paddy in the
          open market.{" "}
        </p>
        <p></p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Nirmal Singh" />;
