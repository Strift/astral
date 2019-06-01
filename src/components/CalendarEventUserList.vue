<template>
  <ul class="text-gray-700">
    <li
      v-for="(user, index) in users"
      :key="index"
      class="flex items-center mb-3 relative"
    >
      <CalendarEventPortrait
        :image-url="user.imageUrl"
        class="inline mr-2"
      />
      <img
        :src="user.class | classIconPath"
        class="inline-block h-4 mr-2"
      />
      {{ user.name }}
    </li>
  </ul>
</template>

<script>
import CalendarEventPortrait from '@/components/CalendarEventPortrait'

import { classIconPath } from '@/filters'

export default {
  components: {
    CalendarEventPortrait
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  filters: {
    classIconPath
  }
}
</script>
