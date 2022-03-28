<template>
  <div class="home">
    <section class="homepage-header">
      <prismic-image :field="document.banner_photo" class="header-image" />
      <!-- <img class="header-image" alt="Runner in a field with mountains in the back" src="../assets/headerhomepagetest.jpg" width="1600" /> -->
    </section>
    <div v-for="slice in document.slices" :key="slice.id">
      <section
        v-if="slice.slice_type === 'text_and_image'"
        class="introduction"
        :class="slice.primary.background_highlight_color ? 'bg-grey' : null"
      >
        <div class="container text-img-split" :class="slice.primary.text_image_order === 'textLeft-imageRight' ? null : 'reverse'">
          <div class="content-text">
            <h2 class="emphasize green">{{ slice.primary.title1[0].text }}</h2>
            <prismic-rich-text class="darker" :field="slice.primary.text_block1"></prismic-rich-text>
            <button
              v-if="slice.primary.optional_button !== 'No button'"
              type="button"
              :class="slice.primary.background_highlight_color ? null : 'alternate'"
            >
              {{ slice.primary.button_text[0].text }}
            </button>
          </div>
          <prismic-image :field="slice.primary.image" class="photo" />
        </div>
      </section>
      <section v-if="slice.slice_type === 'cta_banner'" class="contact cta">
        <prismic-image :field="slice.primary.background_image" class="cta-img" />
        <div class="overlay">
          <div class="container">
            <h2>{{ slice.primary.cta_title[0].text }}</h2>
            <p>
              Call us at <span>{{ slice.primary.phonenumber[0].text }}</span> or
            </p>
            <router-link class="alternate button" to="/contact">Mail us</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Homepage",
  },
  data() {
    return { document: { body: null, banner_photo: {}, slices: null } }
  },
  components: {},
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle("homepage")
      this.document = response.data
      this.document.slices = response.data.body
      console.log("loaded", this.document)
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

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}
.homepage-header {
  display: flex;
  margin: 0;
}
.header-image {
  margin: 0;
  width: 100%;
  height: auto;
  max-height: 550px;
  object-fit: cover;
  object-position: center 70%;
}

h2 {
  color: #333333;
  &.emphasize {
    &:after {
      content: "";
      display: block;
      width: 40px;
      height: 4px;
      animation: show 0.4s ease forwards;
    }
    &.green {
      &:after {
        background-color: #99cc00;
      }
    }
    &.white {
      &:after {
        background-color: white;
      }
    }
    @keyframes show {
      from {
        width: 0px;
      }
      to {
        width: 40px;
      }
    }
  }
}
.cta {
  height: 280px;
  width: 100%;
  position: relative;
  .container {
    padding-top: 40px;
  }
  h2 {
    @media screen and(max-width:991px) {
      line-height: 32px;
    }
  }
}
.cta-img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-position: 380px 85%;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
  @media screen and(max-width:991px) {
    object-position: 160px 85%;
  }
  @media screen and(max-width: 768px) {
    object-position: 100px 85%;
  }
}
.overlay {
  width: 100%;
  height: 100%;
  z-index: 50;
  background: -moz-linear-gradient(left, rgba(153, 204, 0, 1) 40%, rgba(153, 204, 0, 0.1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(153, 204, 0, 1) 40%, rgba(153, 204, 0, 0.1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(153, 204, 0, 1) 40%,
    rgba(153, 204, 0, 0.1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
.services,
.team,
.introduction {
  padding: 40px 0;
}

.bg-grey {
  background-color: rgb(232, 233, 227);
}

.text-img-split {
  display: grid;
  column-gap: 40px;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto auto;
  grid-template-areas: "text img";
  align-items: center;
  padding: 40px 80px;
  &.reverse {
    grid-template-columns: 40% 60%;
    grid-template-rows: auto auto;
    grid-template-areas: "img text";
  }
  .content-text {
    padding: 80px 0;
    grid-area: text;
    p {
      max-width: 600px;
    }
  }
  .photo {
    grid-area: img;
    width: 100%;
    height: 538px;
    object-fit: cover;
    aspect-ratio: unset;
  }
  h2 {
    margin-top: 0;
  }
  @media screen and(max-width:991px) {
    grid-template-columns: 100%;
    column-gap: 0;
    grid-template-areas: "text";
    grid-template-rows: auto;
    padding: 40px;
    &.reverse {
      grid-template-columns: 100%;
      grid-template-rows: auto;
      grid-template-areas: "text";
    }
    .content-text {
      padding: 0;
    }
    .photo {
      grid-area: img;
      display: none;
      position: relative;
      left: -80px;
      width: calc(100% + 160px);
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and(max-width: 768px) {
    .photo {
      position: relative;
      left: -32px;
      width: calc(100% + 64px);
    }
  }
}
</style>
