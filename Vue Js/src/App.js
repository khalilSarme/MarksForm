import UIVue from "./views/UIVue.js";

const App = {
  components: {
    UIVue
  },
  data() {
    return {
      view: ['start-vue'],
      active: 'startPage',
      marks: JSON.parse(localStorage.getItem('Marks')) || [],
    }
  },
  methods: {
    updateStoredMarks() {
      localStorage.setItem('Marks', JSON.stringify(this.marks));
    },
    to(v) {
      setTimeout(() => {
        this.view[0] = v;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        switch (v) {
          case 'start-vue':
            this.active = 'startPage';
            break;
          case 'form-vue':
            this.active = 'formPage';
            break;
          case 'marks-vue':
            this.active = 'marksPage';
            break;
          default:
            this.active = 'startPage';
            break;
        }
      }, 1000);
    },
  },
  provide() {
    return {
      marks: this.marks,
      to: this.to,
      updateMarks: this.updateStoredMarks
    }
  },
  template: `
  <div class="sticky-top bg-light">
  <Navbar class="navbar navbar-expand-xl">
  <Container class="container">
  <a class="navbar-brand" @click.prevent="to('start-vue')"> Vuetivo </a>
  </Container>
  </Navbar>
  <Header class="header bg-dark">
  <Container class="container">
  <Button :class="active=='startPage' ? 'btn active' : 'btn'" @click="to('start-vue')">
  Home
  </Button>

  <Button :class="active=='formPage' ? 'btn active' : 'btn'" @click="to('form-vue')">
  New grade
  </Button>

  <Button :class="active=='marksPage' ? 'btn active' : 'btn'" @click="to('marks-vue')">
  Marks
  </Button>
  </Container>
  </Header>
  </div>
  <u-i-vue :isA="view[0]" />
  <Container class="footer bg-dark text-light mt-5">
  <Container class="container">
  <p class="py-3 m-0 text-center fs-4">All Rights recerved &#169; <b id="date"></b> | <b class="color-v">Vuetivo</b></p>
  </Container>
  </Container>
  `
}

export default App;