<template>
  <div v-if="expand">
    <div class="font-semibold uppercase text-gray-500 mb-3">
      27 participants
    </div>
    <div class="overflow-y-scroll" style="max-height: 30vh">
      <div class="font-semibold text-gray-500 mb-3">
        Tanks &bull; 3
      </div>
      <CalendarEventMembersList
        class="mb-5"
      />
      <div class="font-semibold text-gray-500 mb-3">
        Healers &bull; 8
      </div>
      <CalendarEventMembersList
        class="mb-5"
      />
      <div class="font-semibold text-gray-500 mb-3">
        DPS &bull; 14
      </div>
      <CalendarEventMembersList
        class="mb-5"
      />
    </div>
  </div>
  <div v-else class="relative h-8 flex items-center">
    <CalendarEventPortrait
      v-for="i in 5"
      image-url="https://pbs.twimg.com/profile_images/1068880894851723264/ZVEW4vi__400x400.jpg"
      class="border-2 border-white inline-block absolute"
      :style="`left: ${(i-1)*1.4}rem; z-index: ${10-i}`"
      :key="i"
    />
    <div class="ml-auto text-gray-500 font-semibold" @click="$emit('expand')">
      21 participants
    </div>
  </div>
</template>

<script>
import CalendarEventPortrait from '@/components/CalendarEventPortrait'
import CalendarEventMembersList from '@/components/CalendarEventMembersList'

export default {
  components: {
    CalendarEventPortrait,
    CalendarEventMembersList
  },
  props: {
    expand: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>
