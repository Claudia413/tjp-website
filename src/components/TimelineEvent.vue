<template>
  <div class="event" :class="even(index) ? 'reverse' : ''">
    <div class="event-box">
      <div class="text">
        <h4>{{ year }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineEvent",
  metaInfo: {
    title: "Timeline event",
  },
  data() {
    return {}
  },
  props: {
    index: Number,
    year: String,
    description: String,
  },
  methods: {
    even(i) {
      return i % 2 == 0
    },
  },
}
</script>

<style lang="scss">
.event {
  position: relative;
  margin: 0 auto;
  &::after {
    content: "";
    position: absolute;
    width: 4px;
    background-color: #1e2e4d;
    top: 0;
    bottom: 0;
    left: 50%;
  }
  .event-box {
    position: relative;
    overflow: hidden;
    padding: 20px;
    max-width: calc(50% - 40px);
    text-align: right;
    &::after {
      content: "";
      width: 40px;
      height: 4px;
      background-color: #99cc00;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  &.reverse {
    .event-box {
      left: 50%;
      text-align: left;
      &::after {
        left: 0;
      }
    }
  }
  @media screen and(max-width: 768px) {
    &.reverse .event-box,
    .event-box {
      left: calc(10% - 20px);
      text-align: center;
      max-width: 80%;
      z-index: 100;
      &::after {
        display: none;
      }
    }
    .text {
      background-color: white;
      padding: 8px 12px;
      border: 1px solid #1e2e4d1a;
    }
  }
}

.team-member:last-child {
  border-bottom: none;
}
</style>
