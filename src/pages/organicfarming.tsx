import { Card, Col, Row } from "antd";
import { Link } from "gatsby";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/Seo";
import t1 from "../images/kitchengardens/balpreetkaur.jpg";
import t2 from "../images/kitchengardens/manjitkaur.jpg";
import t3 from "../images/kitchengardens/veerpalkaur.jpg";
import t4 from "../images/kitchengardens/jaginderkaur.jpg";
import t5 from "../images/kitchengardens/jaspreetkaur.jpg";
import { StoryList } from "../components/Story";

const artisans = [
  {
    key: "balpreetkaur",
    name: "Balpreet Kaur (21)",
    designation: "",
    image: t1,
    expanded: true,
    story:
      "<strong>When young hands get dirty, bounties are harevested</strong> <p>Balpreet Kaur (21) is pursuing her graduation in English. Based at Bishnandi, Faridkot, she started her kitchen garden four years ago as a hobby. She started with a small patch which has now expanded to an area of 100 sq m. Though maintained singlehandedly by her, Balpreet's family helps her out when she is occupied with her studies.</p><p>She received the training from KVM and now she grows ash gourd, okra, beans, potato, marigolds, and more. She uses orange peels neem, ash, and buttermilk in order to improve the soil fertility and manage the pests.</p><p>She acknowledges the fact that the health of the whole family has improved after eating organic. “Eating organic is delightful but growing organic is thrilling!”, she says. As an add-on, she manages to sell her organic vegetables twice a week.</p><p>After attending several training and meetings conducted by KVM, Balpreet is now well informed about the impacts of chemical farming on health and environment. She is spreading the message among her peers and other villagers as well. The hobbies of youngsters, if channelized properly, can set an example for many. This is precisely what KVM is aimed at.</p>",
  },
  {
    key: "manjitkaur",
    name: "Manjit Kaur (60)",
    designation: "",
    image: t2,
    story:
      "<strong>From growing organic vegetables to adding colour into the craft</strong> <p>Manjit Kaur is 60 years old from the village Ramuana in the Faridkot. The relations with Manjit started when she was guided by KVM to setup her kitchen garden. Our field coordinators helped her design the garden. As the consistent supply of water was a problem, she was advised to start mulching the garden. She started with a bunch of seeds she received in the training. Presently, she has a diversity of vegetables and fruits including pumpkins, cauliflower, peppers, turnip, mustard, spinach,radish , eggplant, guavas and  blackberries.</p><p>The bond was strengthened when she started working as a basket weaver in the Project TRINJAN. In her early teens, this art was passed on to her through her grandmother. While her kitchen garden was a point of attraction in the village, her art became an act of admiration. Such stories of   home makers evolved into a gardeners and further into artisans are milestones in the journey of KVM.</p>",
  },
  {
    key: "veerpalkaur",
    name: "Veerpal Kaur (46)",
    designation: "",
    image: t3,
    story:
      "<strong>Reproducing the patterns of the Garden on the Fabric</strong> <p>Veerpal Kaur (46) hails from  farmers' family from Deliyanwali Village, Faridkot. Backed by KVM, she was the one who initiated organic farming in her family through kitchen garden. Slowly, everyone started assisting her in the garden. Now, together, they grow, harvest and cook the farm fresh produce. The garden changes it hues and varieties according to the seasons; and includes- cabbage, cauliflower, peas, spinach, carrots, radishes, cluster beans, potatoes, peppers, tomatoes, eggplant, corn, lady's finger, fenugreek, garlic, onions, chillies, turmeric, and several types of gourds. She uses cow dung  compost and other concoctions as natural fertilisers and buttermilk as a pest resistant.  She learnt these practices in the series of trainings conducted by KVM’s trainers. Her garden yields abundance; which she generously shares with her neighbours. She does the same with the seeds which she conserves every year. She always stands ready to share her gardening experiences with others. </p><p>Veerpal is, also, a part of our TRINJAN project; where she do hand embroidery. Many of the traditional motifs and patterns are similar to the flowers, leaves, insects and birds that are the inhabitants of her kitchen garden. She talks about her experience, “It is very enriching. Tending the  garden; growing organic fruits and vegetables;  sharing them with others; and doing embroidery – all of this gives a profound sense of satisfaction.” Veerpal is  passing on these ‘seeds' to her daughter as well.  </p>",
  },
  {
    key: "jaginderkaur",
    name: "Jaginder Kaur (65)",
    designation: "",
    image: t4,
    story:
      "<strong>Love for gardening, once sown never dies</strong> <p>65-year-old Jaginder Kaur lives in Chaina village in Faridkot in a family of four. As a child, she inherited the art of growing vegetables and flowers from her father. Supported by KVM, this hobby turned into a passionate habit and she is maintaining a garden from past ten years, now. In her organic kitchen garden, Jaginder grows tomatoes, bitter gourd, bottle gourd, carrots, chilies, ash gourd, coriander, mint, garlic, okra/lady finger, spinach, cluster beans, and watermelon. She has a ‘seed bank' where she conserves indigenous seeds of mustard, cluster beans, fenugreek, and several flower varieties. </p><p>Six years ago, her eldest son died. Working in the garden provides her mental and emotional composure and her attention diverts from that grief.</p><p>Her entire family is so accustomed to eating organic vegetables now, that the taste of chemical ones is unpalatable. She says, “When I eat the chemical food, I can feel the chemicals irritate my tongue.” Humorously she adds, “ I don’t need laboratory, my tongue serves the purpose.” </p>",
  },
  {
    key: "jaspreetkaur",
    name: "Jaspreet Kaur (25)",
    designation: "",
    image: t5,
    story:
      "<strong>When serving Health on the Platter is the Mission</strong> <p>Jaspreet Kaur (25), a BA dropout, lives in Rameana village in Faridkot district. She discovered that her hobby of gardening coincided with that of her mother in law, Sukhwinder's,  who was maintaining her organic kitchen garden under the guidance of KVM. After getting married, Jaspreet learnt these organic practices from her mother-in-law. </p><p>She grows various seasonal vegetables including several types of gourds, beans, carrots, radishes, potatoes and much more. She has added more diversity to the existing garden by cultivating pomegranate, pineapple, an orange variety used in pickles, and aloe vera as well as some other medicinal plants. She has even started saving the indigenous seeds recently. She shares her vision, “ I  will  save more and more seeds so that I can  distribute them among other women to encourage them to grow and eat organic.” </p><p>Jaspreet is particular about feeding her family with healthy and organic food. So, she grows her own safe food organically. Moreover, the entire family nurtures the garden together with love. She adds, “I want to expand my garden and add more diversity to it, especially of fruits and flowers.” </p>",
  },
];

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>Organic Farming</h1>

      <Card title="Introduction" bordered={false}>
        <p>
          Since its inception, KVM is working closely with farmers to propagate
          natural farming practices. Breaking the avaricious approach in the
          farming, that came into existence with Green Revolution, was always an
          uphill battle. Sailing through all odds, preaching techniques was
          never our goal. We bonded with farmers as a family and worked with
          them as a companion. We are working on Fukuoka's principle-{" "}
          <i>
            'The ultimate goal of farming is not the growing of crops, but the
            cultivation and perfection of human beings.'
          </i>{" "}
        </p>
        <p>
          In order to educate, sensitize and train farmers in organic farming,
          we organise regular Workshops, Seminars, Public dialogues, Farm visits
          and Participatory Resource Appraisals. Our team of experts, from all
          over the country, is always ready to help and guide our farmers.{" "}
        </p>
      </Card>

      <Card title="Our Initiatives" bordered={false}>
        <h4>Training Programmes </h4>
        <p>
          KVM organizes regular workshops and trainings. Supported by donation,
          these trainings are free for farmers. The subjects include:
          <ul>
            <li>
              Various organic practises like cow-based farming, permaculture,
              Amrut Krishi, no-till farming, forest-farming and the like
            </li>
            <li>Integrated farming models </li>
            <li>Inter-cropping and mixed farming</li>
            <li>Millets based farming</li>
            <li>Indigenous Seed Conservation </li>
            <li>Pest Management </li>
            <li>Crop residue Management </li>
            <li>
              <Link to="/organickitchengardening">
                <strong>Kitchen Gardening</strong>
              </Link>
            </li>
            <li>Food processing </li>
            <li>
              Storage and{" "}
              <Link to="/organicfarmersmarket">
                <strong>Marketing</strong>
              </Link>{" "}
            </li>
            <li>
              <Link to="/certification">
                <strong>Public Guarantee Scheme (PGS) certification</strong>
              </Link>{" "}
            </li>
          </ul>
        </p>

        <h4>Awareness meetings</h4>
        <p>
          To connect with masses, we have organized{" "}
          <strong>over 3000 meetings</strong> so far, covering almost every
          district of Punjab. These meetings are particularly held to make
          people aware of the <i>‘Crisis of Civilization’</i> (Harmful effects
          of pesticides, lack of nutrition in diet, destruction of the
          environment etc.)  which has devastated the state.
        </p>

        <h4>Seminars & Expert Talks </h4>
        <p>
          These are our topic specific meetings where we host subject matter
          experts from across the country. We cover rural as well as urban
          audiences. The topics range from holistic health to crop residue
          management. We have conducted over <strong>500 such seminars</strong>{" "}
          to date. We also have a dedicated{" "}
          <strong>Environment Health Action</strong> group, comprising of
          medical and environmental health professionals. We have conducted over
          50 such talks under the umbrella of this group.
        </p>

        <h4>Model Farm schools</h4>
        <p>
          This is a novel, one of a kind concept, where hands-on training is
          given to the interested farmers who wish to adopt organic farming.{" "}
          <strong>Over 100</strong> of these ‘Schools’ are established across
          the state. The trainings happen on the field of the master trainer.
        </p>

        <h4>Collaboration with other Organisations </h4>
        <p>
          KVM works in collaboration with various organisations in Punjab,
          Haryana, Himachal and Rajasthan. We offer guidance, trainings, field
          visits and expert advice as and when required. We also provide support
          to various national and international organisations to conduct
          surveys, connect with localities, collect data and implement their
          projects on ground level.
        </p>

        <h4>Internship for Students </h4>
        <p>
          We organise internships and training programmes in Organic farming,
          Kitchen Gardening, Urban Farming and Marketing exclusively designed
          for students.
        </p>

        <h4>Exposure to Farmers </h4>
        <p>
          We provide opportunities to our organic farmers to expand their
          horizons and connect with rest of the nation by organising exposure
          visits for them across the country and encouraging them to participate
          in national-level conferences, workshops and other events.
        </p>
      </Card>

      <Card title="Meet our Farmers" bordered={false}>
        <p>
          In late 90s, when the concept of Organic Farming was first introduced
          in Punjab by a small team of KVM, led by Shri Umendra Dutt, there was
          not even a speck of agricultural land free from poisons. The idea
          which was then alien to the farmers and thus rejected, is now in vogue
          in the state. But this was achieved with a great deal of patience,
          perseverance and determination. KVM sowed the seeds, nurtured and
          multiplied them with care and compassion and, therefore, today we have
          a wide network of farmers practising natural farming across Punjab,
          under the guidance of KVM.
        </p>
        <p>
          Initially taking baby steps, we have evolved with our farmers; and
          now, together with them, we are taking quantum leaps.
        </p>
        <p>
          We are honoured to share the{" "}
          <Link to="/organicfarmers">Stories of Evolution</Link> of our farmers.
          These are the milestones in the journey of Kheti Virasat Mission as an
          ever-expanding family.{" "}
        </p>
      </Card>

      <Card title="Get Involved" bordered={false}>
        <p>
          <Link to="/kudratikhetigurukul">
            <strong>Participate</strong>
          </Link>{" "}
          in the Upcoming Events, trainings and workshops.
        </p>
        <p>
          <Link to="/kudratikhetigurukul">
            <strong>Initiate</strong>
          </Link>{" "}
          seminars, meetings, awareness campaigns & farmers’ talks with KVM in
          your area.
        </p>
        <p>
          <Link to="/volunteer">
            <strong>Volunteer</strong>
          </Link>{" "}
          in various Activities
        </p>
        <p>
          <Link to="/kudratikhetigurukul">
            <strong>Learn</strong>
          </Link>{" "}
          hands-on under the guidance of Master Trainers on their ‘Model Farm
          Schools'.
        </p>
        <p>
          <Link to="/donate">
            <strong>Donate</strong>
          </Link>{" "}
          to help us support our organic farmers; facilitate regular trainings;
          develop model farms; conduct surveys for maintaining data base and
          more.{" "}
        </p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="Organic Farming" />;
