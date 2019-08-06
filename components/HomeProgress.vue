<template>
  <div class="flex flex-wrap lg:justify-between font-sans px-3 xl:px-0">
    <div
      v-for="raid in raidProgress"
      :key="raid.name"
      class="sm:w-1/2 lg:w-64 xl:w-64 mb-12"
    >
      <ProgressRaid
        :name="raid.name"
        :image-url="raid.imageUrl"
        :released="raid.released"
        :bosses="raid.bosses"
        class="mx-3 xl:mx-0"
      />
    </div>
  </div>
</template>

<script>
import ProgressRaid from '~/components/ProgressRaid'

import raidProgress from '~/assets/progress.json'

export default {
  components: {
    ProgressRaid
  },
  data () {
    return {
      raidProgress
    }
  }
}
</script>
