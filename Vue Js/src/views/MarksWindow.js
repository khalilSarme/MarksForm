export default {
  inject: ['marks', 'updateMarks','to'],
  methods: {
    deleteMark(i) {
      this.marks.splice(i, 1);
      this.updateMarks();
    },
  },
  template: `
  <div class="marksV" ref="MarksPage">
  <Container class="container-fluid bg-alpha-v py-5">
  <Container class="container">
  <p class="display-6">
  Your marks will be shown here. If you need to update an existing mark, fill out the <b>Subject name</b> input field with the subject's name that you need to update it, and edit it as you want.
  </p>
  </Container>
  </Container>
  <Container class="container-lg grades py-5">
  <div class="card" v-for="(x, i) in marks" :key="i">
  <div class="card-header">
  <div class="card-text fw-bold fs-4">
  <span class="card-title">
  {{ x.sub_name }}
  </span>
  </div>
  </div>
  <div class="card-body">
  <div class="card-text">
  <span class="card-title fw-medium">
  Practical grade
  </span>
  <span class="text">
  {{ x.pcl_g }}
  </span>
  </div>
  <hr />
  <div class="card-text">
  <span class="card-title fw-medium">
  Theoritical grade
  </span>
  <span class="text">
  {{ x.tcl_g }}
  </span>
  </div>
  <hr />
  <div class="card-text">
  <span class="card-title fw-medium">
  Full grade
  </span>
  <span class="text">
  {{ x.fl_g }}
  </span>
  </div>
  </div>
  <div class="card-footer p-3">
  <Button class="btn btn-danger" @click="deleteMark(i)">
  Delete
  </Button>
  <Button class="btn btn-success ms-3" @click="to('form-vue')">
  Update
  </Button>
  </div>
  </div>
  </Container>
  </div>`
}