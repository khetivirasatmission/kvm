import { Card } from "antd";
import { Link } from "gatsby";
import React from "react";
import PageLayout from "../components/PageLayout";
import SEO from "../components/seo";
import volunteer from "../images/volunteer.png";

export default () => (
  <PageLayout>
    <SEO title="Volunteer" />

    <h1>Become a volunteer</h1>

    <img
      src={volunteer}
      style={{ display: "block", margin: "0 auto", textAlign: "center" }}
    />

    <Card title="What are we looking for?" bordered={false}>
      <p>
        KVM needs help from individuals who want to donate their precious time
        and talent to save Punjab. Volunteers can work in any of sector
        according to their capacity and experience. Those who are interested in
        becoming part of ecological movement can associate with KVM in various
        capacities as Volunteer, Intern, Supporter and Campaigner. KVM will
        provide them chance to work intimately with communities, farmers,
        campaigners and activists. It will be a life-time experience for all
        enthusiastic souls. KVM has also undertaken broader issues of
        agricultural disaster, Environmental health crisis and particularly the
        health impacts of intensive agriculture, Globalization and WTO, issues
        related to food security , seeds and IPRs, GM Crops and Foods ,
        Corporate take-over of food and agriculture. KVM is constantly building
        a public opinion and civil movement through various public dialogues and
        discussions and engaging people from different walks of life.
      </p>
    </Card>

    <Card
      title="How you can contribute as a volunteer? 
"
      bordered={false}
    >
      <p>
        Whether you can help for just three to four hours per week, or many
        more, we can find something to suit your time availability and
        interests! Some examples:-
        <ul>
          <li>Contributing as a resource person.</li>
          <li>Can give training to our women groups.</li>
          <li>Maintaining mailing lists and other databases</li>
          <li>
            You can work &nbsp;among students and youth on environmental issues.
          </li>
          <li>
            Creating posters, information sheets and other material about
            Organics.
          </li>
          <li>Contributing articles for our website.</li>
          <li>
            Do research on one of the&nbsp;topics KVM&nbsp;is concerned about
            like natural farming, environmental health crisis.
          </li>
          <li>
            Organizing awareness campaigns around the themes of natural farming,
            livelihoods, impacts of pesticides, GM food, environmental health
            and conservation of nature.
          </li>
          <li>Short term snap studies on above themes.</li>
          <li>
            Sensitizing urban consumers regarding organic products by KVM
            farmers.
          </li>
          <li>Help us in documentation work.</li>
          <li>You can support &nbsp;or&nbsp;sponsor&nbsp;an event, for KVM.</li>
          <li>Promote KVM' s vision&nbsp;</li>
          <li>Fundraising</li>
          <li>
            Spread the message amongst your family and friends by discussing
            about our campaign and activities.&nbsp;
          </li>
          <li>Help us to update the website</li>
          <li>Write articles in newspapers or magazines</li>
          <li>You can sponsor any of KVM's campaigns</li>
        </ul>
      </p>
      <p>
        If you belong to a different state or country, you can still help us
        from the place where you live. For more information, feel free to
        <Link to="/contact"> contact us</Link>.
      </p>
    </Card>
  </PageLayout>
);
