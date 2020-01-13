import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import Profile from "../../components/Profile";
import SEO from "../../components/seo";
import farmer from "../../images/farmers/sukhjeet-kaur.jpg";

export default () => (
  <PageLayout>
    <SEO title="Sukhjeet Kaur, Rori Kapura Village, Faridkot" />

    <h1>Sukhjeet Kaur, Rori Kapura Village, Faridkot</h1>

    <Row gutter={18}>
      <Col xs={24} md={24} lg={24}>
        <Profile designation="" image={farmer} />
      </Col>
    </Row>

    <Card title="" bordered={false}>
      <p>
        Sukhjeet Kaur had been growing vegetables for many years but using
        chemical inputs. After coming into contact with KVM activists, she
        switched to organic vegetable production. Her main motivation for
        switching to organic practices was a concern for the health of her two
        sons. She says, when I heard about the adverse impacts of chemicals, I
        was worried and did not want them to eat poisoned food anymore. She has
        been growing vegetables organically now for about two years. She says,
        “Yields have actually increased and the pest attacks have reduced as
        well. We grow only for household consumption, but sometimes when there
        is surplus, I sell them as well or give them to relatives. I am able to
        earn 50-100Rs a week. I also sometimes give the surplus vegetables to
        the worker who comes to gather cow dung in my house. After I had an
        operation, I was unable to do it myself.
      </p>
      <p>
        When she came to this village about 35 years ago, most people were
        growing cotton. But within the last 15 years, many farmers have shifted
        to paddy because it is more profitable even though it requires more
        water. There were also frequent pest attacks on hybrid cotton varieties.
        The amount of pesticides used on the cotton crop was excessive. It is
        much lesser with rice. But like many other women, she reiterates that
        women had a special relationship with cotton. She says, “in my childhood
        years, when indigenous cotton was cultivated, women would weave cloth on
        the spinning wheel, and then would weave bedspreads. There were
        extremely complicated weaves and designs that were made with the hand
        loom machines. Women were also connected to the work on the fields. They
        collected cattle dung, to make dried dung cakes for the chulha but also
        for organic manure. They carried tea and food to the fields for the men.
        They would churn the milk collected from the cattle at home to make
        butter, ghee and buttermilk. No one does all of this work anymore. It is
        true that women’s workload has reduced in some ways, but when we lived
        in large joint households, our workload was shared and there was more
        joy in doing it. Now in nuclear households, it is not even possible for
        the only woman to leave the house and visit relatives or go and sit at
        the neighbour’s house to chat for a bit. I leave the house only when it
        is absolutely necessary, because there is no one to look after it in my
        absence.
      </p>
      <p>
        In her garden there are as many as thirteen varieties of vegetables
        including pumpkins, guar beans, okra, and bitter gourd. She does most of
        the work herself. Her husband helps out with the weeding, because she is
        unable to bend for long periods of time. But she takes care of watering
        the plants and harvesting the vegetables. It takes her about an hour and
        a half every day to manage the garden. She says, “the vegetables cook
        faster, they are bigger and they taste much better”. Her experience has
        also influenced her neighbour, who is an anganwadi worker and started
        growing vegetables. However, while most of her relatives though are
        happy to take the home grown vegetables that she cultivates, they never
        think about growing them because it is hard work.
      </p>
      <p>
        Sukhjeet Kaur has adopted most of the practices that were explained to
        her by the KVM activists. Once in a while though she also enjoys
        experimenting on her own. For instance she recently boiled neem leaves
        with chili and sprayed it when she spotted insects on her plants. She
        makes and stores seeds for almost all of her vegetables by coating them
        with ash to keep them dry. Sometimes gets new varieties from the market.
        She has also been having conversations with her husband about using
        organic methods on their five acre farm, but they have not done it yet.
        She says, “when the pests attack, our immediate response is to use
        chemical sprays because we have been doing it for decades. My husband
        still thinks that if everyone else is using pesticides, there must be a
        reason for it. But if he sees another farmer cultivating organically and
        without incurring any losses, then he might consider transforming our
        farm. We have always used chemicals in minimally on our farm though. My
        husband uses only two sprays with rice, and one bag of urea per acre.
        Our yield is as much as others, and many times better than others. We do
        weeding manually on our farm. Farmers use urea/DAP despite being aware
        of their adverse impact on health, because our generation saw our elders
        doing it and do not know how to farm any other way. This will change
        gradually. The future is uncertain. Both my sons do not want to farm.
        Everyone wants to improve their status and do better than their parents.
        We also do not have enough land for both ours sons to be able to
        generate sustainable livelihoods.”
      </p>
      <p></p>
    </Card>
  </PageLayout>
);
