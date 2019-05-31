<template>
  <button
    :class="`px-3 py-1 uppercase font-semibold rounded-sm text-sm border ${colorClasses} inline-flex`"
    @click="$emit('click')"
  >
    <img
      v-if="active"
      src="@/assets/icons/calendar-disable.png"
      class="inline mr-2 h-5"
    />
    <div class="w-full text-center">
      AFK
    </div>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    colorClasses () {
      if (this.active) return 'bg-red-500 border-red-500 text-white'
      return 'text-red-400 border-red-400'
    }
  }
}
</script>
