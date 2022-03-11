<template>
  <div class="home">
    <section class="homepage-header">
      <img class="header-image" alt="Runner in a field with mountains in the back" src="../assets/headerhomepagetest.jpg" width="1600" />
    </section>

    <section class="introduction">
      <div class="container text-img-split">
        <div class="content-text">
          <h2 class="emphasize green">Welcome to Tower Junction Physio</h2>
          <p>Here comes a super nice blurb to welcome website visitors.</p>
          <p>
            At Tower Junction Physio our aim is to help you recover from a (sports) injury in a timely and effective way, so you can move
            freely and painfree again. We specialize in shoulder, neck and feet, but with our many years of experience we can also assist
            confidently in other areas. Feel free to call us and discuss how we can best help you.
          </p>
        </div>
        <img class="photo" src="../assets/back.jpg" alt="hands on patients back" />
      </div>
    </section>
    <section class="contact cta">
      <img class="cta-img" src="../assets/FieldHike.jpg" />
      <div class="overlay">
        <div class="container">
          <h2>Contact us for an appointment today</h2>
          <p>Call us at (03) 34 34 345 or</p>
          <router-link class="alternate button" to="/contact">Mail us</router-link>
          <!-- <p>Call (03) 34 34 345</p>
          <p>or</p>
          <p>Fill out our contact form and we will call you</p> -->
        </div>
      </div>
    </section>
    <section class="services">
      <div class="container text-img-split reverse">
        <div class="content-text">
          <h2 class="emphasize green">How we can help you</h2>
          <p>
            At Tower Junction Physio we use a variety of different techniques to assist you in your recovery. Find out more about these
            techniques, what to expect, ACC and our prices here.
          </p>
          <button type="button" class="alternate">Read more</button>
        </div>
        <img class="photo" src="../assets/weights.jpg" alt="hands on patients back" />
      </div>
    </section>
    <section class="team">
      <div class="container text-img-split">
        <div class="content-text">
          <h2 class="emphasize green">Our Team</h2>
          <p>
            Our team is passionate about helping you get back on your feet, or on your bike, whatever the injury is. Our knowledgeable and
            experienced team will taylor a plan to fit your needs and will focus on healing and preventing pain and injuries. Want to know
            more about our team?
          </p>
          <button>Meet the team</button>
        </div>
        <img src="../assets/team.jpg" alt="silhouette group of people at sunset" class="photo" />
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

.team {
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
    height: 280px;
    object-fit: cover;
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
