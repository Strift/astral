<template>
  <article class="rounded overflow-hidden shadow">
    <CalendarEventHeader
      :background-url="backgroundUrl"
      :date="date"
      :location="location"
    />
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
          @click="$emit('accept')"
        />
        <CalendarEventDeclineButton
          :active="isDeclined"
          class="w-1/2 ml-1"
          @click="$emit('decline')"
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
import CalendarEventHeader from '@/components/calendar/CalendarEventHeader'
import CalendarEventParticipants from '@/components/calendar/CalendarEventParticipants'
import CalendarEventAcceptButton from '@/components/calendar/CalendarEventAcceptButton'
import CalendarEventDeclineButton from '@/components/calendar/CalendarEventDeclineButton'

export default {
  components: {
    CalendarEventHeader,
    CalendarEventParticipants,
    CalendarEventAcceptButton,
    CalendarEventDeclineButton
  },
  props: {
    date: {
      type: Date,
      required: true
    },
    backgroundUrl: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    participants: {
      type: Array,
      required: true
    },
    status: {
      required: true,
      validator: status => ['accepted', 'declined', null].includes(status)
    }
  },
  data () {
    return {
      isExpanded: false
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
