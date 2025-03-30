export default {
  inject: ['marks',
    'updateMarks'],
  data() {
    return {
      grade: {
        sub_name: "",
        pcl_g: null,
        tcl_g: null,
        fl_g: null,
      }
    }
  },
  computed: {
    full_grade() {
      return this.grade.fl_g;
    },
  },
  methods: {
    testInput() {
      if (this.grade.sub_name.trim() !== "" && this.grade.pcl_g !== null && this.grade.tcl_g !== null) {
        if (this.grade.pcl_g > 0 && this.grade.pcl_g <= 30) {
          if (this.grade.tcl_g >= 0 && this.grade.tcl_g <= 70) {
            this.grade.fl_g = Math.round(Math.round(this.grade.pcl_g) + Math.round(this.grade.tcl_g));
            $(".form").toggleClass("was-validated");
            $("input:valid").addClass("is-valid");
            return true;
          }
          $("#tcl_g").addClass("is-invalid");
          return false;
        } else if (this.grade.pcl_g === 0) {
          if (this.grade.tcl_g >= 0 && this.grade.tcl_g <= 100) {
            this.grade.fl_g = Math.round(Math.round(this.grade.pcl_g) + Math.round(this.grade.tcl_g));
            $(".form").toggleClass("was-validated");
            $("input:valid").addClass("is-valid");
            return true;
          }
          $("#tcl_g").addClass("is-invalid");
          return false;
        }
        $("#pcl_g").addClass("is-invalid");
        return false;
      }
      $("input:invalid").addClass("is-invalid");
      return false;
    },
    clearData() {
      this.grade = {
        sub_name: "",
        pcl_g: null,
        tcl_g: null,
        fl_g: null,
      };
      $(".form").removeClass("was-validated");
      $("input").attr("class","form-control");
    },
    saveMark(g) {
      this.marks.push(g);
      this.clearData();
      this.updateMarks();
    },
    storeMark(e) {
      let is_valid_input = this.testInput();
      setTimeout(() => {
        if (is_valid_input) {
          let existingRecord = this.marks.findIndex((r) => (r.sub_name === this.grade.sub_name));
          if (existingRecord !== -1) {
            this.marks[existingRecord] = e;
            this.clearData();
            this.updateMarks();
          } else {
            this.saveMark(e);
          }
        } else {
          return;
        }
      },
        2000);
    }
  },
  template: `
  <div class="formV" ref="FormPage">
  <Container class="container-fluid bg-alpha-v py-5">
  <Container class="container">
  <p class="display-6">Enter the information of subject. <b class="">Plaease, </b>fill out all the existing input fields to response your grade.</p>
  </Container>
  </Container>

  <Container class="container py-5">
  <Form class="form rounded shadow p-4" method="get" @submit.prevent>
  <h1 class="text-center mb-5" >Grade info</h1>
  <Collection class="collection mb-4">
  <label class="form-label">Subject name</label>
  <input class="form-control" type="text" id="sub_name" value="" v-model="grade.sub_name" required/>
  </Collection>

  <Collection class="collection mb-4">
  <label class="form-label">Practical grade</label>
  <input class="form-control" type="number" id="pcl_g" value="" v-model="grade.pcl_g" min="0" max="30" step="0.01"/>
  </Collection>

  <Collection class="collection mb-4">
  <label class="form-label">Thoritical grade</label>
  <input class="form-control" type="number" id="tcl_g" value="" v-model="grade.tcl_g" min="0" max="100" step="0.01"/>
  </Collection>
  <input type="hidden" v-model="full_grade" />

  <Button class="btn btn-success bg-v w-100" @click="storeMark(grade)" type="submit">
  Save grade
  </Button>
  </Form>
  </Container>
  </div>`
}