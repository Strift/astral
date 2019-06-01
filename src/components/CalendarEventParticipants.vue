<template>
  <div v-if="expand">
    <div class="font-semibold uppercase text-gray-500 mb-3">
      {{ totalCount }} participants
    </div>
    <div class="overflow-y-scroll" style="max-height: 30vh">
      <div v-if="tankCount">
        <div class="font-semibold text-gray-500 mb-3">
          Tanks &bull; {{ tanks.length }}
        </div>
        <CalendarEventCharacterList
          :characters="tanks"
        />
      </div>
      <div v-if="healerCount">
        <div class="font-semibold text-gray-500 mb-3">
          Healers &bull; {{ healers.length }}
        </div>
        <CalendarEventCharacterList
          :characters="healers"
        />
      </div>
      <div v-if="dpsCount">
        <div class="font-semibold text-gray-500 mb-3">
          DPS &bull; {{ dps.length }}
        </div>
        <CalendarEventCharacterList
          :characters="dps"
        />
      </div>
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
      {{ totalCount }} participants
    </div>
  </div>
</template>

<script>
import CalendarEventPortrait from '@/components/CalendarEventPortrait'
import CalendarEventCharacterList from '@/components/CalendarEventCharacterList'

export default {
  components: {
    CalendarEventPortrait,
    CalendarEventCharacterList
  },
  props: {
    participants: {
      type: Array,
      required: true
    },
    expand: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    tanks () {
      return this.participants.filter(character => character.role === 'tank')
    },
    healers () {
      return this.participants.filter(character => character.role === 'healer')
    },
    dps () {
      return this.participants.filter(character => character.role === 'dps')
    },
    totalCount () {
      return this.participants.length
    },
    tankCount () {
      return this.tanks.length
    },
    healerCount () {
      return this.healers.length
    },
    dpsCount () {
      return this.dps.count
    }
  }
}
</script>
