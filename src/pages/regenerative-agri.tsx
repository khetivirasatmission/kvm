import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "gatsby";

import PageLayout from "../components/layouts/PageLayout";
import Profile from "../components/Profile";
import SEO from "../components/seo";
import okg1 from "../images/okg1.jpg";
import of1 from "../images/of1.jpg";

export default () => (
  <PageLayout>
    <SEO title="Regenerative Agriculture" />

    <h1>Regenerative Agriculture</h1>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={12}>
        <Profile designation="" image={okg1} />
      </Col>
      <Col xs={24} md={12} lg={12}>
        <Profile designation="" image={of1} />
      </Col>
    </Row>

    <Card title="Introduction" bordered={false}>
      <p>
      KVM firmly believes that Regenerative Agriculture stream of Organic Farming Movement is a unique and a holistic food production system that encourage and enrich agro-system health, including biodiversity, natural cycles along with nourishing the health of soils, ecosystems and people. It combines tradition, innovation and holistic science to benefit the shared environment and promote fair relationships and good quality of life for all involved. It is an ecological paradigm for establishing a climate-friendly safe and toxin-free food production while taking care of financial viability and a dignified and secured livelihoods for farmers.
      </p>
      <p>
      KVM understood it well that it’s not just producing the crops chemical free and getting the poison free food although it’s about revitalizing, regenerating and reviving the complete ecosystem ,farm diversity and diversity in food. 
            </p>
            
        </Card>
        
        <Card title="Our Initiatives" bordered={false}>
        <p>
            While working on the principles of non-violence, inclusiveness and holisticity, KVM has been promoting the following practices among Organic Farmers:
            </p>
            <ul  style={{ listStyle: "square inside none" }}>
                <li>Use of Desi and indigenous seeds which are non-GM / Bt. , non-hybrid and other non-GMOs</li>
                <li>
Growing seasonal crops and vegetables with a healthy soils and a farm ecosystem.</li>
                <li>  
Maintaining farm diversity with diverse varieties and species of Grains, Fruits, Pulses, Oil seeds, Millets, Vegetables, Cotton and Medicinal plants etc. Further any particular food crop has many different varieties to grow for its special character.</li>
                <li>
Dynamic and Ecological Crop rotation and crop cycle as no one crop will be grown over and over again at same place</li>
                <li>
Rain Water harvesting and the water efficient agriculture practices. Promoting natural practices and soil health systems that makes soil more pores so that rain water peculate at much higher rate with minimum runoff and soil erosion. </li>
                <li> 
Promoting practices that enhances Soil Carbon content and microbe diversity and count in soil.</li>
                <li>    
KVM firmly believes that knowledge and understanding about Insects and Pests is the best and most effective tool to manage the Pests. This Pest literacy promotes identification Pests and their Life cycle and behavior rather than spraying Bio-Pesticides.</li>
                <li>  
KVM strongly follows the philosophy of Living Soils. Whatever comes out of farm or soil maximum should go back to it by recycling and Composting of Crop residue and Biomass for making the manure and strengthening the soil health. Regenerative Agriculture stands for regeneration of Soil Health therefore No crop residue burning is the foremost principle to adhere by each of Organic Farmer. KVM promotes using this Biomass and Crop residue as mulching, composting and preparing manure, animal fodder and incorporation in soil. KVM also promotes other ecological practices to Stop Crop Residue Burning.</li>
                <li> 
KVM promotes the unique concept of ‘Adopt a Family Organic Farmer for Health and Nutrition’. It is always better to have a Family Farmer for Safe and Nutritious local food rather than visiting a doctor for medication.</li>
                <li> 
Biodiversity is the master-key of Organic Farming and Biodiversity comes with intercropping and multi-cropping. So KVM endorses an immense crop-diversity system. This diversity built an eco- friendly system that hosts and feed Pollinators, Birds, Microorganisms and other living creatures.</li>
                <li> 
Integrations of herbs, shrubs, creepers, climbers and various medicinal plants to the farm. Having an orchard of fruits and traditional trees and having border crops for the protection of delicate crops and vegetables.</li>
                <li>
KVM encourages minimal mechanization to save soil from compaction with heavy farm machinery. No big tractors rather using small implements.</li>
                <li>  
KVM is committed to Lessor Food Miles approach. KVM encourage Local production with local marketing through Community supported Farmers’ Markets and consumers network.</li>
                <li> 
Green Revolution induced intensive agriculture brought Wheat and Paddy based a faulty cropping cycle. This model has changed the farm landscape of Punjab with a ruthless Mono-cropping, loss of biodiversity, decrease in the water table. Millets- Which formed a major part of Punjab’s diet once, are now replaced with Wheat and Rice. Kheti Virasat Mission has been systematically trying to revive this heritage grain for the past few years. We have recognized that this revival not only brings back nutritional security to the consumers but also addresses the issues of declining water table, loss of biodiversity, soil health and rural unemployment. Kheti Virasat Mission has taken up the challenge of building a value chain of organically grown Millets from Farm to plate.</li>
                <li>  
KVM has a clear vision of correlation of Farming with Food and Food with Health and Nutrition. We can institute a model of Regenerative Agriculture only if we establish this Triangle of Life based upon Farming, Food and Health & Nutrition.</li>
                <li>  
Women are the backbone of Farming and whole Civilizational Discourse as they can look after the Family, Society and Nation as nobody else can. In the last few decades highly mechanised and chemical intensive agriculture has eroded the scope of any involvement and role of women in the farming. Organic farming brought back a scope for women in farming with different roles.</li>
                <li> 
Native Seeds are vital to our farmers. We believe that seeds must be owned by the farmers themselves and not by the big corporations. Recognizing this ‘Seed Sovereignty’, we have trained hundreds of farmers in seed conservation. Family seed banks have also been created. We have collected seeds from various parts of India and have multiplied them for further distribution.</li>
                <li>
Livestock is indispensable and one of the most essential part of Organic Farming. Livestock provides base material for home-made Bio-Pesticides and Bio-fertilizer as cow dung and cow urine can be used as fertilizers.</li>
                <li> 
KVM also promotes the Organic Cotton as the part of its regenerative agriculture initiative. As cotton is most ecological crop if we wish to grow it organically. It required lowest water and no fertilizer. Cotton has also revived livelihoods for traditional spinners and weavers and saved their traditional knowledge system and skills with most Eco-friendly Clothing.     
</li>
            </ul>
    </Card>

    
  </PageLayout>
);
