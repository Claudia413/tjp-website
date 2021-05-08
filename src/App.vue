<template>
  <div id="app" class="layout">
    <header class="menubar">
      <div class="container header">
        <img src="./assets/tjplogo.png" width="240" />
        <nav class="nav" :class="showMobileMenu ? 'show' : ''">
          <router-link class="nav__link" to="/">Home</router-link>
          <router-link class="nav__link" to="/about/">About</router-link>
          <router-link class="nav__link" to="/team/">Team</router-link>
          <router-link class="nav__link" to="/treatments">Services</router-link>
          <router-link class="nav__link" to="/news">News</router-link>
        </nav>
        <div
          class="nav-icon"
          @click="toggleShowMobileMenu()"
          :class="showMobileMenu ? 'open' : ''"
          title="toggle mobile menu"
        >
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
            <p class="strong">Opening hours</p>
            <p>Monday: 7am -8pm</p>
            <p>Tuesdag: 7am -8pm</p>
            <p>Wednesday: 7am -8pm</p>
            <p>Thursday: 7am -8pm</p>
            <p>Friday: 7am -8pm</p>
            <p>Saturday: closed</p>
            <p>Sunday: closed</p>
          </section>
          <section class="footer-navigation">
            <p class="strong">Sitemap</p>
            <router-link class="footer_nav_link" to="/">Home</router-link>
            <router-link class="footer_nav_link" to="/about/">About</router-link>
            <router-link class="footer_nav_link" to="/treatments">Treatments</router-link>
            <router-link class="footer_nav_link" to="/contact">Contact</router-link>
            <router-link class="footer_nav_link" to="/faq">FAQ</router-link>
            <router-link class="footer_nav_link" to="/news">News</router-link>
          </section>
          <section class="contact">
            <address class="footer-address">
              <p class="strong">Call us at:</p>
              <p><a href="tel:033434345" class="phonenumber">(03) 34 34 345</a></p>
              <p class="strong">Find us at:</p>
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
        <div class="fine-print">
          <p>©Copyright 2020 Tower Junction Physio</p>
          <p>|</p>
          <p>Made with love by <a href="https://claudiaengelsman.com">Claudia Engelsman</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import "./assets/styles.scss";
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    toggleShowMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style lang="scss">
.layout {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
  @media screen and(max-width: 768px) {
    padding: 0 32px;
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

footer {
  background-color: #1e2e4d;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 12px;
  padding-bottom: 12px;
  color: white;
  font-size: 13px;
  .strong {
    font-weight: bold;
  }
  .hours {
    p {
      line-height: 1;
    }
  }
  .footer-address {
    font-style: normal;
    p {
      line-height: 1;
    }
    .phonenumber {
      text-decoration: none;
      color: inherit;
    }
  }
  .location {
    img {
      margin-top: 16px;
      max-width: 100%;
    }
  }
  .footer-navigation {
    display: flex;
    flex-direction: column;
    p {
      line-height: 1;
    }
    .footer_nav_link {
      text-decoration: none;
      color: white;
      font-size: 16px;
      line-height: 1;
      margin-block-start: 0;
      margin-block-end: 1em;
      font-family: "Hind", arial;
      display: inline-block;
    }
  }
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
