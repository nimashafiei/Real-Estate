export { default as Aboutus } from '../..\\components\\Aboutus.vue'
export { default as Brands } from '../..\\components\\Brands.vue'
export { default as Customer } from '../..\\components\\Customer.vue'
export { default as FirstList } from '../..\\components\\FirstList.vue'
export { default as Footers } from '../..\\components\\Footers.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as HowItWorks } from '../..\\components\\HowItWorks.vue'
export { default as Item } from '../..\\components\\Item.vue'
export { default as SecondList } from '../..\\components\\SecondList.vue'
export { default as Subscribe } from '../..\\components\\Subscribe.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
