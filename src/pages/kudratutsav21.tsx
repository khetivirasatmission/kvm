import { Button, Card, Col, Row, Radio, Checkbox } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Calendar from "../components/Calendar";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import e1 from "../images/kudratutsav/kudratutsav21.png";

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
      <SEO title="Kudrat Utsav 2021" />

      <div>
        <h1>
          Kudrat Utsav 2021
          <Button
            type="primary"
            size="large"
            href={registrationLink}
            target="_blank"
            style={{ float: "right" }}
          >
            Register
          </Button>
        </h1>
      </div>

      <Row gutter={18}>
        <Col xs={24}>
          <Profile designation="" image={e1} />
        </Col>
      </Row>

      <Row gutter={18} justify="center">
        <Button
          type="primary"
          size="large"
          href={registrationLink}
          target="_blank"
          style={{ margin: "auto", textAlign: "center" }}
        >
          Register now
        </Button>
      </Row>

      <Card title="KUDRAT UTSAV - 21" bordered={false}>
        <p>Kudrat Utsav 2021 is a festival dedicated to </p>
        <ul style={{ listStyle: "square inside none" }}>
          <li>Organic Farming & Food</li>
          <li>Holistic Health & Nutrition</li>
          <li>Sustainability & Ecology</li>
          <li>Tradition & Culture</li>
        </ul>
        {/* <p>
          The event is being organized from 26th to 28th, March 2021 at Maharaja
          Ranjit Singh Punjab Technical University, Bathinda by Kheti Virasat
          Mission in association with Maharaja Ranjit Singh Punjab Technical
          University, Central University of Punjab and Bathinda Management
          Association
        </p> */}
      </Card>

      <Card title="Objectives" bordered={false}>
        <ul style={{ listStyle: "square inside none" }}>
          <li>To introduce people to a sustainable food system</li>
          <li>
            To build a collaboration between Organic Farmers and Consumers
          </li>
          <li>To promote Millet Cultivation , Millet Diet and Food</li>
          <li>
            To showcase the work done by our farmers, specially in Millets
            cultivation
          </li>
          <li>
            To promote Medicinal Plant cultivation , incorporating Medicinal
            Plants in Kitchen Gardening and Educate people about traditional
            knowledge systems and practices.
          </li>
          <li>To promote Sustainable and Ecological Cotton Cultivation</li>
          <li>
            To make people understand the importance of Holistic Health through
            holistic diet and organic food
          </li>
          <li>
            To celebrate our weavers and artisans who make traditional cotton
            clothing.
          </li>
          <li>To create an joyful environment</li>
          <li>
            To Connect Youth in Organic Farming and Nature Oriented Activities
          </li>
          <li>
            To create a system for transferring our traditional wisdom to the
            younger generation
          </li>
          <li>
            To generate future opportunities for the younger generation in the
            field of Organic Farming, Holistic Health and other Nature oriented
            fields.
          </li>
        </ul>
      </Card>
      <Card title="Activity Calendar" bordered={false}>
        <p>
          Keeping the festival objectives in perspective, following activities
          will be part of the Utsav.
        </p>

        <Calendar />

        <p>Stay tuned for more events every weekend...</p>
      </Card>
    </PageLayout>
  );
};
