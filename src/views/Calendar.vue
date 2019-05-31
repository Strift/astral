<template>
  <div class="font-sans">
    <CalendarHeader class="mb-12"/>
    <div class="container mx-auto px-2">

      <div class="flex">
        <div class="text-white text-right w-12 mr-4">
          <div class="font-semibold text-2xl">29</div>
          <div>Sept.</div>
        </div>
        <div class="w-full">
          <CalendarEvent class="mb-6"/>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import CalendarHeader from '@/components/CalendarHeader'
import CalendarEvent from '@/components/CalendarEvent'

export default {
  components: {
    CalendarHeader,
    CalendarEvent
  }
}
</script>
