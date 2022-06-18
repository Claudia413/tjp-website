<template>
  <div v-if="showNotify" class="bar">
    <div class="text-row">
      <p class="important">IMPORTANT:</p>
      <prismic-rich-text :field="title" class="text"></prismic-rich-text>
      <router-link class="link" to="/news">Read more</router-link>
    </div>
    <div>
      <span v-on:click="toggleShowNotify()"><mdicon name="close" size="24" class="close-icon" /></span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  metaInfo: {
    title: "Notify bar",
  },
  data() {
    return {}
  },
  props: {
    title: Array,
  },
  methods: {
    toggleShowNotify() {
      this.$store.dispatch("setNotifyState")
    },
  },
  computed: mapState(["showNotify"]),
}
</script>

<style lang="scss">
.bar {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: rgb(202 237 11);
  padding: 4px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #1e2e4d1a;
  box-shadow: 0px 2px 4px rgb(43, 43, 43);
  color: #333333;
  font-weight: 600;
  .text-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 90%;
    overflow: hidden;
    @media screen and(max-width: 768px) {
      max-width: 80vw;
    }
  }
  .important {
    margin-right: 4px;
    @media screen and(max-width: 768px) {
      font-size: 10px;
    }
  }
  .text {
    max-width: calc(90% - 90px - 70px);
  }
  .text p {
    max-width: 99%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .link {
    color: #333333;
    font-size: 14px;
  }
  @media screen and(max-width: 991px) {
    padding: 4px 40px;
    max-width: 98vw;
  }
  @media screen and(max-width: 768px) {
    padding: 4px 20px;
    .link,
    .text p {
      font-size: 10px;
    }
  }
}
.close-icon {
  color: #333333;
  cursor: pointer;
}
</style>
