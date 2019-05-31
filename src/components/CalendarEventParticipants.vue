<template>
  <div class="relative h-8 mb-5 flex items-center">
    <img
      v-for="i in 5"
      src="https://pbs.twimg.com/profile_images/1068880894851723264/ZVEW4vi__400x400.jpg"
      class="rounded-full h-8 border-2 border-white inline-block absolute"
      :style="`left: ${(i-1)*1.4}rem; z-index: ${10-i}`"
      :key="i"
    />
    <div class="ml-auto text-gray-500 font-semibold">
      21 participants
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {

    }
  }
}
</script>
