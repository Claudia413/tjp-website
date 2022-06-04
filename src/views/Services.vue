<template>
  <div>
    <section class="navigation">
      <div class="container sub-navigation">
        <a v-for="(slice, index) in servicesPageData.body" class="section-link" :href="'#' + slice.primary.section_id" :key="index"
          ><h6>{{ slice.primary.section_title[0].text }}</h6></a
        >
      </div>
    </section>

    <section
      v-for="slice in servicesPageData.body"
      :key="slice.primary.section_id"
      class="section"
      :class="slice.slice_type"
      :id="slice.primary.section_id"
    >
      <div v-if="slice.slice_type === 'section_of_text'" class="container section-text">
        <h2 class="emphasize green">
          {{ slice.primary.section_title[0].text }}
        </h2>
        <prismic-rich-text class="prismic-text" :field="slice.primary.section_text"></prismic-rich-text>
      </div>

      <div v-if="slice.slice_type === 'section_with_cards'" class="container">
        <h2 class="emphasize green">
          {{ slice.primary.section_title[0].text }}
        </h2>
        <prismic-rich-text :field="slice.primary.section_intro" />
        <div class="card-grid">
          <IconCard
            v-for="(card, index) in slice.items"
            :key="index"
            :title="card.card_title"
            :list="card.list"
            :id="index"
            :icon="card.icon"
          ></IconCard>
        </div>
      </div>

      <div v-if="slice.slice_type === 'section_of_expandable_blocks'" class="container">
        <h2 class="emphasize green">
          {{ slice.primary.section_title[0].text }}
        </h2>
        <div class="technique-grid">
          <p
            v-for="(technique, index) in slice.items"
            class="button"
            :key="technique.expandable_title[0].text"
            :class="techniqueIndex == index ? 'active' : ''"
            @click="techniqueIndex = index"
          >
            {{ technique.expandable_title[0].text }}
          </p>
        </div>
        <div class="technique-description">
          <transition name="faderesize" mode="out-in">
            <h6 :key="slice.items[techniqueIndex].expandable_title[0].text">
              {{ slice.items[techniqueIndex].expandable_title[0].text }}
            </h6>
          </transition>
          <transition name="faderesize" mode="out-in">
            <prismic-rich-text :field="slice.items[techniqueIndex].expandable_description"></prismic-rich-text>
          </transition>
        </div>
        <!-- Accordion for screens smaller than 890px online -->
        <div class="technique-accordion">
          <div v-for="(technique, index) in slice.items" class="accordion-container" :key="technique.expandable_title[0].text">
            <div
              class="accordion-button"
              :class="closedAccordion == false && techniqueIndex == index ? 'active' : ''"
              @click="setTechniqueShown(index)"
            >
              {{ technique.expandable_title[0].text }}
              <mdicon name="chevronDown" class="chevron" />
            </div>
            <transition name="appear" mode="out-in">
              <div
                class="accordion-card"
                :key="techniqueIndex + closedAccordion"
                :class="closedAccordion == false && techniqueIndex == index ? 'active' : ''"
              >
                <div class="content">
                  <prismic-rich-text :field="slice.items[techniqueIndex].expandable_description"></prismic-rich-text>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <section class="section pricing" id="pricing">
      <div class="container">
        <h2 class="emphasize green">Our prices</h2>
        <div>
          <div class="price-table">
            <div class="treatment-title">
              <p>Private Initial Consultation</p>
              <p>Private Follow Up Consultation</p>
              <p>ACC Co-payment per visit</p>
            </div>
            <div class="price">
              <p>$75.00</p>
              <p>$65.00</p>
              <p>$30.00</p>
            </div>
          </div>
          <p class="subtitle">There may be an additional cost for any materials used during your treatment.</p>
        </div>
        <div class="pricing-info">
          <h5>Please note:</h5>
          <ul>
            <li>
              If you are receiving physiotherapy treatment under ACC, or any other insurance company, and they decline the cover of your
              injury you will be liable for the full cost of your treatment.
            </li>
            <li>
              In the event of non-payment of your account, then this will also include all recovery costs, legal fees and commissions that
              may occur in obtaining payment of the account.
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"
import IconCard from "../components/IconCard.vue"

export default {
  metaInfo: {
    title: "Services",
  },
  data() {
    return {
      techniqueIndex: 0,
      closedAccordion: false,
    }
  },
  components: {
    IconCard,
  },
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle("services")
      this.$store.dispatch("setServicesPageData", response.data)
    },
    setTechniqueShown(techniqueId) {
      // Open accordion in same place as already selected after it has been closed
      if (this.techniqueIndex == techniqueId && this.closedAccordion == true) {
        this.setAccordionState(false)
        // Close accordion by choosing same treatment again
      } else if (this.techniqueIndex == techniqueId) {
        this.setAccordionState(true)
        // Open accordion card for a treatment
      } else {
        this.techniqueIndex = techniqueId
        this.setAccordionState(false)
      }
    },
    setAccordionState(bool) {
      this.closedAccordion = bool
    },
  },
  computed: mapState(["servicesPageData"]),
  created() {
    if (Object.keys(this.$store.state.servicesPageData).length === 0) {
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
.sub-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 16px;
  h6 {
    border-bottom: 4px solid #99cc00;
    padding-bottom: 4px;
    cursor: pointer;
    font-size: 16px;
    line-height: 33px;
    color: #1e2e4d;
    font-weight: 600;
    margin: 0;
  }
  .section-link {
    text-decoration: none;
    margin: 16px 0;
    padding-right: 8px;
  }
}
.section {
  margin-bottom: 64px;
}
.section_of_text {
  padding: 40px 0;
  & ~ .section_of_text {
    background-color: rgb(232, 233, 227);
  }
}
.h2 {
  font-size: 26px;
  line-height: 48px;
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
.card-grid {
  display: flex;
  flex-flow: wrap;
  column-gap: 8px;
  row-gap: 32px;
  justify-content: space-between;
}
.technique-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 16px;
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 30px;
  @media screen and(max-width: 911px) {
    column-gap: 8px;
    max-width: 80%;
  }
  @media screen and(max-width: 890px) {
    display: none;
  }
}
.button {
  display: inline-block;
  border: 1px solid #1e2e4d1a;
  padding: 12px 32px;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &.active {
    background-color: #99cc00;
    color: white;
    border-color: #99cc00;
  }
}
.technique-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 40px;
  border: 1px solid #99cc00;
  h6 {
    color: #99cc00;
    font-size: 20px;
    line-height: 32px;
    margin: 0;
  }
  @media screen and(max-width: 890px) {
    display: none;
  }
}
.technique-accordion {
  display: none;
  .accordion-button {
    width: 100%;
    background-color: white;
    padding: 8px;
    border: 1px solid #1e2e4d1a;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    transition: all 0.2s ease-out;
    &:hover {
      font-weight: 600;
      color: #99cc00;
    }
    &.active {
      color: #99cc00;
      font-weight: 600;
      .chevron {
        transform: rotate(180deg);
      }
    }
    .chevron {
      display: inline-block;
      transition: all 0.3s ease-in-out;
    }
  }
  .accordion-card {
    height: 0;
    overflow: hidden;
    visibility: hidden;
    &.active {
      visibility: visible;
      height: 100%;
      .content {
        display: block;
        transform: scaleY(1);
      }
    }
    .content {
      transform: scaleY(0.1);
      display: none;
      padding: 8px;
    }
  }
  @media screen and(max-width: 890px) {
    display: block;
  }
}

.appear-enter-active {
  animation: grow 0.6s ease-in-out;
}

.appear-leave-active {
  animation: grow 0.4s reverse ease-in-out;
}

@keyframes grow {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1400px;
  }
}

.price-table {
  display: flex;
  .price {
    font-weight: 600;
  }
}

.pricing {
  h5 {
    margin-bottom: 0;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    font-size: 14px;
    line-height: 26px;
    li {
      &:before {
        content: "-";
        margin-right: 8px;
      }
    }
  }
}

.treatment-title {
  margin-right: 160px;
}

.faderesize-enter-active {
  transition: all 0.3s ease;
}
.faderesize-leave-active {
  transition: all 0.15s ease-in;
}

.faderesize-enter,
.faderesize-leave-to {
  opacity: 0;
  height: auto;
}
</style>
