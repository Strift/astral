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
        <CalendarEventUserList
          :users="tanks"
        />
      </div>
      <div v-if="healerCount">
        <div class="font-semibold text-gray-500 mb-3">
          Healers &bull; {{ healers.length }}
        </div>
        <CalendarEventUserList
          :users="healers"
        />
      </div>
      <div v-if="dpsCount">
        <div class="font-semibold text-gray-500 mb-3">
          DPS &bull; {{ dps.length }}
        </div>
        <CalendarEventUserList
          :users="dps"
        />
      </div>
    </div>
  </div>
  <div v-else class="relative h-8 flex items-center">
    <CalendarEventPortrait
      v-for="(user, index) in firstFive"
      :image-url="user.imageUrl"
      :style="`left: ${(index)*1.4}rem; z-index: ${10-index}`"
      :key="index"
      class="border-2 border-white inline-block absolute"
    />
    <div class="ml-auto text-gray-500 font-semibold" @click="$emit('expand')">
      {{ totalCount }} participants
    </div>
  </div>
</template>

<script>
import CalendarEventPortrait from '@/components/CalendarEventPortrait'
import CalendarEventUserList from '@/components/CalendarEventUserList'

export default {
  components: {
    CalendarEventPortrait,
    CalendarEventUserList
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
    firstFive () {
      return this.participants.slice(0, 5)
    },
    tanks () {
      return this.participants.filter(user => user.role.toLowerCase() === 'tank')
    },
    healers () {
      return this.participants.filter(user => user.role.toLowerCase() === 'healer')
    },
    dps () {
      return this.participants.filter(user => user.role.toLowerCase() === 'dps')
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
      return this.dps.length
    }
  }
}
</script>
