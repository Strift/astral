<template>
  <div>
    <div class="relative rounded-t-lg overflow-hidden">
      <div
        v-if="cleared"
        class="z-10 bg-primary absolute h-full w-full"
        style="mix-blend-mode: multiply"
      />
      <img
        :src="imagePath"
        :alt="imageAlt"
        :class="{ 'grayscale': cleared || !released }"
      >
    </div>
    <div class="bg-gray-dark p-5 rounded-b-lg">
      <h4 class="text-white font-title text-lg tracking-wider mb-5">
        {{ name }}
      </h4>
      <ProgressRaidBossList
        :bosses="bosses"
      />
    </div>
  </div>
</template>

<script>
import ProgressRaidBossList from '~/components/ProgressRaidBossList'

import { validateBossArray } from '~/lib/validators'

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
      validate: validateBossArray,
      required: true
    }
  },
  data () {
    return {
      find: null
    }
  },
  computed: {
    imagePath () {
      return `/images/raids/${this.imageUrl}`
    },
    imageAlt () {
      return `${this.name}`
    },
    cleared () {
      return this.bosses.find(boss => boss.status !== 'down') == null
    }
  }
}
</script>

<style scoped>
.grayscale {
  filter: grayscale(100%);
}
</style>
