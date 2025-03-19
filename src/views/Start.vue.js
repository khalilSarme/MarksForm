import Container from "../components/Container.js";
import Collection from "../components/Collection.js";
import Button from "../components/Button.js";

export default {
  props: {},
  setup(props) {
    return {
      props
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
    }
  },
  template: `
  <Container eclassName="startVue" >
  <h1>
  <small class="color-v">Vuetivo</small> is an Exam Grades Management System
  </h1>
  <Collection eclassName="f_col">
  <h2> <span class="color-v" >Vuetivo</span> is a</h2>
  <h3> Safe. </h3>
  <h3> Quick. </h3>
  <h3> Easy to use from anywhere. </h3>
  <Button @click="to(1)" eclassName="bg-v" >
  Get Started
  </Button>
  </Collection>
  
  <Collection eclassName="s_col" >
  <h2> You can </h2>
  <h3> Add a new grade. </h3>
  <h3 class="on-maintain"> Update an existing grade(s).</h3> 
  <h3> Delete the grade(s). </h3>
  <Button @click="to(2)" eclassName="outline-v" >
  My grades
  </Button>
  </Collection>
  
  </Container>
  `
}