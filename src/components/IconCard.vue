<template>
  <div class="category-card">
    <mdicon :name="getIcon(icon)" size="43" class="treatment-icon" />
    <prismic-rich-text :field="title" class="h4"></prismic-rich-text>
    <prismic-rich-text :field="list" class="ul"></prismic-rich-text>
  </div>
</template>

<script>
export default {
  name: "IconCard",
  metaInfo: {
    title: "Icon card",
  },
  data() {
    return {}
  },
  props: {
    title: Array,
    list: Array,
    icon: String,
  },
  methods: {
    getIcon(icon) {
      switch (icon) {
        case "Doctor":
          return "doctor"
        case "Happy":
          return "emoticonHappyOutline"
        case "Weightlift":
          return "weightLifter"
        case "Clipboard":
          return "clipboardAccountOutline"
        default:
          return "doctor"
      }
    },
  },
}
</script>

<style lang="scss">
.category-card {
  width: 22%;
  height: auto;
  box-sizing: border-box;
  background-color: white;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #1e2e4d1a;
  h4 {
    font-family: "Open Sans", Helvetica, sans-serif;
    color: #99cc00;
    margin: 24px 0;
  }
  ul {
    text-align: center;
    margin: 0;
    padding-inline-start: 0;
  }
  li {
    font-size: 14px;
    list-style-type: none;
    line-height: 30px;
  }
  .treatment-icon {
    color: #1e2e4d;
    margin-top: 24px;
  }
  @media screen and(max-width:1024px) {
    width: 45%;
  }
}
</style>
