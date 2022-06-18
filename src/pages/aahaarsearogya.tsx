import { Button, Card, Col, Row, Radio, Checkbox } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Calendar from "../components/Calendar";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import e1 from "../images/aaharseaarogya/poster.jpeg";

const registrationLink =
  "https://zoom.us/meeting/register/tJwoc-yqrT4sGdQzvVINfkO8mXW4hizc2qrm";

// const dayOptions = ["26 March", "27 March", "28 March"];
// const defaultCheckedDayOptions = ["26 March", "27 March", "28 March"];

// console.log(events);

export default () => {
  // const [checkedDayOptions, setCheckedDayOptions] = React.useState(
  //   defaultCheckedDayOptions
  // );

  // const onEventDateChange = (list) => {
  //   setCheckedDayOptions(list);
  //   console.log(list);
  // };

  function onEventTypeChange(e) {
    console.log(`${e.target.value}`);
  }

  return (
    <PageLayout>
      <SEO title="Aahaar Se Arogya" />
      <div>
        <h1>
          Aahaar Se Arogya
          {/* <Button
            type="primary"
            size="large"
            href={registrationLink}
            target="_blank"
            style={{ float: "right" }}
          >
            Register
          </Button> */}
        </h1>
      </div>
      <h3 style={{ color: "#72a230", textAlign: "center" }}>
        Initiating the International Year of the Millets 2023
      </h3>
      <p style={{ fontSize: "18px", color: "#72a230", textAlign: "center" }}>
        Mission to bring back millets on your plate
      </p>

      <Row gutter={18}>
        <Col xs={24}>
          <Profile designation="" image={e1} />
        </Col>
      </Row>

      {/* <Row gutter={18} justify="center">
        <Button
          type="primary"
          size="large"
          href={registrationLink}
          target="_blank"
          style={{ margin: "auto", textAlign: "center" }}
        >
          Register now
        </Button>
      </Row> */}
      <Card title="Aahaar Se Arogya - 2022" bordered={false}>
        <p>
          Kheti Virasat Mission (KVM) has been at the forefront of the organic
          farming movement in Punjab. For the past 16 years, KVM has envisioned
          and executed a diverse set of projects in the fields of safe food,
          holistic health & revival of Millets.
        </p>
        <p>
          Recognizing the pressing need to have an alternative model of
          sustainable agriculture for the state of Punjab, KVM is launching its
          initiative to recognize and celebrate the International Year of the
          Millets 2023.
        </p>

        <p>
          Kheti Virasat Mission firmly believes that a revival of this miracle
          grain will have a positive impact on the soil, health and water crisis
          faced by Punjab.
        </p>
      </Card>
      <Card title="The Magic of Millets" bordered={false}>
        <p>
          The Millet cultivation goes far back in time when Wheat and Rice
          occupied a very small percentage of the total cultivation area. Kodra,
          Swank, Kangni, Kutki, Ragi, Bajra, Jowar were the prevalent crops of
          Punjab and Haryana. The ‘Green Revolution’ wiped out these climate
          smart crops and replaced them with water intensive paddy.
        </p>
        <p>
          Paddy cultivation has brought nothing but disaster for the state of
          Punjab and it is time to implement an alternate farming model, and how
          the cultivation of Millets provides that alternative. A climate smart
          drought weather crop, Millets can easily grow in Punjab’s Kharif /
          monsoon season. No pesticides are required to grow these crops and
          they can be grown in all different types of soils.
        </p>

        <p>
          Dr. Khadar Vali, also known as the Millet Man of India, named this a
          Miracle grain, which are recognized for their ability to nourish and
          heal the body. Containing large amounts of fiber, minerals and
          protein, these grains are a powerhouse of nutrition. Dr. Khadar also
          devised a special Millets diet which can cure and manage prevalent
          lifestyle diseases e.g. Diabetes, Blood Sugar, Hypertension,
          Hyperthyroidism among others.
        </p>
      </Card>
      <Card title="Initiative" bordered={false}>
        <p>
          KVM will devise and execute programs under the following three
          categories:
        </p>

        <h4>Engage</h4>
        <p>
          KVM will engage with civil society to make people aware about the
          importance of Millets.
        </p>

        <h4>Promote</h4>
        <p>
          KVM will help build and promote the supply chain to bring millets of
          Punjab in the retail market.
        </p>

        <h4>Collaborate</h4>
        <p>
          Collaborations with the state and central governments will also be
          explored to implement various programs under the International Year of
          the Millets 2023.
        </p>
      </Card>
      <Card title="Event" bordered={false}>
        <p>
          Dr. Khadar Vali will tour Punjab giving lectures and interacting with
          the public, health experts, and farmers to spread the message of
          adopting Millets in our diet.
        </p>

        <p>Looking forward to your participation...</p>
      </Card>
    </PageLayout>
  );
};
