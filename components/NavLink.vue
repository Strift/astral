<template>
  <nuxt-link
    :to="to"
    :class="[activeClass]"
    class="pb-8 font-title px-6"
  >
    <slot name="default" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    activeClass() {
      if (this.active === true) return 'text-white border-b-4 border-primary'
      else if (this.active === false) return 'text-gray-600'
      return null
    }
  }
}
</script>
