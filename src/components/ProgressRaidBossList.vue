<template>
  <ul>
    <li v-for="boss in bosses" :key="boss.name" class="flex items-center py-3">
      <img v-if="isDown(boss)" src="@/assets/images/boss-icon-down.png" alt="Dead boss icon" class="h-4">
      <div class="ml-2" :class="{ 'text-primary': isDown(boss) }">{{ boss.name }}</div>
    </li>
  </ul>
</template>

<script>
import { validateBossesArray } from '@/validators'

export default {
  props: {
    bosses: {
      type: Array,
      validator: validateBossesArray,
      required: true
    }
  },
  methods: {
    isDown (boss) {
      return boss.status === 'down'
    }
  }
}
</script>

<style scoped>
li:not(:last-child) {
  @apply .border-b .border-gray-700;
}
</style>
