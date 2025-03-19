export default {
  props: {
    eclassName: String,
    efmethod: String,
    efaction: String,
  },
  setup(props) {
    return {
      props
    }
  },
  template: `
  <form 
  :class="eclassName ? 'form ' + eclassName : 'form'"
  :action="efaction ? efaction : '#'"
  :method="efmethod ? efmethod : 'get'">
  <slot></slot>
  </form>
  `,
}