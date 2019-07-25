<template>
  <div class="flex justify-between font-sans">
    <ProgressRaid
      v-for="raid in raidProgress"
      :name="raid.name"
      :image-url="raid.imageUrl"
      :released="raid.released"
      :bosses="raid.bosses"
      :key="raid.name"
      class=""
    />
  </div>
</template>

<script>
import ProgressRaid from '@/components/ProgressRaid'

import raidProgress from '@/assets/progress.json'

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
