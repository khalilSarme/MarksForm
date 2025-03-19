import Container from "../components/Container.js";
import Button from "../components/Button.js";
import Form from "../components/Form.js";
import Collection from "../components/Collection.js";

const {
  ref,
  computed
} = Vue;

export default {
  props: {},
  setup(props, { emit }) {
    const sub_name = ref("");
    const pcl_g = ref(null);
    const tcl_g = ref(null);

    const errors = ref({
      sub_name: "",
      pcl_g: "",
      tcl_g: ""
    });

    const validateSubjectName = () => {
      if (sub_name.value.trim() === "") {
        errors.value.sub_name = "Invalid subject name";
      } else {
        errors.value.sub_name = "";
      }
    };

    const validatePracticalGrade = () => {
      if (pcl_g.value < 0 || pcl_g.value > 30) {
        errors.value.pcl_g = "Value must be between 0 and 30";
      } else {
        errors.value.pcl_g = "";
      }
    };

    const validateTheoreticalGrade = () => {
      if (pcl_g.value > 0 && (tcl_g.value < 0 || tcl_g.value > 70)) {
        errors.value.tcl_g = "Value must be between 0 and 70";
      } else if (pcl_g.value === 0 && (tcl_g.value < 0 || tcl_g.value > 100)) {
        errors.value.tcl_g = "Value must be between 0 and 100";
      } else {
        errors.value.tcl_g = "";
      }
    };

    const fl_g = computed(() => {
      if (pcl_g.value >= 0 && pcl_g.value <= 30) {
        if (pcl_g.value > 0 && tcl_g.value >= 0 && tcl_g.value <= 70) {
          return Math.round(pcl_g.value + tcl_g.value);
        } else if (pcl_g.value === 0 && tcl_g.value >= 0 && tcl_g.value <= 100) {
          return Math.round(tcl_g.value); 
        }
      }
      return 0; 
    });

    const saveGrade = (e) => {
      
      emit('store', e);
      sub_name.value = "";
      pcl_g.value = null;
      tcl_g.value = null;
    };

    return {
      sub_name,
      pcl_g,
      tcl_g,
      fl_g,
      errors,
      validateSubjectName,
      validatePracticalGrade,
      validateTheoreticalGrade,
      saveGrade,
    }
  },
  methods: {
    to(f) {
      this.$emit("toView",
        f);
    }
  },
  components: {
    Container,
    Button,
    Form,
    Collection,
  },
  template: `
  <Container eclassName="formVue">
  <h1>
  Fill out your grades
  </h1>
  <Form @submit.prevent>

  <Collection>
  <label for="sub_name">Enter a subject name </label>
  <input type="text" name="sub_name" id="sub_name" v-model="sub_name" @keyup="validateSubjectName" :class="{ dangerInput : errors.sub_name }" />
  <small v-if="errors.sub_name" class="dangerError">{{ errors.sub_name }}</small>
  </Collection>

  <Collection>
  <label for="pcl_g">Enter a practical grade </label>
  <input type="number" name="pcl_g" id="pcl_g" v-model="pcl_g" @keyup="validatePracticalGrade" min="0" max="30" :class="{ dangerInput : errors.pcl_g }" />
  <small v-if="errors.pcl_g" class="dangerError">{{ errors.pcl_g }}</small>
  </Collection>

  <Collection>
  <label for="tcl_g">Enter a theoretical grade</label>
  <input type="number" name="tcl_g" id="tcl_g" v-model="tcl_g" @keyup="validateTheoreticalGrade" min="0" :max="pcl_g === 0 ? '100' : '70'" :class="{ dangerInput : errors.tcl_g }" />
  <small v-if="errors.tcl_g" class="dangerError">{{ errors.tcl_g }}</small>
  </Collection>

  <Collection>
  <label for="fl_g">Full grade is </label>
  <input type="number" name="fl_g" id="fl_g" :value="fl_g" readonly />
  </Collection>

  <Button
  ebtype="submit"
  ebtitle="Save a grade"
  @click="saveGrade({sub_name,pcl_g,tcl_g,fl_g})"
  eclassName="bg-v"
  v-if="sub_name && pcl_g >= 0 && pcl_g <= 30 &&
  ((pcl_g > 0 && tcl_g >= 0 && tcl_g <= 70) ||
  (pcl_g === 0 && tcl_g >= 0 && tcl_g <= 100))"
  >
  Save Grade
  </Button>

  <Button
  ebtype="submit"
  ebtitle="Save a grade"
  eclassName="bg-v"
  dis
  v-else
  >
  Save Grade
  </Button>

  </Form>
  <Collection>

  <Button @click="to(0)" eclassName="outline-v">
  &lt; Main Menu
  </Button>

  <Button @click="to(2)" eclassName="bg-v">
  My grades &gt;
  </Button>

  </Collection>
  </Container>
  `
}