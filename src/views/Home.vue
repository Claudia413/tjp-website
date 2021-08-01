<template>
  <div class="home">
    <section class="homepage-header">
      <img class="header-image" alt="Runner in a field with mountains in the back" src="../assets/headerhomepagerunner.jpg" width="1600" />
    </section>

    <section class="vision-values">
      <div class="container text-img-split">
        <div class="welcome">
          <h2 class="emphasize green">Welcome to Tower Junction Physio</h2>
          <p>Here comes a super nice blurb to welcome website visitors.</p>
          <p>
            At Tower Junction Physio our aim is to help you recover from a (sports) injury in a timely and effective way, so you can move
            freely and painfree again. We specialize in shoulder, neck and feet, but with our many years of experience we can assist in many
            other areas as well. Feel free to call us and discuss how we can best help you.
          </p>
        </div>

        <img src="../assets/placeholderphoto.png" alt="placeholder photo, nothing to see here unfortunately" class="photo" />
      </div>
    </section>
    <!-- <section class="container">
      <h1>Hi there!</h1>
      <p>Some features that might be a nice idea for this homepage:</p>
      <ul>
        <li>section that shares a little about the team or the practise with a link to the about page</li>
        <li>a call-to-action section where we invite people to call the practise for an appointment</li>
        <li>A picture of the practise/team/ to give the page a bit more visual appeal</li>
        <li>Short introduction to different services offered, possibly with a link to the treatments page</li>
        <li>Some frequently asked questions and answers</li>
        <li>
          A small bar with a warning for covid-19 updates that refers to the new page, could be turned off and on as situation changes
        </li>
      </ul> -->
    <!-- <p>Other ideas that could be nice:</p>
      <ul>
        <li>An icon that shows in the tab of the browser instead of the default one</li>
        <li>Link to Google maps for the location</li>
        <li>Pictures of inside the practise</li>
      </ul>
      <p>This website has been build with VueJS and Gridsome to make it really fast and is currently hosted on Netlify</p>
      <p>
        All the content currently on here is put in the code. For easy management by you or someone in the team in the future I would set it
        up with Prismic.io.
        <a href="https://prismic.io/">More info on Prismic here</a>
      </p>
      <p>
        If you're curious about the code, I have no secrets, it's properly structured and documented and it is available publicly on Github
        <a href="https://github.com/Claudia413/tjp-website/">here</a>
      </p> -->
    <!-- </section> -->
    <section class="contact cta">
      <img class="cta-img" src="../assets/FieldHike.jpg" />
      <div class="overlay">
        <div class="container">
          <h2 class="emphasize green">Contact us for an appointment today</h2>
          <p>Call (03) 34 34 345</p>
          <p>or</p>
          <p>Fill out our contact form and we will call you</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Homepage",
  },
  components: {},
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
  max-height: 450px;
  object-fit: cover;
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
  height: 380px;
  width: 100%;
  position: relative;
  .container {
    padding-top: 40px;
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
}
.overlay {
  width: 100%;
  height: 100%;
  z-index: 50;
  background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 58, 0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 58, 0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 255, 58, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
.text-img-split {
  display: grid;
  column-gap: 40px;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto auto;
  grid-template-areas: "vision img";
  .welcome {
    padding: 80px 0;
    grid-area: vision;
    margin-bottom: 80px;
  }
  .photo {
    grid-area: img;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2 {
    margin-top: 0;
  }
  @media screen and(max-width:1200px) {
    grid-template-columns: 60% 40%;
  }
  @media screen and(max-width:991px) {
    column-gap: 0;
    grid-template-areas:
      "vision vision"
      "img img";
    .photo {
      grid-area: img;
      display: block;
      position: relative;
      left: -80px;
      width: calc(100% + 160px);
      height: auto;
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
