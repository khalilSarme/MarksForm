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
  <div :class="eclassName ? 'collection ' + eclassName : 'collection'">
  <slot></slot>
  </div>
  `,
}