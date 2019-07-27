<template>
  <ul>
    <li
      v-for="boss in bosses"
      :key="boss.name"
      class="flex items-center py-3"
    >
      <img
        v-if="isDown(boss)"
        src="@/assets/images/boss-icon-down.png"
        alt="Dead boss icon"
        class="h-4"
      >
      <div
        class="ml-2"
        :class="textColorClass(boss)"
      >
        {{ boss.name }}
      </div>
    </li>
  </ul>
</template>

<script>
import { validateBossArray } from '~/lib/validators'

export default {
  props: {
    bosses: {
      type: Array,
      validator: validateBossArray,
      required: true
    }
  },
  methods: {
    isDown (boss) {
      return boss.status === 'down'
    },
    textColorClass (boss) {
      if (this.isDown(boss)) return 'text-primary'
      else if (boss.status === 'progress') return 'text-white'
      return 'text-gray-light'
    }
  }
}
</script>

<style scoped>
li:not(:last-child) {
  @apply .border-b .border-gray-light;
}
</style>
