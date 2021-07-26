import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import PrismicVue from "@prismicio/vue"
import linkResolver from "./link-resolver"
import mdiVue from "mdi-vue/v2"
import * as mdijs from "@mdi/js"

Vue.config.productionTip = false

const accessToken = process.env.VUE_APP_PRISMIC_TOKEN
const endpoint = process.env.VUE_APP_PRISMIC_URL

Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken },
  linkResolver,
})

Vue.use(mdiVue, {
  icons: mdijs,
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
