<template>
  <div class="about">
    <vue-headful
      title="Tower Junction Physio"
      description="Tower Junction Physio arose after our long-standing Central City Physiotherapy clinic had to relocate from the earthquake damaged CBD in 2011."
      image="../assets/tjplogo.png"
      url="https://www.towerjunctionphysio.co.nz/about"
    />
    <div v-for="slice in aboutPageData.body" :key="slice.id">
      <section
        v-if="slice.slice_type === 'text_block'"
        class="mission"
        :class="slice.primary.color_mode === 'Green background' ? 'green' : 'white'"
      >
        <div class="container">
          <h2 class="emphasize" :class="slice.primary.color_mode === 'Green background' ? 'white' : 'green'">
            {{ slice.primary.title[0].text }}
          </h2>
          <prismic-rich-text class="darker" :field="slice.primary.text"></prismic-rich-text>
        </div>
      </section>

      <section v-if="slice.slice_type === 'timeline'" class="history">
        <div class="container">
          <h2 class="emphasize green">
            {{ slice.primary.title[0].text }}
          </h2>
          <div class="timeline">
            <TimelineEvent
              v-for="(event, index) in slice.items"
              :key="event.index"
              :index="index"
              class="timeline-event"
              :year="event.date[0].text"
              :description="event.text[0].text"
            >
            </TimelineEvent>
          </div>
        </div>
      </section>
      <section v-if="slice.slice_type === 'text_and_image'" class="vision-values">
        <div class="container text-img-split">
          <div class="vision">
            <h2 class="emphasize green">{{ slice.primary.title1[0].text }}</h2>
            <prismic-rich-text :field="slice.primary.text_block1" />
          </div>
          <div class="values">
            <h2 class="emphasize green">{{ slice.primary.title2[0].text }}</h2>
            <prismic-rich-text :field="slice.primary.text_block2" />
          </div>
          <prismic-image :field="slice.primary.image_mobile" class="landscape" />
          <prismic-image :field="slice.primary.image" class="portrait" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import TimelineEvent from "../components/TimelineEvent.vue"

export default {
  name: "AboutPage",
  metaInfo: {
    title: "About us",
  },
  components: {
    TimelineEvent,
  },
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle("about_page")
      this.$store.dispatch("setAboutPageData", response.data)
    },
  },
  computed: mapState(["aboutPageData"]),
  created() {
    if (Object.keys(this.$store.state.aboutPageData).length === 0) {
      this.getContent()
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("setMobileMenuStateFalse")
    next()
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
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
.mission {
  color: #4d4d4d;
  h2 {
    color: #1e2e4d;
  }
  &.green {
    background-color: #add145;
  }
  &.white {
    background-color: white;
  }
  .darker {
    color: #2e2e2e;
  }
}
.history,
.mission,
.vision-values {
  padding: 40px 0;
}

.text-img-split {
  display: grid;
  column-gap: 40px;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-template-areas:
    "vision img"
    "values img";
  .vision {
    grid-area: vision;
    margin-bottom: 40px;
  }
  .values {
    grid-area: values;
  }
  .portrait {
    grid-area: img;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .landscape {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 40% 60%;
  }
  @media screen and (max-width: 991px) {
    column-gap: 0;
    grid-template-areas:
      "vision vision"
      "img img"
      "values values";
    .portrait {
      display: none;
    }
    .landscape {
      grid-area: img;
      display: block;
      position: relative;
      left: -80px;
      width: calc(100% + 100px);
      height: auto;
      object-fit: cover;
    }
    .values {
      margin-top: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    .portrait {
      position: relative;
      left: -32px;
      width: calc(100% + 64px);
    }
  }
}
</style>
