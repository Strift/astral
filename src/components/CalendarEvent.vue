<template>
  <article class="rounded overflow-hidden shadow">
    <CalendarEventHeader/>
    <div class="bg-white px-5 pt-5">
      <CalendarEventParticipants
        :participants="participants"
        :expand="isExpanded"
        @expand="isExpanded = true"
      />
      <div class="flex mt-5">
        <CalendarEventAcceptButton
          :active="isAccepted"
          class="w-1/2 mr-1"
          @click="status = 'accepted'"
        />
        <CalendarEventDeclineButton
          :active="isDeclined"
          class="w-1/2 ml-1"
          @click="status = 'declined'"
        />
      </div>
      <footer class="border-t border-gray-300 mt-5 py-2">
        <button class="block w-full text-sm text-gray-500 text-center" @click="isExpanded = !isExpanded">
          <span v-if="isExpanded">Voir moins</span>
          <span v-else>Voir plus</span>
        </button>
      </footer>
    </div>
  </article>
</template>

<script>
import CalendarEventHeader from '@/components/CalendarEventHeader'
import CalendarEventParticipants from '@/components/CalendarEventParticipants'
import CalendarEventAcceptButton from '@/components/CalendarEventAcceptButton'
import CalendarEventDeclineButton from '@/components/CalendarEventDeclineButton'

import participants from '@/assets/participants.json'

export default {
  components: {
    CalendarEventHeader,
    CalendarEventParticipants,
    CalendarEventAcceptButton,
    CalendarEventDeclineButton
  },
  data () {
    return {
      status: null,
      isExpanded: false,
      participants
    }
  },
  computed: {
    isAccepted () {
      return this.status === 'accepted'
    },
    isDeclined () {
      return this.status === 'declined'
    }
  }
}
</script>
