import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/PageLayout";
import SEO from "../components/seo";
import t0 from "../images/t0.jpg";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";

interface IProfileProps {
  name: string;
  designation: string;
  region?: string;
  image: any;
}

const Profile = ({ name, designation, region, image }: IProfileProps) => {
  let im;
  if (image) {
    im = <img alt={name} width="100%" src={image} />;
  } else {
    im = <img alt={name} width="100%" src={t0} />;
  }

  return (
    <Card className="card-team" bordered={false} bodyStyle={{ padding: 0 }}>
      <div className="custom-image">{im}</div>
      <div className="custom-card">
        <h3>{name}</h3>
        <p>{designation}</p>
        {region && <h4>{region}</h4>}
      </div>
    </Card>
  );
};

export default () => (
  <PageLayout>
    <SEO title="Team" />
    <h1>Team</h1>
    <h2>Punjab State Executive Committee</h2>
    <h3>Patrons</h3>
    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <Profile name="Shri Suresh Desai" designation="Patron" image="" />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Dr. Davinder Sharma"
          designation="Agriculture Expert, New Delhi"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Sunita Narayan"
          designation="Director, Centre for Science and Environment, New Delhi"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Dr. S G Kabra"
          designation="Eminent Environmental Health Expert, Jaipur"
          image=""
        />
      </Col>
    </Row>
    <h3>Advisory Council</h3>
    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Dr. Sukhpal Singh"
          designation="Economist, IIM, Ahmdabad"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Dr. Inderjeet Kaur"
          designation="Pingalwara, Amritsar"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Rajinder Singh"
          designation="Megassassy Awardee, TBS, Alwar"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Dr. Sudhirindar Sharma"
          designation="The Ecological Foundation, New Delhi"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Rabbi Shergill"
          designation="Thinker and Singer"
          image=""
        />
      </Col>
    </Row>
    <h2>KVM Executive Council</h2>
    <Row gutter={18}>
      <Col xs={24} md={12} lg={8}>
        <Profile
          name="Umendra Dutt"
          designation="Executive Director"
          image={t1}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <Profile
          name="Ajay Tripathi"
          designation="Director of Marketing, Skill Development & Human Resource
          Development"
          image={t2}
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <Profile
          name="Dr Amar Singh Azad"
          designation="Director of Environmental Health Action & Research"
          image={t3}
        />
      </Col>
    </Row>
    <Row gutter={18}>
      <Col xs={24} md={12} lg={8}>
        <Profile
          name="Rajeev Kohli"
          designation="Director, Marketing and Livelihood Development"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <Profile name="Hartej Singh" designation="President" image="" />
      </Col>
    </Row>
    <h3>Vice Presidents</h3>
    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Amarjit Sharma"
          designation="Chaina (Faridkot)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Nirmal
          Singh"
          designation="Bhotna (Barnala)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Amarjit Singh"
          designation="Chadhke (Jalandhar)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Inderjit
          Singh"
          designation="Saholi (Patiala)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile name="Jarnail Singh" designation="Mazhi (Sangrur)" image="" />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Amrita
    Mangat"
          designation="Ludhiana"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="​Madan Lal"
          designation="Village Bullowal ( Hoshiarpur)"
          image=""
        />
      </Col>
    </Row>
    <h3>Secretaries</h3>
    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Manbhawan Singh"
          designation="Purana Shala (Gurdaspur)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Ravdeep Singh"
          designation="Farwahi (Barnala)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile name="Rahul Sharma" designation="Chandigarh" image="" />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Kamaljit S. Hayer"
          designation="Sohangarh Rattewala (Muktsar)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile name="Lipika Kochar" designation="Jalandhar" image="" />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Raspinder S. Grewal"
          designation="Sherpur(Ludhiana)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile name="​Sukhwinder Pappi, " designation="Sangrur" image="" />
      </Col>
    </Row>

    <h3>Action Group Council</h3>
    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Vinod
          Jayani"
          designation="Chairman, Working Group on Organic Produce Marketing & Processing, Kathera (Fazilka)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Dr G
          P I Singh"
          designation="Chairman, Environmental Health Action Group & Vice Chancellor, Adesh University, Bathinda"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Rupsi Garg"
          designation="Convener, Women
    Action for Ecology & Safe Food, Jaitu"
          image=""
        />
      </Col>
    </Row>

    <h3>Regional Councils</h3>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Baljit Singh Kang"
          designation="VPO- Dhahan , Teshsil Banga, Shaheed Bhagat Singh Nagar - President"
          region="Doaba (
            Jalandhar, Hoshiarpur, Nawanshahar, Kapurthala Districts)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Gurmukh Singh"
          designation="Village -
          Rangilpur, Tehsil Batala, Gurdaspur - President"
          region="Majha (
            Pathankot, Gurdaspur, Amritsar, Tarantaaran)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Gurmeet Singh"
          designation="Village Bahawalpur,
    Patiala- President"
          region="Paudh ( Patiala, Fatehgarh
      Sahib, Ropar, Mohali, Chandigarh)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="Anirudh Vashisth"
          designation="Sunam, Sangrur - President"
          region="Malwa East ( Sangrur, Barnala, Ludhiana)"
          image=""
        />
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Profile
          name="(Vacant)"
          designation="President"
          region="Malwa West ( Moga, Ferozepur, Fazilka,
      Faridkot, Muktsar, Bathinda, Mansa)"
          image=""
        />
      </Col>
    </Row>
  </PageLayout>
);
