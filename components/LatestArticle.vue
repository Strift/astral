<template>
  <div :style="{ opacity: opacity }">
    <div class="font-title mb-4 tracking-wider text-primary text-shadow-sm text-lg">
      Dernier article
    </div>
    <nuxt-link
      to="/blog/organiser-ses-raids-avec-raid-helper/"
      class="group"
    >
      <div class="bg-gray-lightest text-gray-darker rounded-md shadow-md p-5 w-64 float-on-hover">
        <div class=" font-semibold mb-4 leading-tight">
          Organiser ses raids avec Raid-Helper
        </div>
        <div class="flex items-center space-x-2">
          <img
            src="https://pbs.twimg.com/profile_images/1068880894851723264/ZVEW4vi__400x400.jpg"
            alt="Strift"
            title="Auteur"
            class="rounded-full h-6"
          >
          <div class="text-sm text-gray">
            Strift
          </div>
        </div>
        <div class="font-semibold text-right text-sm text-gray-light group-hover:text-gray-darker">
          Voir plus
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
const SCROLL_HEIGHT = 300

export default {
  computed: {
    opacity () {
      const ratio = (SCROLL_HEIGHT - this.$store.state.scrollY) / SCROLL_HEIGHT
      if (ratio < 0) {
        return 0
      }
      return ratio
    }
  }

}
</script>

<style>

</style>
