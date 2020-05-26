import { Card, Col, Row } from "antd";
import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import SEO from "../components/seo";
import t1 from "../images/kitchengardens/balpreetkaur.jpg";
import t2 from "../images/kitchengardens/manjitkaur.jpg";
import t3 from "../images/kitchengardens/veerpalkaur.jpg";
import t4 from "../images/kitchengardens/jaginderkaur.jpg";
import t5 from "../images/kitchengardens/jaspreetkaur.jpg";
import { StoryList } from "../components/Story";

const artisans = [
  {
    key: "balpreetkaur",
    name: "When young hands get dirty, bounties are harvested",
    designation: "",
    image: t1,
    expanded: true,
    story:
      "<p>Balpreet Kaur (21) is pursuing her graduation in English. Based at Bishnandi, Faridkot, she started her kitchen garden four years ago as a hobby. She started with a small patch which has now expanded to an area of 100 sq m. Though maintained singlehandedly by her, Balpreet's family helps her out when she is occupied with her studies.</p><p>She received the training from KVM and now she grows ash gourd, okra, beans, potato, marigolds, and more. She uses orange peels neem, ash, and buttermilk in order to improve the soil fertility and manage the pests.</p><p>She acknowledges the fact that the health of the whole family has improved after eating organic. “Eating organic is delightful but growing organic is thrilling!”, she says. As an add-on, she manages to sell her organic vegetables twice a week.</p><p>After attending several training and meetings conducted by KVM, Balpreet is now well informed about the impacts of chemical farming on health and environment. She is spreading the message among her peers and other villagers as well. The hobbies of youngsters, if channelized properly, can set an example for many. This is precisely what KVM is aimed at.</p>",
  },
  {
    key: "manjitkaur",
    name: "From growing organic vegetables to adding colour into the craft",
    designation: "",
    image: t2,
    expanded: false,
    story:
      "<p>Manjit Kaur is 60 years old from the village Ramuana in the Faridkot. The relations with Manjit started when she was guided by KVM to setup her kitchen garden. Our field coordinators helped her design the garden. As the consistent supply of water was a problem, she was advised to start mulching the garden. She started with a bunch of seeds she received in the training. Presently, she has a diversity of vegetables and fruits including pumpkins, cauliflower, peppers, turnip, mustard, spinach,radish , eggplant, guavas and  blackberries.</p><p>The bond was strengthened when she started working as a basket weaver in the Project TRINJAN. In her early teens, this art was passed on to her through her grandmother. While her kitchen garden was a point of attraction in the village, her art became an act of admiration. Such stories of   home makers evolved into a gardeners and further into artisans are milestones in the journey of KVM.</p>",
  },
  {
    key: "veerpalkaur",
    name: "Reproducing the patterns of the Garden on the Fabric",
    designation: "",
    image: t3,
    expanded: false,
    story:
      "<p>Veerpal Kaur (46) hails from  farmers' family from Deliyanwali Village, Faridkot. Backed by KVM, she was the one who initiated organic farming in her family through kitchen garden. Slowly, everyone started assisting her in the garden. Now, together, they grow, harvest and cook the farm fresh produce. The garden changes it hues and varieties according to the seasons; and includes- cabbage, cauliflower, peas, spinach, carrots, radishes, cluster beans, potatoes, peppers, tomatoes, eggplant, corn, lady's finger, fenugreek, garlic, onions, chillies, turmeric, and several types of gourds. She uses cow dung  compost and other concoctions as natural fertilisers and buttermilk as a pest resistant.  She learnt these practices in the series of trainings conducted by KVM’s trainers. Her garden yields abundance; which she generously shares with her neighbours. She does the same with the seeds which she conserves every year. She always stands ready to share her gardening experiences with others. </p><p>Veerpal is, also, a part of our TRINJAN project; where she do hand embroidery. Many of the traditional motifs and patterns are similar to the flowers, leaves, insects and birds that are the inhabitants of her kitchen garden. She talks about her experience, “It is very enriching. Tending the  garden; growing organic fruits and vegetables;  sharing them with others; and doing embroidery – all of this gives a profound sense of satisfaction.” Veerpal is  passing on these ‘seeds' to her daughter as well.  </p>",
  },
  {
    key: "jaginderkaur",
    name: "Love for gardening, once sown never dies",
    designation: "",
    image: t4,
    expanded: false,
    story:
      "<p>65-year-old Jaginder Kaur lives in Chaina village in Faridkot in a family of four. As a child, she inherited the art of growing vegetables and flowers from her father. Supported by KVM, this hobby turned into a passionate habit and she is maintaining a garden from past ten years, now. In her organic kitchen garden, Jaginder grows tomatoes, bitter gourd, bottle gourd, carrots, chilies, ash gourd, coriander, mint, garlic, okra/lady finger, spinach, cluster beans, and watermelon. She has a ‘seed bank' where she conserves indigenous seeds of mustard, cluster beans, fenugreek, and several flower varieties. </p><p>Six years ago, her eldest son died. Working in the garden provides her mental and emotional composure and her attention diverts from that grief.</p><p>Her entire family is so accustomed to eating organic vegetables now, that the taste of chemical ones is unpalatable. She says, “When I eat the chemical food, I can feel the chemicals irritate my tongue.” Humorously she adds, “ I don’t need laboratory, my tongue serves the purpose.” </p>",
  },
  {
    key: "jaspreetkaur",
    name: "When serving Health on the Platter is the Mission",
    designation: "",
    image: t5,
    expanded: false,
    story:
      "<p>Jaspreet Kaur (25), a BA dropout, lives in Rameana village in Faridkot district. She discovered that her hobby of gardening coincided with that of her mother in law, Sukhwinder's,  who was maintaining her organic kitchen garden under the guidance of KVM. After getting married, Jaspreet learnt these organic practices from her mother-in-law. </p><p>She grows various seasonal vegetables including several types of gourds, beans, carrots, radishes, potatoes and much more. She has added more diversity to the existing garden by cultivating pomegranate, pineapple, an orange variety used in pickles, and aloe vera as well as some other medicinal plants. She has even started saving the indigenous seeds recently. She shares her vision, “ I  will  save more and more seeds so that I can  distribute them among other women to encourage them to grow and eat organic.” </p><p>Jaspreet is particular about feeding her family with healthy and organic food. So, she grows her own safe food organically. Moreover, the entire family nurtures the garden together with love. She adds, “I want to expand my garden and add more diversity to it, especially of fruits and flowers.” </p>",
  },
];

export default () => (
  <PageLayout>
    <SEO title="Project Kitchen Gardens" />
    <h1>Project Kitchen Gardens</h1>

    <h3 style={{ color: "#72a230", textAlign: "center" }}>I AM A GARDENER</h3>
    <p style={{ fontSize: "18px", color: "#72a230", textAlign: "center" }}>
      What's your superpower?
    </p>

    <Card title="Introduction" bordered={false}>
      <p>
        The setbacks of Green Revolution were manifold. First - The crop pattern
        was reduced to wheat and rice, that too with heavy doses of chemical
        applications. Second - Women lost their role and interest in farming
        practices. Third - Nutritional security was lost, as fruits, vegetables
        and medicinal plants were either out of the farming scenario or fed with
        cocktails of pesticides. Fourth - The food was devoid of compassion and
        life-force energy. To address these issues, we had started working with
        women to establish kitchen gardens in villages.{" "}
      </p>
    </Card>

    <Card title="Our Project" bordered={false}>
      <p>
        With the support of Association for India's Development (AID), we
        started the ‘Women Action for Organic Farming and Rural Livelihood’ in
        2011. Under this umbrella, we are training women to establish Organic
        Kitchen Gardens (inclusive of vegetables, fruits, medicinal plants and
        mushroom cultivation) in their backyards. Started from 4 villages in
        2011, it has now spread across <strong>60 villages</strong> with{" "}
        <strong>6,000 women</strong> involved.{" "}
      </p>
    </Card>

    <Card title="Our Initiatives" bordered={false}>
      <h4>Kitchen Gardens</h4>
      <p>
        KVM delivers trainings which include designing the garden; making
        natural growth promotors; pest management; seed conservation & much
        more. The key feature is that majority of our trainers, project
        coordinators and trainees are women. The field coordinators pay their
        regular visits to the gardens every month, addressing the challenges
        faced by the gardeners.
        <ul>
          <li>
            In a season, around 15-20 varieties of vegetables are grown and it
            reaches up to 50 every year.{" "}
          </li>
          <li>
            Along with vegetables, fruits and medicinal plants have also been
            planted.{" "}
          </li>
          <li>
            By growing vegetables organically in the households, women have
            provided nutritional security.
          </li>
          <li>
            Many health issues and diseases have been reduced after eating
            chemical-free vegetables.
          </li>
          <li>
            On an average, one household is able to save Rs. 1500 per month,
            which is otherwise spent to buy vegetables.
          </li>
          <li>
            People admire the improved taste and quality of the farm-fresh
            produce.
          </li>
        </ul>
      </p>

      <h4>Seed Banks</h4>
      <p>
        A new dimension was added to the project by propagating the concept of
        indigenous Seed Conservation. Punjab was void of its indigenous seed
        diversity. Working with women, we realized that they can play a key role
        to restore the same. So, native seeds, collected from various states and
        adapted into the environment of Punjab, were distributed to the
        gardeners. KVM groomed them to conserve these seeds every year for next
        sowing seasons. Slowly, the gardeners became seed savers; and currently
        we have <strong>110 family seed banks</strong> maintained by these
        women. KVM distributes <strong>‘seed kits’</strong> to the newcomers
        comprising of seeds of 15 - 20 seasonal vegetables.
      </p>

      <h4>Mushroom Cultivation</h4>
      <p>
        To add-on to their livelihood, we organise Mushroom Cultivation
        workshops for our gardeners. Seeds and other raw materials are made
        available, along with. With the assistance of KVM, some{" "}
        <strong>400 women</strong> are successfully growing and selling organic
        mushrooms from their homes itself.
      </p>

      <h4>Young Seed Keepers</h4>
      <p>
        This was a group of 20 young girls trained into conservation of
        indigenous seeds. Their classroom was a one-acre rented plot in Chaina
        village of Faridkot district. These young seed savers were trained to
        manage the farm; grow organic and indigenous vegetables; conserve the
        seeds, preserve them with traditional practices and markete them in
        various public events, under the auspices of KVM. These seeds were sold
        as ‘seed kits’ yielding an earning of Rs. 80,000; which was distributed
        among the group itself.
      </p>
    </Card>

    <Card title="Garden tales..." bordered={false}>
      <StoryList list={artisans} />
    </Card>
  </PageLayout>
);
