import Container from "../components/Container.js";
import Collection from "../components/Collection.js";
import Button from "../components/Button.js";

export default {
  props: {
    o: Object
  },
  setup(props) {
    return {
      props,
    }
  },
  components: {
    Container,
    Collection,
    Button
  },
  methods: {
    to(f) {
      this.$emit("toView", f);
    },
    empty() {
      this.$emit("empty");
    },
    deleteGrade(g) {
      this.$emit("del", g)
    }
  },
  template: `
  <Container eclassName="marksVue" >
  <h1>
  Your Grades
  </h1>
  <Collection>
  <div class="mark" v-for="(m,i) in o" :key="i" >
  <h2> {{ m.sub_name }} </h2>
  <h3> Practical grade <span> {{ m.pcl_g }} </span></h3>
  <h3> Theoretical grade <span> {{ m.tcl_g }} </span></h3>
  <h3> Full grade <span :class="(m.fl_g < 60) ? 'fail' : 'success' "> {{ m.fl_g }} </span></h3>
  <Button @click="deleteGrade(i)" eclassName="outline-danger" >
  Delete
  </Button>
  </div>
  </Collection>
  
  <Collection>
  <Button @click="to(1)" eclassName="addBtn bg-v">
  &plus; Add a new grade
  </Button>
  
  <Button @click="empty()" eclassName="bg-danger" v-show="o.length > 1" >
  &empty; Empty sheet
  </Button>
  
  <Button @click="to(0)" eclassName="outline-v">
  &lt; Main Menu
  </Button>
  </Collection>
  
  </Container>
  `
}