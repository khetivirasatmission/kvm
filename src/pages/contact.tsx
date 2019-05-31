import { Button, Col, Form, Input, notification, Row } from "antd";
import FormItem from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";
import { navigate } from "gatsby-link";
import React from "react";
import GoogleMap from "../components/GoogleMap";
import PageLayout from "../components/PageLayout";
import SEO from "../components/seo";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
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
      .catch(error => alert(error));
  };

  render() {
    return (
      <PageLayout>
        <SEO title="Contact Us" />

        <div>
          <h1>Contact</h1>

          <Row gutter={64}>
            <Col md={24} lg={12}>
              <Form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
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
              </Form>
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

              <GoogleMap />
            </Col>
          </Row>
        </div>
      </PageLayout>
    );
  }
}
