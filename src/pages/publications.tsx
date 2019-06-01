import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import bebe_di_rasoi from "../images/books/bebe_di_rasoi.png";
import ghrelu_bagichi from "../images/books/ghrelu_bagichi.png";
import gian_di_potli from "../images/books/gian_di_potli.jpg";
import kudrati_kheti_ek_saral_vigyan from "../images/books/kudrati_kheti_ek_saral_vigyan.png";
import kudrati_kheti_mukh_nukte from "../images/books/kudrati_kheti_mukh_nukte.png";
import kudrati_kheti_wich_kanak from "../images/books/kudrati_kheti_wich_kanak.png";
import ja12 from "../images/magazines/ja12.jpg";
import jf15 from "../images/magazines/jf15.jpg";
import jo16 from "../images/magazines/jo16.jpg";
import ma13 from "../images/magazines/ma13.svg";
import ma15 from "../images/magazines/ma15.svg";
import ma19 from "../images/magazines/ma19.jpg";
import nd12 from "../images/magazines/nd12.svg";
import nd14 from "../images/magazines/nd14.svg";
import on16 from "../images/magazines/on16.jpg";
import sd13 from "../images/magazines/sd13.jpg";
import so12 from "../images/magazines/so12.svg";
import so14 from "../images/magazines/so14.jpg";

export default () => (
  <PageLayout>
    <SEO title="Publications" />

    <h1>Publications</h1>

    <Card title="Books" bordered={false}>
      <Row gutter={18}>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Bebe Di Rasoi"
            image={bebe_di_rasoi}
            file="http://issuu.com/khetivirasatmission/docs/bebe_di_rasoi?mode=window&amp;viewMode=doublePage"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Ghrelu Bagichi"
            image={ghrelu_bagichi}
            file="http://issuu.com/khetivirasatmission/docs/ghrelu_bagichi?mode=window&amp;viewMode=doublePage"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Gian Di Potli"
            image={gian_di_potli}
            file="http://khetivirasatmission.blogspot.in/2012/10/blog-post_4354.html"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Kudrati Kheti Ik Sarl Vigyan"
            image={kudrati_kheti_ek_saral_vigyan}
            file="http://issuu.com/khetivirasatmission/docs/kudrati_kheti_ik_saral_vigyan?mode=window&amp;viewMode=doublePage"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Kudrati Kheti De Mukh Nukte"
            image={kudrati_kheti_mukh_nukte}
            file="http://issuu.com/khetivirasatmission/docs/kudrati_kheti_mukh_nukte?mode=window&amp;pageNumber=1"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Kudrati Kanak Di Bijai"
            image={kudrati_kheti_wich_kanak}
            file="http://issuu.com/khetivirasatmission/docs/mannual_for_wheat?mode=window&amp;pageNumber=1e"
          />
        </Col>
      </Row>
    </Card>
    <Card title="Magazines" bordered={false}>
      <Row gutter={18}>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Mar-April 2019"
            image={ma19}
            file="https://drive.google.com/file/d/1IKQWRIgK_vuAg9t-4VuxJzrp2gzbe0V4/view?usp=sharing"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Oct-Nov 2016"
            image={on16}
            file="https://en.calameo.com/read/00185051334c52622ed7d"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Jul-Oct 2016"
            image={jo16}
            file="http://en.calameo.com/read/001850513b2825b731b01"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Mar-Apr 2015"
            image={ma15}
            file="http://en.calameo.com/read/00185051356dc4d52534a"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Jan-Feb 2015"
            image={jf15}
            file="http://en.calameo.com/read/00185051337bd2360a70f"
          />
        </Col>

        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Nov-Dec 2014"
            image={nd14}
            file="http://en.calameo.com/read/001850513c1b36c6b0486"
          />
        </Col>
      </Row>
      <Row gutter={18}>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Sep-Oct 2014"
            image={so14}
            file="http://en.calameo.com/read/001850513841afd6ea556"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Sep-Dec 2013"
            image={sd13}
            file="http://en.calameo.com/read/0018505136eeb03847575"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="May-Aug 2013"
            image={ma13}
            file="http://en.calameo.com/read/001850513aad15922144f"
          />
        </Col>

        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Nov-Dec 2012"
            image={nd12}
            file="http://en.calameo.com/read/001850513893b2e750e3b"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="Sept-Oct 2012"
            image={so12}
            file="http://en.calameo.com/read/0018505139c941fb1c1ec"
          />
        </Col>
        <Col xs={24} md={12} lg={4}>
          <Profile
            designation="July-Aug 2012"
            image={ja12}
            file="http://en.calameo.com/read/001850513c82774fde851"
          />
        </Col>
      </Row>

      <p>
        <h3>Blog Magazine</h3>
        <ul>
          <li>
            <a
              href="http://baliharikudrat.blogspot.in/2012_07_01_archive.html"
              target="_blank"
            >
              May-June 2012
            </a>
          </li>
          <li>
            <a
              href="http://baliharikudrat.blogspot.in/2012_05_01_archive.html"
              target="_blank"
            >
              Mar-Apr 2012
            </a>
          </li>
          <li>
            <a href="http://baliharikudrat.blogspot.in/" target="_blank">
              Jan-Feb 2012
            </a>
          </li>
          <li>
            <a
              href="http://baliharikudrat.blogspot.in/2012/01/blog-post_4105.html"
              target="_blank"
            >
              Nov-Dec 2011
            </a>
          </li>
          <li>
            <a
              href="http://baliharikudrat.blogspot.in/search?updated-min=2011-01-01T00:00:00-08:00&amp;updated-max=2012-01-01T00:00:00-08:00&amp;max-results=19"
              target="_blank"
            >
              Sept-Oct 2011
            </a>
          </li>
        </ul>
        <h3>Audio magazine</h3>
        <iframe
          width="100%"
          height="450"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/238237196&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
      </p>
    </Card>
    <Card title="Articles" bordered={false}>
      <ul>
        <li>
          <a
            target="_blank"
            href="http://khetivirasatmission.blogspot.in/2007/07/sorrow-of-jajjal-tale-of-village-in.html"
          >
            Sorrow of Jajjal
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="http://khetivirasatmission.blogspot.in/2007/07/punjab-in-environmental-health.html"
          >
            Punjab in Env Health Catastrophe....
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="http://khetivirasatmission.blogspot.in/2008/02/nanak-kheti-in-punjab.html"
          >
            Nanak Kheti in Punjab
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="http://khetivirasatmission.blogspot.in/2010/07/punjab-dying-civilisation.html"
          >
            Punjab: A DYING CIVILISATION?
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="http://khetivirasatmission.blogspot.in/2010/07/punjab-environmental-toxicity-hotspot.html"
          >
            Punjab: An Environmental toxicity hotspot heading towards death ?
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="http://umendradutt.blogspot.in/2007/09/final-report-of-pgimer-epidemiological.html"
          >
            Report of PGIMER Epidemiological Study of cancer cases in Talwandi
            Sabo block
          </a>
        </li>
      </ul>
    </Card>
  </PageLayout>
);
