<template>
  <div>
    <img :src="imagePath" :alt="imageAlt" class="rounded-t-lg">
    <div class="bg-gray-900 p-5 rounded-b-lg">
      <h4 class="text-white font-title text-lg mb-5">{{ name }}</h4>
      <ProgressRaidBossList
        :bosses="bosses"
      />
    </div>
  </div>
</template>

<script>
import ProgressRaidBossList from '@/components/ProgressRaidBossList'

import { validateBossesArray } from '@/validators'

export default {
  components: {
    ProgressRaidBossList
  },
  props: {
    name: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    released: {
      type: Boolean,
      required: true
    },
    bosses: {
      type: Array,
      validate: validateBossesArray,
      required: true
    }
  },
  computed: {
    imagePath () {
      return `/images/raids/${this.imageUrl}`
    },
    imageAlt () {
      return `${name} raid`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
