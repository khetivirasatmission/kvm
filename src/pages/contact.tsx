import { Col, notification, Row } from "antd";
import { navigate } from "gatsby-link";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/seo";

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  openNotification = () => {
    notification.open({
      message: "Success",
      description:
        "Thanks for submitting the form. We will get back to you soon.",
      duration: 3,
    });
  };

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...this.state,
      }),
    })
      .then(() => {
        this.openNotification();
        setTimeout(() => {
          navigate("/");
        });
      })
      .catch((error) => alert(error));
  };

  render() {
    return (
      <PageLayout>
        <SEO title="Contact Us" />

        <div>
          <h1>Contact</h1>

          <Row gutter={64}>
            <Col md={24} lg={12}>
              <iframe
                style={{ border: "0", width: "100%" }}
                src="https://docs.google.com/forms/d/e/1FAIpQLSecB-GKr9wnBLkxahPKKTJmbVbNDFLRzBc59oKwHj4mglR_Yg/viewform?embedded=true"
                width="482"
                height="900"
              >
                Loading...
              </iframe>

              {/* <Form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
  
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </p>

                <Row>
                  <Col span={24}>
                    <FormItem label="Name">
                      <Input
                        placeholder="Name"
                        name="name"
                        onChange={this.handleChange}
                      />
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <FormItem label="Email">
                      <Input
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange}
                      />
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <FormItem label="Address">
                      <Input
                        placeholder="Line 1"
                        name="line1"
                        onChange={this.handleChange}
                      />
                      <Input
                        placeholder="Line 2"
                        name="line2"
                        onChange={this.handleChange}
                      />
                      <Input
                        placeholder="City"
                        name="city"
                        onChange={this.handleChange}
                      />
                      <Input
                        placeholder="State"
                        name="state"
                        onChange={this.handleChange}
                      />
                      <Input
                        placeholder="Zipcode"
                        name="zipcode"
                        onChange={this.handleChange}
                      />
                      <Input
                        placeholder="Country"
                        name="country"
                        onChange={this.handleChange}
                      />
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <FormItem label="Phone">
                      <Input
                        placeholder="Phone"
                        name="phone"
                        onChange={this.handleChange}
                      />
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <FormItem label="Comments">
                      <TextArea
                        placeholder="Comments"
                        name="comment"
                        onChange={this.handleChange}
                      />
                    </FormItem>
                  </Col>
                </Row>

                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form> */}
            </Col>
            <Col md={24} lg={12}>
              <h3>Address</h3>

              <p>
                Kheti Virasat Mission, House Number-72, Street Number- 4, R V
                Shanti Nagar, PO Box # 1, JAITU - 151202 Faridkot, Punjab{" "}
              </p>
              <p>
                <strong>Phone:</strong> +91 1635 503415, +91 9872682161
              </p>
              <p>
                <strong>Email:</strong> info@khetivirasatmission.org
              </p>

              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    style={{ border: "0", width: "100%" }}
                    width="400"
                    height="400"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=kheti%20virasat%20mission&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
              </div>

              {/* <GoogleMap /> */}
            </Col>
          </Row>
        </div>
      </PageLayout>
    );
  }
}
