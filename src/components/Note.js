export default {
  props: {
    eclassName: String,
  },
  setup(props) {},
  template: `
  <div :class="eclassName ? 'note ' + eclassName : 'note' " >
  <slot></slot>
  </div>
  `
}