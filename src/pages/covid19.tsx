import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "gatsby";
import PageLayout from "../components/layouts/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import trinjan_logo from "../images/trinjan/trinjan-logo.jpeg";
import awareness_meet from "../images/covid/awareness-meet.png";
import artisan_survey from "../images/covid/artisan-survey.png";
import paintings from "../images/covid/paintings.png";
import farmer_meet from "../images/covid/farmer-meet.png";

export default () => (
  <PageLayout>
    <SEO title="TRINJAN COVID -19 Response" />

    <h1>TRINJAN COVID -19 Response</h1>
    <p style={{ color: "#72a230", fontSize: "20px" }}>
      From Relief to Recovery
    </p>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={6} />
      <Col xs={24} md={12} lg={12}>
        <Profile image={trinjan_logo} />
      </Col>
      <Col xs={24} md={12} lg={6} />
    </Row>

    <Card title="Covid-19 Situation in Punjab" bordered={false}>
      <p>
        Punjab due to its high number of foreign travelers was at a greater risk
        of facing a rapid spread of virus. To check the spread of Novel
        Coronavirus, Indian Government declared a nationwide lockdown on March
        24, 2020. Lockdown created a strange set of problems for the Punjab
        countryside as Farmers worried about the procurement of their Rabi wheat
        crop amidst the disrupted market access. The limited mobility also
        impacted the availability of agricultural inputs. Amidst all this the
        Rural Artisans were worst hit as they faced an immediate economic
        uncertainty due to not being able to sell their produce. Agricultural
        family income also saw a decline as prices of dairy products, poultry
        and horticulture crops crashed. Artisans from landless households were
        also facing nutritional vulnerabilities as the rations quickly ran out.
        Massive job losses, declining farm incomes and a halt to non farm
        incomes brought one of the worst economic shocks of our times to Rural
        Punjab.
      </p>
      <p>
        We had started our Awareness campaign aimed at creating awareness about
        the spread of coronavirus and the preventive measures against it among
        our community had started from mid March as the first case was announced
        in Punjab. Many of the residents of the villages where we work have
        acquaintances that frequently travel foreign countries so it was
        important to spread awareness early on. We also conducted a widespread
        telephonic awareness campaign across numerous villages of Malwa region
        of Punjab through our associates.
      </p>
    </Card>
    <Card title="Economic & Nutritional Support" bordered={false}>
      <p>
        During an inspection visits our team made to villages of Chaina and
        Kotli at the end of March it was clear that we would need to provide
        immediate relief to the community as there was widespread uncertainty
        and fear amongst villagers. We designed our relief plan accordingly and
        initiated an immediate campaign of disbursing economic support to the
        women artisans in 8 villages across 3 Districts from 27th March 2020.
        Artisans from the landless households were also supported through our
        ration kits to solve the issue of nutritional vulnerability. In the
        weeks of April we expanded our list of beneficiaries and started
        providing Economic support and Ration kits to the poor and landless
        segments of the rural population. A lot of stress due to financial
        issues was also tackled by an initiative by TRINJAN wherein artisans
        were provided with advanced payments for their work.
      </p>

      <Profile
        designation="Team Trinjan - Rupsi Garg and Sarabjeet Kaur organizing an awareness meeting"
        image={awareness_meet}
      />

      <p>
        Districts wise list of Villages where immediate relief was provided are
        as follows - <br />
        District Faridkot – Doad, Chaina, Bishnandi, Delleyanwaali, Jaitu
        <br />
        District Mukhtasar- Kotli
        <br />
        District Barnala – Dhillwan, Mod
      </p>
    </Card>
    <Card title="Emotional Well-Being of Women Artisans" bordered={false}>
      <p>
        Economic uncertainty also led to emotional fissures among the families
        and the women artisans were also at the receiving hand of domestic
        abuse. These cases of drugs and alcohol abuse also were seen to be on
        the rise as documented by our team visits. With the widespread news of
        increase in domestic violence against women across the country and also
        being witness to few within the villages where we work, Our team decided
        to hold counseling sessions on Phone with the women and provide them
        with emotional support in the times of crisis.
      </p>

      <Profile
        designation="Team TRINJAN - Rupsi Garg and Sarabjeet Kaur Conducting Survey with the artisans"
        image={artisan_survey}
      />

      <p>
        Awareness drives were also launched to spread awareness regarding the
        Government support and relief available to rural folks under various
        government schemes such as Pradhan Mantri Garib Kalyan Yojana, Pradhan
        Mantri Kisan Samman Nidhi (PM-KISAN), Pradhan Mantri Jan Dhan Yojana
        (PMJDY) etc and other announcements. We also initiated programs to help
        the villager’s device a village wide COVID-19 prevention plan taking
        care of proper social distancing measures around the various rural
        businesses and village commons.
      </p>
    </Card>

    <Card title="Caring for the Younger Ones" bordered={false}>
      <p>
        Carrying on with our campaign of making the younger generation aware
        about the world of organic farming and natural living we organized an
        “Explore the Colors of Mother Nature” painting competition from natural
        colors. The competition saw a large participation of kids of all ages
        showcasing their skills and creativity using natural colors. To help
        with the boredom and vacuum in everyday lives of kids we also organized
        an initiative “Unlock Your Lockdown Story”. For Children who were facing
        school closure and limited mobility, we provided a way forward to
        constructively invest their time and energy positively and engaging with
        their skills and creativity.
      </p>
      <Profile
        designation="A few paintings done using natural colors sent by children"
        image={paintings}
      />
    </Card>

    <Card title="Farmers Collaboration" bordered={false}>
      <p>
        The Farmers across the country are facing distress. Kheti Virasat
        Mission being a pioneer organization of Organic Farmers in India is
        organizing periodic virtual as well as telephonic meetings with the
        farmers and assisting them in navigating through this time of crisis.
        Numerous workshops, collaborative discussions and training modules are
        also being organized by KVM to accommodate knowledge sharing among
        Farmers. Throughout the past three months discussions have been done
        regarding importance of border crops, technique of deep plough,
        effective crop rotation, processing and need of designing a Organic
        cotton farming manual was done. As many states are facing locust attacks
        the possibility of one and measures to be taken in case of such an
        incident were also discussed with inputs from experts.
      </p>
      <Profile
        designation="Screenshot of one of the farmer meetings"
        image={farmer_meet}
      />
    </Card>

    <Card title="About Trinjan" bordered={false}>
      <p>
        TRINJAN is an extension of Kheti Virasat Mission for rural employment
        through traditional skills. To revive the great knowledge of textile and
        handicrafts that women had, TRINJAN started in 4 villages in 2017. The
        self-reliance of cloth, aka 'Vastra Swavlambham’, which was once a part
        and parcel of our culture was lost long ago. Most of the spinners and
        weavers were women. They were also actively involved in agriculture and
        dairy activities. In the course of industrialization and modernization,
        most of them lost their patience and interest amid the flood of easily
        accessible ready-made garments and limited themselves to household
        chores. The charkhas were abandoned and the weavers were out of
        practice. KVM identified these women artisans, most of them from poor
        financial backgrounds, and encouraged them to restart their work
        professionally, with KVM. Learn more about this project:{" "}
        <Link to="/trinjan">Trinjan</Link>
      </p>

      <p>
        We are also running a crowd funding campaign to help women rural
        artisans of Punjab in these times of crisis. Please help and support the
        campaign by donating to us on{" "}
        <a
          href="https://milaap.org/fundraisers/support-artisans?utm_source=website&utm_medium=Trinjan"
          target="_blank"
        >
          MILAAP
        </a>
      </p>
    </Card>
  </PageLayout>
);
