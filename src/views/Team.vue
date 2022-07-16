<template>
  <section class="team">
    <vue-headful
      title="Tower Junction Physio"
      description="Our staff are highly skilled, experienced professionals who use the latest techniques and developments in physiotherapy."
      image="../assets/tjplogo.png"
      url="https://www.towerjunctionphysio.co.nz/team"
    />
    <div class="container">
      <h2 class="emphasize green">{{ teamPageData.body[0].primary.team_section[0].text }}</h2>
      <prismic-rich-text :field="teamPageData.body[0].primary.team_section_intro"></prismic-rich-text>
      <div class="grid-team">
        <TeamCard
          v-for="(member, index) in teamPageData.body[0].items"
          :key="member.name"
          class="team-member"
          :name="member.first_and_lastname"
          :title="member.position"
          :degree="member.degree"
          :bio="member.about"
          :photo="member.portrait"
          :index="index"
        >
        </TeamCard>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex"
import TeamCard from "../components/Team-Card.vue"

export default {
  name: "TeamPage",
  metaInfo: {
    title: "TeamPage",
  },
  components: {
    TeamCard,
  },
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle("team_page")
      this.$store.dispatch("setTeamPageData", response.data)
    },
  },
  computed: mapState(["teamPageData"]),
  created() {
    if (Object.keys(this.$store.state.teamPageData).length === 0) {
      this.getContent()
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("setMobileMenuStateFalse")
    next()
  },
}
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
