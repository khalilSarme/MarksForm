import MarksForm from "./Form.js";
import MarksSheet from "./Sheet.js";

const {
  ref
} = Vue;

var App = {

  setup() {
    const marks = ref(JSON.parse(localStorage.getItem('marks')) || []);
    const emptySheet = () => {
      marks.value = [];
      localStorage.setItem("marks", JSON.stringify(marks.value));
      window.scrollTo({
        top: 0, behavior: 'smooth'
      });
    }
    return {
      emptySheet,
      marks
    }
  },
  methods: {
    toggleSheetWindow(sheet) {
      document.querySelector('.sheetWindow').style.left = `${sheet}vw`;
      window.scrollTo({
        top: 0, behavior: 'smooth'
      });
    },
  },
  components: {
    MarksForm,
    MarksSheet
  },
  template: `
  <MarksForm :grades="marks" @sheetWindow="toggleSheetWindow('0')" />
  <MarksSheet :grades="marks" @sheetWindow="toggleSheetWindow('-100')" @delAllMarks="emptySheet()" />`
}


export default App;
  /*























*/