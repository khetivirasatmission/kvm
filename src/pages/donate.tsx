import { Button, Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/seo";

export default () => (
  <PageLayout>
    <SEO title="Donate" />

    <h1>Donate </h1>

    <Card title="" bordered={false}>
      <Row>
        <Col xs={24} md={12} lg={12}>
          <h4>For making donations within India</h4>
          <Button
            type="primary"
            size="large"
            href="https://www.payumoney.com/paybypayumoney/#/1EA80E79A26B9C9D3EE780BABDFBFDD2"
            target="_blank"
            style={{ marginBottom: "10px" }}
          >
            Donate now
          </Button>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <h4>For making donations outside India</h4>
          <Button
            type="primary"
            size="large"
            target="_blank"
            style={{ marginBottom: "10px" }}
            href="https://pages.razorpay.com/pl_F1dQh0eWTi3SQr/view"
          >
            Donate Now
          </Button>
        </Col>
      </Row>

      <blockquote>
        Donations made to Kheti Virasat Mission within India are exempted from
        Income Tax under 80-G wide number CIT/BTI/ITO(T)51-80G/2013-24/64
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
        For us any small or big amount is welcome. So anything from Rs.500-1000
        to any other upper limit which you may desire. For further details
        please <strong>contact: info@khetivirasatmission.org</strong> or
        <strong> call: (91) 1635-231415</strong>
      </p>
    </Card>
  </PageLayout>
);
