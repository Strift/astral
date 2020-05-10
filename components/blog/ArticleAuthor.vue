<template>
  <div>
    <div class="font-sans text-center">
      <div class="font-title text-xl tracking-wider text-white">
        {{ name }}
      </div>
      <div
        v-if="title"
        class="text-lg"
      >
        {{ title }}
      </div>
    </div>
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="name"
      :title="imageTitle"
      class="rounded-full h-32 mx-auto mt-6 shadow-md -mb-24"
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    imageUrl: {
      type: String,
      default: null
    }
  },
  computed: {
    imageTitle () {
      return `Photo de ${this.name}`
    }
  }
}
</script>

<style>

</style>
