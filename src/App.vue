<template>
  <div id="app" class="layout">
    <header class="menubar">
      <div class="container header">
        <img src="./assets/tjplogo.png" width="240" alt="Tower Junction Physio logo" />
        <nav class="nav" :class="showMobileMenu ? 'show' : ''">
          <router-link class="nav__link" to="/">Home</router-link>
          <router-link class="nav__link" to="/about/">About</router-link>
          <router-link class="nav__link" to="/team/">Team</router-link>
          <router-link class="nav__link" to="/services">Services</router-link>
          <router-link class="nav__link" to="/news">News</router-link>
          <router-link class="nav__link" to="/contact">Contact</router-link>
        </nav>
        <div class="nav-icon" @click="toggleShowMobileMenu()" :class="showMobileMenu ? 'open' : ''" title="toggle mobile menu">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <div class="container">
        <div class="footer">
          <section class="hours">
            <h6 class="strong">Opening hours</h6>

            <p class="opening-day">Monday: <prismic-rich-text :field="document.monday" /></p>
            <p class="opening-day">Tuesdag: <prismic-rich-text :field="document.tuesday" /></p>
            <p class="opening-day">Wednesday: <prismic-rich-text :field="document.wednesday" /></p>
            <p class="opening-day">Thursday: <prismic-rich-text :field="document.thursday" /></p>
            <p class="opening-day">Friday: <prismic-rich-text :field="document.friday" /></p>
          </section>

          <section class="contact">
            <address class="footer-address">
              <h6 class="strong hide-mobile">Call us at:</h6>
              <p class="hide-mobile">
                <a href="tel:033434345" class="phonenumber">(03) 34 34 345</a>
              </p>
              <h6 class="strong">Find us at:</h6>
              <p>
                109 Clarence Street<br />
                Riccarton<br />
                Christchurch, 8011 <br />
              </p>

              <p>(Corner of Clarence Street and Blenheim Road)</p>
            </address>
          </section>
          <section class="location">
            <a
              href="https://www.google.com/maps/place/Tower+Junction+Physio/@-43.5368789,172.6020191,15.5z/data=!4m5!3m4!1s0x0:0x9c5693a7da53015f!8m2!3d-43.5368379!4d172.6026916"
            >
              <img
                src="./assets/map.jpg"
                alt="map of the crossing of Blenheim Road and Clarence street marking the location of the practise"
                class="map-image"
                width="320"
            /></a>
          </section>
        </div>
        <section class="footer-navigation">
          <h6 class="strong">Sitemap</h6>
          <router-link class="footer_nav_link" to="/">Home</router-link>
          <router-link class="footer_nav_link" to="/about/">About</router-link>
          <router-link class="footer_nav_link" to="/team">Team</router-link>
          <router-link class="footer_nav_link" to="/services">Services</router-link>
          <router-link class="footer_nav_link" to="/news">News</router-link>
          <router-link class="footer_nav_link" to="/contact">Contact</router-link>
        </section>
        <div class="fine-print">
          <p>©Copyright 2020 Tower Junction Physio</p>
          <p>|</p>
          <p>
            Made with love by
            <a href="https://claudiaengelsman.com">Claudia Engelsman</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import "./assets/styles.scss"
import { mapState } from "vuex"

export default {
  data() {
    return { document: {} }
  },
  created() {
    this.getContent()
  },
  methods: {
    toggleShowMobileMenu() {
      this.$store.dispatch("setMobileMenuState")
    },
    async getContent() {
      const response = await this.$prismic.client.getSingle("opening_hours")
      this.document = response.data
    },
  },
  computed: mapState(["showMobileMenu"]),
}
</script>

<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
  @media screen and(max-width: 991px) {
    padding: 0 40px;
  }
}

.menubar {
  background-color: #1e2e4d;
  z-index: 800;
  @media screen and(max-width: 768px) {
    position: sticky;
    top: 0;
  }
}

.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 80px;
}

.nav {
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: #1e2e4d;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: -100%;
    right: 0;
    transition: left, 0.4s ease-in-out;
    padding: 36px;
    box-sizing: border-box;
    z-index: 500;
    &.show {
      left: 0;
    }
    a {
      margin: 12px;
    }
  }
}

.nav__link {
  margin-left: 20px;
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.nav-icon {
  grid-area: toggle;
  width: 36px;
  height: 18px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    z-index: 950;
  }
}

.nav-icon span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #ffffff;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.nav-icon span:nth-child(1) {
  top: 0px;
}

.nav-icon span:nth-child(2),
.nav-icon span:nth-child(3) {
  top: 9px;
}

.nav-icon span:nth-child(4) {
  top: 18px;
}

.nav-icon.open span:nth-child(1) {
  top: 9px;
  width: 0%;
  left: 50%;
}

.nav-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.nav-icon.open span:nth-child(4) {
  top: 12px;
  width: 0%;
  left: 50%;
}

main {
  grid-area: main;
}
footer {
  grid-area: footer;
  background-color: #1e2e4d;
  width: 100%;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 48px;
  padding-bottom: 12px;
  color: white;
  font-size: 13px;
  h6 {
    margin: 0;
    font-size: 18px;
  }
  .strong {
    font-weight: bold;
  }
  .hours {
    grid-area: hours;
    p {
      line-height: 16px;
      margin: 0.5em 0;
    }
    .opening-day {
      div {
        display: inline;
        p {
          display: inline;
        }
      }
    }
  }
  .footer-address {
    grid-area: address;
    font-style: normal;
    p {
      margin-block-start: 0.5em;
      line-height: 18px;
    }
    .phonenumber {
      text-decoration: none;
      color: inherit;
    }
  }
  .location {
    grid-area: map;
    img {
      margin-top: 16px;
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "hours address"
      "button map";
    h6 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
    .hide-mobile {
      display: none;
    }
  }
}

.footer-navigation {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  margin-top: 20px;
  h6 {
    margin: 0;
    font-size: 14px;
    color: white;
    line-height: 24px;
  }
}

.footer_nav_link {
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 12px;
  line-height: 12px;
  margin: 0.5em 12px;
  font-family: "Hind", arial;
}

.fine-print {
  display: flex;
  @media screen and(max-width: 768px) {
    justify-content: center;
  }
  p,
  a {
    font-size: 12px;
    color: #ffffffaf;
    padding-right: 4px;
    margin-bottom: 4px;
    text-decoration: none;
  }
}
</style>
