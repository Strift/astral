<template>
  <article class="rounded overflow-hidden shadow">
    <CalendarEventHeader/>
    <div class="bg-white px-5 pt-5">
      <CalendarEventParticipants/>
      <CalendarEventActions/>
      <footer class="border-t border-gray-300 mt-5 py-2">
        <button class="block w-full text-sm text-gray-500 text-center">
          Voir plus
        </button>
      </footer>
    </div>
  </article>
</template>

<script>
import CalendarEventHeader from '@/components/CalendarEventHeader'
import CalendarEventActions from '@/components/CalendarEventActions'
import CalendarEventParticipants from '@/components/CalendarEventParticipants'

export default {
  components: {
    CalendarEventHeader,
    CalendarEventActions,
    CalendarEventParticipants
  },
  props: {

  },
  data () {
    return {

    }
  }
}
</script>
