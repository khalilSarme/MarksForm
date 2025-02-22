export default {
  props: {
    grades: Object
  },
  data(props) {
    return {
      props,
      subject: "",
      praceGrade: 0,
      theorGrade: 0,
    }
  },
  methods: {
    toggleWindow(){
      this.$emit("sheetWindow");
    },
    saveMark() {
      let grade = this.praceGrade + this.theorGrade;
      if (this.subject == "" || ((grade > 100 || this.praceGrade > 30 || this.theorGrade > 70) && this.subject == "") || this.praceGrade > 30 || this.theorGrade > 70) {
        return;
      } else {
        const newMark = {
          sname: this.subject,
          spg: Number(this.praceGrade),
          stg: Number(this.theorGrade),
          sfg: this.praceGrade + this.theorGrade,
        }
        this.props.grades.push(newMark);
        localStorage.setItem('marks', JSON.stringify(this.props.grades));
      }
      this.subject = "";
      this.praceGrade = 0;
      this.theorGrade = 0;
    }
  },
  computed: {
    fullGrade() {
      let grade = this.praceGrade + this.theorGrade;
      if (grade > 100 || this.praceGrade > 30 || this.theorGrade > 70) {
        return 0;
      } else {
        return grade;
      }
    },
  },
  template: `<div class="window formWindow">
  <h1 class="title">Marks Form</h1>
  <div class="container">
  <div class="marksForm">
  <button class="button outline showMarksSheet" type="button" @click="toggleWindow()">Show marks sheet</button>
  <form class="msform" method="get" @submit.prevent="saveMark()">
  <div class="collection">
  <label for="subjectName">Subject name</label>
  <input type="text" name="subjectName" id="subjectName" v-model="subject" placeholder="enter subject's name" />
  </div>
  <div class="collection">
  <label for="paracticalGrade">Paractical grade</label>
  <input type="number" name="paracticalGrade" id="paracticalGrade" min="0" max="30" v-model="praceGrade" />
  </div>
  <div class="collection">
  <label for="theoricticalGrade">Theorictical grade</label>
  <input type="number" name="theoricticalGrade" id="theoricticalGrade" min="0" max="70" v-model="theorGrade" />
  </div>
  <div class="collection">
  <span class="fullGrade">Full grade</span>
  <span>{{ fullGrade }}</span>
  </div>
  <button class="button saveBtn" type="submit" @click.prevent="saveMark()">Save mark in sheet</button>
  </form>
  </div>
  </div>
  </div>`
}