import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import Profile from "../../components/Profile";
import SEO from "../../components/seo";
import trent from "../../images/trent.jpg";

export default () => (
  <PageLayout>
    <SEO title="Conducting Research with KVM: A PhD Student’s Perspective" />

    <h1>Conducting Research with KVM: A PhD Student’s Perspective</h1>

    <Row gutter={18}>
      <Col xs={24} md={24} lg={24}>
        <Profile
          designation="Trent Brown from University of Wollongong, Australia"
          image={trent}
        />
      </Col>
    </Row>

    <p>
      I spent two months with the Kheti Virasat Mission (KVM) from late 2009 to
      early 2010 as a part of my research for my doctoral thesis. My research
      focused on KVM as a social movement and aimed to explore the methods they
      are using to drive social, economic, political and ecological change.
    </p>
    <p>
      What I found in KVM was a dynamic group of earnest and creative activists,
      exploring all of the possibilities that civil society has to offer.
      Recognising that the Green Revolution approach to agriculture has brought
      Punjab to a state of crisis, they see it as their urgent task to bring
      together all layers of society to sow the seeds for a bright new future
      for the state, based on the principles of justice and deep respect for
      nature.
    </p>
    <p>
      At the centre of KVM’s activity is Mr. Umendra Dutt (known affectionately
      as Umendraji). Umendra ji started KVM in 2005 as a people’s movement,
      after having become dissatisfied with the dominant approaches to civil
      society action, which he felt had become money-driven and toothless. He
      saw the issues that were developing across the state – the rise in
      cancers, depletion of water and soil resources, the contamination of
      rivers, and so on – and recognised that these should be of concern to all
      Punjabis. Any approach to social organising to address these challenges
      would have to be holistic, dynamic and participatory.
    </p>
    <p>
      Umendraji’s approach has been to involve people from diverse sections of
      society, according to the philosophy that every person can contribute to
      the movement in their own way, taking full advantage of their own
      position, talents, skills and opportunities. As Umendraji puts it, ‘a task
      for every person; a person for every task’. In practice, this has meant
      forging various ‘action groups’, mostly drawn along lines of profession,
      who focus their energies on creating change in specific areas.
    </p>
    <p>
      During my time in Punjab I travelled from district to district, hearing
      the various initiatives taking place under KVM’s broad umbrella.
      Everywhere I went, from Chandigarh to Firozpur, Amritsar to Bathinda, I
      was greeted with great hospitality and generosity. People gave up their
      time to participate in interviews for my research, and spoke with
      enthusiasm about the work they were doing.
    </p>
    <p>
      The central focus of all of this activity is the endeavour to promote
      natural farming among farmers. In the villages of Punjab the rates of
      cancer and reproductive health disorders are almost as high as the
      farmers’ debts. Many farmers are starting to see natural farming as an
      appealing alternative, as it requires less expenditure on inputs and
      allows them to safeguard their families from the various illnesses that
      are enveloping Punjab as a consequence of environmental toxicity. KVM has
      mobilised considerable energy and resources to help support farmers who
      have been willing to make this bold transition away from chemical
      agriculture. They provide them with the technical and moral support to try
      new techniques based on ecological principles.
    </p>
    <p>
      Alongside this, KVM is facilitating a blossoming movement among the
      village women of Punjab. In many respects, women have been the worst hit
      by Punjab’s health crisis: Rates of cervical and ovarian cancers are
      especially high, and women are often given the task of caring for those
      who become afflicted with illness. Village women are now teaming up with
      KVM in order to confront this nightmare. They have contributed to the
      movement in various ways - by encouraging men in the villages to adopt
      natural farming, by growing their own vegetables for the family in kitchen
      gardens and by reviving traditional recipes involving nutritional
      ingredients like millets, in order to improve the diet and health of their
      communities.
    </p>
    <p>
      Since people living in the cities are also consuming the food contaminated
      with chemical residues, it is equally important to bring the message of
      natural farming to them. As such, KVM has organised several action groups
      in the cities to raise awareness and change public attitudes. Particularly
      important is the Environmental Health Action Group, which consists of
      medical doctors, practitioners and public health experts who have spoken
      out against the health crisis enveloping the state. They are pushing a new
      research agenda to try to better understand and document the health
      problems of Punjab. They have also made efforts at informing the public of
      the organic connections between unhealthy ecosystems and unhealthy human
      beings.
    </p>
    <p>
      KVM recognises the value of research and nurtures positive relations with
      students and academicians alike. They see a dual benefit to involving
      students in the movement: on the one hand, it sensitises a new generation
      to some of the most burning social and ecological issues of our time; on
      the other hand, it may give rise to research findings which can further
      contribute to their mission of creating a more safe and sustainable
      Punjab. Whether it is post-graduate students conducting independent
      research, interns or just friendly visitors, KVM is extending an open
      hand.
    </p>
    <p>
      KVM is interested in forging collaborative relationships with students and
      researchers. They prioritise research which can be mutually beneficial. As
      the movement has diverse branches it also has diverse research needs. I
      would encourage all of those interested in conducting research with KVM to
      get in contact with relevant representatives in the early stages of
      formulating research questions and aims. Start a conversation about
      research into a more sustainable agriculture and sustainable Punjab. In
      that way, it will be possible to formulate research which not only
      contributes to the body of knowledge, but also can be of some practical
      use to those in the frontlines of social transformation.
    </p>
  </PageLayout>
);
