<template>
  <ul class="text-gray-700">
    <li
      v-for="i in 3"
      class="flex items-center mb-3 relative"
    >
      <CalendarEventPortrait
        image-url="https://pbs.twimg.com/profile_images/1068880894851723264/ZVEW4vi__400x400.jpg"
        class="inline mr-2"
      />
      <img
        src="@/assets/icons/rogue.png"
        class="inline-block h-4 mr-2"
      />
      Strift
    </li>
  </ul>
</template>

<script>
import CalendarEventPortrait from '@/components/CalendarEventPortrait'

export default {
  components: {
    CalendarEventPortrait
  }
}
</script>
