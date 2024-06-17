import { Button, Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import DomesticDonate from "../components/DonateButton"; /*  */
import FCRADonate from "../components/FCRADonate"; /*  */
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/Seo";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Contribute </h1>

      <Card title="Kheti Virasat Mission" bordered={false}>
        <p>
          A Movement, Born out of Compassion. With Concern about agro-ecological
          &amp; environmental health crisis and Committed to take on the
          challenge of Ecological Reconstruction of Punjab
        </p>

        <p>
          For the last thirteen years, farmers, different community groups and
          individuals associated with the Kheti Virasat Mission (KVM) have been
          engaging with and furthering the cause of natural farming in the
          northern state of Punjab in India. As the largest recipient of Green
          Revolution in the country, the state of Punjab is today witnessing its
          biggest food, farm, health, ecological and civilizational crisis than
          ever before. This is ironic for a state known as the land of five
          rivers and one where life was synonymous with prosperity and
          abundance.
        </p>
        <p>
          Even though Punjab holds only 2.5% area of agricultural land in the
          country it consumes 18% pesticides used in the country. The people of
          the state are facing multiple environmental toxicity of pesticides and
          other agro-chemicals, heavy metals and environmental pollution caused
          by ecologically unsustainable agricultural practices. The water
          sources are either polluted or destroyed or dried-up.
        </p>
        <p>
          KVM feels that there is an urgent need to pro-actively work towards
          restoring faith in Punjab's traditional farming system through a
          reconnect with nature and natural systems. At the same time there is a
          crucial requirement to work actively towards a consistent engagement
          with a policy discourse where Punjab's model and its impacts needs to
          be exposed and learnt from. Central to KVM's work is also to bring
          back women in the decision making sphere, a heritage that current day
          Punjab has lost out on.
        </p>
      </Card>
      <Card title="Four R's Approach" bordered={false}>
        <p>
          In order to work towards its goal, KVM has adopted an approach to its
          activities known as Four 'R's
        </p>
        <p>
          (a) Restore a network of farmers, scientists, consumers, media on
          reclaiming Punjab's agriculture from the hands of hybridization and
          modern agriculture biotechnology
        </p>
        <p>
          (b) Revive most creative and spiritual practices like Nanak Kheti,
          Guru Nanak's teachings and showcase that it can work in today's fast
          growing times too.
        </p>
        <p>
          (c) Recreate an ownership and connection with traditional foods (Bebe
          Di Rasoi)-what we demand to eat, will grow in our fields.
        </p>
        <p>
          (d) Resurrect a non-commodified, biodiversity agenda which is long
          forgotten in Punjab's farming policy and political frame.
        </p>
      </Card>
      <Card title="How you can contribute?" bordered={false}>
        <p>
          KVM is a large network of people from all walks of life who have come
          together to work for a better Punjab. The organization relies
          substantially on support and donations from all concerned about
          Punjab, its land, river, air and people.
        </p>
        <p>We therefore request you to contribute by:</p>
        <ol>
          <li>
            Monthly, Quarterly or Annual Donations: Become a donor by sending in
            your contributions at the frequency that would suit you: You can
            send a regular monetary support on monthly basis.
          </li>
          <li>
            Adopt a Village: You can adopt a village or cluster of three
            villages and help us in spreading message of Sustainable Organic
            Farming.
          </li>
          <li>
            Sponsor an Organic Farmer: KVM needs support to utilize expertise of
            master organic farmers as resource persons to educate farmers all
            over the state. It will also help those farmers who are doing
            different experiments of natural farming in their fields without any
            personal interests.
          </li>
          <li>
            Sponsor any campaign or activity: You can sponsor any of KVM's
            campaigns on the following themes:
            <ul>
              <li>
                Awareness and Action Against Genetic Modification of agriculture
              </li>
              <li>
                Awareness and Action Against pesticides use in Agriculture
              </li>
              <li>Water Literacy &amp; Conservation Campaign</li>
              <li>Women action for Ecology, Agriculture and Food</li>
              <li>
                Establishing Model Ecological Agricultural Farms in Punjab
              </li>
              <li>
                Fight Action against Cancer and Reproductive Health Crisis
              </li>
              <li>Awareness and Action Against Crop Residue Burning</li>
              <li>
                Awareness and Community Efforts for Preservation of Seeds and
                Biodiversity
              </li>
            </ul>
          </li>
          <li>
            Sponsor and Support Festivals, Meetings, Public Dialogues: You can
            also support us by sponsoring festivals like Bebe-Di-Rasoi and
            Nav-Trinjan or issue specific seminars and public dialogues
          </li>
          <li>
            Sponsor KVM's monthly magazine and publications: You can also
            support us by sponsoring our monthly magazine “Kudrati Kheti”. This
            is a monthly newsletter published by KVM. This is a strong
            information, education and communication medium. Your support is
            welcome both in terms of finances or your time to help design, build
            content, edit and disseminate this newsletter, including through the
            internet. You can also support communication and general awareness
            material published by KVM from time to time.
          </li>
          <li>
            You can also sponsor the work of any of the volunteers who are
            working with KVM. Your donation can provide a regular financial
            support to these volunteers.
          </li>
        </ol>

        <p>
          For the KVM movement, support of this kind is extremely valuable. We
          know that you will come forward not just with your financial support
          but with your dedication, concern, compassion and energy which is
          crucial to the spirit of KVM.
        </p>
      </Card>
      <Card title="Become a donor" bordered={false}>
        <Row>
          <Col xs={24} md={12} lg={12}>
            <h4>For Indian Citizens only</h4>
            <p>
              For Indian passport holders, Indian bank account holders, or
              transacting with cards issued by Indian banks.
            </p>
            <Button
              type="primary"
              size="large"
              href="https://rzp.io/l/domestic-donate"
              target="_blank"
              style={{ marginBottom: "10px" }}
            >
              Donate now
            </Button>

            <blockquote>
              Donations made to Kheti Virasat Mission within India are exempted
              from Income Tax under 80-G
            </blockquote>

            <h4>You can also send your Cheque/Demand Draft payable to:</h4>
            <address>
              <strong>Kheti Virasat Mission Trust</strong>
              <br />
              <strong>STATE BANK OF INDIA</strong> (Bishnandi Bazar) <br />
              <strong>Account No.</strong>: 30325986397
              <br />
              <strong>Branch</strong>: Jaitu <br />
              <strong>IFSC Code</strong>: SBIN0007745
            </address>

            <p>
              For us any small or big amount is welcome. So anything from
              Rs.500-1000 to any other upper limit which you may desire. For
              further details please{" "}
              <strong>contact: info@khetivirasatmission.org</strong> or
              <strong> call: (91) 1635-231415</strong>
            </p>
          </Col>
          {/* <Col xs={24} md={12} lg={12}>
            <h4>For Foreign Nationals only</h4>
            <p>
              For citizens having passport of any other country other than
              India, non-Indian bank account holders, or transacting with cards
              issued by non-Indian banks.
            </p>
            <Button
              type="primary"
              size="large"
              target="_blank"
              style={{ marginBottom: "10px" }}
              href="https://rzp.io/l/fcra-donate"
            >
              Donate Now
            </Button>
          </Col> */}
        </Row>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => (
  <SEO title="Donate" description="" lang="en" />
);
