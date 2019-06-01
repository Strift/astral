<template>
  <div class="font-sans">
    <CalendarHeader class="mb-12"/>
    <div class="container mx-auto px-3">

      <CalendarDay
        :date="new Date()"
      >
        <CalendarEvent
          :date="new Date()"
          :participants="participants"
          :status="'accepted'"
          background-url="https://wow.zamimg.com/uploads/screenshots/normal/281289-molten-core.jpg"
          location="Molten Core"
          class="mb-8"
        />
        <CalendarEvent
          :date="new Date()"
          :participants="participants"
          :status="'declined'"
          background-url="https://wow.zamimg.com/uploads/news/11976-this-week-in-wow-history-chris-metzen-retires-zulgurub-opens-corrupted-blood-inc.jpg"
          location="Zul'Gurub"
          class="mb-6"
        />
      </CalendarDay>

    </div>
  </div>
</template>

<script>
import CalendarHeader from '@/components/CalendarHeader'
import CalendarEvent from '@/components/CalendarEvent'
import CalendarDay from '@/components/CalendarDay'

import participants from '@/assets/participants.json'

export default {
  components: {
    CalendarHeader,
    CalendarEvent,
    CalendarDay
  },
  data () {
    return {
      participants
    }
  }
}
</script>
