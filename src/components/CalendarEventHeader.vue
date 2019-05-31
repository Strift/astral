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
    backgroundUrl: {
      type: String,
      default: 'https://wow.zamimg.com/uploads/screenshots/normal/281289-molten-core.jpg'
    },
    location: {
      type: String,
      default: 'Molten Core'
    }
  },
  data () {
    return {
      time: '20h45'
    }
  }
}
</script>
