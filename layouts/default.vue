<template>
  <div class="h-full w-full">
    <BaseHeader />
    <nuxt />
  </div>
</template>

<script>
import BaseHeader from '~/components/BaseHeader'

export default {
  name: 'Home',
  components: {
    BaseHeader
  }
}
</script>
