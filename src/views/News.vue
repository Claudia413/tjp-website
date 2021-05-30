<template>
  <section class="news">
    <div class="container">
      <h2 class="emphasize green">{{ document.page_title }}</h2>
      <div v-for="slice in document.slices" :key="slice.id">
        <template v-if="slice.slice_type === 'article'" class="mission">
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
export default {
  metaInfo: {
    title: "News",
  },
  data() {
    return {
      document: {
        page_title: "",
        slices: null,
      },
    };
  },
  components: {},
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle("news_page");
      this.document.page_title = response.data.title[0].text;
      this.document.slices = response.data.body;
    },
  },
  created() {
    this.getContent();
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("setMobileMenuStateFalse");
    next();
  },
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
