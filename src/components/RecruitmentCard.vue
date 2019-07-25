<template>
  <div class="flex bg-gray-900 px-4 font-sans rounded">
    <img
      :src="className | classIconPath"
      :alt="`${className} class icon`"
      class="my-auto h-10"
    />
    <div class="ml-10 my-auto text-lg font-semibold" :class="statusClass">
      {{ status }}
    </div>
  </div>

</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    status () {
      return this.open ? 'Ouvert' : 'Fermé'
    },
    statusClass () {
      return this.open ? 'text-green-500' : 'text-gray-700'
    }
  },
  filters: {
    classIconPath (className) {
      return `/images/class-icon-${className.toLowerCase()}.png`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
