<template>
  <section class="team">
    <div class="container">
      <h2 class="emphasize green">{{ document.team_title[0].text }}</h2>
      <prismic-rich-text :field="document.team_intro"></prismic-rich-text>
      <div class="grid-team">
        <TeamCard
          v-for="(member, index) in document.slices"
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
import TeamCard from "../components/Team-Card.vue"

export default {
  metaInfo: {
    title: "Team",
  },
  data() {
    return {
      document: {
        team_title: [{ text: "" }],
        team_intro: [{ text: "" }],
        slices: null,
      },
    }
  },
  components: {
    TeamCard,
  },
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle("team_page")
      this.document.team_title = response.data.body[0].primary.team_section
      this.document.team_intro = response.data.body[0].primary.team_section_intro
      this.document.slices = response.data.body[0].items
    },
  },
  created() {
    this.getContent()
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
