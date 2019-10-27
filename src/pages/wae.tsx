import { Card } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/seo";
import wae from "../images/WAE.png";

export default () => (
  <PageLayout>
    <SEO title="Women Action for Ecology" />

    <h1>Women Action for Ecology</h1>

    <img
      src={wae}
      style={{ display: "block", margin: "0 auto", textAlign: "center" }}
    />

    <Card title="Empowering Women" bordered={false}>
      <p>
        Kheti Virasat Mission runs{" "}
        <a href="https://womenactionforecology.webs.com/">
          Women Action for Ecology
        </a>
        , a forum for women’s participation in agro-ecological revival movement
        in Punjab. Women in other parts of the country have worked a lot towards
        social and environmental causes, but the state of Punjab is yet to
        emerge on this front. Since the women are the first and worst victims of
        the agro-ecological and health crisis here and elsewhere, therefore they
        need the opportunity to work towards the mitigation process, for their
        own sake and for the sake of their future generations and community at
        large.
      </p>
    </Card>
    <Card title="Nav-Trinjan" bordered={false}>
      <p>
        Women Action for Ecology’s venture Nav-Trinjan is an effort to mobilize
        women to appreciate their own traditional wisdom and role in the
        preservation and conservation of the environment, food heritage and
        ecological agriculture in Punjab. Platform for sharing of knowledge and
        spreading of the practices are the main tools for the empowerment of
        women through Nav-Trinjan.
      </p>

      <h3 style={{ color: "#72a230", fontSize: "20px", fontWeight: "600" }}>
        Activities of Women Action for Ecology
      </h3>
      <ul>
        <li>Organic kitchen gardening</li>
        <li>Insect literacy</li>
        <li>Seed conservation and multiplication</li>
        <li>Revival of food heritage</li>
        <li>
          Economic activities to support women from small and marginal farmer
          families & Landless families
        </li>
      </ul>
    </Card>
  </PageLayout>
);
