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
import ContactForm from "../components/ContactForm"
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
    }
  },
  components: { ContactForm },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("setMobileMenuStateFalse")
    next()
  },
}
</script>

<style lang="scss"></style>
