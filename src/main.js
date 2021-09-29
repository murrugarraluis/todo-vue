import Vue from "vue";
import App from "./App.vue";
//TailwindCS
import "./assets/tailwind.css";
//Sweet Alert
import sweet from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "animate.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
Vue.use(sweet);
