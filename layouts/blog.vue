<template>
  <BackgroundVideo class="blog flex flex-col">
    <BaseHeader
      :blog="true"
      class="absolute z-10 shadow xl:shadow-none bg-blur-4 xl:bg-blur-0"
    />
    <perfect-scrollbar
      ref="scroll"
      class="py-12"
    >
      <div class="mt-32 xl:mt-24 px-6 lg:px-0">
        <nuxt class="container max-w-3xl mx-auto" />
      </div>
    </perfect-scrollbar>
  </BackgroundVideo>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import BaseHeader from '~/components/BaseHeader'
import BackgroundVideo from '~/components/BackgroundVideo'

export default {
  components: {
    BaseHeader,
    BackgroundVideo,
    PerfectScrollbar
  },
  watch: {
    $route () {
      this.$refs.scroll.$el.scrollTop = 0
    }
  }
}
</script>

<style src="~/assets/css/scrollbar.css" />
