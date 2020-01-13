import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "gatsby";

import PageLayout from "../../components/layouts/PageLayout";
import Profile from "../../components/Profile";
import SEO from "../../components/seo";
import f1 from "../../images/farmers/gurmeet-singh.jpg";
import f2 from "../../images/farmers/amarjeet-sharma.jpg";
import f3 from "../../images/farmers/ashish-ahuja.jpg";
import f4 from "../../images/farmers/avtar-singh.jpg";
import f5 from "../../images/farmers/gagan-singh.jpg";
import f6 from "../../images/farmers/gaurav-sahai.jpg";
import f7 from "../../images/farmers/gujant-singh.jpg";
import f8 from "../../images/farmers/manjeet-singh.jpg";
import f9 from "../../images/farmers/gurtej-singh.jpg";
import f10 from "../../images/farmers/jarnail-majhi.jpg";
import f11 from "../../images/farmers/kamaljeet-hayer.jpg";
import f12 from "../../images/farmers/madan-lal.jpg";
import f13 from "../../images/farmers/nirmal-singh.jpg";
import f14 from "../../images/farmers/ravdeep-singh.jpg";
import f15 from "../../images/farmers/satinder-singh.jpg";
import f16 from "../../images/farmers/sher-singh.jpg";
import f17 from "../../images/farmers/swarn-singh.jpg";
import f18 from "../../images/farmers/vinod-jyani.jpg";
import f19 from "../../images/farmers/jaspal-kaur.jpg";
import f20 from "../../images/farmers/jaspreet-kaur.jpg";
import f21 from "../../images/farmers/sukhjeet-kaur.jpg";
import f22 from "../../images/farmers/sukhpreet-kaur.jpg";
export default () => (
  <PageLayout>
    <SEO title="Organic Farmers" />

    <h1>Organic Farmers</h1>

    <Row gutter={18}>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/jaspalkaur">
          <Profile designation="Jaspal Kaur" image={f19} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/jaspreetkaur">
          <Profile designation="Jaspreet Kaur" image={f20} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/sukhjeetkaur">
          <Profile designation="Sukhjeet Kaur" image={f21} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/sukhpreetkaur">
          <Profile designation="Sukhpreet Kaur" image={f22} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/gurmeetbhawalpur">
          <Profile designation="Gurmeet Bhawalpur" image={f1} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/amarjeetsharma">
          <Profile designation="Amarjeet Sharma" image={f2} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/ashishahuja">
          <Profile designation="Aashish Ahuja" image={f3} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/avtarsingh">
          <Profile designation="Avtar Singh" image={f4} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/gagansingh">
          <Profile designation="Gagan Singh" image={f5} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/gauravsahai">
          <Profile designation="Gaurav Sahai" image={f6} />
        </Link>
      </Col>

      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/gujantmanjeet">
          <Profile designation="Gujant Singh" image={f7} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/gujantmanjeet">
          <Profile designation="Manjeet Singh" image={f8} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/gurtejsingh">
          <Profile designation="Gurtej Singh" image={f9} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/jarnailmajhi">
          <Profile designation="Jarnail Majhi" image={f10} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/kamaljeethayer">
          <Profile designation="Kamaljeet Hayer" image={f11} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/madanlal">
          <Profile designation="Master Madan Lal" image={f12} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/nirmalsingh">
          <Profile designation="Nirmal Singh" image={f13} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/ravdeepsingh">
          <Profile designation="Ravdeep Singh" image={f14} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/satindersingh">
          <Profile designation="Satinder Singh" image={f15} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/shersingh">
          <Profile designation="Sher Singh" image={f16} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/swarnsingh">
          <Profile designation="Swarn Singh" image={f17} />
        </Link>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Link to="/organicfarmers/vinodjyani">
          <Profile designation="Vinod Jyani" image={f18} />
        </Link>
      </Col>
    </Row>

    {/* <Card title="" bordered={false}>
      <p>
      45-year-old Gurmeet is devoted to social transformation through natural farming.
      </p><p>
“Get down at Lanjan bus stop and ask anyone about the farmer who rears desi cows and does organic farming,” Gurmeet Singh Bahawalpur said over the phone. His farm is just around 100 metres from the bus stop, marked by a big shed sheltering 18 cows and calves, all indigenous breeds.</p><p>
The 10-acre farm extends with a vegetable patch in front, followed by an orchard of guava, pomegranate, amla and naseberry. Land for grains is neatly portioned to the right. A pond on 2.5 bigha collects rain water and supply from the canal, to be used later. No wonder this farm is famous. Two farmers arrive as soon as I sit down with Gurmeet to have tea. They want his advice on which indigenous breeds of cows to buy.</p><p>
After discussing the colour, hair, hump, behaviour of cows, they talk about fruits at his orchard. I had already gone ahead and devoured the wonderful guavas.
Deeply influenced by Guru Nanak’s teachings of compassion, Bhagat Singh’s socialism and Osho’s discourses on detachment, Gurmeet was always looking for a way out of chemical-laden farming. This desire was known to most of his friends and neighbours, one of whom happened to attend a meeting of the Kheti Virasat Mission, and informed Gurmeet about this opportunity to learn. It was a turning point he was waiting for. After collecting much information about organic farming, Gurmeet started with 5 acres and within two years had whole of his 10-acre farm chemical free. The wheat production dropped to 4 quintals per acre in the first year but due to his efforts every acre of the land now yields 9-11 quintal.</p><p>
The farm which, being highly acidic, was not suitable to grow vegetables is now sending the greens to families in Chandigarh, Patiala and Rajpura, testifying that 45-year-old Gurmeet has come a long way in last 10 years. “I am consistently reducing area under paddy, replacing it with vegetables. Paddy is now confined to 2 acres,” he says.</p><p>
Under the guidance of expert farmers like Prakash Raghuvanshi and Suresh Desai, Gurmeet adopted several traditional seeds and innovative techniques to maximise benefits from organic farming. He has also managed to deal with infestation of weeds, one of the side effects of using natural manure like cow dung.  I have realised that rotating the crops can easily help deal with this issue. So after harvesting wheat, I grow green fodder on the same plot and replace paddy with corn,” he says.</p><p>

With untimely demise of his younger brother, Gurmeet also got the responsibility of leasing out another 10 acre farm belonging to his brother’s family. Fortunately, a lawyer from Patiala, also interested in organic farming, stepped forward, and now Gurmeet is also guiding him on how to pursue the nature’s ways.  The marketing of his produce has gone places. Several families pick up the wheat while Punjab Agro Industries Corporation Ltd, a government organisation, procured Basmati variety of rice last year at a premium of Rs 500 per quintal over and above the prevailing market rate. The vegetables go to nearby cities while a group of youth from Chandigarh also procure milk of the indigenous cows, which is known to be beneficial for health.</p><p>
But the motive for Gurmeet to keep these many cows is not dairy, but use of their dung to improve soil fertility. The pond, built with subsidy of Rs 8 lakh from the State Horticulture Department, has helps save groundwater and money earlier spent on running the motors. “The use of borewell has gone down by one fourth. This was a big issue as the quality of groundwater, which is available at 250 feet in this area, is not good and hence impacts the crops. Moreover, I can easily drain out water from the wheat fields to the pond instead of pleading neighbouring farmers,” Gurmeet informs.</p><p>
The man, however, desires greater family support. “My wife and children are quite supportive of what I do, but they don’t get involved. Organic farming is a family effort because it demands lot of sustained effort which can’t be expected from hired labourers. But the way things are going in our modern society, roles have been fixed. Women are now confined mostly to homes while children are supposed to be restricted to studies. Means of entertainment like television and mobile phones take up any idle time. Organic farming demands simpler lifestyle which is a rarity nowadays,” Gurmeet regrets. But he has a solution for this as well. “Farmers pursuing natural ways can join hands with each other and pursue cooperative farming. That’s the only way things can improve,” he signs off.
      </p>
    </Card> */}
  </PageLayout>
);
