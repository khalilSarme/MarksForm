import FormVue from "./Form.vue.js";
import MarksVue from "./Marks.vue.js";
import StartVue from "./Start.vue.js";

const {
  ref
} = Vue;

export default {
  components: {
    StartVue,
    FormVue,
    MarksVue
  },
  setup(props) {
    const views = ref([true, false, false]);
    const grades = ref(JSON.parse(localStorage.getItem('Grades')) || []);
    
    const updateGrades = () => {
      localStorage.setItem('Grades', JSON.stringify(grades.value));
    };
    
    const storeGrade = (e) => {
      e = {
        sub_name: e.sub_name,
        pcl_g: Math.round(e.pcl_g),
        tcl_g: Math.round(e.tcl_g),
        fl_g: Math.round(e.pcl_g + e.tcl_g)
      };
      grades.value.push(e);
      updateGrades();
    };
    
    const clearAllGrades = () => {
      grades.value = [];
      updateGrades();
    };
    
    const removeGrade = (i) => {
      grades.value.splice(i,1);
      updateGrades();
    }
    
    return {
      views,
      grades,
      storeGrade,
      clearAllGrades,
      updateGrades,
      removeGrade
    }
  },
  methods: {
    fromTo(f, r) {
      this.views[f] = false;
      this.views[r] = true;
    },
  },
  template: `
  <div class="view">
  <StartVue v-show="views[0]" @toView="fromTo(0, $event)"/>
  <FormVue v-show="views[1]" @toView="fromTo(1, $event)" @store="storeGrade($event)" />
  <MarksVue v-show="views[2]" @toView="fromTo(2, $event)" :o="grades" @empty="clearAllGrades()" @del="removeGrade($evenet)" />
  </div>
  `
}