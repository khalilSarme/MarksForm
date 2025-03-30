import StartVue from "./StartWindow.js";
import FormVue from "./FormWindow.js";
import MarksVue from "./MarksWindow.js";

export default {
  components: {
    StartVue,
    FormVue,
    MarksVue
  },
  props: {
    isA: String,
  },
  setup(props) {
    return {
      props
    }
  },
  template: `
  <KeepAlive>
  <component :is="isA" class="min-vh-100">
  </component>
  </KeepAlive>
  `
}