import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import ac1 from "../images/ac1.png";
import ac2 from "../images/ac2.jpg";

export default () => (
  <PageLayout>
    <SEO title="Advocacy and Campaigns" />

    <h1>Advocacy and Campaigns</h1>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={12}>
        <Profile designation="" image={ac1} />
      </Col>
      <Col xs={24} md={12} lg={12}>
        <Profile designation="" image={ac2} />
      </Col>
    </Row>

    <Card title="Campaigns against GM food" bordered={false}>
      <p>
        KVM has successfully led Anti GM campaign popularly known as “ I am no
        Lab Rat” in Punjab and Chandigarh strictly criticizing the Monsanto’s
        possession on our food chain and also its efforts to use us as guinea
        pigs with his plan to introduce Bt. Brinjal in India. The success of the
        campaign in Punjab and across the Nation can be seen from the fact that
        Jairam Ramesh, the then Environment and Forests Minister had declared
        moratorium on the introduction of bt. brinjal.
      </p>
    </Card>
    <Card title="Campaign against straw burning" bordered={false} />
    <Card title="Campaigns against pesticides undertaken" bordered={false}>
      <ol>
        <li>Campaign against Globalization 2005</li>
        <li>
          Campaign for elimination of pesticides and environmental health –
          2005, 2006, 2007, 2008, 2009
        </li>
        <li>
          Jal Yatra and Water literacy campaign on issue of water in Faridkot,
          Muktsar, Bathinda, Mansa and Sangrur districts. Eminent water warrior
          Rajinder Singh led this Yatra.
        </li>
        <li>Campaign for GM Free India 2005 , 2006 , 2007, 2008, 2009</li>
        <li>
          Campaign for Pesticide-Free Kitchen and Kitchen Gardens among women
          2009, 2010
        </li>
        <li>Campaign against Bt Brinjal 2008, 2009 , 2010</li>
        <li>Campaign against Crop Residue Burning 2008, 2009-10 onwards.</li>
        <li>
          Living Soil Campaign : A campaign for subsidizing ecological
          fertilizers in collaboration with Greenpeace 2010
        </li>
      </ol>
    </Card>
    <Card
      title="Initiating debate on ‘Green Agenda for Sustainable Punjab’"
      bordered={false}
    >
      <p>
        KVM has prepared a Green Agenda to bring the issue of environmental
        crisis and sustainable agriculture and development in public domain.
        This agenda is document or a suggestive out-line for building a
        partnership between government and people for crisis mitigation.
      </p>
    </Card>

    <Card title="Surveys and Field studies undertaken" bordered={false}>
      <ol>
        <li>Field study on Ecology, Health and Economic status of farmers</li>
        <li>Survey on farmers’ suicides</li>
        <li>Survey on Cancer in Jajjal</li>
        <li>
          Field study on Reproductive Health in Jajjal, Chaina, Dabrikhana, Jida
          and Bhotna
        </li>
        <li>Field study on impact of Bt Cotton on soil health</li>
        <li>Field study on impact of pesticide spray on school</li>
        <li>
          Field study on water crisis in Faridkot, Muktsar, Bathinda and Mansa
          district.
        </li>
        <li>
          Field investigation on impact of mealy bug infestation on Bt cotton.
        </li>
        <li>Epidemiological study on reproductive health in Malerkotla.</li>
        <li>
          Field investigation on impact of Bt cotton on animal health in Muktsar
          and Faridkot districts.
        </li>
        <li>Field investigation of RR Bt Cotton by MNCs in Bathinda</li>
        <li>
          Field investigation on Health and Water Crisis in Teja Roleha , Dona
          Nanka villages of Fazilka
        </li>
        <li>
          Field study of Water Crisis and Water Contamination alongwith Ghahhar
          river in Patiala and Sangrur districts
        </li>
        <li>
          Collaborative study with Greenpeace India on impact of Chemical
          fertilizers in contamination of drinking water
        </li>
        <li>
          Collaborative study with Greenpeace on Chemical fertilizers and
          destruction of Soil, Ecology and Health and its economic implications
        </li>
      </ol>

      <p>
        In the future KVM wants to do research on issues related to natural
        farming and environmental issues.
      </p>
    </Card>

    <Card title="Networking" bordered={false}>
      <p>
        KVM is working together with Farmer organisations, Academics, Media,
        Medical Professionals, and Environmentalists.
      </p>
    </Card>
  </PageLayout>
);
