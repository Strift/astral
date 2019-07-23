<template>
  <a
    :href="'#'"
    :class="[activeClass]"
    class="font-title"
  >
    <slot name="default"/>
  </a>
</template>

<script>
export default {
  props: {
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
