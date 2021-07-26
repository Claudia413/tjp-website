<template>
  <div class="team-member" :class="even(index) ? '' : 'reverse'">
    <div v-if="photo === null">
      <img src="../assets/placeholderphoto.png" class="team-profile-photo" width="320" />
    </div>
    <prismic-image v-else :field="photo" class="team-profile-photo" />
    <div class="team-profile-text">
      <prismic-rich-text :field="name" class="h4"></prismic-rich-text>
      <prismic-rich-text :field="degree" class="subtitle"></prismic-rich-text>
      <prismic-rich-text class="h5" :field="title" />
      <prismic-rich-text :field="bio" class="team-member-bio"></prismic-rich-text>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Team card",
  },
  data() {
    return {}
  },
  props: {
    index: Number,
    name: Array,
    title: Array,
    degree: Array,
    bio: Array,
    photo: Object,
  },
  methods: {
    even(i) {
      return i % 2 == 0
    },
  },
}
</script>

<style lang="scss">
.team-member {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 4px solid #1e2e4d;
  padding: 32px 0;
  &.reverse {
    flex-direction: row-reverse;
    .team-profile-text {
      text-align: right;
    }
    .team-profile-photo {
      margin-inline-start: 48px;
    }
  }
  .team-profile-photo {
    border-radius: 50%;
    margin-inline-end: 48px;
    height: 320px;
    width: 320px;
    border-radius: 50%;
  }
  .team-profile-text {
    max-width: 60%;
    h4 {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 4px;
      font-family: "Open Sans", sans-serif;
    }
    .h5 p {
      font-size: 16px;
      line-height: 33px;
      font-weight: bold;
      font-family: "Hind", Arial, Helvetica, sans-serif;
      margin: 24px 0;
    }
    .subtitle p {
      margin: 0;
      font-size: 13px;
      color: #4d4d4d;
      line-height: 13px;
    }
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }

  @media screen and(max-width: 768px) {
    flex-direction: column;
    &.reverse {
      flex-direction: column;
      .team-profile-text {
        text-align: center;
        max-width: 90%;
      }
    }
    .team-profile-photo {
      width: 200px;
      height: auto;
      margin-inline-end: 0;
      margin-inline-start: 0;
    }
    .team-profile-text {
      text-align: center;
      max-width: 90%;
    }
  }
}
.team-member:last-child {
  border-bottom: none;
}
</style>
