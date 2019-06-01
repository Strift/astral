<template>
  <ul class="text-gray-700">
    <li
      v-for="(character, index) in characters"
      :key="index"
      class="flex items-center mb-3 relative"
    >
      <CalendarEventPortrait
        image-url="https://pbs.twimg.com/profile_images/1068880894851723264/ZVEW4vi__400x400.jpg"
        class="inline mr-2"
      />
      <img
        :src="character.class | iconPath"
        class="inline-block h-4 mr-2"
      />
      {{ character.name }}
    </li>
  </ul>
</template>

<script>
import CalendarEventPortrait from '@/components/CalendarEventPortrait'

export default {
  components: {
    CalendarEventPortrait
  },
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  filters: {
    iconPath (className) {
      return `/icons/${className.toLowerCase()}.png`
    }
  }
}
</script>
