import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import Profile from "../../components/Profile";
import SEO from "../../components/seo";
import farmer from "../../images/farmers/madan-lal.jpg";

export default () => (
  <PageLayout>
    <SEO title="Master Madan Lal, Bhulhowal, Hoshiarpur - A Mentor of Soil and Soul" />

    <h1>Master Madan Lal, Bhulhowal, Hoshiarpur - A Mentor of Soil and Soul</h1>

    <Row gutter={18}>
      <Col xs={24} md={24} lg={24}>
        <Profile designation="" image={farmer} />
      </Col>
    </Row>

    <Card title="" bordered={false}>
      <p>
        Teachers are rightly called nation builders. They not only give the
        right tools to students for them to be thinking individuals, but also
        serve as examples of hard work, upright character and futuristic
        thinking. Master Madan Lal personifies these traits to perfection.
      </p>
      <p>
        A retired mathematics teacher, he practises natural farming on 3 acre of
        his fields and sells natural medicines and other products on his shop at
        Bulhowal village near Hoshiarpur. From somebody who did not know
        anything about farming till seven years back, the man knows by heart the
        growth patterns and nutritional requirements of all crops he is
        cultivating today.
      </p>
      <p>
        This turnaround came about because of his deep concerns about nature and
        human lives. “Earlier, I used to give the farmland on contract since I
        had never done farming. But attending a natural farming workshop at a
        farm of Pingalwara Society near Amritsar made me realise that producing
        healthy food is the utmost service one can do,” the 69-year-old explains
        with a charming smile. The declining number of birds and increasing
        intensity of diseases, like cancer and genetic disorders, started making
        sense as he realised that chemical farming is taking toll of nature. “If
        we keep going at this rate, these poisons will eliminate humanity. We
        have polluted our air by burning stubble and polluted soil and water
        through chemicals. Now, most people are forced to use costly water
        filters as pollution in underground water has reached non-permissible
        limits. Why can’t we just stop using chemicals in fields and save our
        future generations,” he asks.
      </p>
      <p>
        An active member of Punjab Rationalist Society, Farms Produce Promotion
        Society (FAPRO) and village cooperative society, Master Madan Lal helped
        various organisations conduct natural farming workshops in his area and
        it was because of his efforts that nine other farmers stopped using
        chemicals. He also takes care of biodiversity when it comes to selection
        of crops. One can see gram and sugarcane growing alongside wheat while
        around 45 fruit plants occupy a 1300 square foot plot. In addition, a
        kitchen garden on his animal farm has multiple fruit and herb plants.
        Love for natural farming also led him to acquire the indigenous Sahewal
        cow. “The manure made from dung and urine of indigenous cows works best
        for natural farming. One cow can give enough manure to cultivate 30
        acres of land,” he claims.
      </p>
      <p>
        Mention organic farming and he is quick to restrain you. “Organic is a
        term given by corporates and government. First they fleeced us through
        chemical farming by promising big things and now as people are moving
        towards nature, they have brought in organic brand name. The small
        farmer, who has been doing natural farming for long, would lose again as
        the corporates will take over the whole market. And who knows they start
        selling chemical-laced food in garb of organic,” he sounds cautious.
      </p>
      <p>
        The tone gets optimistic as he starts talking about new developments in
        the field of natural farming. “Right now, we spend more money on labour
        but as this concept is gaining more ground, new implements are being
        developed which will make it easy for farmers to shift to chemical-free
        cultivation.” Master Madan Lal says this with experience of a teacher
        who has spent his life making men out of boys. Now he is showing the
        world how to live in harmony with nature.
      </p>
      <p>By Manu Moudgil</p>
      <p></p>
    </Card>
  </PageLayout>
);
