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
        <SEO title="Online Internship" />

        <h1>Trinjan Live Project Opportunity</h1>
        <p> Last updated - 21 November, 2020</p>

        <Row gutter={18}>
            <Col xs={24} md={15} lg={15}>
                <Profile
                    designation=""
                    image={t2}
                />
            </Col>
            <Col xs={24} md={9} lg={9}>
                <Profile
                    designation=""
                    image={t1}
                />
            </Col>
        </Row>

        <Card title="TRINJAN: Rural Livelihoods through Traditional Skills" bordered={false}>
            <p>
                TRINJAN is the symbol of caring and sharing in Punjabi community. Under this umbrella, women used to spin, weave, knit, sing, celebrate, appreciate and create different kinds of artistic products. It used to be a platform of collective teaching and learning with a close association of nature and culture. The type of development model which is being adopted in the last 5-6 decades didn’t allow women to enhance the collective working and its spread to the next generation. Younger generation is getting school and college education where these traditional creative skills are not considered worthy.
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
                While working on this initiative for the past one year, KVM has found out a lot of artisans in the rural areas and those needs to be organized now. Following deliverables need to be completed within the duration of the project:
                <ul>
                    <li>Doing a literature survey about the area for complete value chain starting from the cultivation of cotton to the finished product</li>
                    <li>Proving a detailed report of the potential for the forward and backward linkages</li>
                    <li>Assisting in developing an e-commerce platform for TRINJAN</li>
                    <li>Preparing a consolidated report of the work done by the organization</li>
                </ul>
            </p>
        </Card>

        <Card title="Eligibility" bordered={false}>
            <p>
                Following criteria is suggestive and we are flexible and looking for young innovative minds.
                <ul>
                    <li>Pursuing or completed graduation in any humanities stream.</li>
                    <li>Interest in designing, textile making, marketing and arts and craft.</li>
                    <li>Should have a strong interest in village handicrafts and understanding of agrarian crisis.</li>
                    <li>Good knowledge of computer i.e. MS word, excel, power point and other relevant tools.</li>
                    <li>Study might involve travel in local and distant places. Although this would be optional and based on convenience of the candidates.</li>
                </ul>
            </p>
        </Card>

        <Card title="Support from the organization" bordered={false}>
            <p>


                <ul>
                    <li>Students will get a certificate and recommendation letter from the organization.</li>
                    <li>It can be an opportunity for further collaboration as well. However, no stipend would be paid to the students for this engagement.</li>
                </ul>
            </p>
        </Card>

        <Card title="Time Period" bordered={false}>
            <p>2-3 months</p>
        </Card>

        <Card title="Selection" bordered={false}>
            <p>
                On the basis of online interview.
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
