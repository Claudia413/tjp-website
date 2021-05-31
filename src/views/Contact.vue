<template>
  <section class="news">
    <div class="container">
      <h2 class="emphasize green">Contact</h2>
      <p>Send us a quick message and we will call you to make an appointment</p>
      <Contact-form />
    </div>
  </section>
</template>

<script>
import ContactForm from "../components/ContactForm";
export default {
  metaInfo: {
    title: "Contact",
  },
  data() {
    return {
      document: {
        page_title: "",
        slices: null,
      },
    };
  },
  components: { ContactForm },
  methods: {
    // async getContent() {
    //   const response = await this.$prismic.client.getSingle("news_page");
    //   this.document.page_title = response.data.title[0].text;
    //   this.document.slices = response.data.body;
    // },
  },
  created() {
    // this.getContent();
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("setMobileMenuStateFalse");
    next();
  },
};
</script>

<style lang="scss"></style>
