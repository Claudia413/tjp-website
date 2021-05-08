<template>
  <div class="home">
    <section class="homepage-header">
      <img
        class="header-image"
        alt="Runner in a field with mountains in the back"
        src="../assets/headerhomepagerunner.jpg"
        width="1600"
      />
    </section>
    <section class="container">
      <h1>Hi there!</h1>
      <p>
        This page has not yet received much love and attention. The other pages, which you can access through the menu
        above, have more information and features to look at.
      </p>
      <p>Some features that might be a nice idea for this homepage:</p>
      <ul>
        <li>section that shares a little about the team or the practise with a link to the about page</li>
        <li>a call-to-action section where we invite people to call the practise for an appointment</li>
        <li>A picture of the practise/team/ to give the page a bit more visual appeal</li>
        <li>Short introduction to different services offered, possibly with a link to the treatments page</li>
        <li>Some frequently asked questions and answers</li>
        <li>
          A small bar with a warning for covid-19 updates that refers to the new page, could be turned off and on as
          situation changes
        </li>
      </ul>
      <p>Other ideas that could be nice:</p>
      <ul>
        <li>An icon that shows in the tab of the browser instead of the default one</li>
        <li>Link to Google maps for the location</li>
        <li>Pictures of inside the practise</li>
      </ul>
      <p>
        This website has been build with VueJS and Gridsome to make it really fast and is currently hosted on Netlify
      </p>
      <p>
        All the content currently on here is put in the code. For easy management by you or someone in the team in the
        future I would set it up with Prismic.io. This is a content management system that offers a free account with
        data up till 100gb per month. This is quite generous and Prismic works well with Vue and Gridsome. This would
        not cost you anything extra in hosting costs and will be plenty of allowed data unless everyone on the South
        island goes to the website and uses it a lot in the same month.
        <a href="https://prismic.io/">More info on Prismic here</a>
      </p>
      <p>
        If you're curious about the code, I have no secrets, it's properly structured and documented and it is available
        publicly on Github <a href="https://github.com/Claudia413/funny-fairy-sunbeam/">here</a>
      </p>
      <contact-form />
    </section>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm";

export default {
  metaInfo: {
    title: "Homepage",
  },
  components: { ContactForm },
};
</script>

<style>
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
</style>
