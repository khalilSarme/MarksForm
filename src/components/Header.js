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
  <div :class="eclassName ? 'header ' + eclassName : 'header'">
  <slot></slot>
  </div>
  `,
}