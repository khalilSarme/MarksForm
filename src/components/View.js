export default {
  props: {
    eclassName: String,
  },
  setup(props) {
    return {
      props
    }
  },
  template: `
  <div :class="eclassName ? 'view ' + eclassName : 'view'">
  <slot></slot>
  </div>
  `,
}