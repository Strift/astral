<template>
  <article class="rounded overflow-hidden shadow">
    <CalendarEventHeader/>
    <div class="bg-white px-5 pt-5">
      <CalendarEventParticipants/>
      <div class="flex">
        <CalendarEventAcceptButton
          :active="true"
          class="w-1/2 mr-1"
        />
        <CalendarEventDeclineButton
          :active="false"
          class="w-1/2 ml-1"
        />
      </div>
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
import CalendarEventParticipants from '@/components/CalendarEventParticipants'
import CalendarEventAcceptButton from '@/components/CalendarEventAcceptButton'
import CalendarEventDeclineButton from '@/components/CalendarEventDeclineButton'

export default {
  components: {
    CalendarEventHeader,
    CalendarEventParticipants,
    CalendarEventAcceptButton,
    CalendarEventDeclineButton
  },
  props: {

  },
  data () {
    return {

    }
  }
}
</script>
