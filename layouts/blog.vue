<template>
  <BackgroundVideo class="flex flex-col">
    <BaseHeader :blog="true" />
    <nuxt class="overflow-y-auto" />
  </BackgroundVideo>
</template>

<script>
import BaseHeader from '~/components/BaseHeader'
import BackgroundVideo from '~/components/BackgroundVideo'

export default {
  components: {
    BaseHeader,
    BackgroundVideo
  }
}
</script>

<style>

</style>
