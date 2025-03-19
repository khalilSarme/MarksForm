export default {
  props: {
    eclassName: String,
    ebtype: String,
    ebtitle: String,
    dis: String
  },
  setup(props) {
    return {
      props
    }
  },
  template: `
  <button :class="eclassName ? 'btn ' + eclassName : 'btn'" :type="ebtype" :title="ebtitle" :disabled="dis">
  <slot></slot>
  </button>
  `
}