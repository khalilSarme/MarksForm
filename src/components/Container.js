
export default {
  props: {
    eclassName: String
  },
  setup(props) {
    return {
      props
    }
  },
  template: `
  <div :class="eclassName ? 'container ' + eclassName : 'container'">
  <slot></slot>
  </div>
  `,
}