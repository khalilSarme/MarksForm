export default {
  inject: ['to'],
  methods: {},
  template: `
  <div class="startV" ref="StartPage">
  <Container class="container-fluid bg-alpha-v py-5">
  <Container class="container">
  <p class="display-6"><b class="">Vuetivo</b> is an Exam's Marks Management System (EMMS). Click the <b>Get Started</b> button to start an App by adding a new grade.
  </p>
  <Button class="btn mt-3 px-3 py-2 btn-success" @click="to('form-vue')">
  Get Started
  </Button>
  </Container>
  </Container>
  </div>
  `
}