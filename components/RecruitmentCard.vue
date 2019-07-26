<template>
  <div class="flex bg-gray-900 px-4 font-sans rounded">
    <img
      :src="iconPath"
      :alt="`Icone de classe ${className}`"
      class="my-auto h-10"
    >
    <div
      class="ml-10 my-auto text-lg font-semibold"
      :class="statusClass"
    >
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
    iconPath: {
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
  }
}
</script>
