<template>
  <div class="flex">
    <div class="text-white text-right mr-4">
      <div class="font-semibold text-2xl">{{ day }}</div>
      <div>{{ month }}</div>
    </div>
    <div class="w-full">
      <slot name="default"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: Date,
      required: true
    }
  },
  computed: {
    day () {
      return this.date.getDate()
    },
    month () {
      const months = ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
      return months[this.date.getMonth()]
    }
  }
}
</script>
