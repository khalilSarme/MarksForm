import UIVue from "./views/UI.vue.js";
import Header from "./components/Header.js";
import Container from "./components/Container.js";

const App = {
  components: {
    UIVue,
    Header,
    Container
  },
  props: {},
  template: `
  <Header>
  <Container>
  <h2 class="logo" > Vuetivo </h2>
  </Container>
  </Header>
  <UIVue />
  `
}

export default App;