import Collect from "./Collection.js";

export default {
  components: {
    Collect
  },
  props: {
    eclassName: String,
    eitype: String,
    einame: String,
    eiid: String,
    readOnly: Boolean,
    disabled: Boolean,
    val: String,
    dataModel: String
  },
  setup(props) {
    return {
      props
    }
  },
  template: `
  <Collect>
  <label :for="eiid">
  <slot></slot>
  </label>
  <input :type="eitype ? eitype : 'text'" :name="einame" :id="eiid" :readonly="readOnly ? readOnly : false" :disabled="disabled ? disabled : false" :value="val" v-model="dataModel" />
  </Collect>
  `,
}