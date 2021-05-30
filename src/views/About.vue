<template>
  <div class="about">
    <div v-for="slice in document.body" :key="slice.id">
      <section v-if="slice.slice_type === 'text_block'" class="mission">
        <div class="container">
          <h2 class="emphasize white">
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
          <div class="text">
            <div class="vision">
              <h2 class="emphasize green">{{ slice.primary.title1[0].text }}</h2>
              <prismic-rich-text :field="slice.primary.text_block1" />
            </div>
            <div class="values">
              <h2 class="emphasize green">{{ slice.primary.title2[0].text }}</h2>
              <prismic-rich-text :field="slice.primary.text_block2" />
            </div>
          </div>
          <prismic-image :field="slice.primary.image" class="portrait" />
          <!-- <img src="../assets/rowerportrait.jpg" class="portrait" /> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TimelineEvent from "../components/TimelineEvent.vue";

export default {
  name: "About",
  metaInfo: {
    title: "About us",
  },
  data() {
    return {
      document: { body: null },
    };
  },
  components: {
    TimelineEvent,
  },
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle("about_page");
      this.document = response.data;
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
.mission {
  background-color: #add145;
  color: #4d4d4d;
  h2 {
    color: #1e2e4d;
  }
  .darker {
    color: #2e2e2e;
  }
}
.mission,
.history {
  padding: 20px 0;
}
.timeline,
.vision-values,
.mission {
  margin-bottom: 40px;
}
.text-img-split {
  display: flex;
  justify-content: space-between;
  .vision {
    margin-bottom: 80px;
  }
  .portrait {
    width: 40%;
    height: auto;
    object-fit: cover;
  }
  .text {
    max-width: 50%;
  }
  h2 {
    margin-top: 0;
  }
}
</style>
