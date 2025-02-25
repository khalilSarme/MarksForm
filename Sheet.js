export default {
  props: {
    grades: Object
  },
  methods: {
    toggleWindow() {
      this.$emit("sheetWindow");
    },
    delAll() {
      this.$emit("delAllMarks");
    }
  },
  data(props) {
    return {
      props,
    }
  },
  computed: {},
  template: `<div class="window sheetWindow">
  <h1 class="title">Marks Sheet</h1>
  <div class="container">
  <div class="marksSheet">
  <button class="button outline showMarksForm" type="button" @click="toggleWindow()" >Add a new mark</button>
  <button class="button outline delAll" type="button" @click="delAll()" >Empty sheet</button>
  <div class="group">
  <div class="collection" v-for="(mark,i) in props.grades" :key="i">
  <h3 class="marktitle">{{ mark.sname }}</h3>
  <div class="marksContainer">
  <h4 class="paracticalMark">Paractical Mark : <span>{{ mark.spg }}</span></h4>
  <h4 class="theoricticalMark">Theorictical Mark : <span>{{ mark.stg }}</span></h4>
  <h4 class="fullMark">Full Mark : <span>{{ mark.sfg }}</span></h4>
  </div>
  </div>
  </div>

  </div>
  </div>
  </div>`
}