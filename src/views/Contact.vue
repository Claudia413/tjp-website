<template>
  <section class="contact">
    <vue-headful
      title="Tower Junction Physio"
      description="Send us a quick message and we will call you to make an appointment."
      image="../assets/tjplogo.png"
      url="https://www.towerjunctionphysio.co.nz/contact"
    />
    <div class="container">
      <h2 class="emphasize green">Contact</h2>
      <p>Send us a quick message and we will call you to make an appointment.</p>
      <Contact-form />
    </div>
  </section>
</template>

<script>
import ContactForm from "../components/ContactForm"
export default {
  name: "ContactPage",
  metaInfo: {
    title: "ContactPage",
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
