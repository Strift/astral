<template>
  <router-link
    :to="to"
    :class="[activeClass]"
    class="font-title"
  >
    <slot name="default"/>
  </router-link>
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
    activeClass () {
      if (this.active === true) return 'text-white'
      else if (this.active === false) return 'text-gray-600'
      return null
    }
  }
}
</script>
