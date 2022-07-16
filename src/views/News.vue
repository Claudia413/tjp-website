<template>
  <section class="news">
    <vue-headful
      title="Tower Junction Physio"
      description="The latest news from Tower Junction Physio in Christchurch."
      image="../assets/tjplogo.png"
      url="https://www.towerjunctionphysio.co.nz/news"
    />
    <div class="container">
      <h2 class="emphasize green">{{ newsPageData.title[0].text }}</h2>
      <div v-for="slice in newsPageData.body" :key="slice.id">
        <template v-if="slice.slice_type === 'article'">
          <article :key="slice.id + 'article'" class="news-article">
            <h4>{{ slice.primary.article_title[0].text }}</h4>
            <p class="subtitle">{{ slice.primary.publishing_date[0].text }}</p>
            <prismic-rich-text :field="slice.primary.article_text" />
          </article>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "NewsPage",
  metaInfo: {
    title: "NewsPage",
  },
  data() {
    return {
      document: {
        page_title: "",
        slices: null,
      },
    }
  },
  components: {},
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle("news_page")
      this.$store.dispatch("setNewsPageData", response.data)
    },
  },
  computed: mapState(["newsPageData"]),
  created() {
    if (Object.keys(this.$store.state.newsPageData).length === 0) {
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
  max-width: 800px;
  h4 {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 4px;
  }
}
</style>
