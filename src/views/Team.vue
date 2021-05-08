<template>
  <Layout>
    <section class="team">
      <div class="container">
        <h2 class="emphasize green">Our team</h2>
        <p>Meet the Tower Junction Physio team</p>
        <div class="grid-team">
          <Teamcard
            v-for="(member, index) in team"
            :key="member.name"
            class="team-member"
            :name="member.name"
            :title="member.title"
            :degree="member.degree"
            :bio="member.bio"
            :photo="member.photo"
            :index="index"
          >
          </Teamcard>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Teamcard from "../components/Teamcard.vue";
export default {
  metaInfo: {
    title: "News",
  },
  data() {
    return {
      team: [
        {
          name: "Blair Clatworthy",
          title: "Director/Senior Physiotherapist",
          degree: "MNZSP, B.Phty, B.Sc (Hons)",
          bio:
            "Blair graduated from Otago University in 1992 after completing an Honours degree in Physiology and in 1996 he obtained his second degree in Physiotherapy. Blair has worked in various private practices around the Canterbury region and in 1999 he bought his first Physiotherapy practice, Ferry Road Physiotherapy which was sold in 2003 with the arrival of his first child. In 2000 Blair bought Central City Physiotherapy clinic from Marg Fife. Since graduating Blair has continued postgraduate education and he gained acupuncture registration in 2001. Blair has many interests, most of which involve sports or the outdoors. He believes in having a healthy mix of work and play, and encourages everyone else to do the same.",
          photo: {},
        },
        {
          name: "Tania MacKay",
          title: "Senior Physiotherapist",
          degree: "MNZSP, Dip. Phty, MSMNZ",
          bio:
            '25 years experience.Tania graduated from Otago School of Physiotherapy in 1989. Of the past 25 years, she has spent 21 years specialising in sports physiotherapy, orthopaedic and musculoskeletal physiotherapy, working in a private practice in New Zealand (primarily Christchurch), and in the UK in a senior hospital role including supervision and teaching. Tania is a mother of two daughters aged 8 and 11, loves her outdoor pursuits including mountain biking, cycling, hiking and skiing, and in her "spare time" she guides multi-day cycling and mountain biking tours, South Island wide.',
          photo: {},
        },
        {
          name: "Sherry Malik",
          title: "Physiotherapist",
          degree: "MNZSP, B.Phty",
          bio:
            "Sherry is our new enthusiastic and friendly Physiotherapist, she graduated from the University of Otago in 2019 with her Bachelors of Physiotherapy. During her time at the University of Otago she was the President of the Physiotherapy Students' Association, she likes to keep busy and is passionate about all outdoor activities and sports, particularly football and volleyball. Sherry has worked with rugby and football teams and is interested in treating all kinds of sports and general injuries. Sherry is also very keen on working with anyone who is wanting to gain a more active and pain-free lifestyle.Whether that may be related to sports or just regular day to day life. She is excited to gain more experience and cannot wait to help patients rehabilitate with whatever they may be experiencing.",
          photo: {},
        },
        {
          name: "Tessa Hartland",
          title: "Physiotherapist",
          degree: "MNZSP, B.Phty",
          bio:
            "Tessa completed a Bachelor of Physiotherapy degree from the University of Otago in 2019 and joined the Tower Junction Physio team in 2020. Coming from a sporting background, Tessa has a particular interest in sport rehabilitation and has spent time working with rugby teams in Dunedin and Christchurch. Tessa is passionate about leading a balanced, active lifestyle and likes spending her spare time outdoors. She also enjoys keeping fit in the gym, spending time with friends and family and travelling, having recently returned from a trip around Central America.",
          photo: {},
        },
        {
          name: "Jacky",
          title: "Receptionst",
          degree: "-",
          bio: "lorem ipsum text long text longer text, with more words and sentences here.",
          photo: {},
        },
        {
          name: "Tracy",
          title: "Receptionist",
          degree: "-",
          bio: "lorem ipsum text long text longer text, with more words and sentences here.",
          photo: {},
        },
      ],
      history: [
        {
          year: "May 2011",
          description:
            "The new clinic, Tower Junction Physio opened. Due to the new location, Tower Junction Physio became the new official name of Central City Physiotherapy Clinic.",
        },
        {
          year: "February 2011",
          description:
            "After the earthquake the clinic was temporary operating from Wairakei Road while the new premises on the corner of Clarence Street and Blenheim Road underwent a huge makeover. To see the video, click here.",
        },
        {
          year: "2003",
          description:
            " In 2003 Jo sold the podiatry business to Nick Haley and Blair was only focusing on physiotherapy. Blair and Nick operated the clinic as a partnership, offering a professional team approach to all clients of Central City Clinic until February 2011.",
        },
        {
          year: "2000",
          description:
            "Blair Clatworthy and his wife Jo- who is a Podiatrist- bought the business off Marg as she wished to travel overseas and pursue another career. (Blair also owned Ferry Road Physiotherapy which he sold in 2004).",
        },
      ],
    };
  },
  components: {
    Teamcard,
  },
  methods: {},
};
</script>

<style lang="scss">
.news-article {
  margin-bottom: 40px;
  h4 {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 4px;
  }
}
</style>
