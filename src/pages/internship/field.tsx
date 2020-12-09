import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import Profile from "../../components/Profile";
import SEO from "../../components/seo";
// import start from "../images/trinjan/start.jpg";

import t1 from "../../images/logo.png";
import t2 from "../../images/trinjan/trinjan-logo.jpeg";


export default () => (
    <PageLayout>
        <SEO title="On-field Internship" />

        <h1>On-field Internship Opportunity</h1>
        <p> Last updated - 21 November, 2020</p>

        <Row gutter={18}>
            <Col xs={24} md={9} lg={9}>
                <Profile
                    designation=""
                    image={t1}
                />
            </Col>
            <Col xs={24} md={15} lg={15}>
                <Profile
                    designation=""
                    image={t2}
                />
            </Col>
        </Row>

        <Card title="TRINJAN: Rural Livelihoods through Traditional Skills" bordered={false}>
            <p>
                TRINJAN is the symbol of caring and sharing in Punjabi community. Under this umbrella, women used to spin, weave, knit, sing, celebrate, appreciate and create different kinds of artistic products. It used to be a platform of collective teaching and learning with a close association of nature and culture. The type of development model which is being adopted in last 5-6 decades didn’t allow women to enhance the collective working and its spread to the next generation. Younger generation is getting school and college education where these traditional creative skills are not considered worthy.
      </p>

            <p>
                With this background and zeal to prevent this great traditional art from being vanished, KVM started working for its revival. For us, these are not mere products that come out, there is a connect of human and nature that can be clearly seen along with the association and owness. In order to preserve this heritage, Organic Desi Cotton is being grown by the farmers, procured by KVM, hand spun, naturally dyed and hand woven by the rural artisans. Along with this there are artisans who do hand embroidery, crochet, Knitting, make different grass crafts and other decorative products. All these skills have been promoted and developed under TRINJAN.
      </p>

            <p>
                It has freedom for the artisans as they can work from home, most of the artisans are women. It’s a very good opportunity for the livelihood generation and pass on this skill to the next generation. KVM believes that revival of traditional, slow, natural and cultural wisdom shall help addressing the physical, mental and emotional health crisis that people have been going through. These are socially and ecologically responsible products.
      </p>

            <blockquote>TRINJAN is Weaving the Social Fabric with Compassionate Warp and Dedicated Weft</blockquote>

        </Card>

        <Card title="Context" bordered={false}>
            <p>
                While working on this initiative for the past one year, KVM has found out a lot of artisans in the rural areas and those needs to be organized now. Following information needs to be collected during the internship:
                <ul>
                    <li>Getting a survey done in the villages where TRINJAN activities are going on in order to find out more details.</li>
                    <li>Doing a literature survey about the area for complete value chain starting from the cultivation of cotton to the finished product.</li>
                    <li>Looking for the forward and backward linkages.</li>
                    <li>Meeting researchers and academicians who have already worked in this sector.</li>
                    <li>Preparing a consolidated report of the work with nice pictures and other details. </li>
                </ul>
            </p>
        </Card>

        <Card title="Eligibility" bordered={false}>
            <p>
                Following criteria is set although it’s not fixed. We are flexible.

                <ul>
                    <li>Pursuing or completed graduation in any stream.</li>
                    <li>Should have a keen interest in village handicrafts and agrarian crisis.</li>
                    <li>Good knowledge of computer i.e. MS word, excel, power point etc.</li>
                    <li>Hardworking, honest and motivated.</li>
                    <li>Internship will include travel to local and distant places.</li>
                </ul>
            </p>
        </Card>

        <Card title="Support from the organization" bordered={false}>
            <p>


                <ul>
                    <li>Security and safety would be taken care of properly.</li>
                    <li>Food and accommodation will be arranged by KVM.</li>
                    <li>If students can arrange for their travel well and good otherwise KVM will do the arrangements.</li>
                    <li>Students will get a certificate however No extra stipend would be paid.</li>
                    <li>To the students there can be an opportunity for further collaboration.</li>
                </ul>
            </p>
        </Card>

        <Card title="Time Period" bordered={false}>
            <p>2-3 months, starting from December 2020. </p>
        </Card>

        <Card title="Positions Available" bordered={false}>
            <p>
                2-3 students would be needed at this point of time. We would do a small interview of the students in order to know them.
            </p>

        </Card>
        <Card title="Contact us" bordered={false}>
            <p>
                <address>
                    Rupsi Garg<br />
                    Associate Director<br />
                    Kheti Virasat Mission<br />
                    <a href="mailto:rupsi@khetivirasatmission.org">Email us</a>
                </address>
            </p>
        </Card>
    </PageLayout>
);
