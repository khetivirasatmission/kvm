import { Button, Card, Col, Row, Statistic } from "antd";
import { Link } from "gatsby";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import { ExpandableImage } from "../components/Profile";
import SEO from "../components/seo";
import { StoryList } from "../components/Story";
import t1 from "../images/trinjan/1.png";
import t2 from "../images/trinjan/2.png";
import t3 from "../images/trinjan/3.png";
import t5 from "../images/trinjan/5.png";
import t7 from "../images/trinjan/7.png";
import start from "../images/trinjan/start.jpg";
import premiere from "../images/trinjan/premiere-poster.jpeg";
// import discussion from "../images/trinjan/panel-discussion.jpeg";
import { Table } from "antd";
import {
  FacebookProvider,
  EmbeddedPost,
  EmbeddedVideo,
  Comments,
  CommentsCount,
  MessageUs,
  CustomChat,
} from "react-facebook";

// const storyStyle = {
//   paddingTop: "12px",
// };

const columns = [
  {
    title: "Stakeholder",
    dataIndex: "name",
    key: "name",
    className: "stakeholder",
  },
  {
    title: "Intervention",
    dataIndex: "intervention",
    key: "intervention",
    className: "intervention",
  },
];

const data = [
  {
    key: "1",
    name: "Cotton farmers",
    intervention:
      "Provide training on organic practices; buy cotton on premium price",
  },
  {
    key: "2",
    name: "Spinners",
    intervention:
      "Provide them with tools and raw material; conduct trainings to hone their skills",
  },
  {
    key: "3",
    name: "Natural dyers",
    intervention:
      "Standardise natural dyes; train the youngsters in the art of dyeing",
  },
  {
    key: "4",
    name: "Weavers and Embroiders",
    intervention:
      "Work on the fusion of traditional and contemporary designs; quality control",
  },
  {
    key: "5",
    name: "Tailors",
    intervention:
      "Work on the customized designs; maintain quality and enhance the productivity",
  },
  {
    key: "6",
    name: "Buyers",
    intervention:
      "Provide fabric with the compassionate warp and delicated weft carefully crafted by artistic hands",
  },
];

const artisans = [
  {
    key: "rimpykaur",
    name: "Rimpy Kaur (18)",
    designation: "Natural dyer",
    image: t1,
    expanded: true,
    story:
      "Rimpy Kaur is from Kotli village in Muktsar district. With her academic background in fashion, she developed a quick passion for natural dyeing. We trained her into using all-natural plant materials to make dyes for the thread, including marigold flowers, carrots, onion skin, babul (gum arabic) bark, pomegranate skin, eucalyptus bark and much more. She attended regular trainings. Thus, not just her skills developed but also her wisdom. She understood that artificial dyes cause skin irritations and infections; thus switching to natural dyes is the need of the hour. TRINJAN has also given this young adult, a source of earning bread and butter, working from home. As people started acknowledging her work through KVM, her confidence is boosted by leaps and bounds. She says, “I will be glad to train others and share this art I have learnt through KVM. I will, happily, carry on with this work as it gives me deep creative satisfaction.” Rimpy represents the youth, which if provided with appropriate guidance and skills, can bring a change in the outlook of youngsters.",
  },
  {
    key: "gagandeepkaur",
    name: "Gagandeep Kaur (26)",
    designation: "Embroider and Tailor",
    image: t2,
    story:
      "A high school pass out, Gagandeep Kaur, lives in the Kotli village in district Muktsar. She had learnt embroidery from her mother and stitching from her sister at the age of 15. She says, “I continued both of these skills as a past time ever since I had learnt them. I lament the fact that now we are completely dependent on machines and look down upon blue collared professions. But I had always enjoyed my work.” Being grateful to KVM, she adds, “I am thankful to KVM for acknowledging my hobby and helping me take it to a professional level. Now I am able to provide financial backing to my family, too.” Being more delicate, working with natural material was little challenging in the beginning. But after receiving guidance from KVM, she has got a hang of it now.",
  },
  {
    key: "ramandeepkaur",
    name: "Ramandeep Kaur (23)",
    designation: "Spinner",
    image: t5,
    story:
      "Ramandeep Kaur (23), from Kotli, Muktsar, holds BCA degree. Inheriting the art of spinning from her mother, she used to spin, sometimes as a past-time and sometimes as a stress-relieving exercise. Since 2017, she has started spinning regularly as a professional with KVM. Ramandeep revisits the moments when KVM came to see this young girl spinning, “I felt so happy and honoured that they appreciated my work and gave me an opportunity to hone my skills. I feel contented that the skills learnt playfully from my elders are now my tools for financial stability.” She always experience a mental peace and calm, which comes along, when she spins. For her, spinning is much more than a mechanical activity.",
  },
  {
    key: "sindedrpalkaur",
    name: "Sinderpal Kaur (57)",
    designation: "Weaver",
    image: t7,
    story:
      "Sinderpal Kaur (57) lives in the village of Kotli, Muktsar district. At the age of seven, she learnt weaving from her mother. After learning the basics in a month or so, she kept practising to perfect the skill. She says, “Working on loom keeps me focused and grounded. It is a perfect exercise to rein in my wandering thoughts.” She is even more satisfied that the work is, now, generating her money. From a pity home maker, her status has now uplifted to a professional artisan. As this art is at the verge of extinction, Punjab is left with very few weavers who still know the intricacies of it. And Sinderpal, is indeed one of those rare people, who need immediate assistance, for they hold the seeds for young generation.",
  },
  {
    key: "asharani",
    name: "Aasha Rani (70)",
    designation: "Basket Weaver",
    image: t3,
    story:
      "With no academic background, Asha Rani (70) taught herself how to weave baskets and other crafts out of palm leaves in her early teens. Based at Jaitu, Faridkot, this is the source of bread and butter to her family of five. She explains her routine, “I go to different spots near the village pond to collect the raw material. I work for 8-9 hours per day to make two baskets and a plate in a day.” That's quite a speed! Despite some issues in her back, she manages to give continuous sitting, driven by her determination and passion. Even being a novice, Asha knows that any eatable, if kept in plastic, goes lifeless. Her work has multitude of benefits- from generating livelihood to the reviving of traditional craft and an eco-friendly alternative over plastic. KVM is supporting many little known artisans like Asha Rani, providing their products a market and their art a recognition through TRINJAN.",
  },
];

export default () => (
  <PageLayout>
    <SEO title="Trinjan" />

    <h1>
      Trinjan
      <Button
        style={{ float: "right" }}
        type="primary"
        size="large"
        href="https://www.payumoney.com/paybypayumoney/#/1EA80E79A26B9C9D3EE780BABDFBFDD2"
        target="_blank"
      >
        Donate now
      </Button>
    </h1>



    <Card
      title=" Trinjan - A Documentary Premiere on Reviving the Spinning Wheel in Punjab and Experts Panel Discussion"
      bordered={false}
    >
      <div className="video-responsive">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/AIDSeattle/videos/269883164380614/"
          width="1280"
          height="720"
          style={{ border: "none" }}
          scrolling="no"
        ></iframe>
      </div>
    </Card>

    <Row>
      <Col xs={24} sm={24} md={12}>
        <FacebookProvider appId="195658071778073">
          <EmbeddedPost
            href="https://www.facebook.com/khetivirasatmission/posts/10220976917804233"
            width="500"
          />
        </FacebookProvider>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <FacebookProvider appId="195658071778073">
          <Comments
            href="https://www.facebook.com/khetivirasatmission/posts/10220976917804233"
            order_by="reverse_time"
            width="500"
            numPosts={10}
          />
        </FacebookProvider>
      </Col>
    </Row>

    <Card
      title="Weaving the Social Fabric with Compassionate Warp and Dedicated Weft"
      bordered={false}
    >
      <p>
        Trinjan, in rural Punjab, was the space where women would traditionally
        gather to spin on charkhas, weave, talk, counsel, learn from each other,
        cook and eat together. In the assaults made by Green Revolution, this
        culture of community gatherings in disguise of artistic activities was
        lost.
      </p>
      <p>
        KVM has revived this culture through its project TRINJAN. It is
        providing women artisans a platform to re-explore their art, earn
        livelihood and share their wisdom.
      </p>
    </Card>

    <Card title="Project TRINJAN" bordered={false}>
      <p>
        TRINJAN is an extension of Kheti Virasat’s Mission for Rural Livelihood
        through Traditional Skills. To revive the great knowledge of textile and
        handicrafts that women had, TRINJAN started in 4 villages in 2017. The
        self-reliance of cloth, aka 'Vastra Swavlambham’, which was once a part
        and parcel of our culture, was lost long ago. Most of the spinners and
        weavers were women. They were also actively involved in agriculture and
        dairy activities. In the course of industrialisation and modernization,
        most of them lost their patience and interest amid the flood of easily
        accessible ready-made garments and limited themselves to household
        chores. The charkhas were abandoned and the weavers were out of
        practice. KVM identified these women artisans, most of them from poor
        financial backgrounds, and encouraged them to restart their work
        professionally, with KVM.
      </p>
      <p>
        Under the umbrella of TRINJAN, we also organise festive gatherings known
        as Trinjan Melas, exhibitions with live demonstrations, traditional food
        festivals and cultural programmes.
      </p>
    </Card>

    <Row>
      <Col xs={24}>
        <ExpandableImage name="trinjan" image={start} />
      </Col>
    </Row>

    <Card title="Value chain" bordered={false}>
      <p>
        Organic indigenous Cotton grown by the farmers, is procured by KVM at
        premium prices, hand spun, naturally dyed and hand woven by the rural
        artisans. Along with this, there are women artisans who do hand
        embroidery, crochet, Knitting, make different grass crafts and other
        decorative products.
      </p>
      <p>
        We are constantly working on the quality of the yarn, fabric, designing,
        productivity and marketing through regular trainings of women. For this,
        we have a network of experts and various organisations across India,
        which is constantly evolving.
      </p>

      <Table
        rowClassName={(_, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <br />
    </Card>

    <Card title="TRINJAN Family" bordered={false}>
      <Row>
        <Col xs={12} sm={12} lg={4}>
          <div>
            <Statistic title="Farmers" value={19} />
          </div>
        </Col>
        <Col xs={12} sm={12} lg={4}>
          <div>
            <Statistic title="Spinners" value={137} />
          </div>
        </Col>
        <Col xs={12} sm={12} lg={5}>
          <div>
            <Statistic title="Natural Dyers" value={10} />
          </div>
        </Col>
        <Col xs={12} sm={12} lg={4}>
          <div>
            <Statistic title="Fabric Weavers" value={28} />
          </div>
        </Col>
        <Col xs={12} sm={12} lg={5}>
          <div>
            <Statistic title="Hand Embroiders" value={13} />
          </div>
        </Col>
        <Col xs={12} sm={12} lg={4}>
          <div>
            <Statistic title="Knitters" value={24} />
          </div>
        </Col>
        <Col xs={12} sm={12} lg={4}>
          <div>
            <Statistic title="Darri Weavers" value={18} />
          </div>
        </Col>
        <Col xs={12} sm={12} lg={5}>
          <div>
            <Statistic title="Crochet Workers" value={29} />
          </div>
        </Col>
        <Col xs={12} sm={12} lg={4}>
          <div>
            <Statistic title="Tailors" value={7} />
          </div>
        </Col>
        <Col xs={12} sm={12} lg={5}>
          <div>
            <Statistic title="Basket Weavers" value={11} />
          </div>
        </Col>
      </Row>
    </Card>

    <Card title="Our Products" bordered={false}>
      <p>
        These hardworking women make beautiful creative products including
        bedsheets, khes (topsheet), towels, stolls, mufflers, fabric for
        garments, darri, mats, rugs, woolen sweater, phulkaris, hand woven
        baskets, crochet earrings, toran, coasters, wall hangings etc. These
        products are than marketed by KVM on various public platforms.
      </p>
    </Card>

    <Card title="Meet our Artisans" bordered={false}>
      {/* <Row gutter={18}>
        <Col xs={24} md={12} lg={8}>
          <Profile name="Rimpy Kaur" image={t1} />
          <Anchor>
            <Anchor.Link href="#rimpykaur" title="Read my story" />
          </Anchor>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Profile name="Gagandeep Kaur" image={t2} />
          <Anchor>
            <Anchor.Link href="#gangandeepkaur" title="Read my story" />
          </Anchor>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Profile name="Ramandeep Kaur" image={t5} />
          <Anchor>
            <Anchor.Link href="#ramandeepkaur" title="Read my story" />
          </Anchor>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Profile name="Sinderpal Kaur" image={t7} />
          <Anchor>
            <Anchor.Link href="#sinderpalkaur" title="Read my story" />
          </Anchor>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Profile name="Aasha Rani" image={t3} />
          <Anchor>
            <Anchor.Link href="#asharani" title="Read my story" />
          </Anchor>
        </Col>
         <Col xs={24} md={12} lg={6}>
          <Profile name="M​anjit Kaur" image={t4} />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Profile name="Gurcharan Kaur" image={t8} />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Profile name="Sukhjit Kaur" image={t10} />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Profile name="Mahinder Kaur" image={t11} />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Profile name="Gurjit Kaur" image={t12} />
        </Col> 
      </Row>*/}
      <StoryList list={artisans} />
    </Card>

    <Card title="Work with TRINJAN" bordered={false}>
      <strong>We are looking for volunteers!</strong>
      <p>
        If the traditional art, handicraft and culture linkages amuses you,{" "}
        <Link to="/volunteer">
          <strong>Join as a volunteer</strong>
        </Link>{" "}
        to help us further explore, document, expand and evolve TRINJAN.
      </p>
    </Card>

    <Card title="Donate for TRINJAN" bordered={false}>
      <p>
        This project is supported by donations.{"  "}
        <Link to="/donate">
          <strong>Donate here</strong>
        </Link>{" "}
        for a cause.
      </p>
    </Card>

    {/* <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <div id="rimpykaur">
          <Profile
            name="Rimpy Kaur (18)"
            designation="Natural dyer"
            image={t1}
          />
        </div>
      </Col>
      <Col xs={24} md={12} lg={18}>
        <div style={storyStyle}>
          <p>
            Rimpy Kaur is from Kotli village in Muktsar district. With her
            academic background in fashion, she developed a quick passion for
            natural dyeing. We trained her into using all-natural plant
            materials to make dyes for the thread, including marigold flowers,
            carrots, onion skin, babul (gum arabic) bark, pomegranate skin,
            eucalyptus bark and much more. She attended regular trainings. Thus,
            not just her skills developed but also her wisdom. She understood
            that artificial dyes cause skin irritations and infections; thus
            switching to natural dyes is the need of the hour. TRINJAN has also
            given this young adult, a source of earning bread and butter,
            working from home. As people started acknowledging her work through
            KVM, her confidence is boosted by leaps and bounds. She says, “I
            will be glad to train others and share this art I have learnt
            through KVM. I will, happily, carry on with this work as it gives me
            deep creative satisfaction.” Rimpy represents the youth, which if
            provided with appropriate guidance and skills, can bring a change in
            the outlook of youngsters.
          </p>
        </div>
      </Col>
    </Row>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <div id="gagandeepkaur">
          <Profile
            name="Gagandeep Kaur (26)"
            designation="Embroider and Tailor"
            image={t2}
          />
        </div>
      </Col>
      <Col xs={24} md={12} lg={18}>
        <div style={storyStyle}>
          <p>
            A high school pass out, Gagandeep Kaur, lives in the Kotli village
            in district Muktsar. She had learnt embroidery from her mother and
            stitching from her sister at the age of 15. She says, “I continued
            both of these skills as a past time ever since I had learnt them. I
            lament the fact that now we are completely dependent on machines and
            look down upon blue collared professions. But I had always enjoyed
            my work.” Being grateful to KVM, she adds, “I am thankful to KVM for
            acknowledging my hobby and helping me take it to a professional
            level. Now I am able to provide financial backing to my family,
            too.” Being more delicate, working with natural material was little
            challenging in the beginning. But after receiving guidance from KVM,
            she has got a hang of it now.
          </p>
        </div>
      </Col>
    </Row>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <div id="ramandeepkaur">
          <Profile
            name="Ramandeep Kaur (23)"
            designation="Spinner"
            image={t5}
          />
        </div>
      </Col>
      <Col xs={24} md={12} lg={18}>
        <div style={storyStyle}>
          <p>
            Ramandeep Kaur (23), from Kotli, Muktsar, holds BCA degree.
            Inheriting the art of spinning from her mother, she used to spin,
            sometimes as a past-time and sometimes as a stress-relieving
            exercise. Since 2017, she has started spinning regularly as a
            professional with KVM. Ramandeep revisits the moments when KVM came
            to see this young girl spinning, “I felt so happy and honoured that
            they appreciated my work and gave me an opportunity to hone my
            skills. I feel contented that the skills learnt playfully from my
            elders are now my tools for financial stability.” She always
            experience a mental peace and calm, which comes along, when she
            spins. For her, spinning is much more than a mechanical activity.
          </p>
        </div>
      </Col>
    </Row>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <div id="sindedrpalkaur">
          <Profile name="Sinderpal Kaur (57)" designation="Weaver" image={t7} />
        </div>
      </Col>
      <Col xs={24} md={12} lg={18}>
        <div style={storyStyle}>
          <p>
            Sinderpal Kaur (57) lives in the village of Kotli, Muktsar district.
            At the age of seven, she learnt weaving from her mother. After
            learning the basics in a month or so, she kept practising to perfect
            the skill. She says, “Working on loom keeps me focused and grounded.
            It is a perfect exercise to rein in my wandering thoughts.” She is
            even more satisfied that the work is, now, generating her money.
            From a pity home maker, her status has now uplifted to a
            professional artisan. As this art is at the verge of extinction,
            Punjab is left with very few weavers who still know the intricacies
            of it. And Sinderpal, is indeed one of those rare people, who need
            immediate assistance, for they hold the seeds for young generation.
          </p>
        </div>
      </Col>
    </Row>

    <Row gutter={18}>
      <Col xs={24} md={12} lg={6}>
        <div id="asharani">
          <Profile
            name="Aasha Rani (70)"
            designation="Basket Weaver"
            image={t3}
          />
        </div>
      </Col>
      <Col xs={24} md={12} lg={18}>
        <div style={storyStyle}>
          <p>
            With no academic background, Asha Rani (70) taught herself how to
            weave baskets and other crafts out of palm leaves in her early
            teens. Based at Jaitu, Faridkot, this is the source of bread and
            butter to her family of five. She explains her routine, “I go to
            different spots near the village pond to collect the raw material. I
            work for 8-9 hours per day to make two baskets and a plate in a
            day.” That's quite a speed! Despite some issues in her back, she
            manages to give continuous sitting, driven by her determination and
            passion. Even being a novice, Asha knows that any eatable, if kept
            in plastic, goes lifeless. Her work has multitude of benefits- from
            generating livelihood to the reviving of traditional craft and an
            eco-friendly alternative over plastic. KVM is supporting many little
            known artisans like Asha Rani, providing their products a market and
            their art a recognition through TRINJAN.
          </p>
        </div>
      </Col>
    </Row> */}

    {/* <div>
          <Profile name="M​anjit Kaur" image={t4} />
          <p>
            M​anjit Kaur is 60 years old from the village of Ramuana in the
            Faridkot district of Punjab. She is a basket and bowl maker as well
            as a kitchen gardener. When she was young, her aunt and grandmother
            taught her how to make the woven baskets from the straw grass;
            everyone would sit together and make them. She says that now people
            don’t sit together anymore. They could but the younger generation
            are not interested in learning the craft. When she does this work,
            she says it makes her feel good. She will complete a basket in 3-4
            days, more if there is a lot of housework. To begin, she soaks the
            grass for one day and then it is ready to be used to make the
            basket. Manjit does not have free time on her hands. There is always
            work to do and she does everything in her house. But she feels that
            it is good for health to have good work. The impacts of both having
            an organic kitchen garden and continuing to incorporate her
            traditional basket weaving into her daily life are clear for Manjit.
            They are holistically beneficial to Manjit herself as well as her
            family and the broader community and planet.
          </p>
        </div> */}
    {/* </Col> */}

    {/* <Col xs={24} md={12} lg={12}>
        

        <div>
          <Profile name="Gurcharan Kaur" image={t8} />
          <p>
            Gurcharan Kaur lives in Kotli, Muktsar and is 60 years old. She
            lives alone and has no formal education. When she was 15 years old,
            her older sister taught her how to weave and she has been weaving
            ever since. She now can complete one full piece in about two weeks
            or so, working on them for about 4 hours each day. Gurcharan also
            says that she feels better when she is doing it. When she stops, she
            says that her body also stops and doesn’t feel as well. She
            continues advocating that doing work by hand is best. Indirectly,
            this is what this case study highlights. It is not just about the
            weaving being a source of income and improved economic stability,
            but that the work that is being done by hand is also maintaining a
            simplicity to life that is often overlooked.
          </p>
        </div>

        <div>
          <Profile name="Sukhjit Kaur" image={t10} />
          <p>
            Sukhjit Kaur is 60 years old and lives in Kotli, Muktsar. She has no
            formal education. She began weaving when she was 20 years old,
            learning from her mother, and has been doing it ever since. She says
            that she does it to make things that she needs in her house and that
            it is also a helpful income source – making money by doing weaving
            for other people as well. It takes her about 20 days to make one
            weaving and she feels that it is helpful to her household income and
            that she is satisfied with the money that she makes. She also feels
            that it connects her to her family, from the past and into the
            future. Now, her daughter-in-law has shown interest in learning to
            weave. Additionally, she says, that it connects her to her culture.
            In the past, she says, everyone did work by hand but now no one
            wants to do this work. She thinks that if we want to connect the
            younger generation to it, we need to be doing it and teaching them
            while we are doing it. This case shows the passion that can be
            evoked when someone not only conscientiously benefits from their
            work (i.e. economically) but enjoys it in a way that they look
            forward to time spent in the process itself.
          </p>
        </div>

        <div>
          <Profile name="Mahinder Kaur" image={t11} />
          <p>
            Mahinder Kaur is 60 years old and has 9 members in her family. Her
            aunt taught her to weave when she was 15 years old and she has been
            doing it ever since. She says that in the past, everyone did work
            like this and that if younger generations are going to continue, the
            work needs to be done in front of them, so they can see it. Mahinder
            believes that doing work by hand is good and it makes her happy. She
            can make 200 /- per day by this doing this work. As compared to the
            past, she does less work now, because she is older. Now she works an
            hour or two in a day. But it continues to keep her connected to her
            culture and because of it, her community sees her in a positive
            light. She says that because she started doing this so many years
            ago, everyone knows her as a weaver.
          </p>
        </div>

        <div>
          <Profile name="Gurjit Kaur" image={t12} />
          <p>
            Gurjit Kaur is 40 years old, lives in village Kotli, Muktsar. She
            says that in the past, everyone did work like weaving but now, no
            one is interested. But Gurjit believes that doing work by hand is
            good. She says that now that the machines have come, they have taken
            away the importance of handwork. She also is able to help pay for
            her house expenses from the money that she earns from weaving.
            Weaving also makes her feel like there is more of a purpose in her
            life because many people in her village know her as a weaver and
            they like her work. Still, there are times when people do not pay
            her properly and so she appreciates that KVM gives her work, paying
            her well and on time. She is part of a family of craftswomen who
            weave and embroider, and they continue an intergenerational
            connection to this cultural work while also doing it together.
          </p>
        </div>
      </Col> */}
    {/* </Row> */}
  </PageLayout>
);
