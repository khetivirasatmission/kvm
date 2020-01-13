import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import Profile from "../../components/Profile";
import SEO from "../../components/seo";
import farmer from "../../images/farmers/avtar-singh.jpg";

export default () => (
  <PageLayout>
    <SEO title="Comrade Avtar Singh, Chaharke, Jalandhar - A farmer with midas touch" />

    <h1>
      Comrade Avtar Singh, Chaharke, Jalandhar - A farmer with midas touch
    </h1>

    <Row gutter={18}>
      <Col xs={24} md={24} lg={24}>
        <Profile designation="" image={farmer} />
      </Col>
    </Row>

    <Card title="" bordered={false}>
      <p>
        {" "}
        It’s difficult to miss Comrade Avtar Singh and his motor bike. Both of
        them live at Chaarke village near Jalandhar and make their presence felt
        in their own unconventional way. The bike runs on electricity while Mr
        Singh swears by organic farming, the two concepts yet to get their due
        in Punjab where subsidies on diesel and agrochemicals lure farmers.
      </p>
      <p></p>
      <p>
        Talk to the old man and he narrates how his family has been dedicated to
        the cause of environment and humanity for many years. “I had been
        experimenting with natural/organic farming for some time, but lack of
        guidance always stopped him from shunning fertilizers and pesticides
        altogether. The moment of reckoning came when my nephew died of blood
        cancer in 2005. I decided that to save my family and others from this
        danger, I have to go chemical free,” ,” he shares. Thankfully, his two
        sons stood by his decision and today they don’t use any chemical on 12
        acre of their farms.
      </p>
      <p></p>
      <p>
        What also came as a good motivator was a pilot scheme launched by
        organic wing of the state agriculture department which promised Rs
        10,000 per acre to those who start chemical-free farming on 5 acres.
        Though the money never came, Comrade Avtar Singh got some basic
        information from the department. As the interest rose, he also visited
        the organic farm of Pingalwara Society near Amritsar and got in touch
        with Kheti Virasat Mission (KVM) in 2012 through a friend. Having
        attended several workshops and with hands-on experience, the old man,
        whom people mocking called ‘insane’, has turned into a much sought after
        teacher who knows everything about going organic.
      </p>
      <p></p>
      <p>
        This turnaround came as other farmers noticed how the yield has
        increased in his farm with lesser inputs. The chemical fertilzers have
        been replaced with natural ‘Jeev Amrit’ which has cow dung, neem leaves,
        jaggery and other easily available natural items as ingredients. On the
        other hand, lassi (butter milk) gives pesticides a good run for their
        money. Comrade Avtar Singh also stopped burning the straw. “With organic
        farming, the yield increases gradually with each passing year as the
        soil, spared of chemical onslaught and given natural inputs, replenishes
        its nutrient value. So, the farmer needs to be patient. Today, my fields
        are beating neighbouring farms in producing better quality and better
        quantity wheat and rice. The savings on seeds, pesticides, fertilizer
        and water add to the profit,” he says proudly. While no chemical is
        used, the seeds requirement has dropped to half and water use by 70 per
        cent.
      </p>
      <p></p>
      <p>
        A major aspect of organic farming is to make maximum of the naturally
        available resources. Using lesser seeds means more spacing between
        plants thus helping them receive ample sunlight and air ensuring better
        growth. “On the water front, farmers tend to go for flood irrigation
        which chokes the plant roots, reduces their growth and invites pests. To
        deal with these issues, more and more fertilizers and pesticides have to
        be used. But the fact is that plants only need moisture in the soil to
        grow. Irrigating alternate channels force their roots to spread out in
        search of water and hence ensure robust growth,” Mr Singh asserts.
      </p>
      <p></p>
      <p>
        The man has also found the good use for weeds. He believes that they
        should not be looked down as problematic as they help fix nitrogen and
        if buried increase biomass of the soil. Regarding the current situation
        of farming in Punjab, he has a simple take. “The agriculture in Punjab
        will start improving once farmers start going to their fields. Right
        now, they are only directing labourers over mobile phones. Once they
        start getting their hands dirty in the soil again, they will know what
        it demands. Then they will also stop listening to fertilizer and
        pesticide companies which advise extensive and blind use of their
        products,” he says. But he’s not the one to be pessimistic. “My crops
        fetch better price due to their quality. Every day I get calls from
        farmers seeking guidance on how to go organic. This means number of
        people wanting to grow and buy organic food is growing with each passing
        day. That has to be because we can’t survive without aligning with
        nature,” he quips.
      </p>
      <p></p>
      <p>Contribution By Manu Moudgil</p>
      <p></p>
    </Card>
  </PageLayout>
);
