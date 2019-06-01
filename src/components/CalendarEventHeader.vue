<template>
  <header
    class="bg-cover bg-center h-40 flex px-5 pb-3"
    :style="`background-image: url('${backgroundUrl}')`"
  >
    <div class="text-white mt-auto">
      <div class="font-semibold text-lg text-shadow">
        {{ time }}
      </div>
      <div class="uppercase text-gray-300 text-sm text-shadow">
        {{ location }}
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    date: {
      type: Date,
      required: true
    },
    backgroundUrl: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  },
  computed: {
    time () {
      return `${this.date.getHours()}h${this.date.getMinutes()}`
    }
  }
}
</script>
